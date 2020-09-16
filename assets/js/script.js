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

// Load page contents
function onLoad() {
    mainDisplay.textContent = "Click to start!"
    startBtn.textContent = "Start";
    displayQuestionsEl.append(mainDisplay, startBtn);
    hs.innerHTML = "Highscores";
    timerEl.prepend(hs);

}

function openingPage() {
    mainDisplay.textContent = "Press the button to start"
    startBtn.textContent = "Start"
    displayQuestionsEl.append(mainDisplay, startBtn);
}

function startQuiz() {
    showTimer();
    nextQuestion();

}
// Timer
function showTimer() {

    timerEl.textContent = "Time remaining: " + timer;

    var questionTimer = setInterval(function(){
        // decrease timer by one
        timer--
        // display timer to screen
        timerEl.textcontent = "Time remaining: " + timer;
        if(timer <= 0){
            clearInterval(questionTimer);
        }

    }, 1000)

}

// Displays the next question
function nextQuestion() {
    // Stores question index
    var currentQuestion = questions[index];
    // console test
    console.log(currentQuestion);
    // Empty question container
    displayQuestionEl.textContent = "";
    // Adds current question into the container
    mainDisplay.textContent = currentQuestion.title;
    // Append the text to show
    displayQuestionEl.append(mainDisplay);
    // div to wrap choices
    var choicesContainer = document.createElement("div");
    choicesContainer.classList.add("buttonDiv");
    // loop to change answer
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        // Button for choices
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = currentQuestion.choices[choice];
        choiceBtn.classList.add("answer-btn");
        choicesContainer.append(choiceBtn);
        // Check for answer
        choiceBtn.onclick = checkAnswer;
        choicesContainer.append(choiceBtn);
    }
    displayQuestionsEl.append(choicesContainer);
}

// function to check the answer
function checkAnswer(event) {

    resultDisplay.setAttribute("class", "result")
    var responseText = event.target.textContent;
    console.log(responseText);

    if (respsonseText === questions[index].answer) {
        index++
        console.log("Correct");
        if (timer <= 0 || index == questions.length){
            gameOver();
        } else{
            nextQuestion();
            resultDisplay.innerHTML = "Correct!";
            displayQuestionsEl.appendChild(resultDisplay);
        }


    } else {
        timer = timer-10;
        index++
        console.log("Incorrect");
        if (timer <= 0 || index == quesitons.length){
            gameOver();
        } else {
            nextQuestion();
            resultDisplay.innerHTML = "Wrong!";
            displayQuestionsEl.appendChild(resultDisplay);
        }
    }
}




