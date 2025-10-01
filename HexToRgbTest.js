const { hexToRgb } = require("./index");

describe("hexToRgb function", () => {
  test("converts #FFFFFF to rgb(255,255,255)", () => {
    expect(hexToRgb("#FFFFFF")).toEqual({ r: 255, g: 255, b: 255 });
  });

  test("converts #000000 to rgb(0,0,0)", () => {
    expect(hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0 });
  });

  test("throws error for invalid hex", () => {
    expect(() => hexToRgb("ZZZZZZ")).toThrow("Invalid hex code");
  });
});
