var quizEl = document.querySelector(".quiz")
var timerEl = document.querySelector(".timer")
var rulesEl = document.querySelector(".rules")
var startBtn = document.querySelector(".start")
var questionEl = document.querySelector("#question")
var gameOverEl = document.querySelector("#gameover")
var scoreEl = document.querySelector(".score")
var initials = document.querySelector("#initials")
var submitBtn = document.querySelector(".submit")
var scoreList = document.querySelector(".scorelist")
var scoreCard = document.querySelector("#scorecard")
var hsInitials = document.querySelector(".hs-initials")
var hsScore = document.querySelector(".hs-score")
var resultsEl = document.querySelector("#results")
var replayBtn = document.querySelector(".back")


var questions = [{
        question: "JavaScript File Has An Extension of:",
        choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
        correctAnswer: "B) .js"
    },
    {
        question: "Which of the following is not a JavaScript data type:",
        choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
        correctAnswer: "B) .js"
    },
    {
        question: "JavaScript File Has An Extension of:",
        choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
        correctAnswer: "B) .js"
    },
    {
        question: "JavaScript File Has An Extension of:",
        choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
        correctAnswer: "B) .js"
    },
    {
        question: "JavaScript File Has An Extension of:",
        choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
        correctAnswer: "B) .js"
    },
    {
        question: "JavaScript File Has An Extension of:",
        choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
        correctAnswer: "B) .js"
    },

];

var lastQuestion = questions.length;
var currentQuestion = 0;
var totalPoints = 0;
var timeStart = 60;
var timer;
var correct;

var penalty = 7

quizEl.style.display = "none";
scoreList.style.display = "none";

function startQuiz() {
    rulesEl.style.display = "none";
    generateQuiz();
    timer = setInterval(function () {
        timeStart--;
        timerEl.textContent = "Time left: " + timeStart;
        if (timeStart <= 0) {
            gameOver();
            quizEl.style.display = "none";
        }
    }, 1000);
}

function generateQuiz() {
    var q = questions[currentQuestion];
    var choicesDiv = document.querySelector(".choices")
    choicesDiv.innerHTML = ""
    questionEl.innerHTML = q.question;
    q.choices.forEach(function (choice) {
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = choice;
        choiceBtn.setAttribute("value", choice)
        choiceBtn.onclick = checkAnswer
        choicesDiv.appendChild(choiceBtn)
    })
    quizEl.style.display = "block";
}


function showHighScore() {

    rulesEl.style.display = "none";
    quizEl.style.display = "none";
    gameOverEl.style.display = "none";
    scoreList.style.display = "block";

}

function clearScore() {
    window.localStorage.clear();
    hsInitials.textContent = "";
    hsScore.textContent = "";
}

function replayQuiz() {
    scoreList.style.display = "none";
    gameOverEl.style.display = "none";
    quizEl.style.display = "none";
    rulesEl.style.display = "block";
}

function checkAnswer() {
    console.log(this)
    correct = questions[currentQuestion].correctAnswer;
    console.log(correct, currentQuestion);

    if (this.value === correct) {
        totalPoints++;
        resultsEl.textContent = "Correct";
        setTimeout(function () {
            resultsEl.textContent = ""
        }, 500)

    } else {
        resultsEl.textContent = "Wrong";
        setTimeout(function () {
            resultsEl.textContent = ""
        }, 500)
        timeStart = timeStart - penalty;
    }

    currentQuestion++;
    if (currentQuestion === questions.length) {
        gameOver();
        quizEl.style.display = "none";
    } else {
        generateQuiz();
    }
}

function gameOver() {
    timerEl.textContent = "Time's up!";
    gameOverEl.classList.remove("hide");
    clearInterval(timer);
    if (timeStart >= 0) {
        scoreEl.innerHTML = "";
        var timeRemaining = timeStart;
        scoreEl.textContent = "Your final score is: " + timeRemaining;
        quizEl.style.display = "none";
    }
    submitBtn.setAttribute("value", timeRemaining)
    submitBtn.onclick = highScore
}



function highScore() {
    console.log(this.value)
    var scoreObj = {
        score: this.value,
        initials: initials.value.trim().toUpperCase()
    };
    console.log(scoreObj)
    localStorage.setItem("highscoreEntry", JSON.stringify(scoreObj));
    // gameOverEl.style.display = "none";
    // scoreList.style.display = "block";




    var highScores = JSON.parse(localStorage.getItem("highscoreEntry")) || [];
    for(i = 0; i < highScores.length; i++) {
        var scoreP = document.createElement('ul');
        var scoreLi = document.createElement('li');
        scoreLi.textContent = highScores[i].initials, highScores[i].score;
        scoreP.append("li");
    //     scoreP.textContent = [highScores.initials + "-" + highScores.score];
    //     hsInitials.appendChild(scoreP);

    }
    
    // hsInitials.innerHTML = highScores.initials + "-" + highScores.score
    // hsScore.innerHTML = highScores.score;
}

console.log()
startBtn.addEventListener("click", startQuiz);