var score = document.getElementById("score");

var button = document.getElementById("button");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var counter = 1;
var autoCount =0;
var level = 20;
var time = 1000;
button3.disabled = true;
button4.disabled = true;
var checkSum;

var sum = 0;
function upgradeCounter() {
    counter *= 2;
    button3.disabled = true;
    button4.disabled = true;

    button.innerText = "+" + counter;
    sum = sum-(level/2);
}

function upgradeAutoCounter() {
    autoCount+=1;
    autoCount *= 2;
    button3.disabled = true;
    button4.disabled = true;
    sum = sum-(level/2);
    time = time-1000;


}


var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}



// function upgradelevel(){
//     //update counters for either auto counter or counter
//
//
//     }




function autoClicker(){
    setInterval(function(){
        sum+=autoCount;
        score.innerHTML = "Score: " + sum;
        if (sum >= level) {
            button3.disabled = false;
            button4.disabled = false;
            level = level*2;

        }
    },time)
}



function count() {
    sum += counter;

    score.innerHTML = "Score: " + sum;
    if (sum >= level) {
        button3.disabled = false;
        button4.disabled = false;
        level = level*2;

    }
}

function reset(){
    sum = 0;

    score.innerHTML = "Score: " + sum;
}
autoClicker();
button3.addEventListener("click",upgradeCounter);

button.addEventListener("click", count);

button4.addEventListener("click",upgradeAutoCounter);

 //