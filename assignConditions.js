
/* global db */
let students;
const conditions = ["cond1", "cond2", "cond3"];
let choices = conditions;
choices.unshift("");
const condChoices = choices;

let collectionID;

function getEleById(eleID) {
  return document.getElementById(eleID);
}

const tbody = document.getElementsByTagName('tbody')[0];
const errorRegion = getEleById('error_region');

const buttons = {
  fetchStudents:  getEleById('fetch_students'),
  sortStudents: getEleById('sort_students'),
  assignConditions:  getEleById('assign_conditions'),
  submitConditions: getEleById('submit_conditions')
}

// error message stuff
function dispErrors(errors) {
  clearErrors();
  errors.forEach((err) => {
    let msg = document.createElement('p');
    msg.innerHTML = err;
    errorRegion.appendChild(msg);
  });
}

function clearErrors() {
  errorRegion.innerHTML = '';
  let errorFlds = Array.from(document.getElementsByClassName('error'));
  // console.log(errorFlds);
  errorFlds.forEach((errFld) => {
    // console.log(errFld);
    errFld.classList.remove('error');
  });
}

// student display stuff

function dispStudents() {
  console.log("dispStudents() called");
  tbody.innerHTML = '';
  students.forEach((studData, idx) => {
    addRow(idx, studData);
  });
}

function addRow(idx, studData) {
  // console.log(`addRow(${idx}, ${JSON.stringify(studData)}) called`);
  let newRow = document.createElement('tr');
  let preTestScore = studData.preTestScore;
  let cond = studData.condition || "";
  // console.log('preTestScore: ', preTestScore)
  // console.log('cond: ', cond);

  function selectIfValue(fldVal, value) {
      if (fldVal === value) {
          return "selected";
      } else {
          return "";
      }
  }

  function ifHasValue(val) {
    if (undefined !== val && null !== val && "" !== val) {
      return `value="${val}"`
    } else {
      return "";
    }
  }

  let newRowText = `
    <td>
        ${studData.id} <input type="hidden" id="studentID_${idx}" value="${studData.id}"/>
    </td>
    <td>
        <input type="number" id="preTestScore_${idx}"`;
    newRowText += ifHasValue(preTestScore);
    newRowText += ` />
    </td>
    <td>
        <select id="condition_${idx}">
    `;
    choices.forEach((opt, idx) => {
      newRowText += '<option value="' + opt + '" ' + (opt === cond ? " selected " : "") + (idx === 0 ? " disabled " : "") + '>' + opt + '</option>\n';
    });
            // <option value=""`; ${selectIfValue(cond, "")}   disabled></option>
            // <option value="cond1" ${selectIfValue(cond, "cond1")}>cond1</option>
            // <option value="cond2" ${selectIfValue(cond, "cond2")}>cond2</option>
            // <option value="cond3" ${selectIfValue(cond, "cond3")}>cond3</option>
    newRowText += `
        </select>
    </td>
    `;
    newRow.innerHTML = newRowText;
    tbody.appendChild(newRow);
}

// firebase stuff
function downloadStudentData() {
  students = [];
  return db.collection(collectionID).get()
    .then((snapShot) => {
      snapShot.forEach((doc) => {
        let data = doc.data();
        let preTestScore = data.preTestScore || null;
        let condition = data.condition || null;
        students.push({
          id: doc.id,
          preTestScore: preTestScore,
          condition: condition
        });
      });
      return true;
    })
    .catch(function (error) {
      console.error(error);
      return false;
    });
}

function uploadStudentData() {
  students.forEach((studentData) => {
    let uid = studentData.id;
    delete studentData.id;
    db.collection(collectionID).doc(uid).update(studentData)
    .then(() => {
      console.log(`${uid} data has been saved`);
    })
    .catch(function(error) {
      console.log(`an error occured saving ${uid}'s data`);
    });
  });
}

// data manipulation/form stuff

function studentsSort() {
  students.sort(function (a, b) {
    return b.preTestScore - a.preTestScore;
  });
}

function parseStudentsForm(validateConditions) {
  clearErrors();
  console.log('parseStudentsForm() called');
  let errors = []
  let missingPreTestScores = false;
  let missingConditions = false;
  let hasErrors = false;
  let form = getEleById('student_conditions_form');
  let tmp = [];
  for (let i = 0; i < students.length; i++) {
    let studID = getEleById(`studentID_${i}`).value;
    let preTestScore = parseFloat(getEleById(`preTestScore_${i}`).value, 10);
    let cond = getEleById(`condition_${i}`).value;
    if (isNaN(preTestScore)) {
      missingPreTestScores = true;
      hasErrors = true;
    }
    if (validateConditions && "" === cond) {
      missingConditions = true;
      hasErrors = true;
    }
    tmp.push({
      id: studID,
      preTestScore: preTestScore,
      condition: cond
    });
    console.log(`${i}: studID: ${studID} preTestScore: ${preTestScore} cond: ${cond}`);
  }
  if (missingPreTestScores) {
    errors.push('You must enter pre-test scores for all students and redo this operation');
  }
  if (missingConditions) {
    errors.push('You must select a condition for all students and redo this operation');
  }
  if (hasErrors) {
    dispErrors(errors);
    return false;
  } else {
    return tmp;
  }
}

function selectCondition(idx) {
  while (idx > 3) {
    idx -= 3;
  }
  return `cond${idx}`;
}

// button handlers
function fetchStudents() {
  console.log("fetchStudents() called");
  let form = getEleById('load_students_form');
  if (!form.reportValidity()) {
    return false;
  }
  let schoolCode = getEleById('school_code').value.toUpperCase();
  let classPeriod = getEleById('class_period').value;
  collectionID = schoolCode + classPeriod;
  downloadStudentData()
    .then((successValue) => {
      if (successValue) {
        console.log(students);
        dispStudents();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function sortStudents() {
  // displays table of students sorted in pretest desc order
  let result = parseStudentsForm(false);
  if (result) {
    students = result;
    studentsSort();
    dispStudents();
  }
}

function assignConditions() {
  clearErrors();
  let result = parseStudentsForm(false);
  if (result) {
    students = result;
    studentsSort();
    students.forEach((student, idx) => {
      students[idx].condition = selectCondition(idx + 1);
    });
    dispStudents();
    console.log(students);
  }
}

  // errors.forEach((val) => {
  //   console.log(val);
  //   let el = document.getElementById(val[0]);
  //   el.classList.add('error');
  //   // console.log(`msg: ${val[1]}`);
  //   let p = document.createElement('p');
  //   p.innerHTML = val[1];
  //   errorRegion.appendChild(p);
  // });

function submitConditions () {
  clearErrors();
  let result = parseStudentsForm(true)
  if (result) {
    students = result;
    studentsSort();
    let allHavePreTestScores = students.every(x => !isNaN(parseFloat(x.preTestScore)));
    let allHaveConditions = students.every(x => conditions.includes(x.condition));
    if (allHavePreTestScores && allHavePreTestScores) {
      uploadStudentData();
    }
  }
  // let ptMsg = "pre-test scores are " + ((allHavePreTestScores) ? "ok" : "not ok");
  // let cMsg = "conditions are " + ((allHaveConditions) ? "ok" : "not ok");
  // console.log(ptMsg);
  // console.log(cMsg);
}


// register button event listeners 
buttons.fetchStudents.addEventListener('click', e => fetchStudents());
buttons.sortStudents.addEventListener('click', e => sortStudents());
buttons.assignConditions.addEventListener('click', e => assignConditions());
buttons.submitConditions.addEventListener('click', e => submitConditions());