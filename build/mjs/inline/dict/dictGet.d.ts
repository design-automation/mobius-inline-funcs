/**
 * Returns the item in the dictionary specified by key.
 * \n
 * If the key does not exist, undefined is returned.
 * If a list of keys is provided, then a list of values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a single string or a list of strings.
 * @returns The value (or list of values) associated with the given key.
 */
export declare function dictGet(dict: object, key: string | string[]): any | any[];
