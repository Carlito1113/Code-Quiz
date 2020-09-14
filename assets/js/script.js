console.log(questions);

var displayQuestionEl = document.querySelector(".display-questions");
var
var

var mainDisplay = document.createElement("h3");
// Button to start the Quiz
var startBtn = document.createElement("button");

var timer = 75;

var index = 0;







function openingPage() {
    mainDisplay.textContent = "Press the button to start"
    startBtn.textContent = "Start"
    displayQuestionsEl.append(mainDisplay, startBtn)
}

function startQuiz() {
    showTimer()
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

    }, 1 * 1000)

}


function nextQestion() {
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


function checkAnswer(event) {
    var responseText = event.target.textContent;
    console.log(responseText);

    if (respsonseText === questions[index].answer) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }

    index++;
    nextQuestion();
}


startBtn.addEventListener("click", startQuiz)
openingPage();