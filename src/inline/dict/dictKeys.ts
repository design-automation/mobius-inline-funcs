/**
 * Returns an array of all the keys in a dictionary.
 * \n
 * ```
 * dict1                   = {"key1": 1, "key2": 2}
 * dictKeys(dict1)        \\ ["key1", "key2"]
 * ```
 *
 * @param dict The dictionary.
 * @returns A list. 
 */

 export function dictKeys(dict: object): string[] {
    return Object.keys(dict);
}