/**
 * Returns the item in the list specified by index, either a positive or negative integer.
 * If the index is larger than the size of the list, `undefined` is returned.
 *
 * ```
 * listGet([5,6,7,8,9], [1,2,3])            // [6, 7, 8]
 * listGet([0,1,2,3,4], -2)                 // 3
 * listGet(listGet([0, [1, 2, 3] ], 1), 2)  // 2
 * ```
 *
 * @param list The list.
 * @param idx The index, an integer or a list of integers.
 * @returns The specified item, or list of items.
 */
export declare function listGet(list: any[], idx: number | number[]): any | any[];
