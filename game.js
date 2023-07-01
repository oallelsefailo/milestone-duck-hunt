$(document).ready(function () {
  const canvas = $("#game-canvas")[0];
  const context = canvas.getContext("2d");
  const startButton = $("#start-button");
  const timerElement = $("#timer");
  const counterUpButton = $("#counter-up");
  const counterDownButton = $("#counter-down");
  const counterValue = $("#counter-value");

  const backgroundImage = new Image();
  backgroundImage.src = "assets/duck-hunt-bg.png";

  $(backgroundImage).on("load", function () {
    context.drawImage(backgroundImage, 0, 0);
  });

  let gameInterval;
  let timeRemaining = 20;
  let duckSpeed = 1;
  let gameStarted = false;
  // Sets the game "difficulty" and defines the duckSpeed in the global variable
  counterUpButton.on("click", function () {
    if (!gameStarted) {
      duckSpeed++;
      counterValue.text(duckSpeed);
    }
  });

  counterDownButton.on("click", function () {
    if (!gameStarted && duckSpeed > 1) {
      duckSpeed--;
      counterValue.text(duckSpeed);
    }
  });

  function startGame() {
    startButton.prop("disabled", true);
    startButton.addClass("disabled");
    gameStarted = true;

    counterUpButton.prop("disabled", true);
    counterDownButton.prop("disabled", true);
    counterUpButton.addClass("disabled");
    counterDownButton.addClass("disabled");

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
      animateDuck(
        context,
        canvas,
        backgroundImage,
        spriteSheet,
        timeRemaining,
        duckSpeed
      );
    });
  }

  function endGame() {
    clearInterval(gameInterval);
    startButton.prop("disabled", false);
    startButton.removeClass("disabled");
    gameStarted = false;

    counterUpButton.prop("disabled", false);
    counterDownButton.prop("disabled", false);
    counterUpButton.removeClass("disabled");
    counterDownButton.removeClass("disabled");

    timeRemaining = 20;
    timerElement.text("Time: " + timeRemaining);
  }

  startButton.on("click", startGame);
});
