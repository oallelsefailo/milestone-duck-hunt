function animateDuck(context, canvas, backgroundImage, spriteSheet) {
  const totalFrames = 4;
  const scale = 3;
  const duckWidth = spriteSheet.width / totalFrames;
  const duckHeight = spriteSheet.height / totalFrames;
  const frameWidth = duckWidth;
  const frameHeight = duckHeight;
  //^ NONE OF THIS WORKS TO MAKE THE FRAME BIGGER!!! IDK WHAT TO DO
  const duckSpeed = 18;
  const animationSpeed = 200;

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

      const frameX = (currentFrame % totalFrames) * frameWidth;
      const frameY = Math.floor(currentFrame / totalFrames) * frameHeight;

      context.drawImage(
        spriteSheet,
        frameX,
        frameY,
        frameWidth, // CANT GET FRAME BIGGER WITH THIS ONE
        frameHeight,
        duck.x,
        duck.y,
        frameWidth * scale, // THESE DONT WORK FOR MAKING THE FRAME BIGGER EITHER
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

    // Click even to remove duck if clicked on
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
          // Duck clicked, remove it from the array
          ducks.splice(i, 1);
          i--;
        }
      }
    });

    // Randomly create a new duck at a random interval
    if (Math.random() < 0.15) { 
      createDuck();
    }

    setTimeout(animateDuck, animationSpeed);
  }

  createDuck();
  animateDuck();
}
