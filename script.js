

// Create a variable to store the player's selection when prompted

let playerSelection = prompt("Enter Rock, Paper or Scissors", );
console.log(playerSelection);

// Create a function to store the computer's random selection

function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
      return "rock";
    } else if (random === 2) {
      return "paper";
    } else return "scissors";
}

