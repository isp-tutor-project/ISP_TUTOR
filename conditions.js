/*global db, collectionID, userID, showSnackbar, pageNamesToFunctions */

/*
4.1 startPage
4.2 defPage1
4.3 defPage2
5.1 defPage3
5.2 defPage4
5.3 defPage5
6.1 defPage6
6.2 cptMapinstructPage
6.3 predictPage1
7.1 graphPage1
8.1 graphPage2
9.1 initCptMapPage
10.1 biDirInstructPage1
10.2 biDirInstructPage2
11.1 biDirIntructPage3
11.2 oppDirCptMapPage
12.1 brmInstructionPage(Video - remove)
12.2 brmPage
12.3 brmP
13.1 predictPage2
13.2 finalConceptMapPage
14.1 completePage(home page displaying they have completed ? ? ? )

cond1              | cond2                      | cond3
-------------------+----------------------------+-----------------------
startPage          |startPage                   |startPage
definitionPage1    |definitionPage1             |definitionPage1
definitionPage2    |definitionPage2             |definitionPage2
definitionPage3    |definitionPage3             |definitionPage3
definitionPage4    |definitionPage4             |definitionPage4
definitionPage5    |definitionPage5             |definitionPage5
definitionPage6    |definitionPage6             |definitionPage6 
instructionPage    |instructionPage             |instructionPage
predictionPage1    |predictionPage1             |predictionPage1
graphPage1         |graphPage1                  |graphPage1
graphPage2         |graphPage2                  |graphPage2
===================+== SAME FOR ALL ============+===================
initialConceptMap  |initialConceptMap           |
                   |biDirInstructionPage1       |
                   |biDirInstructionPage2       |
                   |biDirInstructionPage3       |
                   |oppositeDirectionConceptMap |
brmPage            |brmPage                     |brmPage
predictionPage2    |predictionPage2             |predictionPage2
finalConceptMap    |finalConceptMap             |finalConceptMap
completePage       |completePage                |completePage

*/

const conditionHypoTasks = {
    "cond1": [
      "startPage",
      "definitionPage1",
      "definitionPage2",
      "definitionPage3",
      "definitionPage4",
      "definitionPage5",
      "definitionPage6",
      "instructionPage",
      "predictionPage1",
      "graphPage1",
      "graphPage2",
      "initialConceptMap",
      "brmPage",
      "predictionPage2",
      "finalConceptMap",
      "completePage"
    ],
    "cond2": [
      "startPage",
      "definitionPage1",
      "definitionPage2",
      "definitionPage3",
      "definitionPage4",
      "definitionPage5",
      "definitionPage6",
      "instructionPage",
      "predictionPage1",
      "graphPage1",
      "graphPage2",
      "initialConceptMap",
      "biDirInstructionPage1",
      "biDirInstructionPage2",
      "biDirInstructionPage3",
      "oppositeDirectionConceptMap",
      "brmPage",
      "predictionPage2",
      "finalConceptMap",
      "completePage"
    ],
    "cond3": [
      "startPage",
      "definitionPage1",
      "definitionPage2",
      "definitionPage3",
      "definitionPage4",
      "definitionPage5",
      "definitionPage6",
      "instructionPage",
      "predictionPage1",
      "graphPage1",
      "graphPage2",
      "brmPage",
      "predictionPage2",
      "finalConceptMap",
      "completePage"
    ]
}

let studentHypoTasks;
let studentCondition = "cond2";
let currHypoTaskIdx;

function invalidTask() {
  showSnackbar("invalid task");
}

function updateCurrTaskIndex(idx) {
  currHypoTaskIdx = idx;
  return db.collection(collectionID).doc(userID).update({
    currHypoTaskIdx: idx
  });
}

function prevHypoTask() {
  let prevTaskIdx = currHypoTaskIdx - 1;
  if (prevTaskIdx < 0) {
    console.error('invalid taskIdx: ', prevTaskIdx);
    invalidTask();
  } else {
    updateCurrTaskIndex(prevTaskIdx)
    .then(() => {
      currHypoTask();
    })
    .catch(function(error) {
      console.error(error);
    });
  }
}

function nextHypoTask() {
  let nextTaskIdx = currHypoTaskIdx + 1;
  if (nextTaskIdx >= studentHypoTasks.length) {
    console.error('invalid taskIdx: ', nextTaskIdx);
    invalidTask();
  } else {
    updateCurrTaskIndex(nextTaskIdx)
    .then(() => {
      currHypoTask();
    })
    .catch(function(error) {
      console.error(error);
    });
  }
}

function currHypoTask() {
  let task;
  console.log('currHypoTask():', currHypoTaskIdx);
  if ((null === currHypoTaskIdx) || (undefined === currHypoTaskIdx) ||
      (currHypoTaskIdx < 0) || (currHypoTaskIdx === studentHypoTasks.length)) {
        console.error('currHypoTaskIdx is invalid: ', currHypoTaskIdx);
        task = invalidTask;
  } else {
    task = studentHypoTasks[currHypoTaskIdx];
  }
  console.log(task.name);
  task();
}


function getStudentCondition() {
  studentCondition = "cond2";
  currHypoTaskIdx = 0;
  // db.collection(collectionID).doc(userID).get()
  // .then((doc) => {
  //     if (doc.exists) {
  //         console.log(`User document ${collectionID}.${userID} exists`);
  //         let cond = doc.data().condition;
  //         if (null === cond || undefined === cond) {
  //             console.log(`User ${collectionID}.${userID} has not been assigned a condition yet.`);
  //             showSnackbar("You must wait for your pre-test to be graded before you can proceed");
  //             studentCondition = null;
  //         } else {
  //             studentCondition = cond;
  //         }
  //     }
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
}

function initHypoTasks() {
  db.collection(collectionID).doc(userID).get()
  .then((doc) => {
    currHypoTaskIdx = doc.data().currHypoTaskIdx || 0;
    console.log('initHypoTasks::currHypoTaskIdx:', currHypoTaskIdx);
    updateCurrTaskIndex(currHypoTaskIdx)
    .then(() => {
      studentHypoTasks = conditionHypoTasks[studentCondition].map(x => pageNamesToFunctions[x]);
      let taskNames = studentHypoTasks.map(x => x.name);
      console.log(taskNames);
      currHypoTask();
    })
    .catch(function(error) {
      console.error(error);
    });
  })
  .catch(function (error) {
    console.error(error);
  });
}
