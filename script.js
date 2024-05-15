// Rock, Paper & Scissors

// Set up an Array of choices with string's type; ✅
const choices = ["Rock", "Paper", "Scissors"];

// Set Up Variables: Create variables to store the player's choice, computer's choice, and the game result. ✅
// Update the DOM: Update the DOM to display the player's choice, computer's choice, and the game result. ✅
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Create variables to track and display the player's and computer's scores; ✅
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

// Create a Function that takes the player's choice as input; ✅
function playGame(playerChoice) {
  // Create a Computer's choice that randomly selects Rock, Paper, or Scissors; ✅
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = " ";
  // Compares player'choice with the computer's choice; ✅
  // determines the game result (win, lose, or tie). ✅
  if (playerChoice === computerChoice) {
    result = "It's a TIE!";
  } else {
    switch (playerChoice) {
      case "Rock":
        result = computerChoice === "Scissors" ? "You WIN!" : "You LOSE!";
        break;
      case "Paper":
        result = computerChoice === "Rock" ? "You WIN!" : "You LOSE!";
        break;
      case "Scissors":
        result = computerChoice === "Paper" ? "You WIN!" : "You LOSE!";
        break;
    }
  }
  // Updated text content on the screen to display player's choice, computer's choice, and game result; ✅
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  // Restore 'It's a TIE!' to its original state; ✅
  resultDisplay.classList.remove("greenText", "redText");

  // Examine the result and assign a text color of green for winning and red for losing; ✅
  switch (result) {
    case "You WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore; // Adding score and displaying for the player; ✅
      break;
    case "You LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore; // Adding score and displaying for the computer; ✅
      break;
  }
}

// Game tested by playing multiple rounds to ensure it functions correctly. ✅
// Update the game result based on the outcome of the game. ✅
// Generate the computer's choice when the player makes their choice. ✅
// Code reviewed, logic optimize for better performance and understanding, also any repetitive or unnecessary code refactored. ✅
