
/**
 * Returns a new list of all the values that evaluate to true.
 *
 * If the second argument is provided, then it returns a new list of all the values in list1 that
 * evaluates to true in list2.
 *
 * @param list1 The list.
 * @param list2 (Optional) A list of values, to be used to cull the first list.
 * @returns A new list. 
 */
 export function listCull(list1: any[], list2?: any[]): any[] {
    list2 = list2 !== undefined ? list2 : list1;
    const result: any[] = [];
    const list2_len =  list2.length;
    for (let i = 0; i < list1.length; i++) {
        const val = (i < list2_len) ? list2[i] : list2[i % list2_len];
        if (val) {
            result.push(list1[i]);
        }
    }
    return result;
}