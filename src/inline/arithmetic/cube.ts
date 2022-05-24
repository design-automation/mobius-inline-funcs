import * as Mathjs from 'mathjs';
/**
 * Returns the cube of the number.
 * \n
 * If the input is a list, the result will also be a list. 
 * \n
 * ```
 * cube([1, 2, 3, 4])   // [1, 8, 27, 64]
 * cube(5)              // 125
 * ```
 * 
 * @param list A number or a list containing numbers.
 * @returns A number or a list containing numbers.  
 */
 export function cube(list: number|number[]) {
    if (Array.isArray(list)) {
        return list.map( a_num => Mathjs.cube(a_num) ) as number[];
    };
    return Mathjs.cube(list);
    
}