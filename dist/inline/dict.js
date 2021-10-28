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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvZGljdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEtBQUssR0FBRyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYyxFQUFFLElBQVksRUFBRSxHQUFvQjtJQUN0RSxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDtJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBVSxDQUFDO0tBQUU7SUFDM0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFRLENBQUM7QUFDNUIsQ0FBQztBQUNEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWMsRUFBRSxJQUFZO0lBQ2pELElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FB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VSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0lBQ0QsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFDRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFjLEVBQUUsS0FBWSxFQUFFLEtBQVk7SUFDN0QsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsRCxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNyRDtJQUNELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEMsQ0FBQyJ9