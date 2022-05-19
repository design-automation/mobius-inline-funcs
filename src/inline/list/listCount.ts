
/**
 * Returns the number of times the value is in the list.
 *
 * @param list The list.
 * @param val The value, can be any type.
 * @returns An integer. 
 */
 export function listCount(list: any[], val: any): number {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === val) {
            count += 1;
        }
    }
    return count;
}