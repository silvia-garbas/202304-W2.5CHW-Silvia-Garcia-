export const getBoard = (rows: number, cols: number) => {
  const board: number[][] = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = Math.floor(Math.random() * 2);
    }
  }

return board
//    console.table(board);
//   console.log(board.length)
 };

// getBoard(3, 3);

// Let arr = [];
// let rows = 4;
// let columns = 3;

// for (let i = 0; i < rows; i++) {
//   arr[i] = [];

//   for (let j = 0; j < columns; j++) {
//     arr[i][j] = Math.floor(Math.random() * 2);
//   }
// }
// console.log(arr);
