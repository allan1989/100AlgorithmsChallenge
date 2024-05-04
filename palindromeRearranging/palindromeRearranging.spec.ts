import { palindromeRearranging } from "./palindromeRearranging";

xdescribe(palindromeRearranging.name, () => {
  it("Test 1", () => {
    // arrange
    const inputString = "aabb";

    // act
    const response = palindromeRearranging(inputString);

    // assert
    expect(response).toBe(true);
  });
  it("Test 2", () => {
    // arrange
    const inputString = "mdaam";

    // act
    const response = palindromeRearranging(inputString);

    // assert
    expect(response).toBe(true);
  });
});
