// Global variables

// Question container element
let displayQuestionsEl = document.querySelector(".display-questions");
// Timer element
let timerEl = document.querySelector(".timer");
// Hooking the results
let resultsEl = document.querySelector(".results");
// Displaying the instructions and questions
let mainDisplay = document.createElement("h3");
// Start quiz button
let startBtn = document.createElement("button");
startBtn.classList.add("button");

let hs = document.createElement("p");

let initialForm = document.createElement("form");

let form = document.createElement("input");

let sButton = document.createElement("input");

let goBack = document.createElement("button");




var timer = 75;

var index = 0;



// event listener to start the quiz
startBtn.addEventListener("click", startQuiz)
// call function to show the opening page
openingPage();

function openingPage() {
    mainDisplay.textContent = "Press the button to start"
    startBtn.textContent = "Start"
    displayQuestionsEl.append(mainDisplay, startBtn);
}

function startQuiz() {
    showTimer();
    nextQuestion();

}

function showTimer() {
    timerEl.textContent = timer;

    var questionTimer = setInterval(function(){
        // decrease timer by one
        timer--
        // display timer to screen
        timerEl.textcontent = timer;
        if(timer <= 0){
            clearInterval(questionTimer);
        }

    }, 1000)

}

// function which displays the next question
function nextQuestion() {
    var currentQuestion = questions[index];
    console.log(currentQuestion);
    displayQuestionEl.textContent = "";
    mainDisplay.textContent = currentQuestion.title;
    displayQuestionEl.append(mainDisplay);

    var choicesContainer = document.createElement("div");

    for (let i = 0; i < currentQuestion.choices.length; i++) {

        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = currentQuestion.choices[i];
        choiceBtn.addEventListener("click", checkAnswer);
        choicesContainer.append(choiceBtn);
    }
}

// function to check the answer
function checkAnswer(event) {

    function stopTime() {

        clearInterval(questionTimer);
    }

    var responseText = event.target.textContent;

    console.log(responseText);

    if (respsonseText === questions[index].answer) {

        console.log("Correct");

    } else {
        console.log("Incorrect");
    }

    index++;

    nextQuestion();

    if (index >- questions.length) {
        clearInterval(questionTimer)
    }
}

