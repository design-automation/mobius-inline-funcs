/**
 * Returns true if the value is a list of two numbers, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
 export function isVec2(v: any): boolean {
    return Array.isArray(v) && v.length === 2 &&
        typeof v[0] === 'number' && typeof v[1] === 'number';
}