import * as Mathjs from 'mathjs';

/**
 * Create a number or convert a string, boolean, or unit to a number. 
 * When value is a matrix, all elements will be converted to numbers.
 * @param val A value of any type.
 * @returns A number/numbers.
 */
 export function number(val: any) {
    return Mathjs.number(val);
}