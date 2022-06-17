import lodash from 'lodash';
import { getArrDepth } from '../../../src/libs/arrs';
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
 * @param lists  The list of lists, or first row list.
 * @returns A new list. 
 */
 export function listZip(...lists: any[]): any[] {
    if (lists.length === 1) {
        // list 1 should be a list of lists
        return lodash.zip(...lists[0]); 
    }
    // there are 2 or more args and list 1 is just a list 
    return lodash.zip(...lists);
}