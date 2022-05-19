
/**
 * Creates a new list, with the items in reverse order.
 *
 * @param lists  The list to reverse.
 * @returns A new list.
 */
 export function listRev(list: any[]): any[] {
    return list.slice().reverse();
}