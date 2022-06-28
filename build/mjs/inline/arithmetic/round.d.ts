/**
 * The value of the given number rounded to the nearest integer.
 * ```
 * round( 20.49); //  20
 * round( 20.5 ); //  21
 * round( 42   ); //  42
 * round(-20.5 ); // -20
 * round(-20.51); // -21
 * ```
 *
 * @param num A number or list of numbers.
 * @param dec_pla An integer. Set as 0 by default.
 * @returns An integer or list of integers.
 */
export declare function round(num: number | number[], dec_pla?: number): number | number[];
