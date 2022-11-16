/**
 * Return a triangular number in the position given as a parameter.
 * @param position Position of the triangular number.
 * @returns A triangular number in the position given as a parameter.
 * @throws Throws an error if the parameter provided is not a number or if its value is less than 0.
 */
export const getTriangle = (position) => {
    if (typeof position !== "number")
        throw new Error("Parameter provided must be a number");
    if (Number.isNaN(position))
        throw new Error("Parameter provided must be a number");
    if (position < 0)
        throw new Error("Parameter provided must have a minimum value of 0");

    return parseInt((position * (position + 1)) / 2);
};
