/* SWAPPING TO JQUERY, MIGHT BE EASIER/CLEANER TO READ 
KEEPING THIS FILE HERE AS A FALL BACK JUST IN CASE */

//getting the element by ID
const canvas = document.getElementById("game-canvas");
//getContext returns a drawing context used in this case for line 12
const context = canvas.getContext("2d");
const startButton = document.getElementById("start-button");

//creating backgroundImage object with new Image
const backgroundImage = new Image();
backgroundImage.src = "assets/duck-hunt-bg.png";

backgroundImage.onload = function () {
  context.drawImage(backgroundImage, 0, 0);
};

//Event listener to change the cursor to the crosshai.png designated in the style sheet
//if the user mouses over the canvas. If failed to load, goes back to the auto cursor
canvas.addEventListener("mouseover", function () {
  canvas.classList.add("canvas-cursor");
});

canvas.addEventListener("mouseout", function () {
  canvas.classList.remove("canvas-cursor");
});

startButton.addEventListener("click", function () {
  const duckImage = new Image();
  duckImage.src = "assets/duck-flying.gif";

  duckImage.onload = function () {
    //Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Putting background image back in
    context.drawImage(backgroundImage, 0, 0);

    //Randomly placing the duck image in the canvas
    const duckX = Math.random() * (canvas.width - duckImage.width);
    const duckY = Math.random() * (canvas.height * 0.15) + canvas.height * 0.1;
    context.drawImage(duckImage, duckX, duckY);
  };
});
