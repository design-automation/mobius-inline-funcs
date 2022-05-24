/**
 * Returns a number representing e raised to the power of x, where e is Euler's number and x is the argument.
 *
 * @param num A number or list of numbers.
 * @returns A number or a list of numbers.
 */
 export function exp(num: number|number[]): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => Math.exp(a_num) ) as number[];
    }
    return Math.exp(num as number);
}