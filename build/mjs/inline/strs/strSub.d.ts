/**
 * Gets a substring beginning at the specified index and ending at the end of the string.
 * If `length` is set: Gets a substring beginning at the specified index and having the specified length.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str A string.
 * @param from An integer corresponding to the starting index.
 * @param length (Optional) An integer for the specified length.
 * @returns The modified string.
 */
export declare function strSub(str: string | string[], from: number, length?: number): string | string[];
