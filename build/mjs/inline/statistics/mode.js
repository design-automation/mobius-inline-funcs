import * as Mathjs from 'mathjs';
/**
 * Returns the mode of the list.
 * \n
 * ```
 * mode([2, 1, 4, 3, 1])               // returns [1]
 * mode([1, 2.7, 3.2, 4, 2.7])         // returns [2.7]
 * mode([1, 4, 6, 1, 6])               // returns [1, 6]
 * mode(['a','a','b','c'])             // returns ["a"]
 * mode([1, 1.5, 'abc'])               // returns [1, 1.5, "abc"]
 * ```
 * @param list A list containing any values.
 * @returns A list (The mode).
 */
export function mode(list) {
    return Mathjs.mode(list);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3RhdGlzdGljcy9tb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDOzs7Ozs7Ozs7Ozs7R0FZRztBQUNGLE1BQU0sVUFBVSxJQUFJLENBQUMsSUFBVztJQUM3QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyJ9