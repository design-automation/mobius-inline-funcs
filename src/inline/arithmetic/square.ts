import * as Mathjs from 'mathjs';

/**
 * Returns the square of the number.
 * \n
 * If the input is a list, the result will also be a list. 
 * \n
 * ```
 * square([1, 2, 3, 4])    // [1, 4, 9, 16]
 * square(5)               // 25
 * ```
 * 
 * @param list A number or a list containing numbers.
 * @returns A number or a list containing numbers.  
 * 
 */
 export function square(list: number|number[]) {
    if (Array.isArray(list)) {
        return list.map( a_num => Mathjs.square(a_num) ) as number[];
    };
    return Mathjs.square(list);
}