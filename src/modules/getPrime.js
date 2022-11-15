import { isPrime } from "./isPrime";

/**
 * Returns a prime number occupying the position given as parameter.
 * @param position Position of the prime number.
 * @return Integer that is a prime number.
 * @throws Throw an error if the parameter provided is not a number.
 */
export const getPrime = (position) => {
    if (typeof position !== "number")
        throw new Error("Parameter provided must be a number");
    if (Number.isNaN(position))
        throw new Error("Parameter provided must be a number");
    if (position < 1) throw new Error("Position must be at least 1");

    let prime_counter = 0;
    let index = 2;
    let last_prime;
    while (prime_counter < position) {
        if (isPrime(index)) {
            last_prime = index;
            prime_counter += 1;
        }
        index++;
    }
    return last_prime;
};
