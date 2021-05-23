var quizEl = document.querySelector(".quiz");
var timerEl = document.querySelector(".timer");
var rulesEl = document.querySelector(".rules");
var startBtn = document.querySelector(".start");
var questionEl = document.querySelector("#question");
var gameOverEl = document.querySelector("#gameover");
var scoreEl = document.querySelector(".score");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector(".submit");
var scoreList = document.querySelector(".scorelist");
var resultsEl = document.querySelector("#results");
var plusPoints = 10;
var minusPoints = 5;
var list = document.querySelector(".list");

var questions = [
  {
    question: "JavaScript File Has An Extension of:",
    choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
    correctAnswer: "B) .js",
  },
  {
    question: "Which of the following is not a JavaScript data type:",
    choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
    correctAnswer: "B) .js",
  },
  {
    question: "JavaScript File Has An Extension of:",
    choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
    correctAnswer: "B) .js",
  },
  {
    question: "JavaScript File Has An Extension of:",
    choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
    correctAnswer: "B) .js",
  },
  {
    question: "JavaScript File Has An Extension of:",
    choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
    correctAnswer: "B) .js",
  },
  {
    question: "JavaScript File Has An Extension of:",
    choices: ["A) .java", "B) .js", "C) .script", "D) .javascript"],
    correctAnswer: "B) .js",
  },
];

var lastQuestion = questions.length;
var currentQuestion = 0;
var totalPoints = 0;
var timeStart = 60;
var timer;
var correct;
var penalty = 7;

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
  var choicesDiv = document.querySelector(".choices");
  choicesDiv.innerHTML = "";
  questionEl.innerHTML = q.question;
  q.choices.forEach(function (choice) {
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = choice;
    choiceBtn.setAttribute("value", choice);
    choiceBtn.onclick = checkAnswer;
    choicesDiv.appendChild(choiceBtn);
  });
  quizEl.style.display = "block";
}

function showHighScore() {
  rulesEl.style.display = "none";
  quizEl.style.display = "none";
  gameOverEl.style.display = "none";
  scoreList.style.display = "block";
  displayHighscores();
  setTimeout(disableFunction, 1);
}

function clearScore() {
  window.localStorage.clear();
  list.textContent = "";
}

function replayQuiz() {
  scoreList.style.display = "none";
  gameOverEl.style.display = "none";
  quizEl.style.display = "none";
  rulesEl.style.display = "block";
  return generateQuiz;
}

function checkAnswer() {
  console.log(this);
  correct = questions[currentQuestion].correctAnswer;
  console.log(correct, currentQuestion);
  console.log(totalPoints);

  if (this.value === correct) {
    totalPoints = totalPoints + plusPoints;
    resultsEl.textContent = "✔️";
    setTimeout(function () {
      resultsEl.textContent = "";
    }, 500);
  } else {
    resultsEl.textContent = "❌";
    setTimeout(function () {
      resultsEl.textContent = "";
    }, 500);
    timeStart = timeStart - penalty;
    totalPoints = totalPoints - minusPoints;
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
  gameOverEl.classList.remove("hide");
  if (timeStart === 0) {
    timerEl.textContent = "Time's up!";
  } else {
    timerEl.textContent = "";
  }
  clearInterval(timer);
  if (timeStart >= 0) {
    scoreEl.innerHTML = "";
    scoreEl.textContent = "Your final score is: " + totalPoints;
    quizEl.style.display = "none";
  }
}

submitBtn.onclick = highScore;

function highScore() {
  var savedHighscores = JSON.parse(localStorage.getItem("savedScores")) || [];
  var scoreObj = {
    name: initials.value.trim().toUpperCase(),
    score: totalPoints,
  };
  gameOverEl.style.display = "none";
  scoreList.style.display = "block";

  console.log(scoreObj);
  savedHighscores.push(scoreObj);
  localStorage.setItem("savedScores", JSON.stringify(savedHighscores));
  displayHighscores();
}

function displayHighscores() {
  var highscores = JSON.parse(localStorage.getItem("savedScores")) || [];

  for (i = 0; i < highscores.length; i++) {
    var hsEntry = document.createElement("li");
    hsEntry.textContent =
      highscores[i].name + "------------" + highscores[i].score;
    list.appendChild(hsEntry);
  }
}

console.log(initials.value);
startBtn.addEventListener("click", startQuiz);
