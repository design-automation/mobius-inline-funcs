/**
 * Generates a list of integers, from 0 to `end` (exclusive), with a step size of 1.
 * If `start` has been set: Generates a list of integers, from start (inclusive) to `end` (exclusive), with a step size of 1.
 * If `start` and `step` has been set: Generates a list of integers, from start to end, with a specified step size.
 * ```
 * range(3)           // [0, 1, 2]
 * range(2, 6)        // [2, 3, 4, 5]
 * range(1, 9, 2)     // [1, 3, 5, 7]
 *```
 * @param start (Optional) An integer. The start of the range, inclusive.
 * @param end An integer. The end of the range, exclusive.
 * @param step (Optional) An integer. The step size.
 * @returns A list.
 */
export declare function range(start: number, end?: number, step?: number): number[];
