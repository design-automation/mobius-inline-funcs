/**
 * Returns the base 10 logarithm of the given number or list of numbers. If the number is negative, NaN is returned.
 * \n
 * If a custom base is needed, using `log10(y) / log10(x)` will return the logarithm of `y` with base `x`. (log x (y))
 * \n
 * ```
 * Math.log10(2);       // 0.3010299956639812
 * Math.log10(1);       // 0
 * Math.log10(0);       // -Infinity
 * Math.log10(-2);      // NaN
 * Math.log10(100000);  // 5
 * ```
 * 
 * @param base A number or list of numbers.
 * @returns A number, list of numbers, `Infinity` or `NaN`. 
 */
 export function log10(base: number|number[]): number|number[] {
    if (Array.isArray(base)) {
        return base.map( a_num => Math.log10(a_num) ) as number[];
    }
    return Math.log10(base as number);
}