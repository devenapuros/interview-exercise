import { describe, expect, it } from "vitest";
import { getTriangle } from "../modules/getTriangle";
const TRIANGLE_NUMS = [0, 1, 3, 6, 10, 15, 21];

describe("getTriangle", () => {
    it("Should throw if not a number is provided as a parameter", () => {
        expect(() => getTriangle()).toThrow(/must be a number/);
    });

    it("Should throw if 'NaN' is provided as a parameter", () => {
        expect(() => getTriangle(NaN)).toThrow(/must be a number/);
    });

    it("Should throw if parameter provided is less than 0", () => {
        expect(() => getTriangle(-1)).toThrow(/must be at least 0/);
        expect(() => getTriangle(-2)).toThrow(/must be at least 0/);
    });

    it("Should return de triangular number on the position given as a parameter", () => {
        TRIANGLE_NUMS.forEach((num, index) =>
            expect(getTriangle(index)).toBe(num)
        );
    });
});
