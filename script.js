"use strict";
// console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent="Correct Guess"
// console.log(document.querySelector(".message").textContent)

// document.querySelector(".score").textContent=10
// document.querySelector(".number").textContent=10
// document.querySelector(".guess").value=34
var secret = Math.trunc(Math.random() * 20) + 1;
var score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent =
      "you have not entered the number";
  } else if (guess === secret) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "blue";
    var x = Number(document.querySelector(".highscore").textContent);
    if (score > x) {
      document.querySelector(".highscore").textContent = score;
    }

    document.querySelector(".number").style.padding = "3rem 15rem";
  } else if (guess > secret) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.padding = "3rem 0rem";
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
});
