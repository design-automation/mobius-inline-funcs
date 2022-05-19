
/**
 * Returns the index of the first occurence of the value in the list.
 *
 * If the value does not exist, returns null.
 *
 * @param list The list.
 * @param val The value, can be of any type.
 * @returns The index of the first occurence of the value, or null.
 */
 export function listFind(list: any[], val: any): number {
    const index = list.indexOf(val);
    if (index === -1) {
        return null;
    }
    return index;
}