/**
 * Removes whitespace from the right end of a string.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str Input string.
 * @returns The modified string.
 */
 export function strTrimR(str: string|string[]): string|string[] {
    if (Array.isArray(str)) { return str.map(a_str => a_str.trimRight()); }
    return str.trimEnd();
}