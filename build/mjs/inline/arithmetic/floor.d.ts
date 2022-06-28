/**
 * Returns the largest integer less than or equal to the specified number.
 *```
 * floor( 45.95); //  45
 * floor( 45.05); //  45
 * floor(  4   ); //   4
 * floor(-45.05); // -46
 * floor(-45.95); // -46
 * ```
 *
 * @param num A number or list of numbers.
 * @returns An integer or list of integers.
 */
export declare function floor(num: number | number[]): number | number[];
