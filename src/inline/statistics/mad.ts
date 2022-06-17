import * as Mathjs from 'mathjs';

/**
 * Returns the median absolute deviation of the list.
 * \n
 * ```
 * mad(10, 20, 30)             // returns 10
 * mad([1, 2, 3])              // returns 1
 * mad([[1, 2, 3], [4, 5, 6]]) // returns 1.5
 * ```
 * @param list A list containing numbers. 
 * @returns A number (The median absolute deviation).
 */
 export function mad(list: number[]) {
    return Mathjs.mad(list);
}