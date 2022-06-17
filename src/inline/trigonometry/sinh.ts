/**
 * Returns the hyperbolic sine (in radians) of the given number.
 * \n
 *```
 * sinh(0); // 0
 * sinh(1); // 1.1752011936438014
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers (in radians).
 */
 export function sinh(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.sinh(a_num) ) as number[];
    }
    return Math.sinh(num as number);
}