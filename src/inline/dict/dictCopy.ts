import lodash from 'lodash';

/**
 * Returns a deep copy of the dictionary.
 * \n
 * A deep copy means that changing values in the copied dictionary will not affect the original dictionary.
 *
 * @param dict The dictionary.
 * @returns The copied dictionary.
 */
 export function dictCopy(dict: object): object {
    return lodash.cloneDeep(dict);
}