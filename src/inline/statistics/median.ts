import * as Mathjs from 'mathjs';

/**
 * Returns the median of the list.
 * \n
 * ```
 * median([5, 2, 7])        // returns 5
 * median([3, -1, 5, 7])    // returns 4
 * ```
 * @param list A list containing numbers.
 * @returns A number (The median).
 */
 export function median(list: number[]) {
    return Mathjs.median(list);
}