import * as Mathjs from 'mathjs';
import { checkNumArgs } from '../_check_inline_args';
/**
 * To be completed...
 * @param val
 */
export function boolean(debug, val) {
    if (debug) {
        checkNumArgs('boolean', arguments, 1);
    }
    return Mathjs.boolean(val);
}
/**
 * To be completed...
 * @param val
 */
export function number(debug, val) {
    if (debug) {
        checkNumArgs('number', arguments, 1);
    }
    return Mathjs.number(val);
}
/**
 * To be completed...
 * @param val
 */
export function string(debug, val) {
    if (debug) {
        checkNumArgs('string', arguments, 1);
    }
    return Mathjs.string(val);
}
/**
 * Returns the median absolute deviation of the list
 * @param list
 */
export function mad(debug, list) {
    if (debug) {
        checkNumArgs('mad', arguments, 1);
    }
    return Mathjs.mad(list);
}
/**
 * Returns the mean value of the list
 * @param list
 */
export function mean(debug, list) {
    if (debug) {
        checkNumArgs('mean', arguments, 1);
    }
    return Mathjs.mean(list);
}
/**
 * Returns the median of the list
 * @param list
 */
export function median(debug, list) {
    if (debug) {
        checkNumArgs('median', arguments, 1);
    }
    return Mathjs.median(list);
}
/**
 * Returns the mode of the list
 * @param list
 */
export function mode(debug, list) {
    if (debug) {
        checkNumArgs('mode', arguments, 1);
    }
    return Mathjs.mode(list);
}
/**
 * Returns the product of all values in a list
 * @param list
 */
export function prod(debug, list) {
    if (debug) {
        checkNumArgs('prod', arguments, 1);
    }
    return Mathjs.prod(list);
}
/**
 * Returns the standard deviation of the list
 * @param list
 */
export function std(debug, list) {
    if (debug) {
        checkNumArgs('std', arguments, 1);
    }
    return Mathjs.std(list);
}
/**
 * Returns the variance of the list
 * @param list
 */
export function vari(debug, list) {
    if (debug) {
        checkNumArgs('vari', arguments, 1);
    }
    return Mathjs.variance(list);
}
/**
 * Returns the sum of all values in a list
 * @param list
 */
export function sum(debug, list) {
    if (debug) {
        checkNumArgs('sum', arguments, 1);
    }
    return Mathjs.sum(list);
}
/**
 * Returns the hypotenuse of all values in a list
 * @param list
 */
export function hypot(debug, list) {
    if (debug) {
        checkNumArgs('hypot', arguments, 1);
    }
    return Mathjs.hypot(list);
}
/**
 * Returns the norm of a list
 * @param list
 */
export function norm(debug, list) {
    if (debug) {
        checkNumArgs('norm', arguments, 1);
    }
    return Mathjs.norm(list);
}
/**
 * Returns the square of the number
 * @param list
 */
export function square(debug, list) {
    if (debug) {
        checkNumArgs('square', arguments, 1);
    }
    return Mathjs.square(list);
}
/**
 * Returns the cube of the number
 * @param list
 */
export function cube(debug, list) {
    if (debug) {
        checkNumArgs('cube', arguments, 1);
    }
    return Mathjs.cube(list);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aGpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lubGluZS9tYXRoanMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYyxFQUFFLEdBQVc7SUFDL0MsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUNELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBQ0Q7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFjLEVBQUUsR0FBVztJQUM5QyxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFDRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWMsRUFBRSxHQUFXO0lBQzlDLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUNEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBYyxFQUFFLElBQWM7SUFDOUMsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUNELE9BQU8sTUFBTSxDQUFDLEdBQUcs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