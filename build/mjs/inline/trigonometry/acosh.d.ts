/**
 * Returns the hyperbolic arc-cosine of the given number. If the number is less than 1, NaN.
 * \n
 * ```
 * acosh(-1);  // NaN
 * acosh(0);   // NaN
 * acosh(0.5); // NaN
 * acosh(1);   // 0
 * acosh(2);   // 1.3169578969248166
 *```
 * @param num A number or list of numbers.
 * @returns A number, or NaN.
 */
export declare function acosh(num: number | number[]): number | number[];
