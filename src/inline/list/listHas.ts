
/**
 * Returns true if the list contains the value, false otherwise.
 *
 * @param list The list.
 * @param val The value, can be any type.
 * @returns True or False. 
 */
 export function listHas(list: any[], val: any): boolean {
    return list.indexOf(val) !== -1;
}