/**
 * Returns true if the dictionary contains the given key, false otherwise.
 * \n
 * If a list of keys is given, a list of true/false values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a string or a list of strings.
 * @returns True or False, or a list of True/False values. 
 */
 export function dictHasKey(dict: object, key: string|string[]): boolean|boolean[] {
    if (Array.isArray(key)) { return key.map( a_key => dict.hasOwnProperty(a_key)) as boolean[]; }
    return dict.hasOwnProperty(key);
}