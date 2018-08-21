var score = document.getElementById("score");

var button = document.getElementById("button");
var button3 = document.getElementById("button3");

var currentScore = 0;
var clickerMultiplier = 1;
var upgradeValue = 10;


function count()
    {
        currentScore += 1*clickerMultiplier;
        score.innerHTML = "Score: " + currentScore;
        clickerUpgrade();
    }

function clickerUpgrade()
    {

        if (upgradeValue<=currentScore)
        {
            clickerMultiplier+= clickerMultiplier;
            upgradeValue= upgradeValue*5;

        }
    }

function reset()
    {
        currentScore = 0;
        score.innerHTML = "Score: " + currentScore;
    }

// button.addEventListener("click", count);
// button.addEventListener("click", clickerUpgrade);
// button3.addEventListener("click", reset);