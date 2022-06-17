import lodash from 'lodash';

/**
 * Returns true if the values in the two dictionaries are equal.
 * \n
 * Performs a deep comparison between values to determine if they are equivalent.
 *
 * @param dict1 The first dictionary.
 * @param dict2 The second dictionary.
 * @returns True or False.
 */
 export function dictEq(dict1: any[], dict2: any[]): boolean {
    return lodash.isEqual(dict1, dict2);
}