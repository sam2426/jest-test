import {it, expect} from "vitest";
import {transformToNumber} from "./numbers";

it("should output value of type number for a given number in string", ()=>{
    const number = "89";
    const result = transformToNumber(number);
    // expect(result).toBe(+number);
    expect(result).toBeTypeOf("number");
})

it("should out number for a given number in number format, without changing it's value", () => {
    const number = 44;
    const result = transformToNumber(number);
    expect(result).toBe(number);
})

it("should give NaN, when we pass non numeric string", ()=> {
    const input = "invalid";
    const input2 = {};
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
})