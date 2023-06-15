//getting the element by ID
const canvas = document.getElementById("game-canvas");
//getContext returns a drawing context used in this case for line 13
const context = canvas.getContext("2d");

//creating backgroundImage object with new Image
const backgroundImage = new Image();

//source of the background
backgroundImage.src = "assets/duck-hunt-bg.png";

backgroundImage.onload = function () {
  context.drawImage(backgroundImage, 0, 0);
};
