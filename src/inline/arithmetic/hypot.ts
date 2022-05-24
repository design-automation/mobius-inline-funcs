import * as Mathjs from 'mathjs';

/**
 * Returns the hypotenuse (square root of the sum of squares and its arguments) of all values in a list.
 * @param list A number or list containing numbers.
 * @returns A number (The hypotenuse).
 */
 export function hypot(list: number|number[]) {
    return Mathjs.hypot(list);
}