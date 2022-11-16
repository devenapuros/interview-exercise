import { getPrime } from "../modules/getPrime";
import { getTriangle } from "../modules/getTriangle";
import { getFibonacci } from "../modules/getFibonacci";

export class Serie {
    /**
     * Returns the result of the calculation on the exercise formula.
     * @param n Parameter with which the formula calculation is made.
     * @returns The result of the calculation.
     * @throws Throws an error if the parameter provided is not a number or its value is less than 1.
     */
    getSerie(n) {
        return (
            (3 * getPrime(n) + getTriangle(n - 1)) / (2 * getFibonacci(n + 2))
        );
    }

    /**
     * Returns the result of the calculation on the exercise formula using JS Promises.
     * @param n Parameter with which the formula calculation is made.
     * @returns The result of the calculation.
     * @throws Throws an error if the parameter provided is not a number or its value is less than 1.
     */
    getSeriePromise(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(this.getSerie(n));
                } catch (error) {
                    reject(error);
                }
            }, 0);
        });
    }
}
