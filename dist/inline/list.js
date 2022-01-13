"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEq = exports.listZip = exports.listSort = exports.listCull = exports.listRev = exports.listSlice = exports.listRot = exports.listFlat = exports.listJoin = exports.listHas = exports.listFind = exports.listGet = exports.listRep = exports.listCopy = exports.listCount = exports.range = void 0;
/**
 * list functions that obtain and return information from an input list. Does not modify input list.
 */
const lodash_1 = __importDefault(require("lodash"));
const chk = __importStar(require("../_check_types"));
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * Generates a list of integers, from start to end, with a step size of 1
 * Generates a list of integers, from start to end, with a specified step size
 *
 * @param start The start of the range, inclusive.
 * @param end (Optional) The end of the range, exclusive.
 * @param step (Optional) The step size.
 */
function range(debug, start, end, step) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('range', arguments, 3, 1);
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
exports.range = range;
/**
 * Returns the number of times the value is in the list
 *
 * @param list The list.
 * @param val The value, can be aby type.
 */
function listCount(debug, list, val) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listCount', arguments, 2);
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
exports.listCount = listCount;
/**
 * Returns a shallow copy of the list.
 *
 * @param list The list.
 */
function listCopy(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listCopy', arguments, 1);
        chk.checkArgs('listCopy', 'list', list, [chk.isList]);
    }
    return list.slice();
}
exports.listCopy = listCopy;
/**
 * Returns a new list that repeats the contents of the input list n times.
 *
 * @param list The list.
 * @param n
 */
function listRep(debug, list, n) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listRep', arguments, 2);
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
exports.listRep = listRep;
/**
 * Returns the item in the list specified by index, either a positive or negative integer.
 *
 * @param list  The list.
 * @param idx The index, an integer or a list of integers.
 */
function listGet(debug, list, idx) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listGet', arguments, 2);
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
exports.listGet = listGet;
/**
 * Returns the index of the first occurence of the value in the list.
 *
 * If the value does not exist, returns null.
 *
 * @param list The list.
 * @param val The value, can be of any type.
 */
function listFind(debug, list, val) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listFind', arguments, 2);
        chk.checkArgs('listFind', 'list', list, [chk.isList]);
    }
    const index = list.indexOf(val);
    if (index === -1) {
        return null;
    }
    return index;
}
exports.listFind = listFind;
/**
 * Returns true if the list contains the value, false otherwise
 *
 * @param list The list.
 * @param val The value, can be any type.
 */
function listHas(debug, list, val) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listHas', arguments, 2);
        chk.checkArgs('listHas', 'list', list, [chk.isList]);
    }
    return list.indexOf(val) !== -1;
}
exports.listHas = listHas;
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
function listJoin(debug, list1, list2) {
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
exports.listJoin = listJoin;
/**
 * Returns a flattened copy of the list.
 *
 * If no depth is specified, then it is flattened my the maximum amount.
 *
 * @param list The list.
 * @param depth (Optional) The depth to flatten to, an integer.
 */
function listFlat(debug, list, depth) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listFlat', arguments, 2, 1);
        chk.checkArgs('listFlat', 'list', list, [chk.isList]);
        if (depth !== undefined) {
            chk.checkArgs('listFlat', 'depth', depth, [chk.isInt]);
        }
    }
    if (depth !== undefined) {
        return lodash_1.default.flattenDepth(list);
    }
    return lodash_1.default.flattenDeep(list);
}
exports.listFlat = listFlat;
/**
 * Return a list that is rotated, i.e. items from the end of the list are moved to the start of the list.
 * For a positive rotation, items are move from the end to the start of the list.
 * For a negative rotation, items are moved from the start to the end of the list.
 *
 * @param list The list.
 * @param rot The number of items to rotate, an integer.
 */
