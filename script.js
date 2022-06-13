// The choices and round scores are stores in arrays

const choices = ["rock", "paper", "scissors"];
const roundScores = [];

// The total score of one completed game is stored in an object

const count = {};

// When called, this function will play one full game

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(i + 1);
  }
  console.log(roundScores);
  console.log(totalScore());
}

// When called, this function plays one round between the player and the computer

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log("Round: " + round);
  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);
  console.log(winner);
  if (winner === "Player Wins!") {
    roundScores.push("player");
  } else if (winner === "Computer Wins!") {
    roundScores.push("computer");
  } else roundScores.push("tie");
  console.log("---------------------------------------------------------");
}

// When called, this function prompts the player to enter a choice between rock, paper or scissors 

function playerChoice() {
  let input = prompt("Enter rock, paper or scissors", );
  input = input.toLowerCase();
  if (
    input === choices[0] ||
    input === choices[1] ||
    input === choices[2]) {
      return input;
    }
  else prompt("Enter rock, paper or scissors", );
}

// When called, this function will randomly generate the computer's choice between rock, paper and scissors

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// When called, this function will check the winner between the player and the computer

function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It\'s a tie";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "Player Wins!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "Player Wins!"; 
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "Player Wins!";
    } else return "Computer Wins!"
}

// When called, this function will store the final score

function totalScore() {
  roundScores.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  console.log(count);
}

// This function call triggers the game to start

game();