var quizForm = document.querySelector(".quiz-form");
var submitAnswerBtn = document.querySelector("#button-id");
var outputAns = document.querySelector("#output");
var correctAnswers = ["90°", "Right-angled"];

submitAnswerBtn.addEventListener("click", calcScore);

function calcScore(){
    let score = 0;
    let index = 0;
    var result = new FormData(quizForm);
    for(let value of result.values()){
        if(value === correctAnswers[index]){
            score = score +1;
        }
        index++;
    }
    outputAns.innerText = "Your score is " + score;
}