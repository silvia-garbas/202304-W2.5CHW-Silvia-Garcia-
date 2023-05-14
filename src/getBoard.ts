export const getBoard = (row: number, column: number) => {
  const board: number[][] = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = Math.floor(Math.random() * 2);
    }
  }

  return board;
};
