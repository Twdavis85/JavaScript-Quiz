var quiz = document.querySelector(".quiz")
var timer = document.querySelector(".timer")
var rules = document.querySelector(".rules")
var start = document.querySelector(".start")
var question = document.querySelector("#question")
var gameover = document.querySelector(".gameover")
var score = document.querySelector(".score")
var initials = document.querySelector("#initials")
var submit = document.querySelector(".submit")
var scorelist = document.querySelector(".scorelist")
var scorecard = document.querySelector("#scorecard")
var hsinitials = document.querySelector(".hs-initials")
var hsscore = document.querySelector(".hs-score")
var results = document.querySelector("#results")

var choiceA = document.querySelector("#a")
var choiceB = document.querySelector("#b")
var choiceC = document.querySelector("#c")
var choiceD = document.querySelector("#d")

var questions = [
{
    question : "JavaScript File Has An Extension of:",
    choiceA : "A) .java",
    choiceB : "B) .js",
    choiceC : "C) .script",
    choiceD : "D) .javascript",
    correct : "b",
},
{
    question : "Which of the following is not a JavaScript data type:",
    choiceA : "A) string",
    choiceB : "B) boolean",
    choiceC : "C) document",
    choiceD : "D) number",
    correct : "c",
},
{
    question : "JavaScript File Has An Extension of:",
    choiceA : "A) .java",
    choiceB : "B) .js",
    choiceC : "C) .script",
    choiceD : "D) .javascript",
    correct : "b",
},
{
    question : "JavaScript File Has An Extension of:",
    choiceA : "A) .java",
    choiceB : "B) .js",
    choiceC : "C) .script",
    choiceD : "D) .javascript",
    correct : "b",
},
{
    question : "JavaScript File Has An Extension of:",
    choiceA : "A) .java",
    choiceB : "B) .js",
    choiceC : "C) .script",
    choiceD : "D) .javascript",
    correct : "b",
},
{
    question : "JavaScript File Has An Extension of:",
    choiceA : "A) .java",
    choiceB : "B) .js",
    choiceC : "C) .script",
    choiceD : "D) .javascript",
    correct : "b",
},

];

var lastQuestion = questions.length;
var runQuiz = 0;

quiz.style.display = "none";
scorelist.style.display = "none";

function generateQuiz() {
    if (runQuiz === lastQuestion) {
    }
    var q = questions[runQuiz];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    quiz.style.display = "block";   
}
 
function startQuiz() {
    rules.style.display = "none";
    generateQuiz();
}

 start.addEventListener("click", startQuiz);


