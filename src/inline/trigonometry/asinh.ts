/**
 * Returns the hyperbolic arcsine of the given number.
 * \n
 *```
 * asinh(1);  // 0.881373587019543
 * asinh(0);  // 0
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers.
 */
 export function asinh(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.asinh(a_num) ) as number[];
    }
    return Math.asinh(num as number);
}