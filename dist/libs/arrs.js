"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyArr = exports.getArrDepth = exports.arrFill = exports.arrMaxDepth = exports.arrMakeFlat = exports.arrIdxRem = exports.arrIdxAdd = exports.arrAddToSet = exports.arrRem = void 0;
const lodash_1 = __importDefault(require("lodash"));
/**
 * Remove an item from an array
 * Return teh index where the item was removed.
 * Returns -1 if teh item was not found.
 * @param arr
 * @param item
 */
function arrRem(arr, item) {
    const index = arr.indexOf(item);
    if (index === -1) {
        return -1;
    }
    arr.splice(index, 1);
    return index;
}
exports.arrRem = arrRem;
/**
 * Remove an item from an array
 * Treats array as set of unique items
 * @param arr
 * @param item
 */
function arrAddToSet(arr, item) {
    const index = arr.indexOf(item);
    if (index !== -1) {
        return index;
    }
    return arr.push(item) - 1;
}
exports.arrAddToSet = arrAddToSet;
/**
 * Add an item to an array in an array
 * @param arr
 * @param item
 */
function arrIdxAdd(arr, idx, item) {
    if (arr[idx] === undefined || arr[idx] === null) {
        arr[idx] = [];
    }
    arr[idx].push(item);
}
exports.arrIdxAdd = arrIdxAdd;
/**
 * Remove an item from an array in an array
 * @param arr
 * @param item
 */
function arrIdxRem(arr, idx, item, del_empty) {
    if (arr[idx] === undefined || arr[idx] === null) {
        return;
    }
    const rem_index = arr[idx].indexOf(item);
    if (rem_index === -1) {
        return;
    }
    arr[idx].splice(rem_index, 1);
    if (del_empty && arr[idx].length === 0) {
        delete arr[idx];
    }
}
exports.arrIdxRem = arrIdxRem;
/**
 * Make flat array (depth = 1) from anything.
 * \n
 * If it is not an array, then make it an array
 * \n
 * If it is an array, then make it flat
 * \n
 * @param data
 */
function arrMakeFlat(data) {
    if (!Array.isArray(data)) {
        return [data];
    }
    return lodash_1.default.flattenDeep(data);
    // const depth = arrMaxDepth(data);
    // // @ts-ignore
    // const new_array = data.flat(depth - 1);
    // return new_array;
    // const flattend = [];
    // function flat(data2: any) {
    //     data2.forEach(function(el: any) {
    //         if (Array.isArray(el)) {
    //             flat(el);
    //         } else {
    //             flattend.push(el);
    //         }
    //     });
    // }
    // flat(data);
    // return flattend;
}
exports.arrMakeFlat = arrMakeFlat;
/**
 * Maximum depth of an array
 * @param data
 */
function arrMaxDepth(data) {
    let d1 = 0;
    if (Array.isArray(data)) {
        d1 = 1;
        let max = 0;
        for (const item of data) {
            if (Array.isArray(data)) {
                const d2 = arrMaxDepth(item);
                if (d2 > max) {
                    max = d2;
                }
            }
        }
        d1 += max;
    }
    return d1;
}
exports.arrMaxDepth = arrMaxDepth;
/**
 * Converts a value to an array of specified length.
 * \n
 * @param data
 */
function arrFill(data, length) {
    if (!Array.isArray(data)) {
        data = [data];
    }
    data = data;
    const last = data[data.length - 1];
    for (let i = data.length; i < length; i++) {
        data[i] = last;
    }
    if (data.length > length) {
        data = data.slice(0, length);
    }
    return data;
}
exports.arrFill = arrFill;
function getArrDepth(arr) {
    if (Array.isArray(arr)) {
        return 1 + getArrDepth(arr[0]);
    }
    return 0;
}
exports.getArrDepth = getArrDepth;
function isEmptyArr(arr) {
    if (Array.isArray(arr) && !arr.length) {
        return true;
    }
    return false;
}
exports.isEmptyArr = isEmptyArr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL2FycnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCOzs7Ozs7R0FNRztBQUNILFNBQWdCLE1BQU0sQ0FBQyxHQUFVLEVBQUUsSUFBUztJQUN4QyxNQUFNLEtBQUssR0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUFFO0lBQ2hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFMRCx3QkFLQztBQUNEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFDLEdBQVUsRUFBRSxJQUFTO0lBQzdDLE1BQU0sS0FBSyxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFBRSxPQUFPLEtBQUssQ0FBQztLQUFFO0lBQ25DLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUpELGtDQUlDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxHQUFVLEVBQUUsR0FBVyxFQUFFLElBQVM7SUFDeEQsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDN0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNqQjtJQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUxELDhCQUtD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