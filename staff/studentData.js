/*global db */
let studIdRE = new RegExp(/^[A-Z]{4}_[A-Z]{3}_\d+$/);

const ONTOLOGY = ontology._ONTOLOGY;

const CONDITION_HYPOS = {
    cond1: ["initialHypo", "finalHypo"],
    cond2: ['initialHypo', "oppositeHypo", 'finalHypo'],
    cond3: ['finalHypo']
};

function normalizeOntologyKey(key) {
    key = key.replace(/_/g, '.');
    key = key.replace('|', '.');
    return key;
}

function lookupOntologyKey(path) {
    path = normalizeOntologyKey(path);
    var parts = path.split('.'),
        rv,
        index;
    for (rv = ONTOLOGY, index = 0; rv && index < parts.length; ++index) {
        rv = rv[parts[index]];
    }
    return rv;
}

const noCapitalizeWords = ['of', 'at', 'the']
function titleCase(text) {
    text = text.toLowerCase();
    let words = text.split(' ');
    for (let i=0; i<words.length; i++) {
        if (i > 0 && noCapitalizeWords.includes(words[i])) {
            continue;
        }
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

function mungeStudentData(studentID, classCode, data) {
    data.studentID = studentID;
    data.classCode = classCode;
    let tmpRQ = data.rqted;
    let tmpBrm = data.brm;
    switch (data.currTutorNdx) {
        case 0:
            data.status = 'Registration Complete';
            break;
        case 1:
            data.status = data.currHypoTaskIdx >= 0 ? "Hypothesis Module Started" : 'RQ Selected';
            break;
        case 2:
            data.status = 'Completed';
            break;
        default:
            data.status = 'Unknown';
    }
    let defaultRQ = {
        areaOfScience: "Physical and Chemical Changes",
        topic: "Crystal Growth",
        researchQuestion: "Does the initial water temperature" + " " +
            "affect the weight of the crystal growth on a string in water after two weeks?"
    };
    let areaOfScience = defaultRQ.areaOfScience;
    let topic = defaultRQ.topic;
    let researchQuestion = defaultRQ.researchQuestion;
    if (tmpRQ) {
        let tmp = JSON.parse(tmpRQ);
        if (tmp.hasOwnProperty('moduleState')) {
            let ms = tmp.moduleState;
            let aosKey = ms.selectedArea.ontologyKey.replace('|name', '.nochoicearea');
            let topicKey = ms.selectedTopic.ontologyKey.replace('|name', '.wewillselect');
            let rqKey = ms.selectedRQ.ontologyKey + '.rqselected'
            let rqKey2 = ms.selectedTopic.ontologyKey.replace('|name', '.rqselectedall');
            areaOfScience = lookupOntologyKey(aosKey);
            topic = titleCase(
                lookupOntologyKey(topicKey)
                .replace("we will select the topic ", "")
            );
            researchQuestion = lookupOntologyKey(rqKey) + ' ' + lookupOntologyKey(rqKey2);
        }
        data.rqted = tmp; // replace the jsonified rqted data with object
    } else {
        // FIXME. we want to set these default values for excel sheet, but
        // not when simply viewing user data, say for monitoring users
        data.rqted = {};
    }
    data.areaOfScience = areaOfScience;
    data.topic = topic;
    data.researchQuestion = researchQuestion;

    if (tmpBrm) {
        data.brm = JSON.parse(tmpBrm);
    } else {
        data.brm = [];
    }
    for (let hypo of ["initialHypo", "oppositeHypo", "finalHypo"]) {
        let tmp = data[hypo];
        let hypoData = null;
        if (tmp) {
            hypoData = JSON.parse(tmp);
        }
        data[hypo] = hypoData;
    }
    return data;
}


function fetchStudentData(classCode, studentID) {
    return db.collection(classCode).doc(studentID).get()
    .then((doc) => {
        return mungeStudentData(studentID, classCode, doc.data());
    });
}

function fetchClassData(classCode) {
    return db.collection(classCode).get()
    .then((snapshot) => {
        let studentData = [];
        snapshot.forEach((doc) => {
            let studID = doc.id;
            if (studIdRE.exec(studID)) {
                studentData.push(mungeStudentData(studID, classCode, doc.data()));
            }
        });
        // console.log(studentData);
        return studentData;
    });
}

function createStudentsWorkSheet(wb, allStudents) {
    wb.SheetNames.push("Students")
    let studentsSheetData = [];
    let studentSheetHeader = [
        'StudentID',
        'Pre-Test Score',
        'Condition',
        'First Prediction',
        'Second Prediction',
        'Area Of Science',
        'Topic',
        'Research Question'
    ];
    studentsSheetData.push(studentSheetHeader);
    allStudents.forEach((stud) => {
        studentsSheetData.push([
            stud.studentID,
            stud.preTestScore,
            stud.condition,
            stud.firstPrediction,
            stud.secondPrediction,
            stud.areaOfScience,
            stud.topic,
            stud.researchQuestion
        ]);
    });
    // console.log(studentsSheetData);
    let ws = XLSX.utils.aoa_to_sheet(studentsSheetData);
    wb.Sheets['Students'] = ws;
}

function createHypothesisWorkSheet(wb, sheetName, whichHypo, allStudents) {
    const MAX_NUM_HYPO_NODES = 7;
    wb.SheetNames.push(sheetName);
    let hypoSheetData = [];
    let hypoHeader = ['StudentID', 'prediction', 'predictionValue'];
    let flds = ['nodes', 'arrowLabel', 'direction'];
    flds.forEach((fld) => {
        for (let i = 0; i < MAX_NUM_HYPO_NODES; i++) {
            hypoHeader.push(`${fld}_${i+1}`);
        }
    });
    hypoSheetData.push(hypoHeader);
    allStudents.forEach((stud) => {
        let nodes = new Array(7).fill("N/A", 0, 7);
        let arrowLabels = new Array(7).fill("N/A", 0, 7);
        let directions = new Array(7).fill("N/A", 0, 7);
        let prediction = "N/A";
        let predictionValue = "N/A";
        if (stud.condition && CONDITION_HYPOS[stud.condition].includes(whichHypo)) {
            if (stud[whichHypo]) {
                let data = stud[whichHypo];
                prediction = data.currentPrediction;
                predictionValue = data.currentPredictionValue;
                data.nodes.forEach((node, i) => {
                    nodes[i] = node;
                });
                data.arrowLabels.forEach((arrow, i) => {
                    arrowLabels[i] = arrow;
                });
                data.directions.forEach((dir, i) => {
                    directions[i] = dir;
                });
            }
            let studentRow = [
                stud.studentID, prediction, predictionValue, ...nodes, ...arrowLabels, ...directions
            ];
            hypoSheetData.push(studentRow);
        }
    });
    let ws = XLSX.utils.aoa_to_sheet(hypoSheetData);
    wb.Sheets[sheetName] = ws;
}

function createHypothesisStepsWorkSheet(wb, sheetName, whichHypo, allStudents) {
    wb.SheetNames.push(sheetName);
    let sheetData = [];
    let hypoStepsHeader = [
        'StudentID',
        'Action',
        'Object',
        'Index',
        'Info',
        'Timestamp'
    ];
    sheetData.push(hypoStepsHeader);
    allStudents.forEach((stud) => {
        if (stud.condition && CONDITION_HYPOS[stud.condition].includes(whichHypo)) {
            let data = stud[whichHypo];
            if (data) {
                data.steps.forEach((step) => {
                    sheetData.push([
                        stud.studentID,
                        step.action,
                        step.object,
                        step.index,
                        step.info,
                        step.timestamp
                    ]);
                });
                // add a blank line between students
                sheetData.push(new Array(6).fill("", 0, 6));
            }
        }
    });

    let ws = XLSX.utils.aoa_to_sheet(sheetData);
    wb.Sheets[sheetName] = ws;
}

function createBRMWorkSheet(wb, allStudents) {
    wb.SheetNames.push("BRM");
    let brmSheetData = [];
    brmHeader = ['StudentID', 'Type', 'Title', 'Selected', 'isCorrect'];
    brmSheetData.push(brmHeader);
    allStudents.forEach((stud) => {
        if (stud.brm.length > 0) {
            stud.brm.forEach((rec) => {
                let recType = rec.type;
                let rowData = new Array(5).fill("", 0, 5);
                rowData[0] = stud.studentID;
                rowData[1] = recType;
                if ("LINK" === recType) {
                    rowData[2] = rec.link;
                } else if ("QUIZ" === recType) {
                    rowData[2] = rec.title.replace(/\s+/g, " ").trimEnd();
                    rowData[3] = rec.selected;
                    rowData[4] = `${rec.isCorrect}`;
                }
                brmSheetData.push(rowData);
            });
            // put a blank row between students
            brmSheetData.push(["", "", "", "", ""]);
        }
    });
    let ws = XLSX.utils.aoa_to_sheet(brmSheetData);
    wb.Sheets["BRM"] = ws;
}

function createExcelFile(allStudents) {
    let wb = XLSX.utils.book_new();
    createStudentsWorkSheet(wb, allStudents);
    createBRMWorkSheet(wb, allStudents);
    createHypothesisWorkSheet(wb, "Initial Hypothesis", "initialHypo", allStudents);
    createHypothesisStepsWorkSheet(wb, "Initial Hypothesis Steps", "initialHypo", allStudents);
    createHypothesisWorkSheet(wb, "Opposite Hypothesis", "oppositeHypo", allStudents);
    createHypothesisStepsWorkSheet(wb, "Opposite Hypothesis Steps", "oppositeHypo", allStudents);
    createHypothesisWorkSheet(wb, "Final Hypothesis", "finalHypo", allStudents);
    createHypothesisStepsWorkSheet(wb, "Final Hypothesis Steps", "finalHypo", allStudents);
    let wb_out = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
    return new Blob([s2ab(wb_out)],
                    {type: 'application/octet-stream'});
}

// converts binary data to octet-stream
function s2ab(s) {
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf); //create uint8array as viewer
    for (var i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    }
    return buf;
}