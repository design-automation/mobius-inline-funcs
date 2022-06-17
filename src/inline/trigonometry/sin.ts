/**
 * Returns the sine of the given number.
 * \n
 *```
 * sin(0);           // 0
 * sin(PI/2);        // 1
 * ```
 *
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers. 
 */
 export function sin(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.sin(a_num) ) as number[];
    }
    return Math.sin(num as number);
}