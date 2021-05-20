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

var A = document.querySelector("#a")
var B = document.querySelector("#b")
var C = document.querySelector("#c")
var D = document.querySelector("#d")

var questions = [{
        question: "JavaScript File Has An Extension of:",
        choiceA: "A) .java",
        choiceB: "B) .js",
        choiceC: "C) .script",
        choiceD: "D) .javascript",
        correctAnswer: "b",
    },
    {
        question: "Which of the following is not a JavaScript data type:",
        choiceA: "A) string",
        choiceB: "B) boolean",
        choiceC: "C) document",
        choiceD: "D) number",
        correctAnswer: "c",
    },
    {
        question: "JavaScript File Has An Extension of:",
        choiceA: "A) .java",
        choiceB: "B) .js",
        choiceC: "C) .script",
        choiceD: "D) .javascript",
        correctAnswer: "b",
    },
    {
        question: "JavaScript File Has An Extension of:",
        choiceA: "A) .java",
        choiceB: "B) .js",
        choiceC: "C) .script",
        choiceD: "D) .javascript",
        correctAnswer: "b",
    },
    {
        question: "JavaScript File Has An Extension of:",
        choiceA: "A) .java",
        choiceB: "B) .js",
        choiceC: "C) .script",
        choiceD: "D) .javascript",
        correctAnswer: "b",
    },
    {
        question: "JavaScript File Has An Extension of:",
        choiceA: "A) .java",
        choiceB: "B) .js",
        choiceC: "C) .script",
        choiceD: "D) .javascript",
        correctAnswer: "b",
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
    if (currentQuestion === lastQuestion) {}
    var q = questions[currentQuestion];

    questionEl.innerHTML = q.question;
    A.innerHTML = q.choiceA;
    B.innerHTML = q.choiceB;
    C.innerHTML = q.choiceC;
    D.innerHTML = q.choiceD;

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

function checkAnswer(answer) {
    correct = questions[currentQuestion].correctAnswer;
    console.log(correct, answer, currentQuestion);

    if (answer === correct) {
        totalPoints++;
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
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



    submitBtn.addEventListener("click", highScore);

    function highScore() {
        if (initials.value === "") {
            alert("Must input your initials!");
            return;
        } else {
            var savedHighscores =
                JSON.parse(localStorage.getItem("savedHighscores")) || [];
            var currentUser = initials.value.trim();
            var currentHighscore = {
                name: currentUser,
                totalPoints: timeRemaining
            };

            gameOverEl.style.display = "none";
            scoreList.style.display = "block";

            savedHighscores.push(currentHighscore);
            localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
            generateHighscores();
        }
    }

    function generateHighscores() {
        hsInitials.innerHTML = "";
        hsScore.innerHTML = "";

        var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        for (i = 0; i < highscores.length; i++) {
            var nameStorage = document.createElement("li");
            var scoreStorage = document.createElement("li");
            nameStorage.textContent = highscores[i].name;
            scoreStorage.textContent = highscores[i].totalPoints;
            hsInitials.appendChild(nameStorage);
            hsScore.appendChild(scoreStorage);
        }
    }


}
startBtn.addEventListener("click", startQuiz);





// function startQuiz() {
//     rules.style.display = "none";
//     generateQuiz();
// }
// function checkAnswer(answer) {
//     correct = questions[currentQuestion].correct;
//     if(answer === correct) {
//        alert("good job")
//         totalPoints++;
//     }
//     currentQuestion++;

// }


//  start.addEventListener("click", startQuiz);