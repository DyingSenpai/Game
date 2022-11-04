'use strict'
let elemHit = document.getElementById("hit");
let elemScore = document.getElementById("score");
let elemBuyWeapon = document.getElementById("buyWeapon");
let elemScorePersec = document.getElementById("scorePerSec");

let score = parseInt(elemScore.innerHTML);
let scorePerSec = parseInt(elemScorePersec.innerHTML);

let updateScore = function(score) {
    elemScore.innerHTML = score;
}

let updateScorePerSec = function(scorePerSec) {
    elemScorePersec.innerHTML = scorePerSec;
}

//Clicker
elemHit.onclick = function() {
    score += 1;
    updateScore(score);
}

elemBuyWeapon.onclick = function() {
    if(score < 20) {
        alert("not enough gold");
    }
    else {
        score -= 20;
        scorePerSec += 1;
        updateScore(score);
        updateScorePerSec(scorePerSec);
        hitPerSec(scorePerSec);
    }
}

let hitPerSec = function(scorePerSec) {
    setInterval(() => {
        score += scorePerSec;
        updateScore(score);
    }, 1000);
}