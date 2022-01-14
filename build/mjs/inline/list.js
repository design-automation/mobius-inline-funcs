import lodash from 'lodash';
import { checkListsSameLen, checkNumArgs } from '../_check_inline_args';
import * as chk from '../_check_types';
/**
 * list functions that obtain and return information from an input list. Does not modify input list.
 */
/**
 * Generates a list of integers, from start to end, with a step size of 1
 * Generates a list of integers, from start to end, with a specified step size
 *
 * @param start The start of the range, inclusive.
 * @param end (Optional) The end of the range, exclusive.
 * @param step (Optional) The step size.
 */
export function range(debug, start, end, step) {
    if (debug) {
        checkNumArgs('range', arguments, 3, 1);
        chk.checkArgs('range', 'start', start, [chk.isNum]);
        if (end !== undefined) {
            chk.checkArgs('range', 'end', end, [chk.isNum]);
        }
        if (step !== undefined) {
            chk.checkArgs('range', 'step', step, [chk.isNum]);
        }
    }
    if (start === undefined) {
        throw new Error('Invalid inline arg: min must be defined.');
    }
    if (end === undefined) {
        end = start;
        start = 0;
    }
    if (step === 0) {
        throw new Error('Invalid inline arg: step must not be 0.');
    }
    const len = end - start;
    if (step === undefined) {
        step = len > 0 ? 1 : -1;
    }
    const negStep = step < 0;
    if (len > 0 !== step > 0) {
        return [];
    }
    const list = [];
    let current = start;
    while (current !== end && (current < end) !== negStep) {
        list.push(current);
        current += step;
    }
    return list;
}
/**
 * Returns the number of times the value is in the list
 *
 * @param list The list.
 * @param val The value, can be aby type.
 */
