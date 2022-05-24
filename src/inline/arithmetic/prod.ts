import * as Mathjs from 'mathjs';

/**
 * Returns the product of all values in a list.
 * \n
 * ```
 * prod([2, 3])             // 6
 * prod([2, 3, 4])          // 24
 * prod([[2, 5], [4, 3]])   // 120
 * ```
 * @param list A list containing numbers.
 * @returns A number (The total product).
 */
 export function prod(list: number|number[]) {
    // if (Array.isArray(list)) {
    //     return list.map( a_num => Mathjs.prod(a_num) ) as number[];
    // };
    return Mathjs.prod(list);
}