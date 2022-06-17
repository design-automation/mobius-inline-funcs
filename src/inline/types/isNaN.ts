/**
 * Returns true is the value is not a number (NaN), false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
 export function isNaN(v: any): boolean {
    return Number.isNaN(v);
}