/**
 * Functions for working with dictionaries. The functions do not modify input dictionaries.
 */
import lodash from 'lodash';
import * as chk from '../_check_types';
import { isDict, isStr, isStrL } from '../_check_types';
import { checkNumArgs } from '../_check_inline_args';
/**
 * Returns the item in the dictionary specified by key.
 * If the key does nto exist, undefined is returned.
 *
 * If a list of keys is provided, then a list of values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a single string or a list of strings.
 */
export function dictGet(debug, dict, key) {
    if (debug) {
        checkNumArgs('dictGet', arguments, 2);
        chk.checkArgs('dictGet', 'dict', dict, [isDict]);
        chk.checkArgs('dictGet', 'key', key, [isStr, isStrL]);
    }
    if (Array.isArray(key)) {
        return key.map(a_key => dict[a_key]);
    }
    return dict[key];
}
/**
 * Returns an array of all the keys in a dictionary.
 *
 * @param dict The dictionary.
 */
export function dictKeys(debug, dict) {
    if (debug) {
        checkNumArgs('dictKeys', arguments, 1);
        chk.checkArgs('dictKeys', 'dict', dict, [isDict]);
    }
    return Object.keys(dict);
}
/**
 * Returns an array of all the values in a dictionary.
 *
 * @param dict The dictionary.
 */
export function dictVals(debug, dict) {
    if (debug) {
        checkNumArgs('dictVals', arguments, 1);
        chk.checkArgs('dictVals', 'dict', dict, [isDict]);
    }
    return Object.values(dict);
}
/**
 * Returns true if the dictionary contains the given key, false otherwsie.
 *
 * If a list of keys is given, a list of true/false values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a string or a list of strings.
 */
export function dictHasKey(debug, dict, key) {
    if (debug) {
        checkNumArgs('dictHasKey', arguments, 2);
        chk.checkArgs('dictHasKey', 'dict', dict, [isDict]);
        chk.checkArgs('dictHasKey', 'key', key, [isStr, isStrL]);
    }
    if (Array.isArray(key)) {
        return key.map(a_key => dict.hasOwnProperty(a_key));
    }
    return dict.hasOwnProperty(key);
}
/**
 * Returns true if the dictionary contains the given value, false otherwsie.
 *
 * @param dict The dictionary.
 * @param val The value to seach for, can be any type.
 */
export function dictHasVal(debug, dict, val) {
    if (debug) {
        checkNumArgs('dictHasVal', arguments, 2);
        chk.checkArgs('dictHasVal', 'dict', dict, [isDict]);
    }
    return Object.values(dict).indexOf(val) !== -1;
}
/**
 * Returns the first key in the dictionary that has the given value.
 *
 * If the value does not exist, returns null.
 *
 * @param dict The dictionary.
 * @param val The value, can be any type.
 */
export function dictFind(debug, dict, val) {
    if (debug) {
        checkNumArgs('dictFind', arguments, 2);
        chk.checkArgs('dictFind', 'dict', dict, [isDict]);
    }
    for (const key of Object.keys(dict)) {
        if (dict[key] === val) {
            return key;
        }
    }
    return null;
}
/**
 * Returns a deep copy of the dictionary.
 *
 * A deep copy means that changing values in the copied dictionary will not affect the original dictionary.
 *
 * @param dict The dictionary.
 */
export function dictCopy(debug, dict) {
    if (debug) {
        checkNumArgs('dictCopy', arguments, 1);
        chk.checkArgs('dictCopy', 'dict', dict, [isDict]);
    }
    return lodash.cloneDeep(dict);
}
/**
 * Returns true if the values in the two dictionaries are equal.
 *
 * Performs a deep comparison between values to determine if they are equivalent.
 *
 * @param dict1 The first dictionary.
 * @param dict2 The second dictionary.
 */
export function dictEq(debug, dict1, dict2) {
    if (debug) {
        checkNumArgs('dictEq', arguments, 2);
        chk.checkArgs('dictEq', 'dict1', dict1, [isDict]);
        chk.checkArgs('dictEq', 'dict2', dict2, [isDict]);
    }
    return lodash.isEqual(dict1, dict2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2RpY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5saW5lL19kaWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sS0FBSyxHQUFHLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFjLEVBQUUsSUFBWSxFQUFFLEdBQW9CO0lBQ3RFLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDakQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEO0lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFVLENBQUM7S0FBRTtJQUMzRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQVEsQ0FBQztBQUM1QixDQUFDO0FBQ0Q7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYyxFQUFFLElBQVk7SUFDakQsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxD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