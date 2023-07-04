// Get the grid container
const gridContainer = document.getElementById('gridContainer');

// Specify the number of cells in the grid
const numCells = 16; // Increase this number to increase the number of cells in the grid

// Calculate the cell size based on the container size and number of cells
const containerSize = gridContainer.offsetWidth; // Assumes the container has a fixed width and height
const cellSize = containerSize / numCells;

// Create the grid
gridContainer.style.gridTemplateColumns = `repeat(${numCells}, ${cellSize}px)`;
gridContainer.style.gridTemplateRows = `repeat(${numCells}, ${cellSize}px)`;

// Create the cells
for (let i = 0; i < numCells * numCells; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  gridContainer.appendChild(cell);
}