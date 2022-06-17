/**
 * Returns an array of all the values in a dictionary.
 * \n
 * ```
 * dict1                   = {"key1": 1, "key2": 2}
 * dictVals(dict1)        \\ [1, 2]
 * ```
 *
 * @param dict The dictionary.
 * @returns A list. 
 */
 export function dictVals(dict: object): string[] {
    return Object.values(dict);
}