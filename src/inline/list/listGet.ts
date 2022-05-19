
/**
 * Returns the item in the list specified by index, either a positive or negative integer.
 *
 * @param list  The list.
 * @param idx The index, an integer or a list of integers.
 * @returns The specified item. 
 */
 export function listGet(list: any[], idx: number|number[]): any|any[] {
    if (Array.isArray(idx)) { return idx.map( a_idx => listGet(list, a_idx)) as any[]; }
    if (idx < 0) { idx = list.length + idx; }
    return list[idx] as any;
}