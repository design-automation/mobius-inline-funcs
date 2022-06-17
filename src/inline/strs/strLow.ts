/**
 * Converts all the alphabetic characters in a string to lowercase.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str Input string, or list of input strings. 
 * @returns The modified lowercase string. 
 */
 export function strLow(str: string|string[]): string|string[] {
    if (Array.isArray(str)) { return str.map(a_str => a_str.toLowerCase()); }
    return str.toLowerCase();
}