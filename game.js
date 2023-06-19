$(document).ready(function () {
  const canvas = $("#game-canvas")[0];
  const context = canvas.getContext("2d");
  const startButton = $("#start-button");

  const backgroundImage = new Image();
  backgroundImage.src = "assets/duck-hunt-bg.png";

  $(backgroundImage).on("load", function () {
    context.drawImage(backgroundImage, 0, 0);
  });

  startButton.on("click", function () {
    const spriteSheet = new Image();
    spriteSheet.src = "assets/duck-sprite-sheet.png";

    $("#game-canvas").on("mouseenter", function () {
      $(this).addClass("canvas-cursor");
    });

    $("#game-canvas").on("mouseleave", function () {
      $(this).removeClass("canvas-cursor");
    });

    $(spriteSheet).on("load", function () {
      animateDuck(context, canvas, backgroundImage, spriteSheet);
    });
  });
});
