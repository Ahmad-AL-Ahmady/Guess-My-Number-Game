'use strict';

// Numeric variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
  highScore = 0;

const changeContent = function (className, message) {
  document.querySelector(className).textContent = message;
};

// Handling Check Click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    changeContent('.message', '⛔️ No number !');
  }

  // When player wins
  else if (guess === secretNumber) {
    changeContent('.message', '🎉 Correct number !');
    changeContent('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      changeContent('.highscore', highScore);
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      changeContent(
        '.message',
        guess > secretNumber ? '📈 Too high !' : '📉 Too low !'
      );
      score--;
      changeContent('.score', score);
    } else {
      changeContent('.message', '💥 You lost the game !');
      score--;
      changeContent('.score', 0);
    }
  }
});

// Handling Again Click
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  changeContent('.score', score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeContent('.message', 'Start guessing...');
  changeContent('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
