/**
 * Converts all the alphabetic characters in a string to uppercase.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str Input string.
 * @returns The modified uppercase string. 
 */
 export function strUpp(str: string|string[]): string|string[] {
    if (Array.isArray(str)) { return str.map(a_str => a_str.toUpperCase()); }
    return str.toUpperCase();
}