import { describe, expect, it } from "vitest";
import { getPrime } from "../modules/getPrime";

const PRIMOS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

describe("getPrime", () => {
    it("Should throw if not a number is provided as a parameter", () => {
        expect(() => getPrime()).toThrow(/must be a number/);
    });

    it("Should throw if 'NaN' is provided as a parameter", () => {
        expect(() => getPrime(NaN)).toThrow(/must be a number/);
    });

    it("Should throw if parameter provided is less or equal to 1", () => {
        expect(() => getPrime(0)).toThrow(/at least 1/);
        expect(() => getPrime(-1)).toThrow(/at least 1/);
    });

    it("Should return a prime number in the position provided as a parameter", () => {
        PRIMOS.forEach((prime, index) => {
            let value_returned = getPrime(index + 1);
            expect(
                value_returned,
                `Position ${index + 1} must be ${prime}`
            ).toBe(prime);
        });
    });
});
