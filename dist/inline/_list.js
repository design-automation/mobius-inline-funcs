/**
 * list functions that obtain and return information from an input list. Does not modify input list.
 */
import lodash from 'lodash';
import * as chk from '../_check_types';
import { checkListsSameLen, checkNumArgs } from '../_check_inline_args';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5saW5lL19saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sS0FBSyxHQUFHLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hFOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQWMsRUFBRSxLQUFhLEVBQUUsR0FBWSxFQUFFLElBQWE7SUFDNUUsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQzNFLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUFLO0tBQ3BGO0lBQ0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0tBQUU7SUFDekYsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7S0FBRTtJQUNsRCxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7S0FBRTtJQUMvRSxNQUFNLEdBQUcsR0FBVyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjtJQUNELE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7SUFDekIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEVBQUUsQ0FBQztLQUFFO0lBQ3hDLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztJQUMxQixJQUFJLE9BQU8sR0FBVyxLQUFLLENBQUM7SUFDNUIsT0FBTyxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLE9BQU8sRUFBRTtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUM7S0FDbkI7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQWMsRUFBRSxJQUFXLEVBQUUsR0FBUTtJQUMzRCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUMxRDtJQUNELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNqQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ2Q7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFjLEVBQUUsSUFBVztJQUNoRCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDtJQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFDRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYyxFQUFFLElBQVMsRUFBRSxDQUFTO0lBQ3hELElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2pEO0lBQ0QsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxNQUFNLE1BQU0sR0FBVSxFQUFFLENBQUM7SUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWMsRUFBRSxJQUFXLEVBQUUsR0FBb0I7SUFDckUsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDbkU7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBVSxDQUFDO0tBQUU7SUFDM0YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0tBQUU7SUFDekMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFRLENBQUM7QUFDNUIsQ0FBQztBQUNEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWMsRUFBRSxJQUFXLEVBQUUsR0FBUTtJQUMxRCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDtJQUNELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUNEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFjLEVBQUUsSUFBVyxFQUFFLEdBQVE7SUFDekQsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDeEQ7SUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUNEOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYyxFQUFFLEtBQVksRUFBRSxLQUFZO0lBQy9ELElBQUksS0FBSyxFQUFFO1FBQ1AsbUJBQW1CO0tBQ3RCO0lBQ0QsTUFBTSxRQUFRLEdBQVUsRUFBRSxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZDLE1BQU0sR0FBRyxHQUFRLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7U0FDSjthQUFNO1lBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtLQUNKO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQUNEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWMsRUFBRSxJQUFXLEVBQUUsS0FBYztJQUNoRSxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQUU7S0FDdkY7SUFDRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDckIsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BDO0lBQ0QsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFDRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFjLEVBQUUsSUFBVyxFQUFFLEdBQVc7SUFDNUQsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0lBQ0QsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxNQUFNLEtBQUssR0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDeEMsTUFBTSxLQUFLLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsTUFBTSxHQUFHLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFDRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQWMsRUFBRSxJQUFXLEVBQUUsS0FBYSxFQUFFLEdBQVk7SUFDOUUsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FBRTtLQUNsRjtJQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUNEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWMsRUFBRSxJQUFXO0lBQy9DLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbEMsQ0FBQztBQUNEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFjLEVBQUUsS0FBWSxFQUFFLEtBQWE7SUFDaEUsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUFFO0tBQ3hGO0lBQ0QsS0FBSyxHQUFHLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVDLE1BQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUN6QixNQUFNLFNBQVMsR0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDOUQsSUFBSSxHQUFHLEVBQUU7WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBQ0Q7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFjLEVBQUUsS0FBWSxFQUFFLEtBQWE7SUFDaEUsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNyQixHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEQsaUJBQWlCLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVDO0tBQ0o7SUFDRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDckIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1FBQ2hFLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEI7SUFDRCxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztBQUN0RSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFjLEVBQUUsS0FBWSxFQUFFLEtBQWE7SUFDL0QsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDckIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDSCxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELGlCQUFpQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMzQztLQUNKO0lBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUI7SUFDRCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWMsRUFBRSxLQUFZLEVBQUUsS0FBWTtJQUM3RCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RCxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDekQ7SUFDRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLENBQUMifQ==