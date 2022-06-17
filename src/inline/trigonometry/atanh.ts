/**
 * Returns the hyperbolic arc-tangent of the given number.
 * \n
 *```
 * atanh(-2);  // NaN
 * atanh(-1);  // -Infinity
 * atanh(0);   // 0
 * atanh(0.5); // 0.5493061443340548
 * atanh(1);   // Infinity
 * atanh(2);   // NaN
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers. 
 */
 export function atanh(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.atanh(a_num) ) as number[];
    }
    return Math.atanh(num as number);
}