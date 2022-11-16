/**
 * Return the Fibonacci number in the position given as a parameter using a classic 0-based index.
 * @param position Position of the Fibonacci number.
 * @returns A Fibonacci number.
 * @throws Throw an error if the parameter provided is not a number or if its value is less than 0.
 */
export const getFibonacci = (position) => {
    if (typeof position !== "number")
        throw new Error("Parameter provided must be a number");
    if (Number.isNaN(position))
        throw new Error("Parameter provided must be a number");
    if (position < 0)
        throw new Error("Parameter provided must have a minimum value of 0");

    if (position < 2) return position;
    return getFibonacci(position - 1) + getFibonacci(position - 2);
};
