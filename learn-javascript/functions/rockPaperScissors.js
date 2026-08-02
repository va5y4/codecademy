const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === "rock" || userInput === "paper" || userInput === "scissors")
    return userInput;
    if (userInput === "bomb")
    return userInput;
  else return console.log("Error!");
};

let getComputerChoice = (randomNumber) => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "It's a tie";
  if (userChoice === "rock") {
    if (computerChoice === "paper") return "Computer won";
    else return "User won";
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") return "Computer won";
    else return "User won";
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") return "Computer won";
    else return "User won";
  }
  if (userChoice === "bomb") return "User won";
}

function playGame() {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice("paper");

  console.log("User is " + userChoice);
  console.log("Computer is " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
