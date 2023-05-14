import { cellsStatus } from "./cellsStatus";
describe("Given a cellsStatus function", () => {
  describe("When it receives a board array like [[0,1,0],[1,1,0],[0,0,0]]", () => {
    test("Then it should return 2", () => {
      const board = [
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ];
      const expectedOutput = 2;

      const actualOutput = cellsStatus();

      expect(actualOutput).toStrictEqual(expectedOutput);
    });
  });
});
