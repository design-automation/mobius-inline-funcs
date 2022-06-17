/**
 * Returns true if the string s1 ends with s2, false otherwise.
 * \n
 * Overloaded with 2 cases.
 * \n
 * - str can be one string and ends can be one string.
 * - str can be a list of strings and ends can be one string.
 * @param str A string or list of strings, "s1".
 * @param ends A string, "s2".
 * @returns True or False.
 * 
 */
 export function strEnds(str: string|string[], ends: string): boolean|boolean[] {
    if (Array.isArray(str)) { return str.map(a_str => a_str.endsWith(ends)); }
    return str.endsWith(ends);
}