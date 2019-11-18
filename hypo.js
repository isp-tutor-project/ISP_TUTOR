// this is hypo.js, responsible for the functionality of the hypo module

/*
* This is some serious code smell if I need to tell the linter to not
* complain about all of these variables from other <script> tags
* FIXME: We need a build system
*/ 

/*global db, collectionID, userID, ontology, hypoOntology, showSnackbar */
/*global createjs, openPage, initHomePage, getEleById */
/*global getStudentCondition, initHypoTasks */
/*global currHypoTask, prevHypoTask, nextHypoTask */

// to launch the first page after done loading. 
function handleFileComplete(event) {
    // determines the student's next page and launches it
    initHypoTasks();
    /*
    * alternatively, when in development, you can comment that out
    * and jump directly to a particular page,
    * such as:
    */
    //conceptMapPage();
    // startPage();
    //definitionPage1();
    //instructionPage();
    //brmPage();
    //brmInstructionPage();
}

// ============================================================================
// ======================== Constants and Variables ===========================
// ============================================================================

// calculuate the pixel ratio of the screen
const PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio || 1;
    let pRatio = dpr / bsr;
    return pRatio;
})();

// constants regarding canvas size
const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 750;

// calculate the scaling ratio for making canvas responsive
const SCALE_RATIO = (function () {
    let iw = window.innerWidth;
    let ih = window.innerHeight;
    let xRatio = iw / CANVAS_WIDTH;
    let yRatio = ih / CANVAS_HEIGHT;
    let sRatio = Math.min(xRatio, yRatio);
    return sRatio;
})();

// for keeping track of scaling ratio in makeResponsive;
let scalingRatio = 1;

// constants regarding bubble customization
const BUBBLE_WIDTH = 120;
const BUBBLE_HEIGHT = 100;
const BUBBLE_RADIUS = 10;
const BUBBLE_INCREMENT = .5 * BUBBLE_WIDTH;

const BUTTON_WIDTH = 80;
const BUTTON_HEIGHT = 40;
const BUTTON_RADIUS = 10;
const BUTTON_COLOR = "red";

const ARROW_BACKGROUND_WIDTH = 20;
const ARROW_BACKGROUND_HEIGHT = 20;

const OPTION_MIN_WIDTH = 100;
const OPTION_HEIGHT = 40;
const OPTION_COLOR = "#f4d041";

const CONNECTOR_RADIUS = 5;

// constants regarding position of nodes,
// nodes/bubbles are centered upon the x and y positions selected
const BUBBLE_X = CANVAS_WIDTH / 4;
const BUBBLE_Y = CANVAS_HEIGHT * .75 - 1.5 * BUBBLE_HEIGHT;
const IV_X = CANVAS_WIDTH / 4;
const IV_Y = CANVAS_HEIGHT * .75;
const DV_X = CANVAS_WIDTH * .75;
const DV_Y = CANVAS_HEIGHT * .75;

// these are for displaying information
let stage;
let textField;
// yellow panel that shows up upon mouse click
let panel;

// related with drawing arrows
let currentArrow = null;
let connectorOver = null;
let somethingHighlighted = false;

// for error field purposes
let errorField;
// for option width purposes
let optionWidth;

// for storing steps taken by user
//    steps include an action, an object, an index, a timestamp, and possibly
//    additional text
let steps = [];

// this queue is for the preloader to contain all the image files that have
// been preloaded
let queue;
// for the loading text at start
let loadingText;

// answers for quiz questions on definitionPage6
// FIXME: couldn't I define this in defPage6???
const QUIZ_ANSWERS = [
    "Causation", "Correlation", "Definition", "Causation", "Definition"
];

// placeholder (Crystal) constants regarding values of nodes
// FIXME: we need a better way to have default values without resorting to 
// globals
const IV = "Water temperature"
const DV = "Amount crystal growth on string"
// there can be 1 - 8 nodes (or else it will look strange)
const NODES = [
    "Kinetic energy of water molecules",
    "Evaporation rate of water",
    "Amount of water in jar",
    "Concentration of Na+ and Cl- in water",
    "Amount of water string absorbs"
];
const CAUSES = [
    "Electric force",
    "Conservation of matter",
    "Energy to escape electric forces"
];

/*
 * Alternative placeholder values for Stefani's Concept Map Video
 */
// const IV = "Listening to songs while studying"
// const DV = "Grades in the class"
// // there can be 1 - 8 nodes (or else it will look strange)
// const NODES = [
//     "Knowledge of lyrics",
//     "Reading comprehension of material",
//     "Learning of material"
// ];
// const CAUSES = [
//     "Concentration",
//     "Familiarity",
//     "Mood"
// ];


// variable versions of iv and dv. setting them to the defaults above, and
// later if loadData() is successfull, the defaults will be overriden by what's
// in firebase
let iv = IV;
let dv = DV;
// abbreviated dv
let dvabb = DV;
let nodes = NODES;
// these two negative indices are just using while logging steps
nodes[-2] = IV;
nodes[-1] = DV;
let causes = CAUSES;

// true corresponds to "increasing" and false corresponds to "decreasing"
// FIXME: Scott's not sure this makes sense.  Basically both predictions
// have a value of "increasing" prior to the student doing anything
let firstPrediction = true;
let secondPrediction = true;

// The following vars were added by Scott as we wanted to both display what
// the user previously selected when they return to the page via a back button
// and if the user had saved a subsequent concept map, no longer allow them
// to change the prediction they made beforehand.answered

// if true, will highlight the current value, but still let you change it
let firstPredictionSaved = false;
// if this gets set to true, you will not be able to change the first prediction
let firstPredictionLocked = false;
let firstPredictionLockedReason;
// ditto for the second prediction
let secondPredictionSaved = false;
let secondPredictionLocked = false;
let secondPredictionLockedReason;

// ============================================================================
// ================================ Firebase ==================================
// ============================================================================

// this is old function to load rq data, uses hypoOntology.js, might not work
// anymore
//
// Scott - this is definitely working, as it's in use and the rqted
// data is indeed fetched.  My question is, does this really need to be an 
// async function?  all of the other firebase promise stuff isn't and works
// just fine
async function getTutorState() {
    let jsonData = null;
    if (userID == null) {
        console.log("userID is null");
        return null;
    }
    var docRef = db.collection(collectionID).doc(userID);
    await docRef.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document exists");
            jsonData = doc.data().rqted;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
    //console.log("returned data: "+ jsonData);
    return jsonData;
}

function loadData() {
    getTutorState().then((jsonData) => {
        if (jsonData != null) {
            let moduleData = JSON.parse(jsonData)['moduleState'];
            if (moduleData['selectedArea'] != undefined && moduleData['selectedTopic'] != undefined && moduleData['selectedVariable'] != undefined) {
                let area = moduleData['selectedArea']['index'];
                let topic = moduleData['selectedTopic']['index'];
                let variable = moduleData['selectedVariable']['index'];
                // ontology stuff
                let ontologyTopic = ontology['_ONTOLOGY']['S']['A' + area]['T' + topic];
                iv = ontologyTopic['enumValue' + variable];
                dv = ontologyTopic['DVs'];
                dvabb = ontologyTopic['DVabb'];
                // hypoOntology stuff
                let hypoOntologyTopic = hypoOntology['A' + area]['T' + topic]['V' + variable];
                if (hypoOntologyTopic['IV'] != "") {
                    iv = hypoOntologyTopic['IV'];
                }
                if (hypoOntologyTopic['DV'] != "") {
                    dv = hypoOntologyTopic['DV'];
                }
                if (hypoOntologyTopic['DVabb'] != "") {
                    dvabb = hypoOntologyTopic['DVabb'];
                }
                nodes = hypoOntologyTopic['NODES'];
                console.log(area + "," + topic + "," + variable);
                console.log(hypoOntologyTopic)
                console.log(nodes);
                nodes[-2] = iv;
                nodes[-1] = dvabb;
                causes = hypoOntologyTopic['CAUSES'];
            } else {
                console.log("RQTED data not present");
            }
        }
    })
}

// because firstPrediction and secondPrediction are bools where
// true == "increase" and false == "decrease", I need the following 2 functions
// to convert between bool <=> str.  Also, because some old firebase records
// may have saved the values as bools instead of the more descriptive string
// values, I've added backward compatability, where if it's already of that
// type, simply return the current value
function boolPredictionToString(prediction) {
    if (typeof(prediction) === "string") {
        // for backward compat
        return prediction;
    }
    return (prediction) ? "increase" : "decrease";
}

function strPredictionToBool(prediction) {
    if (typeof(prediction) === "boolean") {
        // for backward compat
        return prediction;
    }
    return ("increase" === prediction) ? true : false;
}

/*
* saves the first/secondPrediction to firebase
*/
function logPrediction(fldName, fldValue) {
    return db.collection(collectionID).doc(userID).update({
        [fldName]: boolPredictionToString(fldValue)
    })
    .then(() => {
        return true;
    })
    .catch(function (error) {
        console.error(error);
        return false;
    });
}

/*
* saves a hypothesis (concept map) to firebase.  based on ones condition, there
* may be more than one hypothesis, so there is a 'whichHypo' param
*/
function logData2(ivBubble, whichHypo) {
    let log = {};
    let currentPrediction;
    let currentPredictionValue;
    if ("initial" === whichHypo) {
        currentPrediction = "first";
        currentPredictionValue = boolPredictionToString(firstPrediction);
    } else if ("opposite" === whichHypo) {
        currentPrediction = "opposite(first)";
        currentPredictionValue = boolPredictionToString(!firstPrediction);
    } else {
        currentPrediction = "second";
        currentPredictionValue = boolPredictionToString(secondPrediction);
    }
    log.currentPrediction = currentPrediction;
    log.currentPredictionValue = currentPredictionValue;
    let notes = getEleById("notepad_notes");
    let nodes = [];
    let arrowLabels = [];
    let directions = [];
    let connector = ivBubble.outConnector;
    while (connector != null) {
        let arrow = connector.arrow;
        arrowLabels.push(arrow.label.text.replace("\n", " "));
        let nextBubble = arrow.connectorOver.parent;
        nodes.push(nextBubble.text);
        directions.push(nextBubble.getChildByName("dirButton").direction);
        connector = nextBubble.outConnector;
    }
    log.nodes = nodes;
    log.arrowLabels = arrowLabels;
    log.directions = directions;
    log.steps = steps;
    log.notes = notes.innerText;

    db.collection(collectionID).doc(userID).update({
        [`${whichHypo}Hypo`]: JSON.stringify(log)
    })
    .then(() => {
        console.log("Successfully logged hypothesis data");
        showSnackbar("Successfully logged hypothesis data.");
        console.log(log);
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        showSnackbar("Error: Failed to log hypothesis data.");
    });
}


// ===========================================================================
// =========================== Pages =========================================
// ===========================================================================

/* simple map of page names to functions which implement them */
const pageNamesToFunctions = {
    "raiseYourHand": raiseYourHand,
    "startPage": startPage,
    "definitionPage1": definitionPage1,
    "definitionPage2": definitionPage2,
    "definitionPage3": definitionPage3,
    "definitionPage4": definitionPage4,
    "definitionPage5": definitionPage5,
    "definitionPage6": definitionPage6,
    "instructionPage": instructionPage,
    "backToYourRQ": backToYourRQ,
    "predictionPage1": predictionPage1,
    "graphPage1": graphPage1,
    "graphPage2": graphPage2,
    "initialConceptMap": initialConceptMap,
    "biDirInstructionPage1": biDirInstructionPage1,
    "biDirInstructionPage2": biDirInstructionPage2,
    "biDirInstructionPage3": biDirInstructionPage3,
    "oppositeDirectionConceptMap": oppositeDirectionConceptMap,
    "brmPage": brmPage,
    "predictionPage2": predictionPage2,
    "finalConceptMap": finalConceptMap,
    "completePage": completePage
};

