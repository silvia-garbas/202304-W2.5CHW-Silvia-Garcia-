export const playGameOfLife = (board: number [][], aliveCells:number[][]) => {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (board[row][column] === 1 && aliveCells[row][column] < 2) {
        board[row][column] = 0;
      }

      if (board[row][column] === 1 && aliveCells[row][column] > 3) {
        board[row][column] = 0;
      }

      if (board[row][column] === 0 && aliveCells[row][column] === 3) {
        board[row][column] = 1;
      }
    }
  }

  return board;
};
