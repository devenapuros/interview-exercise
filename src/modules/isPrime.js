/**
 * Identify if a number is prime.
 * @param number Integer number to identify.
 * @return Boolean value that will be `true` if `number` is prime.
 * @throws Throw an error if the parameter provided is not a number.
 */
export const isPrime = (number) => {
    if (typeof number !== "number")
        throw new Error("Parameter provided must be a number");
    if (Number.isNaN(number))
        throw new Error("Parameter provided must be a number");

    if (number <= 1) return false; // By definition, 1,0 and negative numbers are not primes.
    for (let index = 2; index < number - 1; index++) {
        if (number % index === 0) return false;
    }
    return true;
};
