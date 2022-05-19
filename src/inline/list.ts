import lodash from 'lodash';

import { checkListsSameLen, checkNumArgs_noDebug } from '../_check_inline_args';
import * as chk from '../_check_types';

/**
 * list functions that obtain and return information from an input list. Does not modify input list.
 */


/**
 * Generates a list of integers, from start to end, with a step size of 1.
 * If `step` has been set: Generates a list of integers, from start to end, with a specified step size.
 * ```
 * range(1, 6)        // [1, 2, 3, 4, 5]
 *```
 * @param start The start of the range, inclusive.
 * @param end (Optional) The end of the range, exclusive.
 * @param step (Optional) The step size.
 * @returns A list. 
 */
export function range(start: number, end?: number, step?: number): number[] {
    if (start === undefined) { throw new Error('Invalid inline arg: min must be defined.'); }
    if (end === undefined) { end = start; start = 0; }
    if (step === 0) { throw new Error('Invalid inline arg: step must not be 0.'); }
    const len: number = end - start;
    if (step === undefined) {
        step = len > 0 ? 1 : -1;
    }
    const negStep = step < 0;
    if (len > 0 !== step > 0) { return []; }
    const list: number[] = [];
    let current: number = start;
    while (current !== end && (current < end) !== negStep) {
        list.push(current);
        current += step;
    }
    return list;
}
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
/**
 * Returns a shallow copy of the list.
 * \n
 * A shallow copy means that changing primitive entities (e.g. numbers, strings) in the
 * copied list will not affect the original list.
 *
 * @param list The list.
 * @returns The copy of the list. 
 */
export function listCopy(list: any[]): any[] {
    return list.slice();
}
/**
 * Returns a new list that repeats the contents of the input list n times.
 *
 * @param list The list.
 * @param n The number of repetitons. 
 * @returns A new list. 
 */
export function listRep(list: any, n: number): any[] {
    list = Array.isArray(list) ? list : [list];
    const result: any[] = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < list.length; j++) {
            result.push(list[j]);
        }
    }
    return result;
}
/**
 * Returns the item in the list specified by index, either a positive or negative integer.
 *
 * @param list  The list.
 * @param idx The index, an integer or a list of integers.
 * @returns The specified item. 
 */
export function listGet(list: any[], idx: number|number[]): any|any[] {
    if (Array.isArray(idx)) { return idx.map( a_idx => listGet(list, a_idx)) as any[]; }
    if (idx < 0) { idx = list.length + idx; }
    return list[idx] as any;
}
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
/**
 * Joins two or more lists into a single list.
 *
 * If the arguments are not lists, then they will be converted into lists.
 *
 * This functions accepts any number of arguments. The values in the lists can have any datatype.
 *
 * @param lists Multiple lists.
 * @returns The combined list. 
 * 
 * @example `list = listJoin([1, 2], [3, 4], [5, 6])`
 * @example_info Returns `[1, 2, 3, 4, 5, 6]`.
 * 
 * @example `list = listJoin([1, 2, 3], 4)`
 * @example_info Returns `[1, 2, 3, 4]`.
 * 
 * @example `list = listJoin(1, 2, 3)`
 * @example_info Returns `[1, 2, 3]`.
 * 
 * @example `list = listJoin(1, [2, 3], [[4, 5, 6]])`
 * @example_info Returns `[1, 2, 3, [4, 5, 6]]`.
 */
export function listJoin(...lists: any[]): any[] {
    const new_list: any[] = [];
    for (let i = 1; i < arguments.length; i++) {
        const arg: any = arguments[i];
        if (Array.isArray(arg)) {
            for (const item of arg) {
                new_list.push(item);
            }
        } else {
            new_list.push(arg);
        }
    }
    return new_list;
}
/**
 * Returns a flattened copy of the list. If the input list has lists nested within it, the values of
 * the nested lists will be unnested.
 *
 * If no depth is specified, then it is flattened by the maximum amount.
 * ```
 * listFlat([1,2,3,[4,[5],6],7])           // [1, 2, 3, 4, 5, 6, 7]
 * listFlat([1,2,3,[4,[5, [6] ], 7] ], 1)  // [1,2,3,4, [5, [6]], 7]
 *```
 * @param list The list.
 * @param depth (Optional) The depth to flatten to, an integer.
 * @returns The flattened list. 
 */
