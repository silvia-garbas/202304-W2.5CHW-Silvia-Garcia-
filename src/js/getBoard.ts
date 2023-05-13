export const getBoard = (rows: number, cols: number) => {
  const board: number[][] = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i][j] = Math.floor(Math.random() * 2);
    }
  }
  console.table(board);
};
getBoard(4, 3);

// let arr = [];
// let rows = 4;
// let columns = 3;

// for (let i = 0; i < rows; i++) {
//   arr[i] = [];

//   for (let j = 0; j < columns; j++) {
//     arr[i][j] = Math.floor(Math.random() * 2);
//   }
// }
// console.log(arr);
