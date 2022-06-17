import { min } from "./min";

/**
 * Returns the largest of the given numbers.
 *
 * If any one or more of the parameters cannot be converted into a number, NaN is returned.
 *```
 * max([5,3,6,2,4])    // 6
 *```
 * @param list A list of numbers, or a sequence of numbers.
 * @returns A number. 
 */
 export function max(list: any): any {
    const args = Array.prototype.slice.call (arguments, min.length);
    if (args.length === 0) {
        if (list.constructor === [].constructor) {
            return Math.max.apply(Math, list);
        }
        return list;
    }
    args.push(list);
    return Math.max.apply(Math, args);
}