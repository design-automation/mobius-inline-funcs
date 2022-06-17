/**
 * Returns the arc-tangent (in radians) of the given number.
 * \n
 * ```
 * atan(1);   // 0.7853981633974483
 * atan(0);   // 0
 * atan(-0);  // -0
 * atan(Infinity);   //  1.5707963267948966
 * atan(-Infinity);  // -1.5707963267948966
 * ```
 *
 * // The angle that the line [(0,0);(x,y)] forms with the x-axis in a Cartesian coordinate system
 * atan(y / x);
 *
 * @param num A number or list of numbers between -1 and 1.
 */
 export function atan(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.atan(a_num) ) as number[];
    }
    return Math.atan(num as number);
}