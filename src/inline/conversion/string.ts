import * as Mathjs from 'mathjs';

/**
 * Create a string or convert any object into a string. 
 * Elements of Arrays and Matrices are processed element wise.
 * @param val A value of any type.
 * @returns A string/strings.
 */
 export function string(val: any) {
    return Mathjs.string(val);
}