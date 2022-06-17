/**
 * Returns a new list of unique items from the input list.
 * \n
 * - `setMake([1,1,1,2,2,3])`          // returns [1,2,3]
 * @param list The input list.
 * @returns A new list with no repeated values. 
 */
 export function setMake(list: any[]): any[] {
    return Array.from(new Set(list));
}