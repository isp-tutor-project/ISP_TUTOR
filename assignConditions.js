
/* global db */
const REQUIRE_PRE_TEST_SCORES = true;
const NO_REQUIRE_PRE_TEST_SCORES = false;
const REQUIRE_CONDITIONS = true;
const NO_REQUIRE_CONDITIONS = false;

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
  autoAssignConditions:  getEleById('auto_assign_conditions'),
  submitChanges: getEleById('submit_changes'),
  selectAll: getEleById('select_all'),
}

// firebase stuff
function downloadStudentData() {
  students = [];
  return db.collection(collectionID).get()
    .then((snapShot) => {
      snapShot.forEach((doc) => {
        let data = doc.data();
        let studData = {
          id: doc.id
        };        
        let preTestScore = data.preTestScore;
        let condition = data.condition;
        if (undefined !== preTestScore) {
          studData.preTestScore = preTestScore;
        }
        if (undefined !== condition) {
          studData.condition = condition;
        }
        students.push(studData);
      });
      return true;
    })
    .catch(function (error) {
      console.error(error);
      return false;
    });
}

function uploadStudentData(rows) {
  rows.forEach((studentData) => {
    let uid = studentData.id;
    delete studentData.id;
    // IMPORTANT!!! never let this field get saved to firebase!!!
    if (undefined !== studentData.saveRow) {
      delete studentData.saveRow;
    }
    db.collection(collectionID).doc(uid).update(studentData)
      .then(() => {
        console.log(`${uid} data has been saved`);
      })
      .catch(function (error) {
        console.log(`an error occured saving ${uid}'s data`);
      });
  });
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
    <td>
      <input type="checkbox" id="saveCondition_${idx}"/>
    </td>
    `;
    newRow.innerHTML = newRowText;
    tbody.appendChild(newRow);
}

// data manipulation/form stuff

function studentsSort() {
  let haves = students.filter(x => x.preTestScore);
  let haveNots = students.filter(x => !x.preTestScore);
  haves.sort((a, b) => b.preTestScore - a.preTestScore);
  haveNots.forEach((i) => haves.push(i));
  students = haves;
}

function parseStudentsForm(requirePreTestScores, requireConditions) {
  clearErrors();
  console.log('parseStudentsForm() called');
  let errors = [];
  let genericMissingPreTestScoresError = false;
  // let missingConditions = false;
  let hasErrors = false;
  let form = getEleById('student_conditions_form');
  let tmp = [];
  let num2save = 0;
  for (let i = 0; i < students.length; i++) {
    let studID = getEleById(`studentID_${i}`).value;
    let preTestScore = parseFloat(getEleById(`preTestScore_${i}`).value, 10);
    let cond = getEleById(`condition_${i}`).value;
    let saveRow = getEleById(`saveCondition_${i}`).checked;
    if (saveRow) {
      num2save++;
    }

    if (isNaN(preTestScore)) {
      preTestScore = undefined;
      if (requirePreTestScores) {
        hasErrors = true;
        if (requireConditions) {
          if (saveRow) {
            errors.push(`you must enter a pre-test score for user ${studID}`);
          }
        } else {
          genericMissingPreTestScoresError = true;
        }
      }
    }
    if (requireConditions && saveRow && "" === cond) {
      errors.push(`you must select a condition for user ${studID}`);
      hasErrors = true;
    }
    tmp.push({
      id: studID,
      preTestScore: preTestScore,
      condition: cond,
      saveRow: saveRow
    });
    console.log(`${i}: studID: ${studID} preTestScore: ${preTestScore} cond: ${cond} saveRow: ${saveRow}`);
  }
  if (genericMissingPreTestScoresError) {
    errors.push('You must enter pre-test scores for all students and redo this operation');
  }

  
  if (requireConditions && 0 === num2save) {
    errors.push('You must select rows to save');
    hasErrors = true;
  } else {
    console.log(num2save);
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
  // re-enable to assignconditions button before we load the data
  // and determine whether we need to disable it
  buttons.autoAssignConditions.removeAttribute("disabled");
  console.log("fetchStudents() called");
  let form = getEleById('load_students_form');
  if (!form.reportValidity()) {
    return false;
  }
  let classCode = getEleById('class_code').value.toUpperCase();
  collectionID = classCode;
  downloadStudentData()
    .then((successValue) => {
      if (successValue) {
        console.log(students);
        if (students.some(x => x.condition)) {
          // at least one student has previously been assigned a condition
          // disable auto-assignment of conditions
          buttons.autoAssignConditions.setAttribute("disabled", "true");
        }
        studentsSort();
        dispStudents();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function sortStudents() {
  // displays table of students sorted in pretest desc order
  let result = parseStudentsForm(NO_REQUIRE_PRE_TEST_SCORES, NO_REQUIRE_CONDITIONS);
  if (result) {
    students = result;
    studentsSort();
    dispStudents();
  }
}

function autoAssignConditions() {
  clearErrors();
  let result = parseStudentsForm(REQUIRE_PRE_TEST_SCORES, NO_REQUIRE_CONDITIONS);
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

function changeAllRows() {
  console.log('changeAllRows() called');
  let newValue = (buttons.selectAll.checked) ? true : false;
  students.forEach((_unused, idx) => {
    getEleById('saveCondition_' + idx).checked = newValue;
  });
}

function submitChanges () {
  clearErrors();
  let result = parseStudentsForm(REQUIRE_PRE_TEST_SCORES, REQUIRE_CONDITIONS)
  if (result) {
    students = result;
    let students2save = students.filter(x => x.saveRow);
    students.forEach((stud) => {
      delete stud.saveRow;
    });
    console.log(students2save);
    // studentsSort();
    // let allHavePreTestScores = students.every(x => !isNaN(parseFloat(x.preTestScore)));
    // let allHaveConditions = students.every(x => conditions.includes(x.condition));
    // if (allHavePreTestScores && allHavePreTestScores) {
    
    uploadStudentData(students2save);
    // }
  }
  // let ptMsg = "pre-test scores are " + ((allHavePreTestScores) ? "ok" : "not ok");
  // let cMsg = "conditions are " + ((allHaveConditions) ? "ok" : "not ok");
  // console.log(ptMsg);
  // console.log(cMsg);
}


// register button event listeners 
buttons.fetchStudents.addEventListener('click', e => fetchStudents());
buttons.sortStudents.addEventListener('click', e => sortStudents());
buttons.autoAssignConditions.addEventListener('click', e => autoAssignConditions());
buttons.selectAll.addEventListener('change', e => changeAllRows());
buttons.submitChanges.addEventListener('click', e => submitChanges());
