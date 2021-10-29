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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lubGluZS9zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFjLEVBQUUsSUFBVztJQUMvQyxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUNEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWMsRUFBRSxLQUFZLEVBQUUsS0FBWTtJQUM3RCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBYyxFQUFFLEtBQVksRUFBRSxLQUFZO0lBQzdELElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFjLEVBQUUsS0FBWSxFQUFFLEtBQVk7SUFDN0QsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN4QztJQUNELE9BQU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQyJ9