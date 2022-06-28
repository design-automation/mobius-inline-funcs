/**
 * Returns the mode of the list.
 * \n
 * ```
 * mode([2, 1, 4, 3, 1])               // returns [1]
 * mode([1, 2.7, 3.2, 4, 2.7])         // returns [2.7]
 * mode([1, 4, 6, 1, 6])               // returns [1, 6]
 * mode(['a','a','b','c'])             // returns ["a"]
 * mode([1, 1.5, 'abc'])               // returns [1, 1.5, "abc"]
 * ```
 * @param list A list containing any values.
 * @returns A list (The mode).
 */
export declare function mode(list: any[]): any;
