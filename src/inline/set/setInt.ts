import * as Mathjs from 'mathjs';

/**
 * Returns a new list of unique items from the intersection of the two input lists.
 * @param list1 The first list.
 * @param list2 The second list.
 * @returns A new list with no repeated values. 
 */
 export function setInt(list1: any[], list2: any[]): any[] {
    return Mathjs.setIntersect(list1, list2);
}