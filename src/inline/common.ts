/**
 * Functions shared by lists, dicts, strings.
 */

import lodash from 'lodash';
import * as chk from '../_check_types';
import { isDict, isStr, isList } from '../_check_types';
import { checkNumArgs } from '../_check_inline_args';

/**
 * Returns the number of items in a list, a dictionary, or a string.
 * @param data The list, dictionary, or string.
 * @returns An integer. 
 */
export function len(debug: boolean, data: any): number {
    if (debug) {
        checkNumArgs('len', arguments, 1);
        chk.checkArgs('len', 'data', data, [isStr, isList, isDict]);
    }
    return lodash.size(data);
}
/**
 * Makes a deep copy of a list or a dictionary.
 * @param data A list or dictionary.
 * @returns The deep copy. 
 */
export function copy(debug: boolean, data: any): any {
    if (debug) {
        checkNumArgs('copy', arguments, 1);
        chk.checkArgs('copy', 'data', data, [isList, isDict]);
    }
    return lodash.cloneDeep(data);
}
/**
 * Returns true of the two lists or dictionaries are equal.
 * Performs a deep comparison between values to determine if they are equivalent.
 * @param data The list or dictionary. 
 * @returns True or False. 
 */
export function equal(debug: boolean, data1: any, data2: any): boolean {
    if (debug) {
        checkNumArgs('copy', arguments, 1);
        chk.checkArgs('copy', 'data1', data1, [isList, isDict]);
        chk.checkArgs('copy', 'data2', data2, [isList, isDict]);
    }
    return lodash.isEqual(data1, data2);
}


export class commonClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    len(data) {
        return len(this.__debug__, data);
    }

    copy(data) {
        return copy(this.__debug__, data);
    }

    equal(data1, data2) {
        return equal(this.__debug__, data1, data2);
    }
}

