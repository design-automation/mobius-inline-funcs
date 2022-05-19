
/**
 * Return a list that is rotated, i.e. items from the end of the list are moved to the start of the list.
 * For a positive rotation, items are moved from the end to the start of the list.
 * For a negative rotation, items are moved from the start to the end of the list.
 *
 * @param list The list.
 * @param rot The number of items to rotate, an integer.
 * @returns The rotated list.
 */
 export function listRot(list: any[], rot: number): any[] {
    const len: number = list.length;
    const split: number = (len - rot) % len;
    const start: any[] = list.slice(split, len);
    const end: any[] = list.slice(0, split);
    return start.concat(end);
}