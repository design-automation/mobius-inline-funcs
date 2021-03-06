/**
 * Returns true if the string s1 starts with s2, false otherwise.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str A string, "s1".
 * @param starts A string, "s2".
 * @returns True or False.
 */
 export function strStarts(str: string|string[], starts: string): boolean|boolean[] {
    if (Array.isArray(str)) { return str.map(a_str => a_str.startsWith(starts)); }
    return str.startsWith(starts);
}