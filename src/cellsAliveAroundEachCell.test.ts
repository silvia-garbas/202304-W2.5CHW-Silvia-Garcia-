import { cellsAliveAroundEachCell } from "./cellsAliveAroundEachCell";

describe("Given a cellAliveaAroundEachCell function", () => {
  describe("When it receives a board array like  [[0,0,0,0], [1,5,0,1], [1,1,2,0], [0, 0, 0, 0]]", () => {
    test("Then it should return 2", () => {
      const board = [
        [0, 0, 0, 0],
        [1, 5, 0, 1],
        [1, 1, 2, 0],
        [0, 0, 0, 0],
      ];

      const expectedOutput = [
        [1, 1, 1, 1],
        [2, 3, 2, 0],
        [2, 2, 2, 1],
        [2, 2, 1, 0],
      ];

      const actualOutput = cellsAliveAroundEachCell(board);

      expect(actualOutput).toStrictEqual(expectedOutput);
    });
  });
  describe("When it receives a board array like  [[0, 0, 0], [0, 0 , 0], [ 0 , 0 , 0]]", () => {
    test("Then it should return 2", () => {
      const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const expectedOutput = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const actualOutput = cellsAliveAroundEachCell(board);

      expect(actualOutput).toStrictEqual(expectedOutput);
    });
  });
  describe("When it receives a board array like  [[1, 1, 1], [1, 1 , 1], [ 1 , 1 , 1]]", () => {
    test("Then it should return 2", () => {
      const board = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const expectedOutput = [
        [3, 5, 3],
        [5, 8, 5],
        [3, 5, 3],
      ];

      const actualOutput = cellsAliveAroundEachCell(board);

      expect(actualOutput).toStrictEqual(expectedOutput);
    });
  });
});
