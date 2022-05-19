/**
 * Set functions for working with sets, using lists as a data structure. Does not modify input list.
 */

import * as Mathjs from 'mathjs';
import { checkNumArgs } from '../_check_inline_args';
/**
 * Returns a new list of unique items from the input list.
 * \n
 * - `setMake([1,1,1,2,2,3])`          // returns [1,2,3]
 * @param list The input list.
 * @returns A new list with no repeated values. 
 */
export function setMake(debug: boolean, list: any[]): any[] {
    if (debug) {
        checkNumArgs('setMake', arguments, 1);
    }
    return Array.from(new Set(list));
}
/**
 * Returns a new list of unique items from the union of the two input lists.
 * 
 * @param list1 The first list.
 * @param list2 The second list.
 * @returns A new list with no repeated values. 
 */
export function setUni(debug: boolean, list1: any[], list2: any[]): any[] {
    if (debug) {
        checkNumArgs('setUni', arguments, 2);
    }
    return Mathjs.setUnion(list1, list2);
}
/**
 * Returns a new list of unique items from the intersection of the two input lists.
 * @param list1 The first list.
 * @param list2 The second list.
 * @returns A new list with no repeated values. 
 */
export function setInt(debug: boolean, list1: any[], list2: any[]): any[] {
    if (debug) {
        checkNumArgs('setInt', arguments, 2);
    }
    return Mathjs.setIntersect(list1, list2);
}
/**
 * Returns a new list of unique items from the difference of the two input lists.
 * @param list1 The first list.
 * @param list2 The second list.
 * @returns A new list with no repeated values. 
 */
export function setDif(debug: boolean, list1: any[], list2: any[]): any[] {
    if (debug) {
        checkNumArgs('setDif', arguments, 2);
    }
    return Mathjs.setDifference(list1, list2);
}

export class setClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    setMake(list) {
        return setMake(this.__debug__, list);
    }

    setUni(list1, list2) {
        return setUni(this.__debug__, list1, list2);
    }

    setInt(list1, list2) {
        return setInt(this.__debug__, list1, list2);
    }

    setDif(list1, list2) {
        return setDif(this.__debug__, list1, list2);
    }
}

