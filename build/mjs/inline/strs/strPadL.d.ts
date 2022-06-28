/**
 * Pads the start of the s1 string with white spaces so that the resulting string reaches a given length.
 * If `fill/s2` has been set: Pads the start of the s1 string with the s2 string so that the resulting string reaches a given length.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str "s1", Input string.
 * @param max An integer (the desired length).
 * @param fill (Optional) "s2", The string to pad the input string with, starting from the left of s1.
 * @returns The modified string.
 */
export declare function strPadL(str: string | string[], max: number, fill?: string): string | string[];