// init is the first function to be called
function initHypoPage() {
    // load IV and DV from firebase, if available
    loadData();
    // used to create a higher resolution canvas
    let createHiPPICanvas = function (w, h, ratio) {
        let can = document.getElementById("hypo-canvas");
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        return can;
    }

    stage = new createjs.Stage("hypo-canvas");

    function makeResponsive(isResp, respDim, isScale, scaleType) {
        let can = document.getElementById("hypo-canvas");
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = CANVAS_WIDTH,
                h = CANVAS_HEIGHT;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = PIXEL_RATIO;
            // necessary for dom elements to look right
            pRatio *= 2;
            var xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            can.width = w * pRatio * sRatio;
            can.height = h * pRatio * sRatio;
            can.style.width = w * sRatio + 'px';
            can.style.height = h * sRatio + 'px';
            stage.scaleX = scalingRatio = pRatio * sRatio;
            stage.scaleY = scalingRatio = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }

    // create canvas with the device resolution.
    //let myCanvas = createHiPPICanvas(CANVAS_WIDTH, CANVAS_HEIGHT, PIXEL_RATIO);
    makeResponsive(true, 'both', true, 1);

    // this whole pre-loader thing seems unnecessary to me (in the hypo module
    // as compared to the rq module - which has TONS of assets) Anyhoo...
    // I suppose it makes it easier than working with DOM objects on the stage

    // to display loading
    loadingPage();
    // this is for preloader
    queue = new createjs.LoadQueue();
    queue.on("progress", handleFileProgress);
    queue.on("complete", handleFileComplete);
    queue.loadManifest([
        { id: "TeacherPointing", src: "HypoGraphics/slide_intro/TeacherPointing.jpg" },
        { id: "defGraph", src: "HypoGraphics/slide1/defGraph.png" },
        { id: "causeGraph", src: "HypoGraphics/slide1/causeGraph.png" },
        { id: "corrGraph", src: "HypoGraphics/slide1/corrGraph.png" },
        { id: "densitygraphic", src: "HypoGraphics/slide2/densitygraphic.jpg" },
        { id: "coffeegraphic", src: "HypoGraphics/slide3/coffeegraphic.jpg" },
        { id: "comic", src: "HypoGraphics/slide3/comic.jpg" },
        { id: "correlation", src: "HypoGraphics/slide4/correlation.png" },
        { id: "IceCreamSwimming", src: "HypoGraphics/slide4/IceCreamSwimming.png" },
        { id: "graph1", src: "HypoGraphics/slide4/graph1.png" },
        { id: "graph2", src: "HypoGraphics/slide4/graph2.png" },
        { id: "causation_correlation", src: "HypoGraphics/slide5/causation_correlation.png" },
        { id: "Picture_SunTempIcecream", src: "HypoGraphics/slide5/Picture_SunTempIcecream.png" },
        { id: "Crys_increases", src: "HypoGraphics/graphSlides/Crys_increases.png" },
        { id: "Crys_decreases", src: "HypoGraphics/graphSlides/Crys_decreases.png" },
    ]);

    // required to enable mouse hover events
    stage.enableMouseOver(10);
    // Ticker is primarily for mouse hover event
    createjs.Ticker.addEventListener("tick", stage);
}

// handles loading text
function handleFileProgress(event) {
    let text = "Loading: " + Math.round(queue.progress * 100) + "%";
    loadingText.text = text;
}

function loadingPage() {
    stage.removeAllChildren();
    loadingText = new createjs.Text("Loading: 0%", "32px Arial", "#000");
    loadingText.x = CANVAS_WIDTH / 2;
    loadingText.y = CANVAS_HEIGHT / 2 - 100;
    loadingText.textAlign = "center";
    stage.addChild(loadingText);
    stage.update();
}

/*
* simple convenience function, as I'm needed to generate the student's
* Research Question in multiple places
*/
function getRQ() {
    // "Does the initial water temperature affect the weight of the crystal growth on a string";
    return "Does " + iv.toLowerCase() + " affect the " + dv.toLowerCase() + "?"
}

function raiseYourHand() {
    stage.removeAllChildren()
    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing"));
    image1.x = 50;
    image1.y = 50;
    image1.scaleX = 1.0;
    image1.scaleY = 1.0;
    stage.addChild(image1);
    let txt1 = "Please raise your hand to get a notebook for doing Background Research";
    let txt2 = "Then write your research question ..."
    let txt3 = getRQ();
    let txt4 = "on the first page of your notebook ";
    let text1 = new createjs.Text(txt1, "22px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 100;
    text1.textAlign = "center";
    stage.addChild(text1);
    let text2 = new createjs.Text(txt2, "22px Arial", "#000");
    text2.x = CANVAS_WIDTH / 2;
    text2.y = 175;
    text2.textAlign = "center";
    stage.addChild(text2);
    let text3 = new createjs.Text(txt3, "bold 22px Arial", "#000");
    text3.x = CANVAS_WIDTH / 2;
    text3.y = 250;
    text3.textAlign = "center";
    text3.lineHeight = 35;
    text3.lineWidth = 700;
    stage.addChild(text3);
    let text4 = new createjs.Text(txt4, "22px Arial", "#000");
    text4.x = CANVAS_WIDTH / 2;
    text4.y = 350;
    text4.textAlign = "center";
    stage.addChild(text4);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => nextHypoTask());
    stage.addChild(nextButton);
    stage.update();
}

function startPage() {
    stage.removeAllChildren();
    let text = new createjs.Text("Welcome to the ISP Tutor's Hypothesis module.\n\nBefore you start working on your hypothesis for your research question, we will first define some important terms. Click “Next” to begin.", "28px Arial", "#000");
    text.x = CANVAS_WIDTH / 2 + 120;
    text.y = 180;
    text.textAlign = "center";
    text.lineWidth = 700;
    text.lineHeight = 35;
    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing"));
    image1.x = 170;
    image1.y = 80;
    image1.scaleX = 1;
    image1.scaleY = 1;
    let nextButton = createLargeButton(CANVAS_WIDTH / 2 + 100, 450, "Next", "#3769C2");
    nextButton.on("click", e => nextHypoTask());
    stage.addChild(text, image1, nextButton);
    stage.update();
}

function definitionPage1() {
    stage.removeAllChildren();
    let image1 = new createjs.Bitmap(queue.getResult("defGraph"));
    image1.x = 60;
    image1.y = 300;
    image1.scaleX = .5;
    image1.scaleY = .5;
    let image2 = new createjs.Bitmap(queue.getResult("causeGraph"));
    image2.x = 450;
    image2.y = 500;
    image2.scaleX = .5;
    image2.scaleY = .5;
    let image3 = new createjs.Bitmap(queue.getResult("corrGraph"));
    image3.x = 800;
    image3.y = 300;
    image3.scaleX = .5;
    image3.scaleY = .5;
    let title = new createjs.Text("Types of Relationships", "bold 24px Arial", "#000");
    title.x = CANVAS_WIDTH / 2;
    title.y = 100;
    title.textAlign = "center";
    let text1 = new createjs.Text("When you make your hypothesis, you will need to choose the type of relationship between pairs of concepts. Here are the three types of relationships you can choose from when you make your hypothesis:", "24px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 160;
    text1.textAlign = "center";
    text1.lineWidth = 1000;
    text1.lineHeight = 30;
    let text2 = new createjs.Text('(1) Definition\n\n(2) Causal\n\n(3) Correlational', "24px Arial", "#000");
    text2.x = CANVAS_WIDTH / 2;
    text2.y = 280;
    text2.textAlign = "center";
    text2.lineHeight = 30;
    let text3 = new createjs.Text('(This is pronounced "CAUSE all")', 'italic 14px Arial', "#000");
    text3.x = CANVAS_WIDTH / 2;
    text3.y = 370;
    text3.textAlign = "center";
    //stage.addChild(image1, image2, image3);
    stage.addChild(title, text1, text2, text3);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    let images = [image1, image2, image3];
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 3) {
            nextHypoTask();
        } else {
            console.log(images[iteration]);
            stage.addChild(images[iteration]);
            stage.update();
            iteration++;
        }
    });
    stage.addChild(nextButton);
    stage.update();
}

function definitionPage2() {
    stage.removeAllChildren();
    let title = new createjs.Text("Types of Relationships for Hypotheses", "bold 24px Arial", "#000");
    title.x = CANVAS_WIDTH / 2;
    title.y = 80;
    title.textAlign = "center";
    let text1 = new createjs.Text("(1) Definition: The meaning of a concept", "24px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 130;
    text1.textAlign = "center";
    let text2 = new createjs.Text("Often, an “everyday” term is defined by the behaviors of molecules...\n\nFor example, the concept of the “temperature” of an object is defined as the average kinetic energy of the molecules that make up the object.", "18px Arial", "#000");
    text2.x = 150;
    text2.y = 230;
    text2.lineHeight = 25;
    text2.lineWidth = 300;
    let text3 = new createjs.Text("Or, “Density” is the amount of mass of an object divided by its volume (or how much space it takes up).", "18px Arial", "#000");
    text3.x = 150;
    text3.y = 500;
    text3.lineHeight = 25;
    text3.lineWidth = 300;
    let image1 = new createjs.DOMElement("temperature_gif_overlay");
    image1.x = 115 * 2 / PIXEL_RATIO;
    image1.y = 45 * 2 / PIXEL_RATIO;
    image1.scaleX = .15 * 2 / PIXEL_RATIO;
    image1.scaleY = .15 * 2 / PIXEL_RATIO;
    let image2 = new createjs.Bitmap(queue.getResult("densitygraphic"));
    image2.x = 600;
    image2.y = 440;
    image2.scaleX = .5;
    image2.scaleY = .5;
    stage.addChild(title, text1);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => {
        image1.htmlElement.style.display = "none";
        prevHypoTask();
    });
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 0) {
            stage.addChild(text2, image1);
            image1.htmlElement.style.display = "block";
            stage.update();
        } else if (iteration == 1) {
            stage.addChild(text3, image2);
            stage.update();
        } else if (iteration == 2) {
            image1.htmlElement.style.display = "none";
            nextHypoTask();
        }
        iteration++;
    });
    stage.addChild(nextButton);
    stage.update();
}

function definitionPage3() {
    stage.removeAllChildren();
    let text1 = new createjs.Text("(2) Causation: One variable influences another variable or something directly affects something else.", "24px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 80;
    text1.textAlign = "center";
    text1.lineWidth = 1000;
    let text2 = new createjs.Text("For example, being distracted while driving causes driving mistakes (because people’s attention is shifted away from what is happening on the road).", "18px Arial", "#000");
    text2.x = 150;
    text2.y = 180;
    text2.lineHeight = 25;
    text2.lineWidth = 450;
    let text3 = new createjs.Text("Or, the amount of caffeine someone drinks is causally related to how alert they are (because caffeine increases brain activity).", "18px Arial", "#000");
    text3.x = 650;
    text3.y = 180;
    text3.lineHeight = 25;
    text3.lineWidth = 450;
    let image1 = new createjs.Bitmap(queue.getResult("comic"));
    image1.x = 150;
    image1.y = 300;
    image1.scaleX = .8;
    image1.scaleY = .7;
    let image2 = new createjs.Bitmap(queue.getResult("coffeegraphic"));
    image2.x = 650;
    image2.y = 300;
    image2.scaleX = .7;
    image2.scaleY = .7;
    stage.addChild(text1);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 0) {
            stage.addChild(text2, image1);
            stage.update();
        } else if (iteration == 1) {
            stage.addChild(text3, image2);
            stage.update();
        } else if (iteration == 2) {
            nextHypoTask();
        }
        iteration++;
    });
    stage.addChild(nextButton);
    stage.update();
}

