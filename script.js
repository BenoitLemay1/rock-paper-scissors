let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rockBtn");
const results = document.querySelector("#round-result");
const scores = document.querySelector("#scores");
const finalResult = document.querySelector("#final-result");

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

// function getHumanChoice() {
//   let humanChoice = prompt("rock, paper, scissors?");
//   humanChoice = humanChoice.toLowerCase();
//   return humanChoice;
// }

function playRound(humanChoice) {
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
    if (computerChoice === "paper") {
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

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  results.innerText = "";
  scores.innerText = "";
  finalResult.innerText = "";
}

rockBtn.addEventListener("click", function () {
  results.innerText = playRound("rock");
  scores.innerText = `Human: ${humanScore} Computer: ${computerScore}`;
  if (humanScore === 3 || computerScore === 3) {
    finalResult.innerText =
      humanScore === 3 ? "Human wins tournament" : "Computer wins tournament";
  }
});

paperBtn.addEventListener("click", function () {
  results.innerText = playRound("paper");
  scores.innerText = `Human: ${humanScore} Computer: ${computerScore} `;
  if (humanScore === 3 || computerScore === 3) {
    finalResult.innerText =
      humanScore === 3 ? "Human wins tournament" : "Computer wins tournament";
  }
});

scissorsBtn.addEventListener("click", function () {
  results.innerText = playRound("scissors");
  scores.innerText = `Human: ${humanScore} Computer: ${computerScore} `;
  if (humanScore === 3 || computerScore === 3) {
    finalResult.innerText =
      humanScore === 3 ? "Human wins tournament" : "Computer wins tournament";
  }
});
