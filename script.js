// Create variables for player vs computer

let playerChoice;
let playerScore = 0;
let computerChoice;
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
  playerChoice = this.id;
  document.getElementById("player-choice").src = playerChoice + ".png";

  // random choice for computer
  computerChoice = choices[Math.floor(Math.random() * 3)];
  document.getElementById("computer-choice").src = computerChoice + ".png";

  // check for winner
  if (playerChoice === computerChoice) {
    playerScore += 1;
    computerScore += 1;
  }

  else {
    if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        computerScore += 1;
      }
      else if (computerChoice === "scissors") {
        playerScore += 1;
      }
    }
    else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        playerScore += 1;
      }
      else if (computerChoice === "scissors") {
        computerScore += 1;
      }
    }
    else if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        computerScore += 1;
      }
      else if (computerChoice === "paper") {
        playerScore += 1;
      }
    }
  }

  // update score
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("computer-score").innerText = computerScore;
}