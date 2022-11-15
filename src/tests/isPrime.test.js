import { describe, expect, it } from "vitest";
import { isPrime } from "../modules/isPrime";
const NO_PRIMOS = [-2, -1, 0, 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21];
const PRIMOS = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109,
];

describe("isPrime", () => {
    it("Should throw if not a number is provided as a parameter", () => {
        expect(() => isPrime()).toThrow(/must be a number/);
    });

    it("Should throw if 'NaN' is provided as a parameter", () => {
        expect(() => isPrime(NaN)).toThrow(/must be a number/);
    });

    it("Should return false if number provided is not prime", () => {
        NO_PRIMOS.forEach((primo) =>
            expect(isPrime(primo), `Testing '${primo}' value`).toBe(false)
        );
    });

    it("Should return true  if number provided is prime", () => {
        PRIMOS.forEach((primo) =>
            expect(isPrime(primo), `Testing '${primo}' value`).toBe(true)
        );
    });
});
