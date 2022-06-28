/**
 * Returns the arc-cosine (in radians) of the given number between -1 and 1; otherwise, NaN.
 * \n
 *```
 * acos(-2);  // NaN
 * acos(-1);  // 3.141592653589793
 * acos(0);   // 1.5707963267948966
 * acos(0.5); // 1.0471975511965979
 * acos(1);   // 0
 * acos(2);   // NaN
 *```
 * @param num A number or list of numbers between -1 and 1.
 * @returns A number, list of numbers or NaN.
 */
export declare function acos(num: number | number[]): number | number[];
