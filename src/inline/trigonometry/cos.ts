/**
 * Returns the cosine of the given number.
 * \n
 *```
 * cos(0);           // 1
 * cos(1);           // 0.5403023058681398
 * cos(PI);          // -1
 * cos(2 * PI);      // 1
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers. 
 */
 export function cos(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.cos(a_num) ) as number[];
    }
    return Math.cos(num as number);
}