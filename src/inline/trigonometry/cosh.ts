/**
 * Returns the hyperbolic cosine (in radians) of the given number.
 * \n
 *```
 * cosh(0); // 1
 * cosh(1); // 1.5430806348152437
 * ```
 *
 * @param num A number or list of numbers (in radians).
 * @returns A number. 
 */
 export function cosh(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.cosh(a_num) ) as number[];
    }
    return Math.cosh(num as number);
}