/**
 * Returns the absolute value of the given number.
 * \n
 * ```
 * abs('-1');     // 1
 * abs(-2);       // 2
 * abs(null);     // 0
 * abs('');       // 0
 * abs([]);       // 0
 * abs([2]);      // [2]
 * abs([1,2]);    // [1,2]
 * abs({});       // NaN
 * abs('string'); // NaN
 * abs();         // NaN
 * ```
 *
 * @param num A number or list of numbers.
 * @returns A number, list of numbers or NaN if invalid.
 *
 */
export declare function abs(num: number | number[]): number | number[];
