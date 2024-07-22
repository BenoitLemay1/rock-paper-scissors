// allo

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const rand = Math.random();
  let computerChoice = "";
  if (rand < 0.33) {
    computerChoice = "rock";
  } else if (rand >= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("rock, paper, scissors?");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    return "Both chose: " + humanChoice + " It's a tie";
  }
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      return (
        "Human: " +
        humanChoice +
        ". Computer: " +
        computerChoice +
        ". Human wins"
      );
    } else {
      computerScore++;
      return (
        "Human: " +
        humanChoice +
        ". Computer: " +
        computerChoice +
        ". Computer wins"
      );
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      return (
        "Human: " +
        humanChoice +
        ". Computer: " +
        computerChoice +
        ". Human wins"
      );
    } else {
      computerScore++;
      return (
        "Human: " +
        humanChoice +
        ". Computer: " +
        computerChoice +
        ". Computer wins"
      );
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      humanScore++;
      return (
        "Human: " +
        humanChoice +
        ". Computer: " +
        computerChoice +
        ". Human wins"
      );
    } else {
      computerScore++;
      return (
        "Human: " +
        humanChoice +
        ". Computer: " +
        computerChoice +
        ". Computer wins"
      );
    }
  }
}

function playGame() {
  while (humanScore < 2 && computerScore < 2) {
    console.log(playRound());
    console.log(humanScore, computerScore);
  }
  if (humanScore > computerScore) {
    return "Human wins tournament";
  } else {
    return "Computer wins tournament";
  }
}

console.log(playGame());
