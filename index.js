// this is the index.js file, responsible for controlling the account registration system and launching the different modules

let currentPage = "index-page";
let collectionID;
let userID;
let currModulePage = document.getElementById("module-page");
let newModulePage = document.getElementById("module-page").cloneNode(true);

// ==========================================================================================================
// ========================================== Useful functions ==============================================
// ==========================================================================================================

function openPage(page) {
    document.getElementById(currentPage).style.display = "none";
    document.getElementById(page).style.display = "block";
    currentPage = page;
}

// kind of a hacky fix to make the rq and ted modules work with my home button
function cleanModulePage() {
    //if (modulePage == null) modulePage = document.getElementById("module-page");
    let parent = currModulePage.parentNode;
    parent.removeChild(currModulePage);
    parent.insertBefore(newModulePage, document.getElementById("home-page"));
    currModulePage = newModulePage;
    newModulePage = newModulePage.cloneNode(true);
    document.getElementById("home-icon").addEventListener("click", e => {
        document.getElementById("home-overlay").style.display = "block";
    });
    document.getElementById("yes-btn").addEventListener("click", e => {
        cleanModulePage();
        document.getElementById("home-overlay").style.display = "none";
        openPage("home-page");
        initHomePage();
    });
}

function showSnackbar(text) {
    // Get the snackbar DIV
    let snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = text;
    // Add the "show" class to DIV
    snackbar.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

function isValidInput(input) {
    let regex = /^[A-Za-z]+$/
    if (regex.test(input)) {
        return true;
    }
    else {
        showSnackbar("Please do not enter any numbers, spaces, or special characters in your input.");
        return false;
    }
}

// ==========================================================================================================
// ========================================== Page Initiations ==============================================
// ==========================================================================================================

function initHomePage() {
    //let tutors = ["rq", "hypo", "ted"];
    //let tutors = ["rq", "ted"];
    // the list of tutors that will be displayed on the home page
    let tutors = ["rq", "hypo"];
    db.collection(collectionID).doc(userID).get().then((doc) => {
        if (doc.exists) {
            console.log("Document exists");
            return doc.data().currTutorNdx;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    })
    .then((currTutorNdx) => {
        let enabled = document.getElementById(tutors[currTutorNdx] + "-button");
        enabled.classList.remove("disabled");
        enabled.disabled = false;
        if (currTutorNdx != 0) {
            let former = document.getElementById(tutors[currTutorNdx - 1] + "-button");
            former.classList.add("disabled");
            former.disabled = true;
        }
    });

    if (userID != null) {
        document.getElementById("sign-in-text").innerHTML = "Signed in as " + userID;
    }
    localStorage.setItem("isptutor_brmHistory", "[]");
}

let init;
let handleComplete;
var EFRootTutor, EFloginhibit, EFtutorFeatures;
var canvas, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, inited;

function initRQPage() {
    EFRootTutor = 'EFTED_RQSelect';
    EFloginhibit = false;

    // change this to enable rq choice
    EFtutorFeatures = "FTR_WEB:FTR_CHOICE";
    //EFtutorFeatures = "FTR_WEB:FTR_NOCHOICE:FTR_NCCRYSTAL";

    init = () => {
        // NOTE: Some chrome extensions may introduce secondary calls to the onload listener
        //       inited ensure it only fires once.
        //
        //if(!inited) {
        // inited = true;
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp = AdobeAn.getComposition("52BBDDD43BDBD64499D685AAA6743D14");
        var lib = comp.getLibrary();
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
        // }
    }
    handleComplete = (evt, comp) => {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        var preloaderDiv = document.getElementById("_preload_div_");
        preloaderDiv.style.display = 'none';
        dom_overlay_container.style.display = canvas.style.display = 'block';
        exportRoot = new lib.EFTutorLoader();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = window.innerWidth, ih = window.innerHeight;
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }
                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = preloaderDiv.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = preloaderDiv.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }
        makeResponsive(true, 'both', true, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }
}

function initTEDPage() {

    EFRootTutor = 'EFTED_Instr'
    EFtutorFeatures = "FTR_WEB:FTR_CHOICE"
    EFloginhibit = false;

    init = () => {
        // NOTE: Some chrome extensions may introduce secondary calls to the onload listener
        //       inited ensure it only fires once.
        //
        //if (!inited) {
        //  inited = true;
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp = AdobeAn.getComposition("52BBDDD43BDBD64499D685AAA6743D14");
        var lib = comp.getLibrary();
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
        //}
    }
    handleComplete = (evt, comp) => {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        var preloaderDiv = document.getElementById("_preload_div_");
        preloaderDiv.style.display = 'none';
        dom_overlay_container.style.display = canvas.style.display = 'block';
        exportRoot = new lib.EFTutorLoader();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = window.innerWidth, ih = window.innerHeight;
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }
                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = preloaderDiv.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = preloaderDiv.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }
        makeResponsive(true, 'both', true, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }


}

