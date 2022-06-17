/**
 * Returns true if the value is a dictionary, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
 export function isDict(v: any): boolean {
    // return typeof v === 'object' && !Array.isArray(v);
    return v.constructor === Object;
}