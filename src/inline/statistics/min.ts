/**
 * Returns the smallest of the given numbers.
 * \n
 * If any one or more of the parameters cannot be converted into a number, NaN is returned.
 * \n
 * If no parameters are provided, Infinity is returned.
 * \n
 * ```
 * min([5,3,6,2,4])    // 2
 * min([10, 20, 30])   // 10
 * ```
 *
 * @param list A list of numbers, or a sequence of numbers.
 * @returns A number or a list of numbers.
 */
 export function min(list: any): any {
    const args = Array.prototype.slice.call (arguments, min.length);
    if (args.length === 0) {
        if (list.constructor === [].constructor) {
            return Math.min.apply(Math, list);
        }
        return list;
    }
    args.push(list);
    return Math.min.apply(Math, args);
}