/**
 * Returns true if the value is a floating point number, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
 export function isFlt(v: any): boolean {
    // return !Number.isNaN(v) && v % 1 > 0;
    return !Number.isInteger(v) && !Number.isNaN(v);
}