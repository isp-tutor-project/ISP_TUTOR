/*global db */
let userID = "SCSI_MAR_19"; //localStorage.getItem("userID");
let collectionID = "SCOTTSCHOOL1"; // localStorage.getItem("collectionID");

let classRef;
let studentRef;

let questions = [];
let testName;
let currQuestionIdx;
let lastQuestionIdx;
let questionRegion; 
let notificationRegion; 


/* firebase stuff */

/*
 determines if collectionID and userID are valid, and if
 so, creates references to them, so we don't have to constantly
 db.collection(collectionID).doc(userID)...
*/
function initializeDBRefs() {
    let tmp = db.collection(collectionID);
    let tmp2;
    return tmp.get().then((col) => {
        if (col.empty) {
            console.log('invalid class code. collection does not exist');
            return false;
        } else {
            classRef = tmp;
            return true;
        }
    }).catch(function(error) {
        console.error(error);
        return false;
    }).then((success) => {
        if (!success) {
            return false;
        }
        tmp2 = classRef.doc(userID);
        return tmp2.get();
    }).then((doc) => {
        if (!doc) {
            console.log('doc is null')
            return false;
        } else if (!doc.exists) {
            console.log('document does not exist');
            return false;
        } else {
            // this is the expected happy path.
            console.log('document exists');
            studentRef = tmp2;
            return true;
        }
    }).catch(function(error) {
        console.error(error);
        return false;
    });
}

function fetchPreExistingTestData() {
    return studentRef.get().then((doc) => {
        let data = doc.data();
        let ans = data[testName];
        if (!ans) {
            ans = {};
        }
        return ans;
    }).catch(function(error) {
        console.log(error);
        return false;
    });
}

function updateStudentTestData(fldName, value) {
    let testDotFldName = `${testName}.${fldName}`;
    return studentRef.update({
        [testDotFldName]: value
    });
}

function clearNotificationRegion() {
    notificationRegion.innerHTML = "";
}

function notify(html) {
    notificationRegion.innerHTML = html;
}

function submitAnswer() {
    // e.preventDefault();
    let quesNum = currQuestionIdx + 1;
    let formID = `question-${quesNum}-form`;
    let form = document.getElementById(formID);
    let quesName = `q${quesNum}`;
    let ans = form.elements[quesName].value;
    if (null === ans || undefined === ans || "" === ans) {
        notify(`
        <span class="error-msg">
            You must answer the question prior to submitting.
        </span>
        <span>
            You may navigate to a different question and return later if you'd like.
        </span>`);
    } else {
        updateStudentTestData(quesName, ans)
        .then(() => {
            // add the student's answer to the question object so we can display their previous
            // answer if they navigate back to this question
            questions[currQuestionIdx].answer = ans;
            // since this question is answered now, modify it's question button's appearance
            let quesBtn = document.getElementById(`question-btn-${currQuestionIdx}`);
            quesBtn.classList.add("answered");
        }).catch(function(error) {
            console.error(error);
        });
    }
}

function goToQuestion(questionIdx) {
    currQuestionIdx = questionIdx;
    clearNotificationRegion();
    questions.forEach((question, idx) => {
        let quesBtnID = `question-btn-${idx}`;
        let btn = document.getElementById(quesBtnID);
        if (questionIdx === idx) {
            btn.classList.add("current-question");
        } else {
            btn.classList.remove("current-question");
        }
    });
    let question = questions[questionIdx];
    let questionHtml = renderQuestion(question);
    questionRegion.innerHTML = questionHtml;
    for (let opt of Array.from(document.querySelectorAll('input[type="radio"].question-option'))) {
        opt.addEventListener("change", e => {
            clearNotificationRegion();
        });
    }
}

function prevQuestion() {
    currQuestionIdx = (--currQuestionIdx < 0) ? lastQuestionIdx : currQuestionIdx;
    goToQuestion(currQuestionIdx);
}

function nextQuestion() {
    currQuestionIdx = (++currQuestionIdx > lastQuestionIdx) ? 0 : currQuestionIdx;
    goToQuestion(currQuestionIdx);
}

