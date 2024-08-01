const scoreAElement = document.getElementById("scoreA");
const scoreBElement = document.getElementById("scoreB");

let scoreA = 0;
let scoreB = 0;

function updateScores() {
  scoreAElement.textContent = scoreA;
  scoreBElement.textContent = scoreB;
}

document.getElementById("teamA").addEventListener("click", function () {
  scoreA++;
  updateScores();
  checkWinner();
});

document.getElementById("teamB").addEventListener("click", function () {
  scoreB++;
  updateScores();
  checkWinner();
});

function checkWinner() {
  if (scoreA >= 10 || scoreB >= 10) {
    if (scoreA > scoreB) {
      alert("Team A wins!");
    } else if (scoreB > scoreA) {
      alert("Team B wins!");
    } else {
      alert("It's a tie!");
    }
    scoreA = 0;
    scoreB = 0;
    updateScores();
  }
}
