// Global variables

// Question container element
var displayQuestionsEl = document.querySelector(".display-questions");
// Timer element
var timerEl = document.querySelector(".timer");
// Hooking the results
var resultsEl = document.querySelector(".results");
// Displaying the instructions and questions
var mainDisplay = document.createElement("h3");
// Start quiz button
var startBtn = document.createElement("button");
startBtn.classList.add("button");

var hs = document.createElement("p");

var initialForm = document.createElement("form");

var form = document.createElement("input");

var sButton = document.createElement("input");

var goBack = document.createElement("button");

// Storing the timer
var timer = 75;
// Storing index
var index = 0;
// Answer result
var resultDisplay = document.createElement("p");
var score = 0;
var highscores = [];


// event listener to start the quiz
startBtn.addEventListener("click", startQuiz)
// call function to show the opening page
openingPage();

// Functions

// call for opening page
    onload();
    init();

startBtn.onclick = startQuiz;



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

