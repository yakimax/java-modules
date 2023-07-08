window.onload = function () {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  const marioWidth = 32;
  const marioHeight = 32;
  let x = 50;
  let y = canvas.height - marioHeight;
  let xVelocity = 0;
  let yVelocity = 0;
  let isJumping = false;
  const jumpStrength = 12;
  const gravity = 0.5;

  const platformWidth = 100;
  const platformHeight = 10;
  const platforms = [
    { x: 100, y: 400 },
    { x: 250, y: 300 },
    { x: 400, y: 200 },
    { x: 550, y: 100 },
    { x: 250, y: 500 }, // Lower platform
  ];

  let leftPressed = false;
  let rightPressed = false;

  let score = 0;
  let lives = 3;

  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);

  function keyDownHandler(event) {
    if (event.key === 'ArrowLeft') {
      leftPressed = true;
    } else if (event.key === 'ArrowRight') {
      rightPressed = true;
    } else if (event.key === 'ArrowUp' && !isJumping) {
      isJumping = true;
      yVelocity -= jumpStrength;
    }
  }

  function keyUpHandler(event) {
    if (event.key === 'ArrowLeft') {
      leftPressed = false;
    } else if (event.key === 'ArrowRight') {
      rightPressed = false;
    }
  }

  function drawMario() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, marioWidth, marioHeight);
  }

  
  function drawPlatforms() {
    ctx.fillStyle = 'gray';
    platforms.forEach((platform) => {
      ctx.fillRect(platform.x, platform.y, platformWidth, platformHeight);
    });
  }



  function drawScore() {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score, 10, 20);
  }

  function drawLives() {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Lives: ' + lives, canvas.width - 80, 20);
  }



  function updateMarioPosition() {
    // Horizontal movement
    if (leftPressed) {
      xVelocity = -5;
    } else if (rightPressed) {
      xVelocity = 5;
    } else {
      xVelocity = 0;
    }

    // Vertical movement (jumping and gravity)
    yVelocity += gravity;
    y += yVelocity;

    // Ground collision detection
    if (y > canvas.height - marioHeight) {
      y = canvas.height - marioHeight;
      yVelocity = 0;
      isJumping = false;
    }

    // Platform collision detection
    platforms.forEach((platform) => {
      if (
        y + marioHeight >= platform.y &&
        y + marioHeight <= platform.y + platformHeight &&
        x + marioWidth >= platform.x &&
        x <= platform.x + platformWidth &&
        yVelocity >= 0
      ) {
        y = platform.y - marioHeight;
        yVelocity = 0;
        isJumping = false;
      }
    });

    // Update Mario's position
    x += xVelocity;

    // Screen boundary check
    if (x < 0) {
      x = 0;
    } else if (x > canvas.width - marioWidth) {
      x = canvas.width - marioWidth;
    }
  }

  function drawEnemies() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(300, canvas.height - marioHeight, marioWidth, marioHeight);
  }

  function updateEnemies() {
    // Basic enemy movement
    const enemySpeed = 2;
    const enemyWidth = marioWidth;
    const enemyHeight = marioHeight;
    const enemyX = 300;
    const enemyY = canvas.height - enemyHeight;

    if (x < enemyX + enemyWidth && x + marioWidth > enemyX && y < enemyY + enemyHeight && y + marioHeight > enemyY) {
      // Mario collided with enemy
      lives--;
      if (lives === 0) {
        gameOver();
      } else {
        resetPosition();
      }
    }
  }

  function gameOver() {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
  }

  function resetPosition() {
  x = 50;
  y = canvas.height - marioHeight;
  xVelocity = 0;
  yVelocity = 0;
  isJumping = false;
}


  function collectCoin() {
    score += 10;
  }

  function drawCoins() {
    ctx.fillStyle = 'gold';
    ctx.fillRect(200, 350, marioWidth, marioHeight);
  }

  function updateCoin() {
    const coinWidth = marioWidth;
    const coinHeight = marioHeight;
    const coinX = 200;
    const coinY = 350;

    if (
      x < coinX + coinWidth &&
      x + marioWidth > coinX &&
      y < coinY + coinHeight &&
      y + marioHeight > coinY
    ) {
      collectCoin();
    }
  }

  function gameLoop() {
    updateMarioPosition();
    updateEnemies();
    updateCoin();
    drawMario();
    drawPlatforms();
    drawEnemies();
    drawCoins();
    drawScore();
    drawLives();
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
};
