import {getBoard} from "./getBoard";

describe("Given a getBoard function", () => {
  describe("When it receives 3 and 3", () => {
    test("Then it should return a board length of 3", () => {
      const row = 3;
      const column = 3;
      const expectedBoardLength = 3;

      const actualOutput = getBoard(row,column)

      expect(actualOutput).toHaveLength(expectedBoardLength)
    });
  });
});
