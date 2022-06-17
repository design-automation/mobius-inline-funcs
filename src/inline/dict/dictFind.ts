/**
 * Returns the first key in the dictionary that has the given value.
 * \n
 * If the value does not exist, returns null.
 *
 * @param dict The dictionary.
 * @param val The value, can be any type.
 * @returns The first key, or null. 
 */
 export function dictFind(dict: object, val: any|any[]): string {
    for (const key of Object.keys(dict)) {
        if (dict[key] === val) { return key; }
    }
    return null;
}