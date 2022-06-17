/**
 * Returns true if the value is a list, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
 export function isList(v: any): boolean {
    return Array.isArray(v);
}