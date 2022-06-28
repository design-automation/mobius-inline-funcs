/**
 * Returns true if the dictionary contains the given key, false otherwise.
 * \n
 * If a list of keys is given, a list of true/false values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a string or a list of strings.
 * @returns True or False, or a list of True/False values.
 */
export declare function dictHasKey(dict: object, key: string | string[]): boolean | boolean[];
