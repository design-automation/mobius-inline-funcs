/**
 * Removes the leading and trailing white space and line terminator characters from a string.
 * For example, \ is considered a line terminator character.
 * ```
 * strTrim("This\ is a \sentence")                \\ "This is a sentence"
 * strTrim("   This used to have whitespace   ")  \\ "This used to have whitespace"
 * ```
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str Input string.
 * @returns The modified string.
 */
export declare function strTrim(str: string | string[]): string | string[];
