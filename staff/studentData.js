/*global db */
let studIdRE = new RegExp(/^[A-Z]{4}_[A-Z]{3}_\d+$/);

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
    if (tmpRQ) {
        let tmp = JSON.parse(tmpRQ);
        let keyStr = tmp.moduleState.selectedVariable.ontologyKey;
        keyStr = keyStr.replace('|name', '');
        let [_S, Akey, Tkey, Vkey] = keyStr.split('_');
        Vkey = Vkey.replace('V', 'RQ');
        // console.log(`A: ${Akey} T: ${Tkey} V: ${Vkey}`);
        let ont = ontology["_ONTOLOGY"]["S"];
        let areaOfScience = ont[Akey].nochoicearea;
        let topic = titleCase(
            ont[Akey][Tkey].wewillselect.replace("we will select the topic ", "")
        );
        let researchQuestion = ont[Akey][Tkey][Vkey].rqselected +
            " " +  ont[Akey][Tkey].rqselectedall;
        data.rqted = tmp;
        data.areaOfScience = areaOfScience;
        data.topic = topic;
        data.researchQuestion = researchQuestion;
    } else {
        // FIXME. we want to set these default values for excel sheet, but
        // not when simply viewing user data, say for monitoring users
        data.rqted = {};
        data.areaOfScience = defaultRQ.areaOfScience;
        data.topic = defaultRQ.topic;
        data.researchQuestion = defaultRQ.researchQuestion;
    }
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

function dispHypoTable(ele, hypoData) {
    let nodesRow = document.createElement("tr");
    let nodesRowHdr = document.createElement("th");
    nodesRowHdr.innerHTML = "Node";
    nodesRow.appendChild(nodesRowHdr);
    hypoData.nodes.forEach((label, idx) => {
        let el = document.createElement("td");
        el.innerHTML = label; //+ "::" + hypoData.directions[idx];
        nodesRow.appendChild(el);
    });

    let dirsRow = document.createElement("tr");
    let dirsRowHdr = document.createElement("th");
    dirsRowHdr.innerHTML = "Direction"
    dirsRow.appendChild(dirsRowHdr);
    hypoData.directions.forEach((dir) => {
        let el = document.createElement("td");
        el.innerHTML = dir;
        dirsRow.appendChild(el);
    });
    let arrowsRow = document.createElement("tr");
    let arrowsRowHdr = document.createElement("th");
    arrowsRowHdr.innerHTML = "Arrow"
    arrowsRow.appendChild(arrowsRowHdr);
    hypoData.arrowLabels.forEach((lbl) => {
        let el = document.createElement("td");
        el.innerHTML = lbl;
        arrowsRow.appendChild(el);
    });
    ele.appendChild(nodesRow);
    ele.appendChild(dirsRow);
    ele.appendChild(arrowsRow);
}

function dispHypoTable2(ele, hypoData) {
    //nodes, directions, and arrowLabel arrays are the same length
    hypoData.nodes.forEach((node, idx) => {
        let arrow = hypoData.arrowLabels[idx];
        let direction = hypoData.directions[idx];
        let arrowRow = document.createElement("tr");
        arrowRow.innerHTML = `
            <td>Arrow</td><td>${arrow}</td>
        `;
        ele.appendChild(arrowRow);
        let nodeRow = document.createElement("tr");
        if (idx === hypoData.nodes.length - 1) {
            direction = `<b>Prediction: ${direction}</b>`;
        }
        nodeRow.innerHTML = `
            <td>Node</td><td>${node} :: ${direction} </td>
        `;
        ele.appendChild(nodeRow);
    });
}

function dispHypoTable3(ele, hypoData) {
    let str = "";
    //nodes, directions, and arrowLabel arrays are the same length
    hypoData.nodes.forEach((node, idx) => {
        let txt = ` &nbsp; -> ${hypoData.arrowLabels[idx]} -> &nbsp;`;
        let direction = hypoData.directions[idx];
        txt += `${node} :: ${direction}`
        str += txt;
    });
    ele.innerHTML = str;
    
}
function displayStudentData(student, eles) {
    eles.generalData.innerHTML = `
    <tr>
        <td>${student.studentID}</td>
        <td>${student.preTestScore}</td>
        <td>${student.condition}</td>
        <td>${student.status}</td>
    <tr>`;

    eles.rqData.innerHTML = `
    <tr>
        <td>${student.areaOfScience}</td>
        <td>${student.topic}</td>
        <td>${student.researchQuestion}</td>
    </tr>`;

    eles.brmData.innerHTML = '';

    for (let step of student.brm) {
        let tr = document.createElement("tr");
        let type = step.type.toLowerCase();
        let title;
        let selected = (step.selected !== undefined) ? step.selected : "";
        let isCorrect = (step.isCorrect !== undefined) ? step.isCorrect : "";
        if ("LINK" === step.type) {
            title = step.link;
        } else {
            title = step.title
        }
        tr.innerHTML = `
        <td>${type}</td>
        <td>${title}</td>
        <td>${selected}</td>
        <td>${isCorrect}</td>
        `;
        eles.brmData.appendChild(tr);
    }

    eles.predictionData.innerHTML = `
    <tr>
        <td>${student.firstPrediction}</td>
        <td>${student.secondPrediction}</td>
    </tr>`;

    if (student.initialHypo) {
        eles.initialHypo.classList.remove("hidden");
        dispHypoTable(eles.initialHypoData, student.initialHypo);
    }

    if (student.oppositeHypo) {
        eles.oppositeHypo.classList.remove("hidden");
        dispHypoTable2(eles.oppositeHypoData, student.oppositeHypo);
    }

    if (student.finalHypo) {
        eles.finalHypo.classList.remove("hidden");
        dispHypoTable3(eles.finalHypoData, student.finalHypo);
    }

}

function displayStudents(allStudents) {
    tableBody.innerHTML = "";
    allStudents.forEach((stud) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>
            <a href="viewStudentData.html?classCode=${stud.classCode}&studentID=${stud.studentID}">
                ${stud.studentID}
            </a>
        </td>
        <td>${stud.preTestScore}</td>
        <td>${stud.condition}</td>
        <td>${stud.status}</td>
        `;
        tableBody.appendChild(tr);
    });
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
    })
}

