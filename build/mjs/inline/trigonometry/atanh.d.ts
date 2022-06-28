/**
 * Returns the hyperbolic arc-tangent of the given number.
 * \n
 *```
 * atanh(-2);  // NaN
 * atanh(-1);  // -Infinity
 * atanh(0);   // 0
 * atanh(0.5); // 0.5493061443340548
 * atanh(1);   // Infinity
 * atanh(2);   // NaN
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers.
 */
export declare function atanh(num: number | number[]): number | number[];
