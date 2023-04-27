const caesarCipher = require("./caesarCipher");

describe("caesarCipher", () => {
  test("shift 4", () => {
    expect(caesarCipher("ATTACKATONCE", 4)).toBe("EXXEGOEXSRGI");
  });

  test("shift 4", () => {
    expect(caesarCipher("attackatonce", 1)).toBe("BUUBDLBUPODF");
  });

});
