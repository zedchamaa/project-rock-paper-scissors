const choices = ["rock", "paper", "scissors"];
const roundScores = [];
const count = {};

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(i + 1);
  }
  console.log(roundScores);
  console.log(totalScore());
}

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

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

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

function totalScore() {
  roundScores.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  console.log(count);
}

game();