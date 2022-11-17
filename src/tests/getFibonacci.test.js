import { describe, expect, it } from "vitest";
import { getFibonacci } from "../modules/getFibonacci";
const FIB_NUMS = [0, 1, 1, 2, 3, 5, 8, 13, 21,34];

describe("getFibonacci", () => {
    it("Should throw if not a number is provided as a parameter", () => {
        expect(() => getFibonacci()).toThrow(/must be a number/);
    });

    it("Should throw if 'NaN' is provided as a parameter", () => {
        expect(() => getFibonacci(NaN)).toThrow(/must be a number/);
    });

    it("Should throw if parameter provided is less than 0", () => {
        expect(() => getFibonacci(-1)).toThrow(/must have a minimum value of 0/);
        expect(() => getFibonacci(-2)).toThrow(/must have a minimum value of 0/);
    });

    it("Should return the Fibonacci number in the position given as a parameter", () => {
        FIB_NUMS.forEach((num, index) => expect(getFibonacci(index)).toBe(num));
    });
});
