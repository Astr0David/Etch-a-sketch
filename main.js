// Get the grid container
const gridContainer = document.getElementById("gridContainer");
const gridButton = document.getElementById("gridSizeButton");

// Specify the number of cells in the grid
let numCells = 32; // Increase this number to increase the number of cells in the grid

// Calculate the cell size based on the container size and number of cells
const containerSize = gridContainer.offsetWidth; // Assumes the container has a fixed width and height
const cellSize = containerSize / numCells;

// Create the grid
gridContainer.style.gridTemplateColumns = `repeat(${numCells}, ${cellSize}px)`;
gridContainer.style.gridTemplateRows = `repeat(${numCells}, ${cellSize}px)`;

// Create the cells
for (let i = 0; i < numCells * numCells; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  gridContainer.appendChild(cell);
}

const cells = document.querySelectorAll(".cell");
let isDragging = false; // Variable to track if the mouse is being dragged

cells.forEach((cell) => {
  cell.addEventListener("mousedown", () => {
    isDragging = true; // Start dragging when mouse is pressed down
    const randomColor = getRandomColor();
    cell.style.backgroundColor = randomColor;
  });

  cell.addEventListener("mousemove", () => {
    if (isDragging) {
      // Only change color if mouse is being dragged
      const randomColor = getRandomColor();
      cell.style.backgroundColor = randomColor;
    }
  });

  cell.addEventListener("mouseup", () => {
    isDragging = false; // Stop dragging when mouse is released
  });
});

// Create function for button press (allow user to change grid size)
gridButton.addEventListener("click", function () {
  const gridsize = prompt(
    "Please enter desired grid size (MAX 100):",
    `${numCells}`
  );

  if (gridsize === null) {
    window.alert("User cancelled prompt.");
  } else {
    const gridsize2 = parseInt(gridsize, 10);

    if (isNaN(gridsize2) || gridsize2 < 2 || gridsize2 > 100) {
      window.alert("Invalid grid size.");
    } else {
      numCells = gridsize2;

      const containerSize = gridContainer.offsetWidth;
      const cellSize = containerSize / numCells;

      // Clear existing grid
      gridContainer.innerHTML = "";

      gridContainer.style.gridTemplateColumns = `repeat(${numCells}, ${cellSize}px)`;
      gridContainer.style.gridTemplateRows = `repeat(${numCells}, ${cellSize}px)`;

      for (let i = 0; i < numCells * numCells; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        gridContainer.appendChild(cell);
      }

      const cells = document.querySelectorAll(".cell");
      let isDragging = false;

      cells.forEach((cell) => {
        cell.addEventListener("mousedown", () => {
          isDragging = true;
          const randomColor = getRandomColor();
          cell.style.backgroundColor = randomColor;
        });

        cell.addEventListener("mousemove", () => {
          if (isDragging) {
            const randomColor = getRandomColor();
            cell.style.backgroundColor = randomColor;
          }
        });

        cell.addEventListener("mouseup", () => {
          isDragging = false;
        });
      });
    }
  }
});

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const cellClear = document.getElementById("clearGridButton");

cellClear.addEventListener("click", function () {
  gridContainer.innerHTML = "";

  const containerSize = gridContainer.offsetWidth;
  const cellSize = containerSize / numCells;

  gridContainer.style.gridTemplateColumns = `repeat(${numCells}, ${cellSize}px)`;
  gridContainer.style.gridTemplateRows = `repeat(${numCells}, ${cellSize}px)`;

  for (let i = 0; i < numCells * numCells; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    gridContainer.appendChild(cell);
  }

  const cells = document.querySelectorAll(".cell");
  let isDragging = false;

  cells.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
      isDragging = true;
      const randomColor = getRandomColor();
      cell.style.backgroundColor = randomColor;
    });

    cell.addEventListener("mousemove", () => {
      if (isDragging) {
        const randomColor = getRandomColor();
        cell.style.backgroundColor = randomColor;
      }
    });

    cell.addEventListener("mouseup", () => {
      isDragging = false;
    });
  });
});
