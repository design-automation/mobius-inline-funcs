import * as Mathjs from 'mathjs';

/**
 * Returns the sum of all values in a list.
 * 
 * @param list A list containing numbers.
 * @returns A number (The sum).
 */
 export function sum(list: number|number[]) {
    return Mathjs.sum(list);
}