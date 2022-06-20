import * as Mathjs from 'mathjs';

/**
 * Create a boolean or convert a string or number to a boolean.
 * \n 
 * In case of a number, true is returned for non-zero numbers, and false in case of zero. 
 * Strings can be 'true' or 'false', or can contain a number. 
 * When value is a matrix, all elements will be converted to boolean.
 * @param val A value of any type.
 * @returns True or False. 
 */
 export function boolean(val: number | string) {
    return Mathjs.boolean(val);
}