export function listCount(debug, list, val) {
    if (debug) {
        checkNumArgs('listCount', arguments, 2);
        chk.checkArgs('listCount', 'list', list, [chk.isList]);
    }
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
 *
 * @param list The list.
 */
export function listCopy(debug, list) {
    if (debug) {
        checkNumArgs('listCopy', arguments, 1);
        chk.checkArgs('listCopy', 'list', list, [chk.isList]);
    }
    return list.slice();
}
/**
 * Returns a new list that repeats the contents of the input list n times.
 *
 * @param list The list.
 * @param n
 */
export function listRep(debug, list, n) {
    if (debug) {
        checkNumArgs('listRep', arguments, 2);
        chk.checkArgs('listRep', 'n', n, [chk.isInt]);
    }
    list = Array.isArray(list) ? list : [list];
    const result = [];
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
 */
export function listGet(debug, list, idx) {
    if (debug) {
        checkNumArgs('listGet', arguments, 2);
        chk.checkArgs('listGet', 'list', list, [chk.isList]);
        chk.checkArgs('listGet', 'index', idx, [chk.isInt, chk.isIntL]);
    }
    if (Array.isArray(idx)) {
        return idx.map(a_idx => listGet(debug, list, a_idx));
    }
    if (idx < 0) {
        idx = list.length + idx;
    }
    return list[idx];
}
/**
 * Returns the index of the first occurence of the value in the list.
 *
 * If the value does not exist, returns null.
 *
 * @param list The list.
 * @param val The value, can be of any type.
 */
export function listFind(debug, list, val) {
    if (debug) {
        checkNumArgs('listFind', arguments, 2);
        chk.checkArgs('listFind', 'list', list, [chk.isList]);
    }
    const index = list.indexOf(val);
    if (index === -1) {
        return null;
    }
    return index;
}
/**
 * Returns true if the list contains the value, false otherwise
 *
 * @param list The list.
 * @param val The value, can be any type.
 */
export function listHas(debug, list, val) {
    if (debug) {
        checkNumArgs('listHas', arguments, 2);
        chk.checkArgs('listHas', 'list', list, [chk.isList]);
    }
    return list.indexOf(val) !== -1;
}
/**
 * Joins two or more lists into a single list.
 *
 * If the arguments are not lists, then they will be converted into lists.
 *
 * This functions accepts any number of arguments.
 *
 * @param list1 The first list.
 * @param list2 The second list.
 */
export function listJoin(debug, list1, list2) {
    if (debug) {
        // nothing to check
    }
    const new_list = [];
    for (let i = 1; i < arguments.length; i++) {
        const arg = arguments[i];
        if (Array.isArray(arg)) {
            for (const item of arg) {
                new_list.push(item);
            }
        }
        else {
            new_list.push(arg);
        }
    }
    return new_list;
}
/**
 * Returns a flattened copy of the list.
 *
 * If no depth is specified, then it is flattened my the maximum amount.
 *
 * @param list The list.
 * @param depth (Optional) The depth to flatten to, an integer.
 */
export function listFlat(debug, list, depth) {
    if (debug) {
        checkNumArgs('listFlat', arguments, 2, 1);
        chk.checkArgs('listFlat', 'list', list, [chk.isList]);
        if (depth !== undefined) {
            chk.checkArgs('listFlat', 'depth', depth, [chk.isInt]);
        }
    }
    if (depth !== undefined) {
        return lodash.flattenDepth(list);
    }
    return lodash.flattenDeep(list);
}
/**
 * Return a list that is rotated, i.e. items from the end of the list are moved to the start of the list.
 * For a positive rotation, items are move from the end to the start of the list.
 * For a negative rotation, items are moved from the start to the end of the list.
 *
 * @param list The list.
 * @param rot The number of items to rotate, an integer.
 */
export function listRot(debug, list, rot) {
    if (debug) {
        checkNumArgs('listRot', arguments, 2);
        chk.checkArgs('listRot', 'list', list, [chk.isList]);
        chk.checkArgs('listRot', 'rot', rot, [chk.isInt]);
    }
    const len = list.length;
    const split = (len - rot) % len;
    const start = list.slice(split, len);
    const end = list.slice(0, split);
    return start.concat(end);
}
/**
 * Return a sub-list from the list.
 *
 * @param list The list.
 * @param start The start index of the slice operation, an integer.
 * @param end (Optional) The end index of the slice operation, an integer. Defaults to the length of the list.
 */
export function listSlice(debug, list, start, end) {
    if (debug) {
        checkNumArgs('listSlice', arguments, 3, 2);
        chk.checkArgs('listSlice', 'list', list, [chk.isList]);
        chk.checkArgs('listSlice', 'start', start, [chk.isInt]);
        if (end !== undefined) {
            chk.checkArgs('listSlice', 'end', end, [chk.isInt]);
        }
    }
    return list.slice(start, end);
}
/**
 * Creates a new list, with the items in reverse order.
 *
 * @param lists  The list to reverse.
 */
export function listRev(debug, list) {
    if (debug) {
        checkNumArgs('listRev', arguments, 1);
        chk.checkArgs('listRev', 'list', list, [chk.isList]);
    }
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
 */
export function listCull(debug, list1, list2) {
    if (debug) {
        checkNumArgs('listCull', arguments, 2, 1);
        chk.checkArgs('listCull', 'list1', list1, [chk.isList]);
        if (list2 !== undefined) {
            chk.checkArgs('listCull', 'list2', list2, [chk.isList]);
        }
    }
    list2 = list2 !== undefined ? list2 : list1;
    const result = [];
    const list2_len = list2.length;
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
 */
export function listSort(debug, list1, list2) {
    if (debug) {
        checkNumArgs('listSort', arguments, 2, 1);
        chk.checkArgs('listSort', 'list1', list1, [chk.isList]);
        if (list2 !== undefined) {
            chk.checkArgs('listSort', 'list2', list1, [chk.isList]);
            checkListsSameLen('listSort', arguments);
        }
    }
    if (list2 !== undefined) {
        const zipped = lodash.zip(list1, list2);
        zipped.sort((a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0);
        const unzipped = lodash.unzip(zipped);
        return unzipped[0];
    }
    return list1.slice().sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
}
/**
 * Converts a set of lists from rows into columns.
 *
 * If no second argument is provided, it assume the the first argument consists of a list of lists.
 *
 * If a second argument is provided, then it should be a list of the same length as the first argument.
 * In this case, the items in the first and second lists are reaarranged to generate a new set of lists.
 *
 * This function also accepts additional lists of arguments.
 *
 * @param list1  The first row list.
 * @param list2  (Optional) The second row list, which must have the same length as the first.
 */
export function listZip(debug, list1, list2) {
    if (debug) {
        if (list2 === undefined) {
            chk.checkArgs('listZip', 'list1', list1, [chk.isLList]);
        }
        else {
            chk.checkArgs('listZip', 'list1', list1, [chk.isList]);
            chk.checkArgs('listZip', 'list2', list2, [chk.isList]);
            checkListsSameLen('listZip', arguments);
        }
    }
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
 */
export function listEq(debug, list1, list2) {
    if (debug) {
        checkNumArgs('listEq', arguments, 2);
        chk.checkArgs('listEq', 'list1', list1, [chk.isList]);
        chk.checkArgs('listEq', 'list2', list2, [chk.isList]);
    }
    return lodash.isEqual(list1, list2);
}
export class listClass {
    constructor(debug) {
        this.__debug__ = debug;
    }
    range(start, end, step) {
        return range(this.__debug__, start, end, step);
    }
    listCount(list, val) {
        return listCount(this.__debug__, list, val);
    }
    listCopy(list) {
        return listCopy(this.__debug__, list);
    }
    listRep(list, n) {
        return listRep(this.__debug__, list, n);
    }
    listGet(list, idx) {
        return listGet(this.__debug__, list, idx);
    }
    listFind(list, val) {
        return listFind(this.__debug__, list, val);
    }
    listHas(list, val) {
        return listHas(this.__debug__, list, val);
    }
    listJoin(list1, list2) {
        return listJoin(this.__debug__, list1, list2);
    }
    listFlat(list, depth) {
        return listFlat(this.__debug__, list, depth);
    }
    listRot(list, rot) {
        return listRot(this.__debug__, list, rot);
    }
    listSlice(list, start, end) {
        return listSlice(this.__debug__, list, start, end);
    }
    listRev(list) {
        return listRev(this.__debug__, list);
    }
    listCull(list1, list2) {
        return listCull(this.__debug__, list1, list2);
    }
    listSort(list1, list2) {
        return listSort(this.__debug__, list1, list2);
    }
    listZip(list1, list2) {
        return listZip(this.__debug__, list1, list2);
    }
    listEq(list1, list2) {
        return listEq(this.__debug__, list1, list2);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmxpbmUvbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hFLE9BQU8sS0FBSyxHQUFHLE1BQU0saUJBQWlCLENBQUM7QUFFdkM7O0dBRUc7QUFDSDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFjLEVBQUUsS0FBYSxFQUFFLEdBQVksRUFBRSxJQUFhO0lBQzVFLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUMzRSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FBSztLQUNwRjtJQUNELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztLQUFFO0lBQ3pGLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUFFLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFBQyxLQUFLLEdBQUcs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