function definitionPage4() {
    stage.removeAllChildren();
    let text1 = new createjs.Text("(3) Correlation: A relationship between two variables where both variables increase together, decrease together, or one increases as the other decreases. However, these variables may not directly affect each other.", "24px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 80;
    text1.textAlign = "center";
    text1.lineWidth = 1000;
    text1.lineHeight = 30;
    let text2 = new createjs.Text("For example, let’s say you found that there is a relationship between how often students eat pizza and their grades in school. You don’t know why there would be, so you can call that relationship a “correlation” in your hypothesis.", "18px Arial", "#000");
    text2.x = 130;
    text2.y = 200;
    text2.lineHeight = 25;
    text2.lineWidth = 460;
    let text3 = new createjs.Text("There is a correlation between the amount of ice cream people buy and how often people go swimming. But there’s no logical reason to think one caused the other!", "18px Arial", "#000");
    text3.x = 630;
    text3.y = 200;
    text3.lineHeight = 25;
    text3.lineWidth = 460;
    let image1 = new createjs.Bitmap(queue.getResult("correlation"));
    image1.x = 170;
    image1.y = 320;
    image1.scaleX = .4;
    image1.scaleY = .4;
    let image2 = new createjs.Bitmap(queue.getResult("IceCreamSwimming"));
    image2.x = 680;
    image2.y = 300;
    image2.scaleX = .5;
    image2.scaleY = .5;
    let graph1 = new createjs.Bitmap(queue.getResult("graph1"));
    graph1.x = 220;
    graph1.y = 450;
    graph1.scaleX = .5;
    graph1.scaleY = .5;
    let graph2 = new createjs.Bitmap(queue.getResult("graph2"));
    graph2.x = 710;
    graph2.y = 450;
    graph2.scaleX = .5;
    graph2.scaleY = .5;
    stage.addChild(text1);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 0) {
            stage.addChild(text2, image1, graph1);
            stage.update();
        } else if (iteration == 1) {
            stage.addChild(text3, image2, graph2);
            stage.update();
        } else if (iteration == 2) {
            nextHypoTask();
        }
        iteration++;
    });
    stage.addChild(nextButton);
    stage.update();
}

function definitionPage5() {
    stage.removeAllChildren();
    let text1 = new createjs.Text("Just because two things are correlated, that does not mean that one caused the other! There may be other reasons for two variables to change together. For example, both variables may be caused by a third variable.", "24px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 80;
    text1.textAlign = "center";
    text1.lineWidth = 1000;
    text1.lineHeight = 30;
    let text2 = new createjs.Text("For example, the relationship between how often students eat pizza and grades could be because both eating pizza and grades are caused by a third variable: how often they study.", "18px Arial", "#000");
    text2.x = 110;
    text2.y = 230;
    text2.lineHeight = 25;
    text2.lineWidth = 460;
    let text3 = new createjs.Text("Or, the relationship between ice cream sales and how often people go swimming could be because both ice cream sales and swimming are caused by a third variable: temperature.", "18px Arial", "#000");
    text3.x = 650;
    text3.y = 230;
    text3.lineHeight = 25;
    text3.lineWidth = 460;
    let image1 = new createjs.Bitmap(queue.getResult("causation_correlation"));
    image1.x = 110;
    image1.y = 370;
    image1.scaleX = .5;
    image1.scaleY = .5;
    let image2 = new createjs.Bitmap(queue.getResult("Picture_SunTempIcecream"));
    image2.x = 660;
    image2.y = 350;
    image2.scaleX = .5;
    image2.scaleY = .5;
    stage.addChild(text1);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 0) {
            stage.addChild(text2, image1);
            stage.update();
        } else if (iteration == 1) {
            stage.addChild(text3, image2);
            stage.update();
        } else if (iteration == 2) {
            nextHypoTask();
        }
        iteration++;
    });
    stage.addChild(nextButton);
    stage.update();
}

function definitionPage6() {
    stage.removeAllChildren();
    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;
    stage.addChild(errorField);

    let text1 = new createjs.Text("For each example below, as one increases, the other increases or decreases. What kind of relationship do YOU think there is for each of the following pairs of concepts (each concept is underlined):", "24px Arial", "#000");
    text1.x = 150;
    text1.y = 100;
    text1.lineWidth = 900;
    text1.lineHeight = 30;
    // btw this text below is now in index.html
    /*let text2 = new createjs.Text("• How often a city is hit by a hurricane and how often it floods\n\n• Margarine (butter) sales and divorce rate\n\n• Humidity and the amount of water in the air\n\n• How hard you push on an object and how much the object moves\n\n• Friction and how much resistance there is to motion on a surface", "18px Arial", "#000");
    text2.x = 230;
    text2.y = 200;
    text2.lineHeight = 20;
    text2.lineWidth = 600;*/
    let text3 = new createjs.Text("Reminder: Correlation does not equal causation:", "18px Arial", "#000");
    text3.x = 150;
    text3.y = 470;
    text3.lineHeight = 25;
    text3.lineWidth = 460;
    let text4 = new createjs.Text("Just because two things are strongly related, that does not mean that one caused the other! There may be other reasons for this correlation. Both things may be caused by something else.", "18px Arial", "#000");
    text4.x = 230;
    text4.y = 520;
    text4.lineHeight = 25;
    text4.lineWidth = 800;
    stage.addChild(text1, text3, text4);
    let quiz = new createjs.DOMElement("quiz_overlay");
    quiz.x = 50 * 2 / PIXEL_RATIO;
    quiz.y = 50 * 2 / PIXEL_RATIO;
    quiz.scaleX = .2 * 2 / PIXEL_RATIO;
    quiz.scaleY = .2 * 2 / PIXEL_RATIO;
    quiz.htmlElement.style.display = "block";
    let quizQuestions = new createjs.DOMElement("quiz_questions_overlay");
    quizQuestions.x = 225 * 2 / PIXEL_RATIO;
    quizQuestions.y = 53 * 2 / PIXEL_RATIO;
    quizQuestions.scaleX = .2 * 2 / PIXEL_RATIO;
    quizQuestions.scaleY = .2 * 2 / PIXEL_RATIO;
    quizQuestions.htmlElement.style.display = "block";
    stage.addChild(quiz, quizQuestions);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => {
        quiz.htmlElement.style.display = "none";
        quizQuestions.htmlElement.style.display = "none";
        prevHypoTask();
    });
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    let readyToMoveOn = false;
    nextButton.on("click", e => {
        // checking validity info for quiz questions
        let quizSelectors = document.getElementsByClassName("quiz_questions");
        for (let i = 0; i < quizSelectors.length; i++) {
            if (quizSelectors[i].value != QUIZ_ANSWERS[i]) {
                quizSelectors[i].setCustomValidity("Wrong Answer");
            } else {
                quizSelectors[i].setCustomValidity("");
                quizSelectors[i].style.color = "green";
            }
            // resetting validity
            quizSelectors[i].onchange = (() => {
                quizSelectors[i].setCustomValidity("");
                quizSelectors[i].style.color = "";
            });
        }
        // this will activate when all answers are correct, and next had been clicked
        if (readyToMoveOn) {
            quiz.htmlElement.style.display = "none";
            quizQuestions.htmlElement.style.display = "none";
            nextHypoTask();
            return;
        }
        // testing if all answers are correct
        if (quizQuestions.htmlElement.reportValidity()) {
            updateErrorField("Your answers are all correct. Click Next to move on.", "16px Arial", "green");
            readyToMoveOn = true;
        }
    });
    stage.addChild(nextButton);
    stage.update();
}

function instructionPage() {
    stage.removeAllChildren();
    let delayAchieved = false;
    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;
    stage.addChild(errorField);

    let text = new createjs.Text("Instructions", "bold 22px Arial", "#000");
    text.x = CANVAS_WIDTH / 2;
    text.y = CANVAS_HEIGHT / 8 - 15;
    text.textAlign = "center";
    let video = new createjs.DOMElement("instruction_video_overlay");
    video.x = 50 * 2 / PIXEL_RATIO;
    video.y = 30 * 2 / PIXEL_RATIO;
    video.scaleX = .25 * 2 / PIXEL_RATIO;
    video.scaleY = .25 * 2 / PIXEL_RATIO;

    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => {
        let vid = document.getElementById("instruction_video_overlay");
        vid.style.display = "none";
        vid.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        prevHypoTask();
    });
    stage.addChild(backButton);

    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => {
        if (!delayAchieved) {
            updateErrorField("Please watch the tutorial video.", "16px Arial", "#000");
            setTimeout(() => {
                delayAchieved = true;
            }, 20000);
        } else {
            let vid = document.getElementById("instruction_video_overlay");
            vid.style.display = "none";
            vid.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            nextHypoTask();
        }
    });

    let advice = new createjs.Text("Please watch the video above for a brief tutorial.\nIt is recommended to watch the video in full screen.", "16px Arial", "#000");
    advice.x = CANVAS_WIDTH / 2;
    advice.y = CANVAS_HEIGHT * .8;
    advice.textAlign = "center";

    stage.addChild(text, video, nextButton, advice);
    document.getElementById("instruction_video_overlay").style.display = "block";
    stage.update();
}

function backToYourRQ() {
    stage.removeAllChildren();
    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing"));
    image1.x = 50;
    image1.y = 50;
    image1.scaleX = 1.0;
    image1.scaleY = 1.0;
    stage.addChild(image1);
    let txt1 = "Now that you've seen how to set up your hypothesis by linking concepts, let's go back to your original research question...";
    let txt2 = getRQ();
    let text1 = new createjs.Text(txt1, "22px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 175;
    text1.textAlign = "center";
    text1.lineHeight = 35;
    text1.lineWidth = 700;
    stage.addChild(text1);
    let text2 = new createjs.Text(txt2, "bold 22px Arial", "#000");
    text2.x = CANVAS_WIDTH / 2;
    text2.y = 300;
    text2.textAlign = "center";
    text2.lineHeight = 35;
    text2.lineWidth = 700;
    stage.addChild(text2);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => nextHypoTask());
    stage.addChild(nextButton);
    stage.update();
}

