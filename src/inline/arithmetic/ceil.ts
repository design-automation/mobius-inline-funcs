/**
 * Returns the smallest integer greater than or equal to the given number.
 *```
 * ceil(.95);    // 1
 * ceil(4);      // 4
 * ceil(7.004);  // 8
 * ceil(-0.95);  // -0
 * ceil(-4);     // -4
 * ceil(-7.004); // -7
 * ```
 *
 * @param num A number or list of numbers.
 * @returns An integer or list of integers. 
 */
 export function ceil(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.ceil(a_num) ) as number[];
    }
    return Math.ceil(num as number);
}