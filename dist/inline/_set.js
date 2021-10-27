/**
 * Set functions for working with sets, using lists as a data structure. Does not modify input list.
 */
import * as Mathjs from 'mathjs';
import { checkNumArgs } from '../_check_inline_args';
/**
 * Generates a list of unique items.
 * @param list
 */
export function setMake(debug, list) {
    if (debug) {
        checkNumArgs('setMake', arguments, 1);
    }
    return Array.from(new Set(list));
}
/**
 * Generates a list of unique items from the union of the two input lists.
 * @param list1
 * @param list2
 */
export function setUni(debug, list1, list2) {
    if (debug) {
        checkNumArgs('setUni', arguments, 2);
    }
    return Mathjs.setUnion(list1, list2);
}
/**
 * Generates a list of unique items from the intersection of the two input lists.
 * @param list1
 * @param list2
 */
export function setInt(debug, list1, list2) {
    if (debug) {
        checkNumArgs('setInt', arguments, 2);
    }
    return Mathjs.setIntersect(list1, list2);
}
/**
 * Generates a list of unique items from the difference of the two input lists.
 * @param list1
 * @param list2
 */
export function setDif(debug, list1, list2) {
    if (debug) {
        checkNumArgs('setDif', arguments, 2);
    }
    return Mathjs.setDifference(list1, list2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvX3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWMsRUFBRSxJQUFXO0lBQy9DLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekM7SUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBQ0Q7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBYyxFQUFFLEtBQVksRUFBRSxLQUFZO0lBQzdELElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFjLEVBQUUsS0FBWSxFQUFFLEtBQVk7SUFDN0QsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN4QztJQUNELE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUNEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWMsRUFBRSxLQUFZLEVBQUUsS0FBWTtJQUM3RCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QsT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5QyxDQUFDIn0=