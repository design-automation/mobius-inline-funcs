import lodash from 'lodash';
/**
 * Creates a new list, with the items in sorted order.
 *
 * If no second argument is provided, then the list is sorted in ascending order.
 *
 * If a second argument is provided, then it should be a list of the same length as the first argument.
 * In this case, the first list is sorted according to ascending order of the values in the second list.
 *
 * @param list1  The input list.
 * @param list2  (Optional) A list indicating the order to sort list 1 in. 
 * @returns A new list. 
 */
 export function listSort(list1: any[], list2?: any[]): any[] {
    if (list2 !== undefined) {
        const zipped = lodash.zip(list1, list2);
        zipped.sort( (a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0 );
        const unzipped = lodash.unzip(zipped);
        return unzipped[0];
    }
    return list1.slice().sort( (a, b) => a > b ? 1 : a < b ? -1 : 0 );
}