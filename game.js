//deprecated? ready function called
$(document).ready(function () {
  //variables for ID's - getContext to draw and clear canvas
  const canvas = $("#game-canvas")[0];
  const context = canvas.getContext("2d");
  const startButton = $("#start-button");

  const backgroundImage = new Image();
  backgroundImage.src = "assets/duck-hunt-bg.png";

  //on load function to pull the background image of the game
  $(backgroundImage).on("load", function () {
    context.drawImage(backgroundImage, 0, 0);
  });

  //on click function to change the crosshair and pull in the duck image
  startButton.on("click", function () {
    const duckImage = new Image();
    duckImage.src = "assets/duck-wings-down.png";

    $("#game-canvas").on("mouseenter", function () {
      $(this).addClass("canvas-cursor");
    });

    $("#game-canvas").on("mouseleave", function () {
      $(this).removeClass("canvas-cursor");
    });

    //clear the canvas to redraw and add in the duck
    //using math here to place the duck at a certain height of the canvas to test it's loading in
    duckImage.onload = function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(backgroundImage, 0, 0);
      context.drawImage(duckImage, 0, canvas.height * 0.1);
    };
  });
});

/* DRAWIMAGE / IMAGE OBJECT WILL NOT PLAY GIFS! 
HOW DO YOU ANIMATE A FRAME BY FRAME IMAGE TO MOVE ACROSS THE CANVAS LOOPING EACH FRAME */
