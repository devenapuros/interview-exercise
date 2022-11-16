import { describe, expect, it } from "vitest";
import { Serie } from "../classes/serie";
const serie = new Serie();
const RESULTS = [1.5, 1.67, 1.8, 1.69, 1.65, 1.29, 1.06, 0.77, 0.59, 0.46];

describe("getSerie", () => {
    it("Should throw if not a number is provided as a parameter", () => {
        expect(() => serie.getSerie()).toThrow(/must be a number/);
    });

    it("Should throw if 'NaN' is provided as a parameter", () => {
        expect(() => serie.getSerie(NaN)).toThrow(/must be a number/);
    });

    it("Should return the correct result with the given parameter", () => {
        RESULTS.forEach((result, index) =>
            expect(serie.getSerie(index + 1)).toBeCloseTo(result)
        );
    });
});
