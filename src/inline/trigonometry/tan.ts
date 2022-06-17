/**
 * Returns the tangent of the given number.
 * \n
 * ```
 * tan(1); // 1.5574077246549023
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number. 
 */
 export function tan(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.tan(a_num) ) as number[];
    }
    return Math.tan(num as number);
}