function predictionPage1() {
    stage.removeAllChildren();

    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;
    stage.addChild(errorField);

    let title = new createjs.Text("Make your prediction:", "bold 22px Arial", "#000");
    title.x = CANVAS_WIDTH / 2;
    title.y = CANVAS_HEIGHT / 8;
    title.textAlign = "center";
    let question = new createjs.Text("As " + iv.toLowerCase() + " increases, what will happen to the " + dv.toLowerCase() + "?", "20px Arial", "#000");
    question.x = CANVAS_WIDTH / 2;
    question.y = title.y + 40;
    question.textAlign = "center";
    question.lineWidth = 800;
    question.lineHeight = 30;

    let chosenDVDirection;
    let choice1 = new createjs.Text("Increase", "20px Arial", "#000");
    choice1.x = CANVAS_WIDTH / 2;
    choice1.y = question.y + 150;
    choice1.textAlign = "center";
    let choice2 = new createjs.Text("Decrease", "20px Arial", "#000");
    choice2.x = CANVAS_WIDTH / 2;
    choice2.y = choice1.y + 30;
    choice2.textAlign = "center";
    if (firstPredictionLocked) {
        // display message that they cannot change the value and
        // don't setup the click handlers
        updateErrorField(firstPredictionLockedReason + " You cannot change your prediction.", "22px Arial", '#000');
    } else {
        generateHitAreaCenterAlignment(choice1);
        choice1.on("click", e => {
            choice1.color = "#5588EE";
            choice2.color = "#000";
            chosenDVDirection = true;
            // console.log(choice1);
        });
        generateHitAreaCenterAlignment(choice2);
        choice2.on("click", e => {
            choice1.color = "#000";
            choice2.color = "#5588EE";
            chosenDVDirection = false;
        });
    }
    if (firstPredictionSaved) {
        // set chosenDVDirection to the value of firstPrediction and
        chosenDVDirection = firstPrediction;
        // set the choices to the appropriate colors based on the saved value
        if (firstPrediction) {
            choice1.color = "#5588EE";
            choice2.color = "#000";
        } else {
            choice1.color = "#000";
            choice2.color = "#5588EE";
        }
    }
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => {
        if (chosenDVDirection === undefined) {
            updateErrorField('Please select either "Increase" or "Decrease".', "16px Arial", "#000");
        } else {
            firstPrediction = chosenDVDirection;
            logPrediction("firstPrediction", firstPrediction)
            .then(() => {
                firstPredictionSaved = true;
                nextHypoTask();
            })
            .catch(function (error) {
                console.error(error);
            });
        }
    });
    stage.addChild(title, question, choice1, choice2, nextButton);
    stage.update();
}

function brmInstructionPage() {
    stage.removeAllChildren();
    let text = new createjs.Text("Background Research", "bold 22px Arial", "#000");
    text.x = CANVAS_WIDTH / 2;
    text.y = 25;
    text.textAlign = "center";
    let vid = new createjs.DOMElement("brm_instruction_overlay");
    vid.htmlElement.style.display = "block";
    vid.x = 40 * 2 / PIXEL_RATIO;
    vid.y = 15 * 2 / PIXEL_RATIO;
    vid.scaleX = .2 * 2 / PIXEL_RATIO;
    vid.scaleY = .2 * 2 / PIXEL_RATIO;
    stage.addChild(text, vid);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => {
        vid.htmlElement.style.display = "none";
        predictionPage1();
    });
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => {
        vid.htmlElement.style.display = "none";
        brmPage();
    });
    stage.addChild(nextButton);
    stage.update();
}

function getImageForPrediction(prediction) {
    let image;
    if ("increase" === prediction) {
        image = new createjs.Bitmap(queue.getResult("Crys_increases"));
        image.scaleX = 0.5;
        image.scaleY = 0.5;
    } else {
        image = new createjs.Bitmap(queue.getResult("Crys_decreases"));
        image.scaleX = 0.7;
        image.scaleY = 0.7;
    }
    return image;
}

function graphPage1() {
    stage.removeAllChildren();
    let prediction = (firstPrediction) ? "increase" : "decrease";
    let text1 = new createjs.Text(`You predicted that as the water temperature increases, the amount of crystal growth on the string will ${prediction}.`, "22px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 75;
    text1.textAlign = "center";
    text1.lineWidth = 700;
    text1.lineHeight = 35;
    stage.addChild(text1);
    let image = getImageForPrediction(prediction);
    image.x = 400;
    image.y = 150;
    stage.addChild(image);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => nextHypoTask());
    stage.addChild(nextButton);
    stage.update();
}

function graphPage2() {
    stage.removeAllChildren();
    let prediction = (firstPrediction) ? "increase" : "decrease";
    let image = getImageForPrediction(prediction);
    image.x = 400
    image.y = 50;
    stage.addChild(image);
    let text1 = new createjs.Text('Your prediction is represented as: ', "22px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 475;
    text1.textAlign = "center";
    text1.lineWidth = 700;
    text1.lineHeight = 35;
    stage.addChild(text1);
    let ivBubble = createFixedBubble(IV_X, IV_Y, capitalizeFirstLetter(iv), "#99bbff", "increase", false);
    let dvBubble;
    if (firstPrediction) {
        dvBubble = createFixedBubble(DV_X, DV_Y, capitalizeFirstLetter(dvabb), "#99bbff", "increase", true);
    } else {
        dvBubble = createFixedBubble(DV_X, DV_Y, capitalizeFirstLetter(dvabb), "#99bbff", "decrease", true);
    }
    let arrow = createUnlabeledArrow(ivBubble.x + BUBBLE_WIDTH / 2, ivBubble.y, dvBubble.x - BUBBLE_WIDTH / 2, dvBubble.y);
    stage.addChild(ivBubble, dvBubble, arrow);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => nextHypoTask());
    stage.addChild(nextButton);
    stage.update();
}

function biDirInstructionPage1() {
    stage.removeAllChildren()
    let oppositePrediction = (firstPrediction) ? "decrease" : "increase";
    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing"));
    image1.x = 50;
    image1.y = 50;
    image1.scaleX = 1.0;
    image1.scaleY = 1.0;
    stage.addChild(image1);
    const txt = "Now, let's say that another student made a prediction in the opposite direction from your prediction..."
    let text1 = new createjs.Text(txt, "22px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 150;
    text1.textAlign = "center";
    text1.lineWidth = 700;
    text1.lineHeight = 35;
    stage.addChild(text1);
    let image2 = getImageForPrediction(oppositePrediction);
    image2.x = 400;
    image2.y = 250;
    stage.addChild(image2);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => nextHypoTask());
    stage.addChild(nextButton);
    stage.update();
}

function biDirInstructionPage2() {
    stage.removeAllChildren();
    let oppositePrediction = (firstPrediction) ? "decrease" : "increase";
    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing"));
    image1.x = 50;
    image1.y = 50;
    image1.scaleX = 1.0;
    image1.scaleY = 1.0;
    stage.addChild(image1);
    const txt = `They predicted that as water temperature increases, the amount of crystal growth would ${oppositePrediction}.`;
    let text1 = new createjs.Text(txt, "22px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 150;
    text1.textAlign = "center";
    text1.lineWidth = 700;
    text1.lineHeight = 35;
    stage.addChild(text1);
    let image2 = getImageForPrediction(oppositePrediction);
    image2.x = 400;
    image2.y = 250;
    stage.addChild(image2);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => nextHypoTask());
    stage.addChild(nextButton);
    stage.update();
}

function biDirInstructionPage3() {
    stage.removeAllChildren();
    let oppositePrediction = (firstPrediction) ? "decrease" : "increase";
    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing"));
    image1.x = 50;
    image1.y = 50;
    image1.scaleX = 1.0;
    image1.scaleY = 1.0;
    stage.addChild(image1);
    const txt1 = "Think about how this prediction might be true for a minute or two.";
    const txt2 = "Then, try to set up a new hypothesis for this new prediction.";
    let text1 = new createjs.Text(txt1, "22px Arial", "#000");
    text1.x = CANVAS_WIDTH / 2;
    text1.y = 150;
    text1.textAlign = "center";
    text1.lineWidth = 700;
    text1.lineHeight = 35;
    stage.addChild(text1);
    let text2 = new createjs.Text(txt2, "22px Arial", "#000");
    text2.x = CANVAS_WIDTH / 2;
    text2.y = 200;
    text2.textAlign = "center";
    text2.lineWidth = 700;
    text2.lineHeight = 35;
    stage.addChild(text2);
    let image2 = getImageForPrediction(oppositePrediction);
    image2.x = 400;
    image2.y = 250;
    stage.addChild(image2);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => nextHypoTask());
    stage.addChild(nextButton);
    stage.update();
}

// function biDirInstructionPage4() {

// }

function brmPage() {
    stage.removeAllChildren();
    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;
    stage.addChild(errorField);

    let brmBtnClicked = false;
    let text = new createjs.Text('Click the "Go to Background Research website" button to go to the Background Research Module. The Background Research Module is where you will be conducting your research. There is no time limit to this task. When you are finished with your research, click "Next" to move on to the next page.', "24px Arial", "#000");
    text.x = CANVAS_WIDTH / 2;
    text.y = 150;
    text.textAlign = "center";
    text.lineWidth = 800;
    text.lineHeight = 30;
    let brmButton = createExtraLargeButton(CANVAS_WIDTH * .5,
                                           CANVAS_HEIGHT * .5 + 50,
                                           "Go to\nBackground\nResearch\nwebsite",
                                           "#3769C2",
                                           BUTTON_WIDTH * 3,
                                           BUTTON_HEIGHT * 5,
                                           "bold");
    brmButton.on("click", e => {
        // switched from https://go.isptutor.org to window.location.origin
        // so that it will work both from production website and dev environment
        // open("https://go.isptutor.org/brm/home/index.html", "_blank");
        open(window.location.origin + "/brm/home/index.html", "_blank");
        localStorage.setItem("isptutor_brmStartTime", Date.now());
        localStorage.setItem("isptutor_rq", "Does " + iv.toLowerCase() + " affect the " + dv.toLowerCase() + "?");
        setTimeout(() => {
            brmBtnClicked = true;
        }, 20000); 
    });
    stage.addChild(text, brmButton);
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => {
        if (!brmBtnClicked) {
            updateErrorField("Please click on the 'Go to Background Research website' button", "bold 22px Arial", "#000");
        } else {
            nextHypoTask();
        }
    });
    stage.addChild(nextButton);
    stage.update();
}

function predictionPage2() {
    stage.removeAllChildren();

    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;
    stage.addChild(errorField);

    let title = new createjs.Text("What do you think now (that you've finished your research in the Background Research website)?", "bold 22px Arial", "#000");
    title.x = CANVAS_WIDTH / 2;
    title.y = CANVAS_HEIGHT / 8;
    title.textAlign = "center";
    let question = new createjs.Text("As " + iv.toLowerCase() + " increases, what will happen to the " + dv.toLowerCase() + "?", "20px Arial", "#000");
    question.x = CANVAS_WIDTH / 2;
    question.y = title.y + 40;
    question.textAlign = "center";
    question.lineWidth = 800;
    question.lineHeight = 30;

    let chosenDVDirection;
    let choice1 = new createjs.Text("Increase", "20px Arial", "#000");
    choice1.x = CANVAS_WIDTH / 2;
    choice1.y = question.y + 150;
    choice1.textAlign = "center";
    let choice2 = new createjs.Text("Decrease", "20px Arial", "#000");
    choice2.x = CANVAS_WIDTH / 2;
    choice2.y = choice1.y + 30;
    choice2.textAlign = "center";
    if (secondPredictionLocked) {
        // display message and don't add event listeners
        updateErrorField(secondPredictionLockedReason + " You cannot change your prediction.", "22px Arial", "#000");
    } else {
        generateHitAreaCenterAlignment(choice1);
        choice1.on("click", e => {
            choice1.color = "#5588EE";
            choice2.color = "#000";
            chosenDVDirection = true;
            console.log(choice1);
        });
        generateHitAreaCenterAlignment(choice2);
        choice2.on("click", e => {
            choice1.color = "#000";
            choice2.color = "#5588EE";
            chosenDVDirection = false;
        });
    }
    if (secondPredictionSaved) {
        // set chosenDVDirection to the value of secondPrediction and
        chosenDVDirection = secondPrediction;
        // set the choices to the appropriate colors based on the saved value  
        if (secondPrediction) {
            choice1.color = "#5588EE";
            choice2.color = "#000";
        } else {
            choice1.color = "#000";
            choice2.color = "#5588EE";
        }
    }
    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => prevHypoTask());
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => {
        if (chosenDVDirection === undefined) {
            updateErrorField('Please select either "Increase" or "Decrease".', "16px Arial", "#000");
        } else {
            secondPrediction = chosenDVDirection;
            // db.collection(collectionID).doc(userID).update({
            //     secondPrediction: boolPredictionToString(secondPrediction)
            // })
            logPrediction("secondPrediction", secondPrediction)
            .then(() => {
                secondPredictionSaved = true;
                if (!firstPredictionLocked) {
                    firstPredictionLocked = true;
                    firstPredictionLockedReason = "You have already saved your second prediction.";
                }
                nextHypoTask();
            })
            .catch(function(error) {
                console.error(error);
            });
        }   
    });
    stage.addChild(title, question, choice1, choice2, nextButton);
    stage.update();
}

