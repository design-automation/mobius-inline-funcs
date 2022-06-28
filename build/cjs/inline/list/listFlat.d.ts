/**
 * Returns a flattened copy of the list. If the input list has lists nested within it, the values of
 * the nested lists will be unnested.
 *
 * If no depth is specified, then it is flattened by the maximum amount.
 * ```
 * listFlat([1,2,3,[4,[5],6],7])           // [1, 2, 3, 4, 5, 6, 7]
 * listFlat([1,2,3,[4,[5, [6] ], 7] ], 1)  // [1,2,3,4, [5, [6]], 7]
 *```
 * @param list The list.
 * @param depth (Optional) The depth to flatten to, an integer.
 * @returns The flattened list.
 */
export declare function listFlat(list: any[], depth?: number): any[];
