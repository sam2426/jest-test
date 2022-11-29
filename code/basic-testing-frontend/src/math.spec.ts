import { expect, it } from "vitest";
import { add } from "./math";
it("should summarize all number values in an array", ()=> {
    // Arrange
    const numbers = [1, 2, 3, 4];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prevValue, currValue)=> prevValue + currValue, 0);
    expect(result).toBe(expectedResult);
});