// ==========================================================================================================
// ========================================== Event Listeners ===============================================
// ==========================================================================================================

document.getElementById("signin-button").addEventListener("click", e => {
    openPage("signin-page");
});
document.getElementById("register-button").addEventListener("click", e => {
    openPage("registration-page");
});
document.getElementById("s-back-button").addEventListener("click", e => {
    openPage("index-page");
});
document.getElementById("r-back-button").addEventListener("click", e => {
    openPage("index-page");
});
document.getElementById("signin-submit").addEventListener("click", e => {
    let form = document.getElementById("signin-form");
    if (!form.reportValidity()) return;
    collectionID = document.getElementById("s-classcode").value.toUpperCase();
    let firstname = document.getElementById("s-fname").value;
    let lastname = document.getElementById("s-lname").value;
    let month = document.getElementById("s-bmonth").value;
    let day = document.getElementById("s-bday").value;
    if (lastname.length != 2) {
        showSnackbar("Please enter exactly two characters for your last name.")
        return;
    }
    userID = firstname + lastname;
    if (!isValidInput(userID)) {
        return;
    }
    userID += "_" + month + "_" + day;
    userID = userID.toUpperCase();
    db.collection(collectionID).doc(userID).get().then((doc) => {
        if (doc.exists) {
            console.log("Account found");
            showSnackbar("Signed in as " + userID + ".");
            openPage("home-page");
            initHomePage();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such account!");
            showSnackbar("No such account exists. Check that your name and birthday were typed in correctly.")
        }
    }).catch(function (error) {
        console.log("Error getting account:", error);
        showSnackbar("No such account exists. Check that you typed in the classcode correctly.")
    })
});
document.getElementById("registration-submit").addEventListener("click", e => {
    let form = document.getElementById("registration-form");
    if (!form.reportValidity()) return;
    collectionID = document.getElementById("r-classcode").value.toUpperCase();
    let firstname = document.getElementById("r-fname").value;
    let lastname = document.getElementById("r-lname").value;
    let month = document.getElementById("r-bmonth").value;
    let day = document.getElementById("r-bday").value;
    if (lastname.length != 2) {
        showSnackbar("Please enter exactly two characters for your last name.")
        return;
    }
    userID = firstname + lastname;
    if (!isValidInput(userID)) {
        return;
    }
    userID += "_" + month + "_" + day;
    userID = userID.toUpperCase();
    db.collection(collectionID).doc(userID).get().then((doc) => {
        if (doc.exists) {
            console.log("Account already exists");
            showSnackbar("Account already exists.");
        } else {
            console.log("Creating account");
            db.collection(collectionID).doc(userID).set({
                currTutorNdx: 0
            })
            .then(function () {
                console.log("Document successfully written!");
                showSnackbar("Signed in as " + userID + ".");
                openPage("home-page");
                initHomePage();
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
                showSnackbar("Error creating new account.");
            });
        }
    }).catch(function (error) {
        console.log("Error getting account:", error);
        showSnackbar("Cannot create account. Please make sure that class code is correct.");
    })
});
document.getElementById("rq-button").addEventListener("click", e => {
  openPage("module-page");
  initRQPage();
  init();
});
document.getElementById("hypo-button").addEventListener("click", e => {
    initHypoPage();
    openPage("hypo-page");
});
document.getElementById("ted-button").addEventListener("click", e => {
  openPage("module-page");
  initTEDPage();
  init();
});
document.getElementById("completion-home-btn").addEventListener("click", e => {
    cleanModulePage();
    document.getElementById("completion-overlay").style.display = "none";
    openPage("home-page");
    initHomePage();
});
document.getElementById("home-icon").addEventListener("click", e => {
    document.getElementById("home-overlay").style.display = "block";
});
document.getElementById("yes-btn").addEventListener("click", e => {
    cleanModulePage();
    document.getElementById("home-overlay").style.display = "none";
    openPage("home-page");
    initHomePage();
});
document.getElementById("cancel-btn").addEventListener("click", e => {
    document.getElementById("home-overlay").style.display = "none";
});

// this is how you control the first page that opens
let editMode = false;
if (editMode) {
    initHypoPage();
    openPage("hypo-page");
}
else {
    openPage("index-page");
}
