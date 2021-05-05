const myGuess = Math.floor(Math.random() * 20) + 1;
// Keep track of the number of guesses the player has made
let guesses = 0;
// The player's guess
let guess;

// The simplest loop possible. While the player's guess
// doesn't equal the computer's number ...
while (guess !== myGuess) {
  // Prompt to get a guess from the player
  guess = parseInt(prompt("What number am I thinking of?"), 10);
  // Increment the number of guesses
  guesses++;
  // If the player's guess is too low, tell them to 
  // go higher
  if (guess < myGuess) {
    alert("Higher.");
  // else tell them to go lower
  } else if (guess > myGuess) {
    alert("Lower.");
  }
}

alert(`Well done! You got it in ${ guesses }!`);
