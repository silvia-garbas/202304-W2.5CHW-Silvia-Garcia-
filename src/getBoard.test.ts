import {getBoard} from "./getBoard";

describe("Given a getBoard function", () => {
  describe("When it receives 3 and 3", () => {
    test("Then it should return a board length of 5", () => {
      const rows = 3;
      const cols = 3;
      const expectedBoardLength = 3;

      const actualOutput = getBoard(rows,cols)

      expect(actualOutput).toHaveLength(expectedBoardLength)
    });
  });
});
