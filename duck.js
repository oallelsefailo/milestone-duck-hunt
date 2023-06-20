function animateDuck(context, canvas, backgroundImage, spriteSheet) {
  const totalFrames = 4;
  //Tried making the bottom 5 properties bigger with adding math to it, didn't work
  //is it the duck width thats the problem or the rate of which the frames move that's the problem?
  //either way i can't figure it out
  const scale = 3;
  const duckWidth = (spriteSheet.width / totalFrames) * 4;
  const duckHeight = spriteSheet.height / totalFrames;
  const frameWidth = duckWidth;
  const frameHeight = duckHeight;
  const duckSpeed = 9;
  //adding in a framerate and interval variable to call for the setTimeout function, thinking this might change something but no go
  // const frameRate = 5;
  // const interval = 100 / frameRate;
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

      const frameX = (currentFrame % totalFrames) * frameWidth;
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
          // Duck clicked, remove it from the array
          ducks.splice(i, 1);
          i--;
        }
      }
    });

    // Randomly create a new duck at a random interval
    if (Math.random() < 0.05) {
      createDuck();
    }
    //setTimeout(animateDuck, animationSpeed);
    setTimeout(animateDuck, animationSpeed);
  }

  createDuck();
  animateDuck();
}
