/**
 * Returns true if the value is a list of three numbers, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
 export function isVec3(v: any): boolean {
    return Array.isArray(v) && v.length === 3 &&
        typeof v[0] === 'number' && typeof v[1] === 'number' && typeof v[2] === 'number';
}