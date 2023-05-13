import { getBoard } from "./getBoard.js";
export const cellsStatus = () => {
  const board =[
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 0],
  ];
  let aliveCells = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        aliveCells += 1;
      }
    }
  }

  return aliveCells;
};
