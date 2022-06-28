import * as Mathjs from 'mathjs';
/**
 * Create a boolean or convert a string or number to a boolean.
 * \n
 * In case of a number, true is returned for non-zero numbers, and false in case of zero.
 * Strings can be 'true' or 'false', or can contain a number.
 * When value is a matrix, all elements will be converted to boolean.
 * @param val A value of any type.
 * @returns True or False.
 */
export function boolean(val) {
    return Mathjs.boolean(val);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvY29udmVyc2lvbi9ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDOzs7Ozs7OztHQVFHO0FBQ0YsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFvQjtJQUN6QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQyJ9