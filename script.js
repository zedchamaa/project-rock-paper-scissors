

// Create a variable to store the player's selection when prompted

let playerSelection = prompt("Enter Rock, Paper or Scissors", );

// Create a function to store the computer's random selection

function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
      return "rock";
    } else if (random === 2) {
      return "paper";
    } else return "scissors";
}

// Create a function to play one round of the game

function playRound(playerSelection, computerPlay) {
  if (playerSelection === "rock" && computerPlay === "scissors") {
    return "You Lose! Rock beats Scissors.";
  } else if (playerSelection === "scissors" && computerPlay === "paper") {
    return "You Lose! Scissors beat Paper.";
  } else if (playerSelection === "rock" && computerPlay === "paper") {
    return "You Lose! Paper beats Rock.";
  }
}

