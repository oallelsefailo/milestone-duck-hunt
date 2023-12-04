$(document).ready(function () {
  const canvas: HTMLCanvasElement = $("#game-canvas")[0] as HTMLCanvasElement;
  const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
  const startButton: JQuery<HTMLElement> = $("#start-button");

  const backgroundImage: HTMLImageElement = new Image();
  backgroundImage.src = "assets/duck-hunt-bg.png";

  $(backgroundImage).on("load", function () {
    if (context) {
      context.drawImage(backgroundImage, 0, 0);
    }
  });

  startButton.on("click", function () {
    const spriteSheet: HTMLImageElement = new Image();
    spriteSheet.src = "assets/duck-sprite-sheet.png";

    $("#game-canvas").on("mouseenter", function () {
      $(this).addClass("canvas-cursor");
    });

    $("#game-canvas").on("mouseleave", function () {
      $(this).removeClass("canvas-cursor");
    });

    $(spriteSheet).on("load", function () {
      if (context) {
        animateDuck(context, canvas, backgroundImage, spriteSheet);
      }
    });
  });
});
