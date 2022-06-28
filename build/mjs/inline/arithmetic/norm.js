import * as Mathjs from 'mathjs';
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
export function norm(list, p) {
    if (p !== undefined) {
        return Mathjs.norm(list, p);
    }
    return Mathjs.norm(list);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy9ub3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFDRixNQUFNLFVBQVUsSUFBSSxDQUFDLElBQXFCLEVBQUUsQ0FBaUI7SUFDMUQsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQ2pCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDL0I7SUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyJ9