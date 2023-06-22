function animateDuck(context, canvas, backgroundImage, spriteSheet) {
  const totalFrames = 4;
  const scale = 3;
  const duckWidth = spriteSheet.width;
  const duckHeight = spriteSheet.height / totalFrames;
  const frameWidth = duckWidth;
  const frameHeight = duckHeight;
  const duckSpeed = 3;
  const animationSpeed = 15;

  let ducks = []; // store multiple ducks
  let currentFrame = 0;

  function createDuck() {
    const duck = {
      x: canvas.width,
      y: Math.random() * (canvas.height * 0.5 - frameHeight * scale), // should randomize the ducks position, but only to the top 50% of the canvas
    };
    ducks.push(duck);
  }

  function animateDuck() {
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
          // Duck clicked, remove it from the array
          ducks.splice(i, 1);
          i--;
        }
      }
    });

    // Randomly create a new duck at a random interval
    if (Math.random() < 0.01) {
      createDuck();
    }
    requestAnimationFrame(animateDuck, animationSpeed);
  }

  createDuck();
  animateDuck();
}
