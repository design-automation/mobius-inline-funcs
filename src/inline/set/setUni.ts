import * as Mathjs from 'mathjs';

/**
 * Returns a new list of unique items from the union of the two input lists.
 * 
 * @param list1 The first list.
 * @param list2 The second list.
 * @returns A new list with no repeated values. 
 */
 export function setUni(list1: any[], list2: any[]): any[] {
    return Mathjs.setUnion(list1, list2);
}