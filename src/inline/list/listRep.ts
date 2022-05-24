
/**
 * Returns a new list that repeats the contents of the input list n times.
 *
 * @param list The list.
 * @param n An integer. The number of repetitons. 
 * @returns A new list. 
 */
 export function listRep(list: any, n: number): any[] {
    list = Array.isArray(list) ? list : [list];
    const result: any[] = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < list.length; j++) {
            result.push(list[j]);
        }
    }
    return result;
}