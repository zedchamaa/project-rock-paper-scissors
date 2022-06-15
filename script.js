// Create variables for player vs computer

let player;
let playerScore = 0;
let computer;
let computerScore = 0;

// Create an array to store the choices

let choices = ["rock", "paper", "scissors"];

// Create a function to populate the 3 choices into the player-choices div 

window.onload = function() {
  for (let i = 0; i <3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("player-choices").append(choice);
  }
}

// Create a function to select the choices of the player and computer, and then update their score

function selectChoice() {
  player = this.id;
  document.getElementById("player-choice").src = player + ".png";

  // random choice for computer
  computer = choices[Math.floor(Math.random() * 3)];
  document.getElementById("computer-choice").src = computer + ".png";

  // check for winner
  if (player === computer) {
    playerScore += 1;
    computerScore += 1;
  }

  else {
    if (player === "rock") {
      if (computer === "paper") {
        computerScore += 1;
      }
      else if (computer === "scissors") {
        playerScore += 1;
      }
    }
    else if (player === "paper") {
      if (computer === "rock") {
        playerScore += 1;
      }
      else if (computer === "scissors") {
        computerScore += 1;
      }
    }
    else if (player === "scissors") {
      if (computer === "rock") {
        computerScore += 1;
      }
      else if (computer === "paper") {
        playerScore += 1;
      }
    }
  }

  // update score
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("computer-score").innerText = computerScore;
}