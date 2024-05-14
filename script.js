// Rock, Paper & Scissors

// Set up an Array of choices with string's type; ✅
const choices = ["Rock", "Paper", "Scissors"];

// Set Up Variables: Create variables to store the player's choice, computer's choice, and the game result. ✅
// Update the DOM: Update the DOM to display the player's choice, computer's choice, and the game result. ✅
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

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
}

// Add Event Listeners: Add event listeners to the Rock, Paper, and Scissors buttons to allow the player to make a choice.

// Call Functions:Call the function to generate the computer's choice when the player makes their choice.
// Call the function to play the game and display the result.

// Handle Game Result: Update the game result based on the outcome of the game (win, lose, or tie).

// Reset the Game: Allow the player to play again by resetting the choices and result.

// Test Your Game: Test your game by playing multiple rounds to ensure it functions correctly.

// Refactor and Optimize: Review your code, refactor any repetitive or unnecessary code, and optimize the logic for better performance.