export function listFlat(list: any[], depth?: number): any[] {
    if (depth !== undefined) {
        return lodash.flattenDepth(list, depth);
    }
    return lodash.flattenDeep(list);
}
/**
 * Return a list that is rotated, i.e. items from the end of the list are moved to the start of the list.
 * For a positive rotation, items are moved from the end to the start of the list.
 * For a negative rotation, items are moved from the start to the end of the list.
 *
 * @param list The list.
 * @param rot The number of items to rotate, an integer.
 * @returns The rotated list.
 */
export function listRot(list: any[], rot: number): any[] {
    const len: number = list.length;
    const split: number = (len - rot) % len;
    const start: any[] = list.slice(split, len);
    const end: any[] = list.slice(0, split);
    return start.concat(end);
}
/**
 * Return a sub-list from the list.
 *
 * @param list The list.
 * @param start The start index of the slice operation, an integer.
 * @param end (Optional) The end index of the slice operation, an integer. Defaults to the length of the list.
 * @returns The sub-list.
 */
export function listSlice(list: any[], start: number, end?: number): any[] {
    return list.slice(start, end);
}
/**
 * Creates a new list, with the items in reverse order.
 *
 * @param lists  The list to reverse.
 * @returns A new list.
 */
export function listRev(list: any[]): any[] {
    return list.slice().reverse();
}
/**
 * Returns a new list of all the values that evaluate to true.
 *
 * If the second argument is provided, then it
 * returns a new list of all the values in list1 that evaluate to true in list2.
 *
 * @param list1 The list.
 * @param list2 (Optional) A list of values, to be used to cull the first list.
 * @returns A new list. 
 */
export function listCull(list1: any[], list2?: any[]): any[] {
    list2 = list2 !== undefined ? list2 : list1;
    const result: any[] = [];
    const list2_len =  list2.length;
    for (let i = 0; i < list1.length; i++) {
        const val = (i < list2_len) ? list2[i] : list2[i % list2_len];
        if (val) {
            result.push(list1[i]);
        }
    }
    return result;
}
/**
 * Creates a new list, with the items in sorted order.
 *
 * If no second argument is provided, then the list is sorted in ascending order.
 *
 * If a second argument is provided, then it should be a list of the same length as the first argument.
 * In this case, the first list is sorted according to ascending order of the values in the second list.
 *
 * @param lists  The list of lists.
 * @returns A new list. 
 */