function listRot(debug, list, rot) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listRot', arguments, 2);
        chk.checkArgs('listRot', 'list', list, [chk.isList]);
        chk.checkArgs('listRot', 'rot', rot, [chk.isInt]);
    }
    const len = list.length;
    const split = (len - rot) % len;
    const start = list.slice(split, len);
    const end = list.slice(0, split);
    return start.concat(end);
}
exports.listRot = listRot;
/**
 * Return a sub-list from the list.
 *
 * @param list The list.
 * @param start The start index of the slice operation, an integer.
 * @param end (Optional) The end index of the slice operation, an integer. Defaults to the length of the list.
 */
function listSlice(debug, list, start, end) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listSlice', arguments, 3, 2);
        chk.checkArgs('listSlice', 'list', list, [chk.isList]);
        chk.checkArgs('listSlice', 'start', start, [chk.isInt]);
        if (end !== undefined) {
            chk.checkArgs('listSlice', 'end', end, [chk.isInt]);
        }
    }
    return list.slice(start, end);
}
exports.listSlice = listSlice;
/**
 * Creates a new list, with the items in reverse order.
 *
 * @param lists  The list to reverse.
 */
function listRev(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listRev', arguments, 1);
        chk.checkArgs('listRev', 'list', list, [chk.isList]);
    }
    return list.slice().reverse();
}
exports.listRev = listRev;
/**
 * Returns a new list of all the values that evaluate to true.
 *
 * If the second argument is provided, then it
 * returns a new list of all the values in list1 that evaluate to true in list2.
 *
 * @param list1 The list.
 * @param list2 (Optional) A list of values, to be used to cull the first list.
 */
function listCull(debug, list1, list2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listCull', arguments, 2, 1);
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
exports.listCull = listCull;
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
function listSort(debug, list1, list2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listSort', arguments, 2, 1);
        chk.checkArgs('listSort', 'list1', list1, [chk.isList]);
        if (list2 !== undefined) {
            chk.checkArgs('listSort', 'list2', list1, [chk.isList]);
            (0, _check_inline_args_1.checkListsSameLen)('listSort', arguments);
        }
    }
    if (list2 !== undefined) {
        const zipped = lodash_1.default.zip(list1, list2);
        zipped.sort((a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0);
        const unzipped = lodash_1.default.unzip(zipped);
        return unzipped[0];
    }
    return list1.slice().sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
}
exports.listSort = listSort;
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
function listZip(debug, list1, list2) {
    if (debug) {
        if (list2 === undefined) {
            chk.checkArgs('listZip', 'list1', list1, [chk.isLList]);
        }
        else {
            chk.checkArgs('listZip', 'list1', list1, [chk.isList]);
            chk.checkArgs('listZip', 'list2', list2, [chk.isList]);
            (0, _check_inline_args_1.checkListsSameLen)('listZip', arguments);
        }
    }
    if (arguments.length === 2) {
        return lodash_1.default.unzip(list1);
    }
    const lists = Array.from(arguments).slice(1);
    return lodash_1.default.zip(...lists);
}
exports.listZip = listZip;
/**
 * Returns true if the values in the two lists are equal.
 *
 * @param list1 The first list.
 * @param list2 The second list.
 */
function listEq(debug, list1, list2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('listEq', arguments, 2);
        chk.checkArgs('listEq', 'list1', list1, [chk.isList]);
        chk.checkArgs('listEq', 'list2', list2, [chk.isList]);
    }
    return lodash_1.default.isEqual(list1, list2);
}
exports.listEq = listEq;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxvREFBNEI7QUFDNUIscURBQXVDO0FBQ3ZDLDhEQUF3RTtBQUN4RTs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsS0FBSyxDQUFDLEtBQWMsRUFBRSxLQUFhLEVBQUUsR0FBWSxFQUFFLElBQWE7SUFDNUUsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQzNFLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUFLO0tBQ3BGO0lBQ0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0tBQUU7SUFDekYsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7S0FBRTtJQUNsRCxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7UUFBRSxNQUFNLElBQUks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