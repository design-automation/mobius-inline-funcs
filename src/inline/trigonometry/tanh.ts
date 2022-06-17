/**
 * Returns the hyperbolic tangent of the given number.
 * \n
 *```
 * tanh(0);        // 0
 * tanh(Infinity); // 1
 * tanh(1);        // 0.7615941559557649
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers. 
 */
 export function tanh(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.tanh(a_num) ) as number[];
    }
    return Math.tanh(num as number);
}