function fetchPrevSavedHypo(whichHypo) {
    let hypoData = null;
    return db.collection(collectionID).doc(userID).get()
    .then((doc) => {
        let data = doc.data();
        let hypoDataStr = data[`${whichHypo}Hypo`];
        if (undefined !== hypoDataStr) {
            hypoData = JSON.parse(hypoDataStr);
        }
        return hypoData;
    })
    .catch(function (error) {
        console.log(error);
        return hypoData;
    });
}

function initialConceptMap() {
    conceptMapPage("initial");
}

function oppositeDirectionConceptMap() {
    conceptMapPage("opposite");
}

function finalConceptMap() {
    conceptMapPage("final");
}

function completePage() {
    getEleById('completion-overlay').style.display = "block";
    db.collection(collectionID).doc(userID).update({
        currTutorNdx: 2
    }).catch(function(error) {
        console.error(error);
    });
}


function conceptMapPage(whichHypo) {
    // reset steps to empty list so:
    // 1) steps are kept in sync with nodes/arrows if the student returns from prev page
    // 2) steps for subsequent concept maps aren't merely appended
    steps = [];
    let hypoSaved = false;
    let pageVersion = whichHypo;
    let prediction;
    if ("initial" === whichHypo) {
        prediction = firstPrediction;
    } else if ("opposite" === whichHypo) {
        prediction = !firstPrediction;
    } else if ("final" === whichHypo) {
        prediction = secondPrediction;
    } else {
        console.error("invalid concept map version: ", whichHypo);
        return;
    }
    stage.removeAllChildren();
    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;
    stage.addChild(errorField);
    // add text field
    textField = new createjs.Container();
    textField.x = CANVAS_WIDTH / 8;
    textField.y = CANVAS_HEIGHT / 16;
    let title = new createjs.Text("Concepts", "bold 16px Arial", "#000");
    title.x = CANVAS_WIDTH / 2 - textField.x;
    title.y = 20;
    title.textAlign = "center";
    let fieldBackground = new createjs.Shape();
    fieldBackground.graphics.setStrokeStyle(1).beginStroke("#000").drawRect(0, 0, CANVAS_WIDTH - 2 * textField.x, CANVAS_HEIGHT / 4 + 25);
    textField.addChild(title, fieldBackground);

    // increment for staggered bubbles
    let increment = 0;
    let buttonSize = 25;
    // this is to make the concepts panel
    let leftMargin = 30;
    let topMargin = 60;
    let rightMargin = 20 + buttonSize;
    let spacing = 35;
    for (let i = 0; i < nodes.length; i++) {
        let nodeText = new createjs.Text(nodes[i], "16px Arial", "#000");
        let plusButton;
        let xButton;
        if (i < 4) {
            nodeText.x = leftMargin;
            nodeText.y = topMargin + i * spacing;
            plusButton = createPlusButton(CANVAS_WIDTH * (3 / 8) - rightMargin - buttonSize - 1, nodeText.y - 5, buttonSize);
            xButton = createXButton(CANVAS_WIDTH * (3 / 8) - rightMargin, nodeText.y - 5, buttonSize);
        } else {
            nodeText.x = CANVAS_WIDTH / 2 - CANVAS_WIDTH / 8 + leftMargin;
            nodeText.y = topMargin + (i - 4) * spacing;
            plusButton = createPlusButton(CANVAS_WIDTH * (6 / 8) - rightMargin - buttonSize - 1, nodeText.y - 5, buttonSize);
            xButton = createXButton(CANVAS_WIDTH * (6 / 8) - rightMargin, nodeText.y - 5, buttonSize);
        }
        // fancy function closure trick below
        let storedBubble = null;
        plusButton.on("click", e => {
            if (storedBubble == null) {
                let bubble = createBubble(CANVAS_WIDTH / 2 + increment, CANVAS_HEIGHT / 2 + increment, nodes[i], "#4286f4", "none");
                bubble.idx = i;
                steps.push({
                    action: "NODE_CREATE",
                    object: nodes[bubble.idx],
                    index: bubble.idx,
                    info: "N/A",
                    timestamp: (new Date()).toLocaleString()
                });
                storedBubble = bubble;
                stage.addChild(bubble);
                increment += 5;
            }
        });
        xButton.on("click", e => {
            if (storedBubble != null) {
                for (let child of storedBubble.children) {
                    if (child.name == "inConnector" || child.name == "outConnector") {
                        removeArrowAndLabel(child.arrow);
                    }
                }
                stage.removeChild(storedBubble);
                steps.push({
                    action: "NODE_DELETE",
                    object: nodes[storedBubble.idx],
                    index: storedBubble.idx,
                    info: "N/A",
                    timestamp: (new Date()).toLocaleString()
                });
                storedBubble = null;
            }
        });
        textField.addChild(nodeText, plusButton, xButton);
    }
    stage.addChild(textField);

    // adding IV bubble, DV bubble, and arrow
    let ivBubble = createFixedBubble(IV_X, IV_Y, capitalizeFirstLetter(iv), "#99bbff", "increase", false);
    let dvBubble;
    // uses the appropriate prediction either firstPrediction, !firstPrediction, or secondPrediction
    // based on which concept map this is handling
    if (prediction) {
        dvBubble = createFixedBubble(DV_X, DV_Y, capitalizeFirstLetter(dvabb), "#99bbff", "increase", true);
    } else {
        dvBubble = createFixedBubble(DV_X, DV_Y, capitalizeFirstLetter(dvabb), "#99bbff", "decrease", true);
    }
    let arrow = createUnlabeledArrow(ivBubble.x + BUBBLE_WIDTH / 2, ivBubble.y, dvBubble.x - BUBBLE_WIDTH / 2, dvBubble.y);


    // add notebook (scrolling textarea)
    let notepad = new createjs.DOMElement("concept_map_notepad_overlay");
    notepad.x = 258 * 2 / PIXEL_RATIO;
    notepad.y = 73 * 2 / PIXEL_RATIO;
    notepad.scaleX = .2 * 2 / PIXEL_RATIO;
    notepad.scaleY = .2 * 2 / PIXEL_RATIO;
    notepad.htmlElement.style.display = "block";
    // clear any notes any previous arrivals on this page
    getEleById("notepad_notes").innerHTML = "";
    stage.addChild(notepad);
    
    // let rewatchVideoButton = createExtraLargeButton(502 * 2 / PIXEL_RATIO,
    //                                                 64 * 2 / PIXEL_RATIO,
    //                                                 "Re-\nwatch\nhow-to\nvideo",
    //                                                 "#3769C2",
    //                                                 BUTTON_WIDTH * 1.5,
    //                                                 BUTTON_HEIGHT * 5,
    //                                                 "");
    // rewatchVideoButton.on("click", e => {
    //    open(window.location.origin + "/cptMapInstructionalVideo.html", "_blank");
    // });
    // stage.addChild(rewatchVideoButton);
    // save Warning popup
    let saveWarning = new createjs.DOMElement("save_concept_map_overlay");
    saveWarning.x = 110 * 2 / PIXEL_RATIO;
    saveWarning.y = 70 * 2 / PIXEL_RATIO;
    saveWarning.scaleX = .2 * 2 / PIXEL_RATIO;
    saveWarning.scaleY = .2 * 2 / PIXEL_RATIO;
    let cancelSaveBtn = getEleById("cpt_map_cancel_save");
    let saveBtn = getEleById("cpt_map_save");
    function cancelSaveHandler() {
        saveWarning.htmlElement.style.display = "none";
    }
    function saveHandler() {
        saveWarning.htmlElement.style.display = "none";
        logData2(ivBubble, whichHypo);
        hypoSaved = true;
        if ("initial" === whichHypo) {
            firstPredictionLocked = true;
            firstPredictionLockedReason = "You have already saved your hypothesis."
        } else if ("final" === whichHypo) {
            secondPredictionLocked = true;
            secondPredictionLockedReason = "You have already saved your hypothesis."
        }
        stage.removeChild(verifyButton);
        stage.addChild(nextButton);
        updateErrorField("Please draw your concept map in your notebook before continuing", "bold 22px Arial", "#FFA500");
        stage.update();
    }

    stage.addChild(saveWarning);

    // back button leave page warning popup
    let leavePageWarning = new createjs.DOMElement("leave_concept_map_overlay");
    leavePageWarning.x = 110 * 2 / PIXEL_RATIO;
    leavePageWarning.y = 70 * 2 / PIXEL_RATIO;
    leavePageWarning.scaleX = .2 * 2 / PIXEL_RATIO;
    leavePageWarning.scaleY = .2 * 2 / PIXEL_RATIO;
    let cancelLeavePageBtn = getEleById("cpt_map_cancel_leave_page");
    let leavePageBtn = getEleById("cpt_map_leave_page");

    function cancelLeavePageHandler() {
        leavePageWarning.htmlElement.style.display = "none";
    }
    function leavePageHandler() {
        leavePageWarning.htmlElement.style.display = "none";
        clearDOMEventListeners();
        prevHypoTask();
    }
    stage.addChild(leavePageWarning);

    cancelSaveBtn.addEventListener('click', cancelSaveHandler);
    saveBtn.addEventListener("click", saveHandler);
    cancelLeavePageBtn.addEventListener('click', cancelLeavePageHandler);
    leavePageBtn.addEventListener('click', leavePageHandler);

    function clearDOMEventListeners() {
        saveBtn.removeEventListener("click", saveHandler);
        cancelSaveBtn.removeEventListener("click", cancelSaveHandler);
        leavePageBtn.removeEventListener("click", leavePageHandler);
        cancelLeavePageBtn.removeEventListener("click", cancelLeavePageHandler);
    }


    let backButton = createButton(CANVAS_WIDTH * (1 / 8), CANVAS_HEIGHT * (7 / 8), "Back", BUTTON_COLOR);
    backButton.on("click", e => {
        notepad.htmlElement.style.display = "none";
        if (hypoSaved) {
            clearDOMEventListeners();
            prevHypoTask();
        } else {
            leavePageWarning.htmlElement.style.display = "block";
        }
        // prevHypoTask();
    });
    stage.addChild(backButton);
    let nextButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Next", BUTTON_COLOR);
    nextButton.on("click", e => {
        notepad.htmlElement.style.display = "none";
        clearDOMEventListeners();
        nextHypoTask();
    });
    // verify button
    let verifyButton = createButton(CANVAS_WIDTH * (7 / 8), CANVAS_HEIGHT * (7 / 8), "Check", BUTTON_COLOR);
    verifyButton.on("click", e => {
        if (verifyConceptMap(ivBubble)) {
            // if everything is ok, show the save warning popup
            saveWarning.htmlElement.style.display = "block";
        }
    });
    // stage.addChild(ivBubble, dvBubble, arrow, verifyButton);
    stage.addChild(ivBubble, dvBubble, arrow, verifyButton);
    stage.update();
    // stage handlers
    stage.on("stagemouseup", removePanel);
    stage.on("stagemouseup", removeErrorField);
    fetchPrevSavedHypo(whichHypo)
    .then((hypoData) => {
        if (null !== hypoData) {
            hypoSaved = true;
            stage.removeChild(verifyButton);
            stage.addChild(nextButton);
            stage.update();
            updateErrorField("Your hypothesis has already been saved. You can not make any changes.", "22px Arial", "#000");
            // rehydrateHypothesis(hypoData, ivBubble, dvBubble);
        }
    })
    .catch(function (error) {
        console.error(error);
    });
}

function verifyConceptMap(ivBubble) {
    let isGood = true;
    // checking everything is labeled
    for (let i = 0; i < stage.numChildren; i++) {
        let child = stage.getChildAt(i);
        // checking that a bubble has a direction if it is connected
        if (child.name === "bubble") {
            let dirButton = child.getChildByName("dirButton");
            let connected = false;
            for (let bubbleChild of child.children) {
                if ((bubbleChild.name === "inConnector" || bubbleChild.name === "outConnector") && bubbleChild.arrow != null) {
                    connected = true;
                    break;
                }
            }
            if (dirButton.children.length === 1 && connected) {
                drawDirButton(dirButton, dirButton.x, dirButton.y, dirButton.direction, "red");
                isGood = false;
            }
        }
        // checking that arrows are properly labeled
        else if (child.name === "arrow") {
            child.label.color = "#000";
            if (child.label.text === "Add label") {
                child.label.color = "red";
                isGood = false;
            }
        }
    }
    if (!isGood) {
        updateErrorField("Please make sure that everything is labeled properly.", "16px Arial", "red");
        return isGood;
    }
    // checking connectivity
    let connector = ivBubble.outConnector;
    while (connector != null) {
        if (connector.arrow == null) {
            updateErrorField("Please make sure that all of the bubbles are connected.", "16px Arial", "red");
            isGood = false;
            return isGood;
        }
        let nextBubble = connector.arrow.connectorOver.parent;
        connector = nextBubble.outConnector;
    }
    // checking at least one intermediate bubble
    if (ivBubble.outConnector.arrow.connectorOver.parent.outConnector == null) {
        updateErrorField("Please add at least one intermediate bubble.", "16px Arial", "red");
        isGood = false;
        return isGood;
    }
    updateErrorField("Everything is now labeled and connected properly. This does not mean that your work is conceptually correct.", "16px Arial", "#000");
    return isGood;
}

// rebuilds the concept map'a nodes, directions, arrows, and labels from what is 
// stored in firebase (hypoData).  requires ivBubble and dvBubble as these nodes aren't
// saved in the db
function rehydrateHypothesis(hypoData, ivBubble, dvBubble) {
    // showSnackbar('Changes to previously saved hypothesis will not be saved.');
    // console.log(hypoData);
    let nodeOrder = hypoData.nodes.slice(0, -1);
    // let directions = hypoData.directions.slice(0, -1);
    // let arrowLabels = hypoData.arrowLabels;
    let steps = hypoData.steps;
    let bubbles = [ivBubble, dvBubble];
    let nodez = [];
    let arrows = [];
    steps.forEach((step) => {
        let nodeText = null;
        let nd = null;
        let from_, to_;
        let index;
        let tmp;
        switch (step.action) {
            case "NODE_CREATE":
                nodez.push({
                    'text': step.object,
                    'index': step.index,
                    'direction': step.info
                });
                break;
            case "NODE_DELETE":
                // remove the node
                nodeText = step.object;
                nodez = nodez.filter(x => x.text !== nodeText);
                // delete all arrows leading in or out from this now non-existant node
                arrows = arrows.filter(x => x.from === nodeText);
                arrows = arrows.filter(x => x.to === nodeText);
                break;
            case "NODE_CHANGE_DIRECTION":
                nd = nodez.find(x => x.text === step.object);
                if (undefined !== nd) {
                    nd.direction = step.info;
                }
                break;
            case "ARROW_CREATE":
                [from_, to_] = step.object.split('::')
                index = step.index;
                arrows.push({
                    'object': step.object,
                    'from': from_,
                    'to': to_,
                    'index': index,
                    'label': null
                });
                break;
            case "ARROW_DELETE":
                arrows = arrows.filter(x => x.object !== step.object);
                break;
            case "ARROW_CHANGE_LABEL":
                [from_, to_] = step.object.split('::');
                tmp = arrows.find(x => x.from === from_ && x.to === to_);
                if (undefined !== tmp) {
                    let _label = step.info;
                    _label = _label.replace('Cause:', 'Cause:\n');
                    tmp.label = _label;
                }
                break;
            default:
                console.error('unknown step action:', step.action);
                break;
        }
    });
    // console.log(steps);
    // console.log(nodez);
    console.log(arrows);
    let sortedNodes = [];
    nodeOrder.forEach((txt) => {
        let _cn = nodez.find(x => x.text === txt);
        sortedNodes.push(_cn);
    });
    let labels = sortedNodes.map(x => x.text);
    let directions = sortedNodes.map(x => x.direction);
    let tmp = createEvenlySpacedBubbles2(300, CANVAS_WIDTH - 300, 400, labels, directions);
    tmp.forEach((bubble) => {
        bubbles.push(bubble);
    });
    let bubblesInfo = getBubblesInfo(bubbles);
    console.log(bubblesInfo);
    arrows.forEach((arrow) => {
        let _from = arrow.from;
        let _to = arrow.to;
        let label = arrow.label;
        let _start = bubblesInfo[_from].out;
        let _end = bubblesInfo[_to].in;
        let arr = createArrow(_start.x, _start.y, _end.x, _end.y, label);
        stage.addChild(arr);
    });
    stage.update();
}

function getBubblesInfo(bubbles) {
    console.log('length:', bubbles.length, ' bubbles:', bubbles);
    let info = {};
    bubbles.forEach((bubble) => {
        let tmp = {
            x: bubble.x,
            y: bubble.y,
            text: bubble.text
        }
        let haveIn = Boolean(bubble.inConnector);
        let haveOut = Boolean(bubble.outConnector);
        let sideConnectors = (haveIn && haveOut);
        let topConnectors = (!sideConnectors && (haveIn || haveOut));
        // inConnector and outConnector may not exist in iv and dv bubbles
        // also their x, y cooridates are relative to the bubbles x,y
        // so I'm adding the x,y to them
        if (haveIn) {
            if (sideConnectors) {
                // left connector
                tmp.in = {
                    x: tmp.x - (BUBBLE_WIDTH / 2),
                    y: tmp.y
                };
            } else if (topConnectors) {
                //top connector
                tmp.in = {
                    x: tmp.x,
                    y: tmp.y - (BUBBLE_HEIGHT / 2)
                };
            }
        }
        if (haveOut) {
            if (sideConnectors) {
                // right connector
                tmp.out = {
                    x: tmp.x + (BUBBLE_WIDTH / 2),
                    y: tmp.y
                };
            } else if (topConnectors) {
                // top connector
                tmp.out = {
                    x: tmp.x,
                    y: tmp.y - (BUBBLE_HEIGHT / 2)
                };
            }
        }
        info[tmp.text] = tmp;

    });
    return info;
}

// random utility function to capitalize first letter and make rest lower case
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// ============================================================================
// ================================ Handle Overs ==============================
// ============================================================================

function handleMouseOver(event) {
    if (event.type == "mouseover") {
        event.target.alpha = .5;
        somethingHighlighted = true;
    } else {
        event.target.alpha = 1;
        somethingHighlighted = false;
    }
}

function handlePanelOver(event) {
    if (event.type === "mouseover") {
        event.target.alpha = .5;
    } else {
        event.target.alpha = 1;
    }

}

function handleConnectorOver(event) {
    if (event.type === "mouseover") {
        event.target.alpha = .5;
        connectorOver = event.target;
        console.log("connOver:");
        console.log(connectorOver);
    } else {
        event.target.alpha = 1;
        connectorOver = null;
    }
}

// =============================================================================
// =============================== Handle Clicks ===============================
// =============================================================================

function handleClick(event) {
    alert(event.target.text);
}

function handleArrowClick(event) {
    console.log(event.target);
    panel = createDeletePanel(event.stageX / scalingRatio, event.stageY / scalingRatio, event.target.parent);
    stage.addChild(panel)
    stage.update();
}

function handleDirectionClick(event) {
    console.log(event.target);
    panel = createDirectionPanel(event.stageX / scalingRatio, event.stageY / scalingRatio, event.target);
    stage.addChild(panel);
    stage.update();

}

function handleExplanationClick(event) {
    panel = createExplanationPanel(event.stageX / scalingRatio, event.stageY / scalingRatio, event.target.parent.label);
    stage.addChild(panel);
    stage.update();
}

function handleCauseClick(x, y, target) {
    panel = createCausePanel(x, y, target);
    stage.addChild(panel);
    stage.update();
}


function updateErrorField(text, font, color) {
    errorField.removeAllChildren();
    let words = new createjs.Text(text, font, color);
    words.x = CANVAS_WIDTH / 2;
    words.textAlign = "center";
    errorField.addChild(words);
}

function removePanel(event) {
    //console.log(event.stageX);
    stage.removeChild(panel);
    stage.update();
}

function removeErrorField(event) {
    errorField.removeAllChildren();
    stage.update();
}



// ============================================================================
// ================================= Hit Area =================================
// ============================================================================

function generateHitArea(text) {
    let hit = new createjs.Shape();
    let bounds = text.getBounds();
    hit.graphics.beginFill("#000").drawRect(0, 0, bounds.width, bounds.height);
    text.hitArea = hit;
    text.cursor = "pointer";
    text.on("mouseover", handleMouseOver);
    text.on("mouseout", handleMouseOver);
}

function generateHitAreaCenterAlignment(text) {
    let hit = new createjs.Shape();
    let bounds = text.getBounds();
    hit.graphics.beginFill("#000").drawRect(0, 0, bounds.width, bounds.height);
    hit.x = -1 * bounds.width / 2;
    hit.y = 0;
    text.hitArea = hit;
    text.cursor = "pointer";
    text.on("mouseover", handleMouseOver);
    text.on("mouseout", handleMouseOver);
}


// ============================================================================
// ============================== Connectors ==================================
// ============================================================================

function createInConnector(x, y) {

    let connector = new createjs.Shape();
    connector.graphics.setStrokeStyle(2).beginStroke("#000").beginFill("#FFFFFF").drawCircle(0, 0, CONNECTOR_RADIUS);
    connector.x = x;
    connector.y = y;
    connector.cursor = "pointer";
    connector.name = "inConnector";
    connector.arrow = null;

    connector.on("mouseover", handleConnectorOver);
    connector.on("mouseout", handleConnectorOver);
    connector.on("mousedown", e => {
        updateErrorField("Make sure that you are dragging from a black circle to a white circle.", "16px Arial", "gray");
    });

    return connector;
}


