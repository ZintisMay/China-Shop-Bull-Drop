const target = document.getElementById("target");

const cardGrid = document.getElementById("cardGrid");

const gameBoard = createGameBoard(15, 20);

const shopCards = [
  [
    [1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
  ],
  [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
];
const bullCards = [
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
];

displayGameBoard();
displayGrid(shopCards[0]);

function createGameBoard(sizeX, sizeY) {
  let board = [];
  for (var x = 0; x < sizeX; x++) {
    let row = new Array(sizeY).fill("-");
    board.push(row);
  }
  return board;
}

function displayGameBoard() {
  console.log(gameBoard);
  target.innerHTML = "";
  let allRows = [];
  gameBoard.forEach((row, rowIndex) => {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    row.forEach((cell, cellIndex) => {
      let theCell = cell;
      let cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.innerHTML = cell;
      cellDiv.addEventListener("click", (e) => {
        console.log("click");
        gameBoard[rowIndex][cellIndex] = "o";
        displayGameBoard();
      });
      rowDiv.append(cellDiv);
    });
    allRows.push(rowDiv);
  });
  target.append(...allRows);
}

function displayGrid(gridData) {
  //remove empty ending rows for GridData
  let lastRow = gridData.reduce((lastRow, row, index) => {
    if (row.includes(1)) {
      return index;
    } else {
      return lastRow;
    }
  }, 0);
  console.log(lastRow);
  gridData = gridData.slice(0, lastRow + 1);

  //remove empty ending columsn for Griddata
  let lastCol = gridData.reduce((lastCol, row) => {
    lastCol2 = row.reduce((lastCell, cell, col) => {
      if (cell == 1) {
        return col;
      } else {
        return lastCell;
      }
    }, 0);
    if (lastCol < lastCol2) {
      return lastCol2;
    } else {
      return lastCol;
    }
  }, 0);
  console.log(lastCol);
  gridData = gridData.map((row) => row.slice(0, lastCol + 1));

  let gridCells = [];
  gridData.forEach((row) => {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    row.forEach((cell) => {
      let cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.innerHTML = cell;
      rowDiv.append(cellDiv);
    });
    gridCells.push(rowDiv);
  });
  cardGrid.append(...gridCells);
}
