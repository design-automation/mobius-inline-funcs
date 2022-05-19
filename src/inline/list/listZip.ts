import lodash from 'lodash';
/**
 * Converts a set of lists from rows into columns.
 *
 * If no second argument is provided, it assumes the first argument consists of a list of lists.
 *
 * If a second argument is provided, then it should be a list of the same length as the first argument.
 * In this case, the items in the first and second lists are reaarranged to generate a new set of lists.
 *
 * This function also accepts additional lists of arguments.
 *
 * @param list1  The first row list.
 * @param list2  (Optional) The second row list, which must have the same length as the first.
 * @returns A new list. 
 */
 export function listZip(list1: any[], list2?: any[]): any[] {
    if (arguments.length === 2) {
        return lodash.unzip(list1);
    }
    const lists = Array.from(arguments).slice(1);
    return lodash.zip(...lists);
}