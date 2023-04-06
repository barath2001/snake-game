import { getrandomGridPosition } from "./grid.js";
import { expandSnake, onSnake } from "./snake.js";

const EXPANSION_RATE = 1;
let food = { x: 15, y: 15 };

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElem = document.createElement("div");
  foodElem.classList.add("food");
  foodElem.style.gridColumn = food.x;
  foodElem.style.gridRow = food.y;

  gameBoard.appendChild(foodElem);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getrandomGridPosition();
  }
  return newFoodPosition;
}
