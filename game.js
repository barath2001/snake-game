import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

const gameBoard = document.querySelector(".game-board");

let lastRenderTime = 0;
let gameOver;

function main(time) {
  if (gameOver) {
    if (confirm("You lose. Press ok to restart")) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main);

  const timeSinceLastRender = (time - lastRenderTime) / 1000;
  if (timeSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = time;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkLose();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkLose() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
