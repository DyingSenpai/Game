'use strict'
let elemHit = document.getElementById("hit");
let elemScore = document.getElementById("score");
let score = parseInt(elemScore.innerHTML);

//Clicker
elemHit.onclick = function() {
    score = score + 1;
    elemScore.innerHTML = score;
}