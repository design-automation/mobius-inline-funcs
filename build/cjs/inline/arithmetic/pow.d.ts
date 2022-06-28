/**
 * Returns a number representing the given base taken to the power of the given exponent.
 * \n
 * ```
 * pow(7, 2);    // 49
 * pow(4, 0.5);  // 2 (square root of 4)
 * pow(8, -1/3); // 0.5
 * pow(-7, 2);   // 49 (squares are positive)
 * pow(-7, 3);   // -343 (cubes can be negative)
 *
 * pow(-7, 0.5); // NaN (negative numbers don't have a real square root)
 * pow(-7, 1/3); // NaN (negative bases with fractional exponents always return NaN)
 * ```
 *
 * @param base A number or list of numbers.
 * @param xp A number, the exponent used to raise the base.
 * @returns A number or a list of numbers.
 */
export declare function pow(base: number | number[], xp: number): number | number[];
