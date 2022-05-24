import * as Mathjs from 'mathjs';
import { checkNumArgs } from '../_check_inline_args';

/**
 * Returns the smallest of the given numbers.
 * \n
 * If any one or more of the parameters cannot be converted into a number, NaN is returned.
 * \n
 * If no parameters are provided, Infinity is returned.
 * \n
 * ```
 * min([5,3,6,2,4])    // 2
 * min(5,3,6,2,4)      // 2
 * ```
 *
 * @param list A list of numbers, or a sequence of numbers.
 * @returns A number or a list of numbers.
 */
 export function min(debug: boolean, list: any): any {
    if (debug) {
        checkNumArgs('min', arguments, 1);
    }
    const args = Array.prototype.slice.call (arguments, min.length);
    if (args.length === 0) {
        if (list.constructor === [].constructor) {
            return Math.min.apply(Math, list);
        }
        return list;
    }
    args.push(list);
    return Math.min.apply(Math, args);
}
/**
 * Returns the largest of the given numbers.
 *
 * If any one or more of the parameters cannot be converted into a number, NaN is returned.
 *```
 * max([5,3,6,2,4])    // 6
 * max(5,3,6,2,4)      // 6
 *```
 * @param list A list of numbers, or a sequence of numbers.
 * @returns A number. 
 */
export function max(debug: boolean, list: any): any {
    if (debug) {
        checkNumArgs('max', arguments, 1);
    }
    const args = Array.prototype.slice.call (arguments, min.length);
    if (args.length === 0) {
        if (list.constructor === [].constructor) {
            return Math.max.apply(Math, list);
        }
        return list;
    }
    args.push(list);
    return Math.max.apply(Math, args);
}
/**
 * Returns the median absolute deviation of the list.
 * @param list A list containing numbers. 
 * @returns A number (The median absolute deviation).
 */
export function mad(debug: boolean, list: number[]) {
    if (debug) {
        checkNumArgs('mad', arguments, 1);
    }
    return Mathjs.mad(list);
}
/**
 * Returns the mean value of the list. 
 * If the list contains sublists, then the returned list will have the same number of sublists.
 * @param list A list containing numbers.
 * @returns A number (The mean).
 */
export function mean(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('mean', arguments, 1);
    }
    return Mathjs.mean(list);
}
/**
 * Returns the median of the list.
 * @param list A list containing numbers.
 * @returns A number (The median).
 */
export function median(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('median', arguments, 1);
    }
    return Mathjs.median(list);
}
/**
 * Returns the mode of the list.
 * @param list A list containing numbers.
 * @returns A number (The mode).
 */
export function mode(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('mode', arguments, 1);
    }
    return Mathjs.mode(list);
}

/**
 * Returns the standard deviation of the list.
 * @param list A list containing numbers.
 * @returns A number (The standard deviation).
 */
export function std(debug: boolean, list: number[]) {
    if (debug) {
        checkNumArgs('std', arguments, 1);
    }
    return Mathjs.std(list);
}
/**
 * Returns the variance of the list.
 * @param list A list containing numbers.
 * @returns A number (The variance).
 */
export function vari(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('vari', arguments, 1);
    }
    return Mathjs.variance(list);
}

export class statisticsClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    min(list) {
        return min(this.__debug__, list);
    }

    max(list) {
        return max(this.__debug__, list);
    }

    mad(list) {
        return mad(this.__debug__, list);
    }

    mean(list) {
        return mean(this.__debug__, list);
    }

    median(list) {
        return median(this.__debug__, list);
    }

    mode(list) {
        return mode(this.__debug__, list);
    }

    std(list) {
        return std(this.__debug__, list);
    }

    vari(list) {
        return vari(this.__debug__, list);
    }
}

