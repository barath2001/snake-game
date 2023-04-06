const GRID_SIZE = 21;

export function getrandomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE + 1),
    y: Math.floor(Math.random() * GRID_SIZE + 1),
  };
}

export function outsideGrid(snakehead) {
  return (
    snakehead.x < 1 ||
    snakehead.x > GRID_SIZE ||
    snakehead.y < 1 ||
    snakehead.y > GRID_SIZE
  );
}
