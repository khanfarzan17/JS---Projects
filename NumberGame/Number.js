// script.js

let totalAttempts = parseInt(document.getElementById('totalAttempts').value);
let secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

function checkGuess() {
  const userGuessInput = document.getElementById('userGuess');
  const userGuess = parseInt(userGuessInput.value);
  const messageElement = document.getElementById('message');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageElement.textContent = 'Please enter a valid number between 1 and 100.';
  } else {
    totalAttempts--;

    if (userGuess === secretNumber) {
      messageElement.textContent = `Congratulations! You guessed the correct number: ${secretNumber}
       Thanks PLaying!`;
      disableInputAndButton();
    } else if (totalAttempts === 0) {
      messageElement.textContent = `Sorry, you've run out of attempts. The correct number was ${secretNumber}.`;
      disableInputAndButton();
    } else {
      messageElement.textContent = `Incorrect guess. ${totalAttempts} attempts remaining.`;
    }
  }
}

function resetGame() {
  totalAttempts = parseInt(document.getElementById('totalAttempts').value);
  secretNumber = Math.floor(Math.random() * 100) + 1;

  const userGuessInput = document.getElementById('userGuess');
  const messageElement = document.getElementById('message');

  userGuessInput.value = '';
  messageElement.textContent = '';

  enableInputAndButton();
}

function disableInputAndButton() {
  const userGuessInput = document.getElementById('userGuess');
  const totalAttemptsInput = document.getElementById('totalAttempts');
  const submitButton = document.querySelector('button');

  userGuessInput.disabled = true;
  totalAttemptsInput.disabled = true;
  submitButton.disabled = true;
}

function enableInputAndButton() {
  const userGuessInput = document.getElementById('userGuess');
  const totalAttemptsInput = document.getElementById('totalAttempts');
  const submitButton = document.querySelector('button');

  userGuessInput.disabled = false;
  totalAttemptsInput.disabled = false;
  submitButton.disabled = false;
}
