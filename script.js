

// Create a variable to store the player's selection when prompted

let playerSelection = prompt("Enter rock, paper or scissors", );
playerSelection = playerSelection.toLowerCase();

if (
  (playerSelection !== "rock") &&
  (playerSelection !== "paper") &&
  (playerSelection !== "scissors")) {
   alert("Wrong word, check and enter again!");
  }

console.log("Player: " + playerSelection);

// Create a function to store the computer's random selection

function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
      return "rock";
    } else if (random === 2) {
      return "paper";
    } else if (random === 3) {
      return "scissors";
    }
}

// Create a function to play one round of the game

const computerSelection = computerPlay();

console.log("Computer: " + computerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It\'s a tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player Wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player Wins!"; 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Player Wins!";
    } else return "Computer Wins!"
  }

console.log(playRound(playerSelection, computerSelection));