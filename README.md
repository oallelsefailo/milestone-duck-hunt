# Duck Hunt Game

This project is the milestone 1 projet bootcamp. The Duck Hunt game is built using HTML, CSS, jQuery, and JavaScript.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Gameplay](#gameplay)
- [Challenges Faced](#challenges-faced)
- [Code Solution](#code-solution)
- [Assets and Sources](#assets-and-sources)
- [Acknowledgments](#acknowledgments)

## Project Overview

The Duck Hunt game is a classic shooting game where players aim to shoot ducks flying across the screen. The game provides an interactive and engaging experience for users, featuring animated ducks and a scoring system.

## Installation

To run the Duck Hunt game locally, follow these steps:

1. Clone the repository: `git clone https://github.com/oallelsefailo/duck-hunt-game.git`
2. Navigate to the project directory: `cd duck-hunt-game`
3. Open the `index.html` file in your preferred web browser.

## Gameplay

In the Duck Hunt game, players take on the role of a hunter and attempt to shoot as many ducks as possible within a given time limit. The game provides the following features:

- Animated ducks flying across the screen.
- Player-controlled crosshair for aiming.
- Shooting mechanism to eliminate ducks.
- Timer to set a time limit for each game session.

## Challenges Faced

During the development of the Duck Hunt game, several challenges were encountered. Here are the major challenges faced:

1. Animating the Ducks: Initially, an attempt was made to use a GIF with a canvas to animate the ducks. However, it was discovered that this approach was not feasible and caused issues.

2. Implementing a "Game Over" Feature: Another challenge involved adding a time limit to the game and displaying the score and "Game Over" text after the time limit was reached. However, implementing this feature while keeping the background image and scoreboard intact posed difficulties.

## Code Solution

To overcome the challenges faced during development, the following solutions were implemented:

### Animating the Ducks

To animate the ducks, a sprite sheet of a flying duck was utilized. The following steps were taken to implement the solution:

1. Calculate the width of each duck frame: `const duckWidth = spriteSheet.width / totalFrames;`
2. Calculate the X position of the current frame: `const frameX = (currentFrame % totalFrames) * frameWidth;`

However, this implementation caused the sprite sheet to flicker when the frame width was expanded. To fix this issue, the following changes were made:

1. Set the duck width as the width of the sprite sheet: `const duckWidth = spriteSheet.width;`
2. Set the X position of the current frame to 0: `const frameX = 0;`

These modifications resolved the flickering issue and ensured a smooth animation of the ducks.

### Implementing the "Game Over" Feature

To address the challenge of implementing the "Game Over" feature while preserving the background image and scoreboard, the following solution was implemented:

1. Create a `gameOver()` function: This function was responsible for clearing the canvas, redrawing the background image, and displaying the score and "Game Over" text. It also reset the font and shadow settings for the score display.

2. Call the `gameOver()` function: The `gameOver()` function was called when the timer reached 0, indicating the end of the game. It provided a seamless transition from the gameplay to the game over screen, allowing the player to see their score and the "Game Over" message without losing the background image and scoreboard.

The implementation of the `gameOver()` function addressed the challenge of maintaining the game's visual elements while incorporating a time limit and displaying the game's outcome.

## Assets and Sources

The assets, including images and sounds, used in this game were obtained from the following:

- Background Image: [Source](https://www.nicepng.com/ourpic/u2t4i1e6r5e6u2i1_gif-fly-away-duck-hunt/)
- Duck Sprite Sheet: [Source](https://opengameart.org/content/16x16-duck)
- Shooting Sound Effect: [Source](https://opengameart.org/content/light-machine-gun)

## Acknowledgments

The development of the Duck Hunt game was supported by various online resources and communities:

- [Dev.to](https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3)
- [W3Schools](https://www.w3schools.com/graphics/game_intro.asp)
- [Stack Overflow](https://stackoverflow.com/)
