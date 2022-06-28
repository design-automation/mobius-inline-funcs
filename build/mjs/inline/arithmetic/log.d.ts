/**
 * Returns the natural logarithm (base e) of the given number or list of numbers. If the number is negative, NaN is returned.
 * \n
 * If a custom base is needed, using `log(y) / log(x)` will return the logarithm of `y` with base `x`. (log x (y))
 * \n
 * ```
 * log(-1);  // NaN, out of range
 * log(0);   // -Infinity
 * log(1);   // 0
 * log(10);  // 2.302585092994046
 * ```
 * @param base A number or list of numbers.
 * @returns A number, list of numbers, `Infinity` or `NaN`.
 */
export declare function log(base: number | number[]): number | number[];
