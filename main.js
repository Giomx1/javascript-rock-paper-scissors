const computerChoiceOutput = document.getElementById("computer-choice");
const userChoiceOutput = document.getElementById("user-choice");
const resultOutput = document.getElementById("result");
const allButtons = document.querySelectorAll("button");
let userChoice
let computerChoice
let result
const reset = document.getElementById("resetButton")

function createComputerChoice() {//function to store random number, 3 and assigning an object to each number.
  let randomNumber = Math.floor(Math.random() * 3)
  
  if (randomNumber === 1) {
    computerChoice = "rock"
  }
  if (randomNumber === 2) {
    computerChoice = "paper"
  }
  if (randomNumber === 3) {
    computerChoice = "scissors"
  }
  
  computerChoiceOutput.innerHTML = computerChoice;
}

function theResults() {//programming outcomes of wins, losses, and ties.
  if (computerChoice === userChoice) {
    result = "tie"
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost"
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lost"
  }
   if (computerChoice === "scissors" && userChoice === "paper") {
     result = "you lost"
   }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win"
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win"
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win"
  }
  resultOutput.innerHTML = result;  
}


allButtons.forEach(button => button.addEventListener("click", (e) => {//I want to go through every button and add an event listener.
  userChoice = e.target.id;//Whenever I click  I want to bring back the ids of the buttons, which are the objects.
  userChoiceOutput.innerHTML = userChoice
  createComputerChoice()
  theResults()
}));

function resetGame() {
  computerChoiceOutput.innerHTML = "";
  userChoiceOutput.innerHTML = "";
  resultOutput.innerHTML = "";
}
reset.addEventListener("click", resetGame)