function createOutConnector(x, y) {
    let connector = new createjs.Shape();
    connector.graphics.beginFill("#000").drawCircle(0, 0, CONNECTOR_RADIUS);
    connector.x = x;
    connector.y = y;
    connector.cursor = "pointer";
    connector.name = "outConnector";
    connector.arrow = null;
    connector.on("mousedown", function (e) {
        // Create a new arrow on stage press
        currentArrow = createArrow(stage.mouseX / scalingRatio, stage.mouseY / scalingRatio, stage.mouseX / scalingRatio, stage.mouseY / scalingRatio, "Add label");
        stage.addChild(currentArrow);
        // Update the current arrow on move
        let moveListener = stage.on("stagemousemove", function (e) {
            drawArrow(currentArrow, currentArrow.x, currentArrow.y, stage.mouseX / scalingRatio, stage.mouseY / scalingRatio, "Add label");
            stage.update();
        });
        // Stop the drag
        let upListener = stage.on("stagemouseup", function () {
            stage.off("stagemousemove", moveListener);
            stage.off("stagemouseup", upListener);
            if (connectorOver === null || connectorOver.name != "inConnector" || connectorOver.parent === connector.parent) {
                removeArrowAndLabel(currentArrow);
                console.log("failed:");
                console.log(connectorOver);
            } else {
                // attach the new arrow
                let line = currentArrow.line;
                line.on("click", handleArrowClick);
                line.on("mouseover", handleMouseOver);
                line.on("mouseout", handleMouseOver);
                line.cursor = "pointer";
                removeArrowAndLabel(connector.arrow);
                removeArrowAndLabel(connectorOver.arrow);
                currentArrow.connector = connector;
                currentArrow.connectorOver = connectorOver;
                connector.arrow = currentArrow;
                connectorOver.arrow = currentArrow;
                steps.push({
                    action: "ARROW_CREATE",
                    object: nodes[connector.parent.idx] + "::" + nodes[connectorOver.parent.idx],
                    index: connector.parent.idx + "::" + connectorOver.parent.idx,
                    info: "N/A",
                    timestamp: (new Date()).toLocaleString()
                });
            }
            currentArrow = null;
        });
    });
    connector.on("mouseover", handleConnectorOver);
    connector.on("mouseout", handleConnectorOver);
    return connector;
}


// ============================================================================
// ============================== Bubbles =====================================
// ============================================================================


function createBubble(x, y, text, color, direction) {
    let background = new createjs.Shape();
    background.graphics.setStrokeStyle(1).beginStroke("#000").beginFill(color).drawRoundRect(0, 0, BUBBLE_WIDTH, BUBBLE_HEIGHT, BUBBLE_RADIUS);

    let label = new createjs.Text(text, "16px Arial", "#FFFFFF");
    label.lineWidth = BUBBLE_WIDTH - 10;
    label.textAlign = "center";
    label.textBaseline = "top";
    label.x = BUBBLE_WIDTH / 2;
    label.y = BUBBLE_HEIGHT / 2 - label.getMeasuredHeight() / 2;

    let dirButton = createDirButton(BUBBLE_WIDTH / 2, BUBBLE_HEIGHT * .78, direction, "#FFFFFF", false);

    let leftConnector = createInConnector(0, BUBBLE_HEIGHT / 2);
    let rightConnector = createOutConnector(BUBBLE_WIDTH, BUBBLE_HEIGHT / 2);
    //let downConnector = createInConnector(BUBBLE_WIDTH/2, BUBBLE_HEIGHT);
    //let upConnector = createOutConnector(BUBBLE_WIDTH/2, 0);

    let bubble = new createjs.Container();
    bubble.x = x;
    bubble.y = y;
    bubble.name = "bubble";
    bubble.text = text;
    // this sets the registration point
    bubble.regX = BUBBLE_WIDTH / 2;
    bubble.regY = BUBBLE_HEIGHT / 2;
    bubble.inConnector = leftConnector;
    bubble.outConnector = rightConnector;
    bubble.addChild(background, label, dirButton, leftConnector, rightConnector);
    // so bubble can be dragged
    bubble.on("pressmove", function (event) {
        let mouseX = event.stageX / scalingRatio;
        let mouseY = event.stageY / scalingRatio;
        // if mouse is touching the very edge of the side, don't drag the bubble
        if (Math.abs(mouseX - event.currentTarget.x) > BUBBLE_WIDTH / 2 - CONNECTOR_RADIUS)
            return;
        if (Math.abs(mouseY - event.currentTarget.y) > BUBBLE_HEIGHT / 2 - CONNECTOR_RADIUS)
            return;
        // if there is an arrow being dragged around
        if (currentArrow != null)
            return;
        // check if something highlighted
        if (somethingHighlighted)
            return;
        // currentTarget will be the container that the event listener was added to:
        event.currentTarget.x = mouseX;
        event.currentTarget.y = mouseY;
        // change the arrows
        let leftArrow = leftConnector.arrow;
        let rightArrow = rightConnector.arrow;
        if (leftArrow != null) {
            drawArrow(leftArrow, leftArrow.x, leftArrow.y, mouseX - BUBBLE_WIDTH / 2, mouseY, leftArrow.label.text)
        }
        if (rightArrow != null) {
            drawArrow(rightArrow, mouseX + BUBBLE_WIDTH / 2, mouseY, rightArrow.endX, rightArrow.endY, rightArrow.label.text);
        }

        // make sure to redraw the stage to show the change:
        stage.update();
    });

    return bubble;
}

function createFixedBubble(x, y, text, color, direction, isDV) {
    let background = new createjs.Shape();
    background.graphics.setStrokeStyle(1).beginStroke("#000").beginFill(color).drawRoundRect(0, 0, BUBBLE_WIDTH, BUBBLE_HEIGHT, BUBBLE_RADIUS);

    let label = new createjs.Text(text, "16px Arial", "#FFFFFF");
    label.lineWidth = BUBBLE_WIDTH - 10;
    label.textAlign = "center";
    label.textBaseline = "top";
    label.x = BUBBLE_WIDTH / 2;
    label.y = BUBBLE_HEIGHT / 2 - label.getMeasuredHeight() / 2;

    let topConnector;
    let dirButton;
    let bubble = new createjs.Container();
    if (isDV) {
        topConnector = createInConnector(BUBBLE_WIDTH / 2, 0);
        dirButton = createDirButton(BUBBLE_WIDTH / 2, BUBBLE_HEIGHT * .8, direction, "#FFFFFF", false);
        bubble.inConnector = topConnector;
        bubble.outConnector = null;
        bubble.idx = -1;
    } else {
        topConnector = createOutConnector(BUBBLE_WIDTH / 2, 0);
        dirButton = createDirButton(BUBBLE_WIDTH / 2, BUBBLE_HEIGHT * .8, direction, "#FFFFFF", true);
        bubble.inConnector = null;
        bubble.outConnector = topConnector;
        bubble.idx = -2;
    }

    bubble.x = x;
    bubble.y = y;
    bubble.name = "bubble";
    bubble.text = text;
    // this sets the registration point
    bubble.regX = BUBBLE_WIDTH / 2;
    bubble.regY = BUBBLE_HEIGHT / 2;
    bubble.addChild(background, label, dirButton, topConnector);

    return bubble;
}

// for creating the arrow button (the direction button on bottom of bubble)
function createDirButton(x, y, direction, color, isFixed) {
    let dirButton = new createjs.Container();
    drawDirButton(dirButton, x, y, direction, color);
    dirButton.x = x;
    dirButton.y = y;
    dirButton.name = "dirButton";
    dirButton.mouseChildren = false;
    dirButton.direction = direction;
    if (!isFixed) {
        dirButton.cursor = "pointer";
        dirButton.on("mouseover", handleMouseOver);
        dirButton.on("mouseout", handleMouseOver);
        dirButton.on("click", handleDirectionClick);
    }
    return dirButton;
}

// for updating the arrow button
function drawDirButton(dirButton, x, y, direction, color) {
    dirButton.removeAllChildren();
    dirButton.direction = direction;
    let rectWidth = 3;
    let rectHeight = 10;
    let triSize = 5;

    if (direction === "increase") {
        let rect = new createjs.Shape();
        rect.graphics.beginFill(color).drawRect(0, 0, rectWidth, rectHeight);
        rect.x = -1 * rectWidth / 2;
        rect.y = triSize / 2;
        let tri = new createjs.Shape();
        tri.graphics.beginFill(color);
        tri.graphics.drawPolyStar(0, 0, triSize, 3);
        tri.rotation = 270;
        dirButton.addChild(rect, tri);
    } else if (direction === "decrease") {
        let rect = new createjs.Shape();
        rect.graphics.beginFill(color).drawRect(0, 0, rectWidth, rectHeight);
        rect.x = -1 * rectWidth / 2;
        rect.y = -1 * triSize / 2;
        let tri = new createjs.Shape();
        tri.graphics.beginFill(color);
        tri.graphics.drawPolyStar(0, 0, triSize, 3);
        tri.y = rectHeight;
        tri.rotation = 90;
        dirButton.addChild(rect, tri);
    } else if (direction === "none") {
        let text = new createjs.Text("--", "16px Arial", color);
        generateHitAreaCenterAlignment(text);
        text.textAlign = "center";
        dirButton.addChild(text);
    } else {
        console.error("direction may only be increase, decrease, or none");
    }
}

// unused
function createEvenlySpacedBubbles(startX, endX, y, nodes) {
    let increment = (endX - startX) / (nodes.length - 1);
    for (let i = 0; i < nodes.length; i++) {
        let bubble = createBubble(startX + i * increment, y, nodes[i], "#4286f4", "none")
        stage.addChild(bubble);
    }
    stage.update();
}

function createEvenlySpacedBubbles2(startX, endX, y, nodes, directions) {
    let increment = (endX - startX) / (nodes.length - 1);
    let bubbles = [];
    for (let i = 0; i < nodes.length; i++) {
        let bubble = createBubble(startX + i * increment, y, nodes[i], "#4286f4", directions[i])
        stage.addChild(bubble);
        bubbles.push(bubble);
    }
    stage.update();
    return bubbles;
}


// =============================================================================
// ================================= Buttons ===================================
// =============================================================================

