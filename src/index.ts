import { getBoard } from "./getBoard.js";
import { cellsAliveAroundEachCell } from "./cellsAliveAroundEachCell.js";

import { playGameOfLife } from "./playGameOfLife.js";

const randomBoard = getBoard(10, 10);

const timer = () => {
  setInterval(() => {
    console.clear();
    const aliveCells = cellsAliveAroundEachCell(randomBoard);
    playGameOfLife(randomBoard, aliveCells);
  }, 500);
};

timer();
