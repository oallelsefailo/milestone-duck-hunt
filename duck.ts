interface Duck {
  x: number;
  y: number;
}

function animateDuck(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  backgroundImage: HTMLImageElement,
  spriteSheet: HTMLImageElement
) {
  const totalFrames: number = 4;
  const scale: number = 3;
  const duckWidth: number = spriteSheet.width;
  const duckHeight: number = spriteSheet.height / totalFrames;
  const frameWidth: number = duckWidth;
  const frameHeight: number = duckHeight;
  const duckSpeed: number = 3;
  const animationSpeed: number = 15;

  let ducks: Duck[] = [];
  let currentFrame: number = 0;

  function createDuck() {
    const duck: Duck = {
      x: canvas.width,
      y: Math.random() * (canvas.height * 0.5 - frameHeight * scale),
    };
    ducks.push(duck);
  }

  function animateDuckFrame() {
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
        ducks.splice(i, 1);
        i--;
      }
    }

    currentFrame = (currentFrame + 1) % (totalFrames * totalFrames);

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
          ducks.splice(i, 1);
          i--;
        }
      }
    });

    if (Math.random() < 0.01) {
      createDuck();
    }
    requestAnimationFrame(animateDuckFrame);
  }

  createDuck();
  animateDuckFrame();
}
