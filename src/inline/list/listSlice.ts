
/**
 * Return a sub-list from the list.
 *
 * @param list The list.
 * @param start The start index of the slice operation, an integer.
 * @param end (Optional) The end index of the slice operation, an integer. Defaults to the length of the list.
 * @returns The sub-list.
 */
 export function listSlice(list: any[], start: number, end?: number): any[] {
    return list.slice(start, end);
}