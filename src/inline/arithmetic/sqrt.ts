/**
 * Returns the square root of the given number. If the number is negative, NaN is returned.
 * \n
 * ```
 * sqrt(9); // 3
 * sqrt(2); // 1.414213562373095
 * 
 * sqrt(1);  // 1
 * sqrt(0);  // 0
 * sqrt(-1); // NaN
 * sqrt(-0); // -0
 * ```
 * 
 * @param num A number or list of numbers.
 * @returns A number, NaN, or a list of numbers.
 */
 export function sqrt(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.sqrt(a_num) ) as number[];
    }
    return Math.sqrt(num as number);
}