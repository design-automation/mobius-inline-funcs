/**
 * Removes whitespace from the left end of a string.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str Input string.
 * @returns The modified string.
 */
 export function strTrimL(str: string|string[]): string|string[] {
    if (Array.isArray(str)) { return str.map(a_str => a_str.trimLeft()); }
    return str.trimStart();
}