/**
 * Functions shared by lists, dicts, strings.
 */
import lodash from 'lodash';
import * as chk from '../_check_types';
import { isDict, isStr, isList } from '../_check_types';
import { checkNumArgs } from '../_check_inline_args';
/**
 * Returns the number of items in a list, a dictionary, or a string.
 * @param data The list, dictionary, or string.
 * @returns An integer.
 */
export function len(debug, data) {
    if (debug) {
        checkNumArgs('len', arguments, 1);
        chk.checkArgs('len', 'data', data, [isStr, isList, isDict]);
    }
    return lodash.size(data);
}
/**
 * Makes a deep copy of a list or a dictionary.
 * @param data A list or dictionary.
 * @returns The deep copy.
 */
export function copy(debug, data) {
    if (debug) {
        checkNumArgs('copy', arguments, 1);
        chk.checkArgs('copy', 'data', data, [isList, isDict]);
    }
    return lodash.cloneDeep(data);
}
/**
 * Returns true of the two lists or dictionaries are equal.
 * Performs a deep comparison between values to determine if they are equivalent.
 * @param data The list or dictionary.
 * @returns True or False.
 */
export function equal(debug, data1, data2) {
    if (debug) {
        checkNumArgs('copy', arguments, 1);
        chk.checkArgs('copy', 'data1', data1, [isList, isDict]);
        chk.checkArgs('copy', 'data2', data2, [isList, isDict]);
    }
    return lodash.isEqual(data1, data2);
}
export class commonClass {
    constructor(debug) {
        this.__debug__ = debug;
    }
    len(data) {
        return len(this.__debug__, data);
    }
    copy(data) {
        return copy(this.__debug__, data);
    }
    equal(data1, data2) {
        return equal(this.__debug__, data1, data2);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxLQUFLLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBYyxFQUFFLElBQVM7SUFDekMsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLElBQUksQ0FBQyxLQUFjLEVBQUUsSUFBUztJQUMxQyxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDtJQUNELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQWMsRUFBRSxLQUFVLEVBQUUsS0FBVTtJQUN4RCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDM0Q7SUFDRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFHRCxNQUFNLE9BQU8sV0FBVztJQUVwQixZQUFZLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7SUFDMUIsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFJO1FBQ0osT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQUk7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUs7UUFDZCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0oifQ==