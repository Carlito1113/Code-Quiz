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
var timer = 60;
// Storing index
var index = 0;
// Answer result
var resultDisplay = document.createElement("p");
var score = 0;
var highscores = [];

// event listener to start the quiz
startBtn.addEventListener("click", startQuiz);
// call function to show the opening page
openingPage();

// Functions

startBtn.onclick = startQuiz;

// Load page contents
function openingPage() {
  mainDisplay.textContent = "Click to start!";
  startBtn.textContent = "Start";
  displayQuestionsEl.append(mainDisplay, startBtn);
  hs.innerHTML = "Highscores";
  timerEl.prepend(hs);
}

function startQuiz() {
  showTimer();
  nextQuestion();
}
// Timer
function showTimer() {
  timerEl.textContent = "Time remaining: " + timer;

  var questionTimer = setInterval(function () {
    // decrease timer by one
    timer--;
    // display timer to screen
    timerEl.textContent = "Time remaining: " + timer;
    if (timer <= 0) {
      clearInterval(questionTimer);
    }
  }, 1000)
}

// Displays the next question
function nextQuestion() {
  // Stores question index
  var currentQuestion = questions[index];
  // Empty question container
  displayQuestionsEl.textContent = "";
  // Adds current question into the container
  mainDisplay.textContent = currentQuestion.title;
  // Append the text to show
  displayQuestionsEl.append(mainDisplay);
  // div to wrap choices
  var choicesContainer = document.createElement("div");
  choicesContainer.classList.add("buttonDiv");
  // loop to change answer
  for (choice in currentQuestion.choices) {
    // Button for choices
    var choiceBtn = document.createElement("button");
    choiceBtn.classList.add("answer-btn");
    choiceBtn.textContent = currentQuestion.choices[choice];
    // Check for answer
    choiceBtn.onclick = checkAnswer;
    choicesContainer.append(choiceBtn);
  }
  displayQuestionsEl.append(choicesContainer);
}

// function to check the answer
function checkAnswer(event) {
  resultDisplay.setAttribute("class", "result");
  var responseText = event.target.textContent;
  

  if (responseText === questions[index].answer) {
    index++;
    console.log(timer);
    console.log("Correct");
    if (timer <= 0 || index == questions.length) {
      gameOver();
    } else {
      nextQuestion();
      resultDisplay.innerHTML = "Correct!";
      displayQuestionsEl.appendChild(resultDisplay);
    }
  } else {
    timer = timer - 10;
    index++;
    console.log("Incorrect");
    if (timer <= 0 || index == questions.length) {
      gameOver();
    } else {
      nextQuestion();
      resultDisplay.innerHTML = "Wrong!";
      displayQuestionsEl.appendChild(resultDisplay);
    }
  }
}

function gameOver() {
  if (timer < 0) {
    score = 0;
  } else {
    score = timer;
  }
  // Form
  var bottomDiv = document.querySelector(".buttonDiv");
  timerEl.style.display = "none";
  resultDisplay.style.display = "none";
  bottomDiv.innerHTML = "";
  mainDisplay.textContent = "Your score is " + score+ "!";
  form.setAttribute("type", "text");
  form.setAttribute("name", "Name");
  form.setAttribute("placeholder", "Enter your name");
  sButton.setAttribute("type", "submit");
  sButton.setAttribute("value", "Submit");
  sButton.classList.add("endButton");
  sButton.style.margin = "10px";
  bottomDiv.appendChild(initialForm);
  initialForm.appendChild(form);
  initialForm.appendChild(sButton);
  goBack.classList.add("endButton");
  goBack.innerHTML = "Go Back";
  bottomDiv.appendChild(goBack);
}
// Return to home back via back button
goBack.addEventListener("click", function () {
  location.reload();
});

hs.addEventListener("click", function () {
  displayQuestionsEl.innerHTML = "";
  document.getElementById("title").textContent = "Highscores";
  storeScores();
  showHighscores();
});

sButton.addEventListener("click", function(event) {
  event.preventDefault();
  var scoresText = form.value.trim() + " " + score;

  if (form.value === "") {
    return;
  }
  // Add new score and clear the input
  highscores.push(scoresText);
  form.value = "";
  document.getElementById("title").textContent = "Highscores";
  displayQuestionsEl.style.display = "none";
  storeScores();
  showHighscores();
});
