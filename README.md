# Duck Hunt Game

This project is a milestone project developed for a coding bootcamp. The Duck Hunt game is built using HTML, CSS, jQuery, and JavaScript.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Gameplay](#gameplay)
- [Challenges Faced](#challenges-faced)
- [Code Solution](#code-solution)

## Project Overview

The Duck Hunt game is a classic shooting game where players aim to shoot ducks flying across the screen. The game provides an interactive and engaging experience for users, featuring animated ducks and a scoring system.

## Installation

To run the Duck Hunt game locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/duck-hunt-game.git`
2. Navigate to the project directory: `cd duck-hunt-game`
3. Open the `index.html` file in your preferred web browser.

## Gameplay

In the Duck Hunt game, players take on the role of a hunter and attempt to shoot as many ducks as possible within a given time limit. The game provides the following features:

- Animated ducks flying across the screen.
- Player-controlled crosshair for aiming.
- Shooting mechanism to eliminate ducks.
- Timer to set a time limit for each game session.

## Challenges Faced

During the development of the Duck Hunt game, several challenges were encountered. One of the significant challenges involved animating the ducks. Initially, an attempt was made to use a GIF with a canvas, but it was discovered that this approach was not feasible.

## Code Solution

To overcome the challenge of animating the ducks, a sprite sheet of a flying duck was utilized. The following steps were taken to implement the solution:

1. Calculate the width of each duck frame: `const duckWidth = spriteSheet.width / totalFrames;`
2. Calculate the X position of the current frame: `const frameX = (currentFrame % totalFrames) * frameWidth;`

However, this implementation caused the sprite sheet to flicker when the frame width was expanded. To fix this issue, the following changes were made:

1. Set the duck width as the width of the sprite sheet: `const duckWidth = spriteSheet.width;`
2. Set the X position of the current frame to 0: `const frameX = 0;`

These modifications resolved the flickering issue and ensured a smooth animation of the ducks.
