import { getBoard } from "./getBoard.js";
console.log(4, 4);

// let array = [
//   [0, 1, 0],
//   [1, 0, 0],
//   [1, 0, 0],
// ];

// let newArray = [[], [], []];

// const countNeighbor = (file, column) => {
//   let myNeighbors = 0;
//   for (let i = file - 1; i <= file + 1 && i < array.length; i++) {
//     for (let x = column - 1; x <= column + 1 && x < array.length; x++) {
//       if (i === -1) {
//         i++;
//       }

//       if (x === -1) {
//         x++;
//       }

//       myNeighbors += array[i][x];
//     }
//   }

//   if (array[file][column] === 1) {
//     myNeighbors--;
//   }

//   if (myNeighbors === 2 || myNeighbors === 3) {
//     newArray[file].push(1);
//   }

//   if (myNeighbors < 2 || myNeighbors > 3) {
//     newArray[file].push(0);
//   }
//   console.log("hola");
//   console.log(myNeighbors);
//   return myNeighbors;
// };

// console.log(newArray)
// const traverseArray = () => {
//   for (let i = 0; i < array.length; i++) {
//     for (let x = 0; x < array[i].length; x++) {
//       countNeighbor(i, x);
//     }
//   }
// };
