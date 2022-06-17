/**
 * Returns true if the dictionary contains the given value, false otherwsie.
 *
 * @param dict The dictionary.
 * @param val The value to seach for, can be any type.
 * @returns True or False.
 */
 export function dictHasVal(dict: object, val: any): boolean {
    return Object.values(dict).indexOf(val) !== -1;
}