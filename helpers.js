var score = document.getElementById("score");

var button = document.getElementById("button");
var button3 = document.getElementById("button3");

var sum = 0;

function count(){
    sum += 1;

    score.innerHTML = "Score: " + sum;
}

function reset(){
    sum = 0;

    score.innerHTML = "Score: " + sum;
}

button.addEventListener("click", count);
button3.addEventListener("click", reset);