/**
 * Returns the norm of a number or list of numbers. The norm of a mathematical object is a quantity
 * that generally describes the length, size, or extent of the object.
 * \n
 * The norm (length) of a vector should not be confused with a normal vector (a vector perpendicular
 * to a surface).
 *
 * ```
 * norm(-3.5)                        // returns 3.5
 *
 * norm([1, 2, -3], Infinity)        // returns 3
 * norm([1, 2, -3], -Infinity)       // returns 1
 * norm([3, 4], 2)                   // returns 5
 *
 * norm([[1, 2], [3, 4]], 1)         // returns 6
 * ```
 * `p`: A vector space is a set that is closed under finite vector addition and scalar
 * multiplication. The basic example is `n`-dimensional Euclidean space, ie. by default, this
 * function will calculate the length of the input in 2D space.
 *
 * @param list A number or list of numbers.
 * @param p (Optional) Vector space, a number. Its default value is 2.
 * Other supported numbers include `Infinity` and `-Infinity`.
 * @returns A number (The norm).
 */
export declare function norm(list: number | number[], p?: string | number): any;