export function listSort(list1: any[], list2?: any[]): any[] {
    if (list2 !== undefined) {
        const zipped = lodash.zip(list1, list2);
        zipped.sort( (a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0 );
        const unzipped = lodash.unzip(zipped);
        return unzipped[0];
    }
    return list1.slice().sort( (a, b) => a > b ? 1 : a < b ? -1 : 0 );
}
/**
 * Converts a set of lists from rows into columns.
 *
 * If no second argument is provided, it assumes the first argument consists of a list of lists.
 *
 * If a second argument is provided, then it should be a list of the same length as the first argument.
 * In this case, the items in the first and second lists are reaarranged to generate a new set of lists.
 *
 * This function also accepts additional lists of arguments.
 *
 * @param list1  The first row list.
 * @param list2  (Optional) The second row list, which must have the same length as the first.
 * @returns A new list. 
 */
export function listZip(list1: any[], list2?: any[]): any[] {
    if (arguments.length === 2) {
        return lodash.unzip(list1);
    }
    const lists = Array.from(arguments).slice(1);
    return lodash.zip(...lists);
}
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


export class listClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    range(start, end, step) {
        if (this.__debug__) {
            checkNumArgs_noDebug('range', arguments, 3, 1);
            chk.checkArgs('range', 'start', start, [chk.isNum]);
            if (end !== undefined) { chk.checkArgs('range', 'end', end, [chk.isNum]); }
            if (step !== undefined) { chk.checkArgs('range', 'step', step, [chk.isNum]);    }
        }
        return range(start, end, step);
    }

    listCount(list, val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCount', arguments, 2);
            chk.checkArgs('listCount', 'list', list, [chk.isList]);
        }
        return listCount(list, val);
    }

    listCopy(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCopy', arguments, 1);
            chk.checkArgs('listCopy', 'list', list, [chk.isList]);
        }
        return listCopy(list);
    }

    listRep(list, n) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRep', arguments, 2);
            chk.checkArgs('listRep', 'n', n, [chk.isInt]);
        }
        return listRep(list, n);
    }

    listGet(list, idx) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listGet', arguments, 2);
            chk.checkArgs('listGet', 'list', list, [chk.isList]);
            chk.checkArgs('listGet', 'index', idx, [chk.isInt, chk.isIntL]);
        }
        return listGet(list, idx);
    }

    listFind(list, val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listFind', arguments, 2);
            chk.checkArgs('listFind', 'list', list, [chk.isList]);
        }
        return listFind(list, val);
    }

    listHas(list, val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listHas', arguments, 2);
            chk.checkArgs('listHas', 'list', list, [chk.isList]);
        }
        return listHas(list, val);
    }

    listJoin(...lists) {
        if (this.__debug__) {
            // nothing to check
        }
        return listJoin(...lists);
    }

    listFlat(list, depth) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listFlat', arguments, 2, 1);
            chk.checkArgs('listFlat', 'list', list, [chk.isList]);
            if (depth !== undefined) { chk.checkArgs('listFlat', 'depth', depth, [chk.isInt]); }
        }
        return listFlat(list, depth);
    }

    listRot(list, rot) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRot', arguments, 2);
            chk.checkArgs('listRot', 'list', list, [chk.isList]);
            chk.checkArgs('listRot', 'rot', rot, [chk.isInt]);
        }
        return listRot(list, rot);
    }

    listSlice(list, start, end) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listSlice', arguments, 3, 2);
            chk.checkArgs('listSlice', 'list', list, [chk.isList]);
            chk.checkArgs('listSlice', 'start', start, [chk.isInt]);
            if (end !== undefined) { chk.checkArgs('listSlice', 'end', end, [chk.isInt]); }
        }
        return listSlice(list, start, end);
    }

    listRev(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRev', arguments, 1);
            chk.checkArgs('listRev', 'list', list, [chk.isList]);
        }
        return listRev(list);
    }

    listCull(list1, list2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCull', arguments, 2, 1);
            chk.checkArgs('listCull', 'list1', list1, [chk.isList]);
            if (list2 !== undefined) { chk.checkArgs('listCull', 'list2', list2, [chk.isList]); }
        }
        return listCull(list1, list2);
    }

    listSort(list1, list2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listSort', arguments, 2, 1);
            chk.checkArgs('listSort', 'list1', list1, [chk.isList]);
            if (list2 !== undefined) {
                chk.checkArgs('listSort', 'list2', list1, [chk.isList]);
                checkListsSameLen('listSort', arguments);
            }
        }
        return listSort(list1, list2);
    }

    listZip(list1, list2) {
        if (this.__debug__) {
            if (list2 === undefined) {
                chk.checkArgs('listZip', 'list1', list1, [chk.isLList]);
            } else {
                chk.checkArgs('listZip', 'list1', list1, [chk.isList]);
                chk.checkArgs('listZip', 'list2', list2, [chk.isList]);
                checkListsSameLen('listZip', arguments);
            }
        }
        return listZip(list1, list2);
    }

    listEq(list1, list2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listEq', arguments, 2);
            chk.checkArgs('listEq', 'list1', list1, [chk.isList]);
            chk.checkArgs('listEq', 'list2', list2, [chk.isList]);
        }
        return listEq(list1, list2);
    }
}

