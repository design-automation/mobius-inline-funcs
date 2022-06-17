import * as Mathjs from 'mathjs';

/**
 * Returns the variance of the list.
 * By default, the sum of squared errors is divided by (n - 1).
 * \n
 * ```
 * vari([2, 4, 6])     \\ 4
 * vari([2, 4, 6, 8])  \\ 6.666666666666667
 * ```
 * @param list A list containing numbers.
 * @returns A number (The variance).
 */
 export function vari(list: number[]) {
    return Mathjs.var(list);
}
//TODO: Change to variance instead of mathjs.var when mathjs is updated 