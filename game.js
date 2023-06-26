$(document).ready(function () {
  const canvas = $("#game-canvas")[0];
  const context = canvas.getContext("2d");
  const startButton = $("#start-button");
  const timerElement = $("#timer");

  const backgroundImage = new Image();
  backgroundImage.src = "assets/duck-hunt-bg.png";

  $(backgroundImage).on("load", function () {
    context.drawImage(backgroundImage, 0, 0);
  });

  let gameInterval;
  let timeRemaining = 20;

  function startGame() {
    startButton.prop("disabled", true); // Disable the start button
    startButton.addClass("disabled"); // Add a disabled class for styling

    gameInterval = setInterval(function () {
      timeRemaining--;
      timerElement.text("Time: " + timeRemaining);

      if (timeRemaining <= 0) {
        endGame();
      }
    }, 1000);

    const spriteSheet = new Image();
    spriteSheet.src = "assets/duck-sprite-sheet.png";

    $("#game-canvas").on("mouseenter", function () {
      $(this).addClass("canvas-cursor");
    });

    $("#game-canvas").on("mouseleave", function () {
      $(this).removeClass("canvas-cursor");
    });

    $(spriteSheet).on("load", function () {
      animateDuck(context, canvas, backgroundImage, spriteSheet, timeRemaining);
    });
  }

  function endGame() {
    clearInterval(gameInterval); // Stop the timer interval
    startButton.prop("disabled", false); // Enable the start button
    startButton.removeClass("disabled"); // Remove the disabled class
    timeRemaining = 20; // Reset the time remaining
    timerElement.text("Time: " + timeRemaining);
  }

  startButton.on("click", startGame);
});