function createButton(x, y, text, color) {
    let background = new createjs.Shape();
    background.graphics.beginFill(color).drawRoundRect(0, 0, BUTTON_WIDTH, BUTTON_HEIGHT, BUTTON_RADIUS);

    let label = new createjs.Text(text, "bold 16px Arial", "#FFFFFF");
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = BUTTON_WIDTH / 2;
    label.y = BUTTON_HEIGHT / 2;

    let button = new createjs.Container();
    button.x = x - BUTTON_WIDTH / 2;
    button.y = y - BUTTON_HEIGHT / 2;
    button.addChild(background, label);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

function createExtraLargeButton(x, y, text, color, width, height, fontStyle) {
    let background = new createjs.Shape();
    let buttonWidth = width;
    let buttonHeight = height;
    background.graphics.beginFill(color).drawRoundRect(0, 0, buttonWidth, buttonHeight, BUTTON_RADIUS);
    if ("" !== fontStyle) {
        fontStyle += " ";
    }
    let label = new createjs.Text(text, fontStyle + "32px Arial", "#FFFFFF");
    label.textAlign = "center";
    label.textBaseline = "bottom";
    label.x = buttonWidth / 2;
    label.y = buttonHeight / 2 - 25;

    let button = new createjs.Container();
    button.x = x - buttonWidth / 2;
    button.y = y - buttonHeight / 2;
    button.addChild(background, label);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

function createLargeButton(x, y, text, color) {
    let background = new createjs.Shape();
    let largeButtonWidth = 300;
    let largeButtonHeight = 100;
    background.graphics.beginFill(color).drawRoundRect(0, 0, largeButtonWidth, largeButtonHeight, BUTTON_RADIUS);

    let label = new createjs.Text(text, "bold 32px Arial", "#FFFFFF");
    label.textAlign = "center";
    label.textBaseline = "middle";
    label.x = largeButtonWidth / 2;
    label.y = largeButtonHeight / 2;

    let button = new createjs.Container();
    button.x = x - largeButtonWidth / 2;
    button.y = y - largeButtonHeight / 2;
    button.addChild(background, label);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

function createPlusButton(x, y, buttonSize) {
    //let buttonSize = 25;
    let background = new createjs.Shape();
    background.graphics.beginFill("#4286f4").drawRect(0, 0, buttonSize, buttonSize);

    // create plus
    let line1 = new createjs.Shape();
    line1.graphics.setStrokeStyle(2).beginStroke("#FFFFFF").moveTo(buttonSize / 2, buttonSize / 4).lineTo(buttonSize / 2, buttonSize * .75);
    let line2 = new createjs.Shape();
    line2.graphics.setStrokeStyle(2).beginStroke("#FFFFFF").moveTo(buttonSize / 4, buttonSize / 2).lineTo(buttonSize * .75, buttonSize / 2);

    let button = new createjs.Container();
    button.x = x;
    button.y = y;
    button.addChild(background, line1, line2);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

function createXButton(x, y, buttonSize) {
    let background = new createjs.Shape();
    background.graphics.beginFill("#4286f4").drawRect(0, 0, buttonSize, buttonSize);

    // create x
    let margin = (buttonSize - .5 * buttonSize / 1.414) / 2 - (buttonSize / 50)
    let line1 = new createjs.Shape();
    line1.graphics.setStrokeStyle(2).beginStroke("#FFFFFF").moveTo(margin, margin).lineTo(buttonSize - margin, buttonSize - margin);
    let line2 = new createjs.Shape();
    line2.graphics.setStrokeStyle(2).beginStroke("#FFFFFF").moveTo(margin, buttonSize - margin).lineTo(buttonSize - margin, margin);

    let button = new createjs.Container();
    button.x = x;
    button.y = y;
    button.addChild(background, line1, line2);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}


// ============================================================================
// ========================== Panels ==========================================
// ============================================================================

function createOption(x, y, text, width) {
    let optionBox = new createjs.Shape();
    optionBox.graphics.beginStroke("#000").beginFill(OPTION_COLOR).drawRect(0, 0, width, OPTION_HEIGHT);

    let optionLabel = new createjs.Text(text, "16px Arial", "#000");
    optionLabel.x = width / 2 - optionLabel.getMeasuredWidth() / 2;
    optionLabel.y = OPTION_HEIGHT / 2 - optionLabel.getMeasuredHeight() / 2;

    let option = new createjs.Container();
    option.x = x;
    option.y = y;
    option.addChild(optionBox, optionLabel);
    option.mouseChildren = false;
    option.cursor = "pointer";

    option.on("mouseover", handlePanelOver);
    option.on("mouseout", handlePanelOver);

    return option;
}

function createDirectionPanel(x, y, target) {
    let panel = new createjs.Container();
    panel.x = x;
    panel.y = y;

    let option1 = createOption(0, 0, "Increases", OPTION_MIN_WIDTH);
    let option2 = createOption(0, OPTION_HEIGHT, "Decreases", OPTION_MIN_WIDTH);
    option1.on("click", e => {
        drawDirButton(target, x, y, "increase", "#FFFFFF");
        steps.push({
            action: "NODE_CHANGE_DIRECTION",
            object: nodes[target.parent.idx],
            index: target.parent.idx,
            info: "increase",
            timestamp: (new Date()).toLocaleString()
        })
    });
    option2.on("click", e => {
        drawDirButton(target, x, y, "decrease", "#FFFFFF")
        steps.push({
            action: "NODE_CHANGE_DIRECTION",
            object: nodes[target.parent.idx],
            index: target.parent.idx,
            info: "decrease",
            timestamp: (new Date()).toLocaleString()
        })
    });

    panel.addChild(option1, option2);

    return panel;
}

function changeExplanation(target, text) {
    let arrow = target.arrow;
    drawArrow(arrow, arrow.x, arrow.y, arrow.endX, arrow.endY, text);
    steps.push({
        action: "ARROW_CHANGE_LABEL",
        object: nodes[arrow.connector.parent.idx] + "::" + nodes[arrow.connectorOver.parent.idx],
        index: arrow.connector.parent.idx + "::" + arrow.connectorOver.parent.idx,
        info: text.replace("\n", " "),
        timestamp: (new Date()).toLocaleString()
    });
    return;
}

function createExplanationPanel(x, y, target) {
    let panel = new createjs.Container();
    panel.x = x;
    panel.y = y;
    let option1 = createOption(0, 0, "Definition", OPTION_MIN_WIDTH);
    let option2 = createOption(0, OPTION_HEIGHT, "Cause", OPTION_MIN_WIDTH);
    let option3 = createOption(0, 2 * OPTION_HEIGHT, "Correlation", OPTION_MIN_WIDTH);
    option1.on("click", e => changeExplanation(target, "Definition"));
    option2.on("click", e => handleCauseClick(x, y, target));
    option3.on("click", e => changeExplanation(target, "Correlation"));
    panel.addChild(option1, option2, option3);
    return panel;
}

function createDeletePanel(x, y, target) {
    let panel = new createjs.Container();
    panel.x = x;
    panel.y = y;
    let option1 = createOption(0, 0, "Delete", OPTION_MIN_WIDTH);
    option1.on("click", e => {
        target.connector.arrow = null;
        target.connectorOver.arrow = null;
        removeArrowAndLabel(target);
        steps.push({
            action: "ARROW_DELETE",
            object: nodes[target.connector.parent.idx] + "::" + nodes[target.connectorOver.parent.idx],
            index: target.connector.parent.idx + "::" + target.connectorOver.parent.idx,
            info: "N/A",
            timestamp: (new Date()).toLocaleString()
        })
    });
    panel.addChild(option1);
    return panel;
}

function createCausePanel(x, y, target) {
    let panel = new createjs.Container();
    panel.x = x;
    panel.y = y;
    // find max length of cause text
    let optionWidth = OPTION_MIN_WIDTH;
    for (let i = 0; i < causes.length; i++) {
        let text = new createjs.Text(causes[i], "16px Arial", "#000");
        let textWidth = text.getMeasuredWidth() + 10;
        if (textWidth > optionWidth) {
            optionWidth = textWidth;
        }
    }
    for (let i = 0; i < causes.length; i++) {
        let option = createOption(0, OPTION_HEIGHT * i, causes[i], optionWidth);
        option.on("click", e => changeExplanation(target, "Cause:\n" + causes[i]));
        panel.addChild(option);
    }
    return panel;
}


// =============================================================================
// =========================== Arrows and Labels ===============================
// ============================================================================= 

// only used for the unlabeled arrow between iv and dv
function createUnlabeledArrow(startX, startY, endX, endY) {
    let arrow = new createjs.Shape();
    arrow.x = startX;
    arrow.y = startY;
    let w = endX - startX;
    let h = endY - startY;
    let lineLength = Math.sqrt(w * w + h * h);
    // draw straight line
    arrow.graphics.setStrokeStyle(3).beginStroke("#000").moveTo(0, 0).lineTo(lineLength, 0);
    // draw triangle
    let triangleSize = 5;
    arrow.graphics.beginFill("#000").drawPolyStar(lineLength - triangleSize, 0, triangleSize, 3);
    // rotate
    arrow.rotation = Math.atan2(h, w) * 180 / Math.PI;
    return arrow;
}

// this is to create a new arrow
// first create the arrow, then update it using drawArrow
function createArrow(startX, startY, endX, endY, arrowLabel) {
    let arrow = new createjs.Container();
    arrow.name = "arrow";
    arrow.x = startX;
    arrow.y = startY;
    // just storing some end point information
    arrow.endX = endX;
    arrow.endY = endY;
    // Determine the length between the start and end point using pythagoras
    let w = endX - startX;
    let h = endY - startY;
    let length = Math.sqrt(w * w + h * h);
    // draw arrow in straight line
    let line = new createjs.Shape();
    line.graphics.clear().setStrokeStyle(3).beginStroke("#000").moveTo(0, 0).lineTo(length, 0);
    // Draw the arrow head at the end.
    if (arrowLabel.substring(0, 5) === "Cause") {
        let arrowSize = 5;
        line.graphics.beginFill("#000");
        line.graphics.drawPolyStar(length - arrowSize, 0, arrowSize, 3);
    }
    // Rotate the arrow
    line.rotation = Math.atan2(h, w) * 180 / Math.PI;
    arrow.line = line;
    arrow.addChild(line);
    // Create arrow label
    let label = new createjs.Text(arrowLabel, "12px Arial", "#000");
    label.arrow = arrow;
    label.textAlign = "center";
    arrow.label = label;
    // Create arrow label box
    let labelPadding = 5;
    let bounds = arrow.label.getBounds();
    let labelBox = new createjs.Container();
    labelBox.on("click", handleExplanationClick);
    labelBox.on("mouseover", handleMouseOver);
    labelBox.on("mouseout", handleMouseOver);
    labelBox.cursor = "pointer";
    let midX = (endX - startX) / 2;
    let midY = (endY - startY) / 2;
    labelBox.x = midX;
    labelBox.y = midY;
    let labelBg = new createjs.Shape();
    labelBg.graphics.beginStroke("#000").beginFill("#FFFFE0").drawRect(0, 0, bounds.width + 2 * labelPadding, bounds.height + 2 * labelPadding);
    labelBg.x = -1 * bounds.width / 2 - labelPadding;
    labelBg.y = -labelPadding;
    labelBox.mouseChildren = false;
    labelBox.name = "labelBox";
    labelBox.addChild(labelBg, label);
    arrow.addChild(labelBox);
    return arrow;
}


// for redrawing arrows that already exist on stage
function drawArrow(arrow, startX, startY, endX, endY, arrowLabel) {
    arrow.x = startX;
    arrow.y = startY;
    // just storing some end point information
    arrow.endX = endX;
    arrow.endY = endY;
    // Determine the length between the start and end point using pythagoras
    let w = endX - startX;
    let h = endY - startY;
    let length = Math.sqrt(w * w + h * h);
    // draw arrow in straight line
    let line = arrow.line;
    line.graphics.clear().setStrokeStyle(3).beginStroke("#000").moveTo(0, 0).lineTo(length, 0);
    // Draw the arrow head at the end.
    if (arrowLabel.substring(0, 5) === "Cause") {
        let arrowSize = 5;
        line.graphics.beginFill("#000");
        line.graphics.drawPolyStar(length - arrowSize, 0, arrowSize, 3);
    }
    // Rotate the arrow
    line.rotation = Math.atan2(h, w) * 180 / Math.PI;
    // Create arrow label
    let labelBox = arrow.getChildByName("labelBox");
    let midX = (endX - startX) / 2;
    let midY = (endY - startY) / 2;
    labelBox.x = midX;
    let labelBoxOffset = 5;
    labelBox.y = midY - labelBoxOffset;
    // change the arrow label box if the arrow label has been updated
    if (arrow.label.text != arrowLabel) {
        labelBox.removeAllChildren();
        let label = new createjs.Text(arrowLabel, "12px Arial", "#000");
        label.arrow = arrow;
        label.textAlign = "center";
        label.lineWidth = 100;
        arrow.label = label;
        let labelPadding = 5;
        let bounds = arrow.label.getBounds();
        let labelBg = new createjs.Shape();
        labelBg.graphics.beginStroke("#000").beginFill("#FFFFE0").drawRect(0, 0, bounds.width + 2 * labelPadding, bounds.height + 2 * labelPadding);
        labelBg.x = -1 * bounds.width / 2 - labelPadding;
        labelBg.y = -labelPadding;
        labelBox.mouseChildren = false;
        labelBox.addChild(labelBg, label);
    }
    arrow.addChild(labelBox);
}

// remove an arrow with its label
function removeArrowAndLabel(arrow) {
    if (arrow != null && arrow != undefined) {
        stage.removeChild(arrow);
        //stage.removeChild(arrow.label);
    }
}


window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    localStorage.clear();
    delete e['returnValue'];    
});