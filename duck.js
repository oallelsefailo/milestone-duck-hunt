let ducks = []; // store multiple ducks
let isBackgroundLoaded = false;
let score = 0; // initialize score to 0
let isGameOver = false; // track game over state

function animateDuck(
  context,
  canvas,
  backgroundImage,
  spriteSheet,
  timeRemaining
) {
  const totalFrames = 4;
  const scale = 3;
  const duckWidth = spriteSheet.width;
  const duckHeight = spriteSheet.height / totalFrames;
  const frameWidth = duckWidth;
  const frameHeight = duckHeight;
  const duckSpeed = 3;
  //adding in a framerate and interval variable to call for the setTimeout function, thinking this might change something but no go
  // const frameRate = 5;
  // const interval = 100 / frameRate;
  const animationSpeed = 15;

  let currentFrame = 0;
  let gameInterval; // Interval ID for the game loop

  function createDuck() {
    const duck = {
      x: canvas.width,
      y: Math.random() * (canvas.height * 0.5 - frameHeight * scale),
    };
    ducks.push(duck);
  }

  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(backgroundImage, 0, 0);

    for (let i = 0; i < ducks.length; i++) {
      const duck = ducks[i];

      const frameX = 0;
      const frameY = Math.floor(currentFrame / totalFrames) * frameHeight;

      context.drawImage(
        spriteSheet,
        frameX,
        frameY,
        frameWidth,
        frameHeight,
        duck.x,
        duck.y,
        frameWidth * scale,
        frameHeight * scale
      );

      duck.x -= duckSpeed;

      if (duck.x + frameWidth * scale < 0) {
        // Duck went off the screen, remove it from the array
        ducks.splice(i, 1);
        i--;
      }
    }

    currentFrame = (currentFrame + 1) % (totalFrames * totalFrames);

    // Click event to remove duck if clicked on
    canvas.addEventListener("click", function (event) {
      const mouseX = event.clientX - canvas.offsetLeft;
      const mouseY = event.clientY - canvas.offsetTop;

      for (let i = 0; i < ducks.length; i++) {
        const duck = ducks[i];

        if (
          mouseX >= duck.x &&
          mouseX <= duck.x + frameWidth * scale &&
          mouseY >= duck.y &&
          mouseY <= duck.y + frameHeight * scale
        ) {
          const audio = new Audio("assets/gun_fire.wav");
          audio.play();
          // Duck clicked, remove it from the array and increment the score
          ducks.splice(i, 1);
          i--;
          score++;
        }
      }
    });

    // Display the score during gameplay
    context.font = "400 24px 'Agdosimo', sans-serif";
    context.textAlign = "center";
    context.fillText("Score: " + score, canvas.width / 2, 30);

    if (timeRemaining > 0 || ducks.length > 0) {
      requestAnimationFrame(animate);
    } else {
      gameOver(); // Call the gameOver() function when the game ends
    }
  }

  function startGame() {
    // Reset the score to 0 when starting the game
    score = 0;
    isGameOver = false;

    gameInterval = setInterval(function () {
      createDuck();
    }
    //setTimeout(animateDuck, animationSpeed);
    requestAnimationFrame(animateDuck, animationSpeed);
  }

  function gameOver() {
    isGameOver = true;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(backgroundImage, 0, 0);

    // Display the score and "GAME OVER" text
    context.font = "400 24px 'Agdosimo', sans-serif";
    context.textAlign = "center";
    context.fillText("Score: " + score, canvas.width / 2, 30); // Math divides the canvas and sets it from the top

    context.font = "bold 48px 'Agdosimo', sans-serif"; 
    context.shadowColor = "rgba(0, 0, 0, 0.5)";
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 4;
    context.fillStyle = "red"; // Set the text color to red
    context.fillText("GAME OVER", canvas.width / 2, canvas.height / 2); // Math same as Score

    // Reset the font and shadow settings for the score display
    context.fillStyle = "black";
    context.font = "400 24px 'Agdosimo', sans-serif";
    context.shadowColor = "transparent";
  }

  backgroundImage.addEventListener("load", function () {
    isBackgroundLoaded = true;
  });

  startGame();
}