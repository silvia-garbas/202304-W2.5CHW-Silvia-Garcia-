/* eslint-disable complexity */
/* eslint-disable complerowity */
export const cellsAliveAroundEachCell = (board: number[][]) => {
  const numberOfAlivecellsAroundEachcell: number [][] = [];

  for (let row = 0; row < board.length; row++) {
    const aliveCellsAround: number [] = [];
    for (let column = 0; column < board[row].length; column++) {
      let aliveCells: number = 0;
      if (
        board[row - 1] &&
        board[row - 1][column - 1] &&
        board[row - 1][column - 1] === 1
      ) {
        aliveCells++;
      }

      if (
        board[row - 1] &&
        board[row - 1][column] &&
        board[row - 1][column] === 1
      ) {
        aliveCells++;
      }

      if (
        board[row - 1] &&
        board[row - 1][column + 1] &&
        board[row - 1][column + 1] === 1
      ) {
        aliveCells++;
      }

      if (board[row][column - 1] && board[row][column - 1] === 1) {
        aliveCells++;
      }

      if (board[row][column + 1] && board[row][column + 1] === 1) {
        aliveCells++;
      }

      if (
        board[row + 1] &&
        board[row + 1][column - 1] &&
        board[row + 1][column - 1] === 1
      ) {
        aliveCells++;
      }

      if (
        board[row + 1] &&
        board[row + 1][column] &&
        board[row + 1][column] === 1
      ) {
        aliveCells++;
      }

      if (
        board[row + 1] &&
        board[row + 1][column + 1] &&
        board[row + 1][column + 1] === 1
      ) {
        aliveCells++;
      }

      aliveCellsAround.push(aliveCells);
    }

    numberOfAlivecellsAroundEachcell.push(aliveCellsAround);
  }

  return numberOfAlivecellsAroundEachcell;
};
