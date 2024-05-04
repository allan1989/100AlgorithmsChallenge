import { stringsConstruction } from "./stringsConstruction";

describe(stringsConstruction.name, () => {
  it("Test 1", () => {
    // arrange
    const a = "abc";
    const b = "abccba";

    // act
    const response = stringsConstruction(a, b);

    // assert
    expect(response).toBe(2);
  });
  it("Test 2", () => {
    // arrange
    const a = "toto";
    const b = "toto";

    // act
    const response = stringsConstruction(a, b);

    // assert
    expect(response).toBe(1);
  });
  it("Test 3", () => {
    // arrange
    const a = "wb";
    const b = "aahywbyyybwyybwyywb";

    // act
    const response = stringsConstruction(a, b);

    // assert
    expect(response).toBe(4);
  });
});
