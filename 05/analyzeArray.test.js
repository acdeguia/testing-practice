const analyzeArray = require("./analyzeArray");

describe("analyzeArray", () => {
  it("returns an object with the average, min, max, and length of the array", () => {
    const array = [1, 8, 3, 4, 2, 6];
    const result = analyzeArray(array);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it("returns the same min, max, and length when the array has only one element", () => {
    const array = [5];
    const result = analyzeArray(array);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  it("returns NaN for average when the array is empty", () => {
    const array = [];
    const result = analyzeArray(array);
    expect(result).toEqual({
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    });
  });
});
