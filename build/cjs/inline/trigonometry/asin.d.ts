/**
 * Returns the arcsine (in radians) of the given number if it's between -1 and 1; otherwise, NaN.
 * \n
 *```
 * asin(-2);  // NaN
 * asin(-1);  // -1.5707963267948966 (-pi/2)
 * asin(0);   // 0
 * asin(0.5); // 0.5235987755982989
 * asin(1);   // 1.5707963267948966 (pi/2)
 * asin(2);   // NaN
 *```
 * @param num A number or list of numbers between -1 and 1.
 * @returns A number or list of numbers (in radians).
 */
export declare function asin(num: number | number[]): number | number[];