function renderImage(image) {
    let html = "";
    if (undefined !== image && null !== image) {
        let width = (image.width === undefined) ? "" :   `width="${image.width}"`;
        let height = (image.height === undefined) ? "" : `height="${image.height}"`;
        html = `<img src="${image.src}" ${width} ${height} /> <hr />`;
    }
    return html;
}

function renderForm(question) {
    function radioSelected(value, answer) {
        return (value === answer) ? "checked" : "";
    }
    function textAnswer(answer) {
        return (null !== answer && undefined !== answer) ? answer : "";
    }

    let id = question.id;
    let qNum = `q${question.id}`;
    let html = `<form class="form-horizontal" id="question-${id}-form">`
    let answer = question.answer;
    if ("radios" === question.questionType) {
        let options = question.options;
        for (let [value, label] of Object.entries(options)) {
            html += `<div class="radio">
                        <label>
                            <input type="radio"
                                   class="question-option"
                                   name="${qNum}"
                                   value="${value}"
                                   ${radioSelected(value, answer)} />
                            ${label}
                        </label>
                    </div>
                    `;
        }
    } else if ("text" === question.questionType){
        html += `<textarea cols="120" rows="20" name="${qNum}">${textAnswer(answer)}</textarea>`;
    }
    html += "</form>"
    return html;
}

function renderQuestion(question) {
    let id = question.id;
    let html = `
    <div class="question" id="question-${id}">
        <div class="question-text">
            Q${id}. ${question.text}
        </div>
        <div class="question-img">${renderImage(question.img)}</div>
        <div class="question-answers">
            ${renderForm(question)}
        </div>
    </div>
    `;
    return html;
}

function mkQuesBtn(question, index) {
    let btn = document.createElement('button');
    btn.classList.add('inline-btn');
    btn.classList.add('btn');
    btn.classList.add('btn-sm');
    btn.classList.add('btn-default');
    btn.classList.add('question-btn');
    btn.innerText = `Q${index + 1}`;
    btn.id = `question-btn-${index}`;
    btn.addEventListener("click", e => {
        e.preventDefault();
        goToQuestion(index);
    });
    return btn;
}

function initQuiz() {
    testName = quiz.testName;
    initializeDBRefs().then((success) => {
        if (!success) {
            // invalid class_code or userID. this should only occur if
            // the user never registered and somehow navigates directly to the page.
            // there isn't a link unless the user is logged in, but I suppose the
            // google indexing of our pages could make the assessment portion of the
            // site accessible
            //
            // WHAT TO DO? Is not listing this page on the site map make it to not be
            // spidered, or do we need to add something like robots.txt to prevent
            // spidering 
            return;
        }
        return fetchPreExistingTestData();
    }).then((answers) => {
        let quesBtnContainer = document.getElementById("question-btns-container");
        let submitBtn = document.getElementById("submit_answer")
        let prevQuesBtn = document.getElementById("prev_question");
        let nextQuesBtn = document.getElementById("next_question");
        let userNameRegion = document.getElementById("user_name_region")
        questionRegion = document.getElementById("question_region");
        notificationRegion = document.getElementById("notification_region");
        userNameRegion.innerHTML = `Logged in as: <b>${userID}</b>`;
        lastQuestionIdx = quiz.questions.length - 1;
        quesBtnContainer.innerHTML = "";
        prevQuesBtn.addEventListener("click", e => prevQuestion());
        nextQuesBtn.addEventListener("click", e => nextQuestion());
        quiz.questions.forEach((ques, idx) => {
            // create a button for the the top of the screen which displays
            // whether it has been answered and also allows direct navigation to that
            // question.
            let quesBtn = mkQuesBtn(ques, idx);
            qNum = `q${ques.id}`;
            if (answers && undefined !== answers[qNum]) {
                // if the student has previously answered this question, update it's
                // answer field and also mark it's associated question button as answered
                console.log(answers[qNum]);
                ques.answer = answers[qNum];
                quesBtn.classList.add('answered');
            } else {
                ques.answer = null;
            }
            questions.push(ques);
            quesBtnContainer.appendChild(quesBtn);
        });
        submitBtn.addEventListener("click", e => submitAnswer());

        // start off at the first question
        currQuestionIdx = 0;
        goToQuestion(currQuestionIdx);
    }).catch(function(error) {
        console.error(error);
    });
}

initQuiz();