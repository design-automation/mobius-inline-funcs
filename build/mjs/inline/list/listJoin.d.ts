/**
 * Joins two or more lists into a single list.
 *
 * If the arguments are not lists, then they will be converted into lists.
 *
 * This functions accepts any number of arguments. The values in the lists can have any datatype.
 *
 * @param lists Multiple lists.
 * @returns The combined list.
 * @example `list = listJoin([1, 2], [3, 4], [5, 6])`
 * @example_info Returns `[1, 2, 3, 4, 5, 6]`.
 *
 * @example `list = listJoin([1, 2, 3], 4)`
 * @example_info Returns `[1, 2, 3, 4]`.
 *
 * @example `list = listJoin(1, 2, 3)`
 * @example_info Returns `[1, 2, 3]`.
 *
 * @example `list = listJoin(1, [2, 3], [[4, 5, 6]])`
 * @example_info Returns `[1, 2, 3, [4, 5, 6]]`.
 */
export declare function listJoin(...lists: any[]): any[];
