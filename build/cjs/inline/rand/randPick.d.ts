/**
 * Returns a random set of items from the list.
 * If `seed` is set: Returns a random set of items from the list, based on the numeric seed.
 *
 * @param list A list. The set of items that can be returned.
 * @param num  An integer. The number of items to return from the list.
 * @param seed (Optional) A number. If a seed is given, the result will be the same for the same seed.
 * @returns A list, or a value (if num is set to 1).
 */
export declare function randPick(list: any[], num: number, seed?: number): number | number[];
