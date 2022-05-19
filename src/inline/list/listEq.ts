import lodash from 'lodash';
/**
 * Returns true if the values in the two lists are equal.
 *
 * @param list1 The first list.
 * @param list2 The second list.
 * @returns True or False. 
 */
 export function listEq(list1: any[], list2: any[]): boolean {
    return lodash.isEqual(list1, list2);
}