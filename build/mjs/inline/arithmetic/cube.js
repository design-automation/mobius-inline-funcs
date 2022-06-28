import * as Mathjs from 'mathjs';
/**
 * Returns the cube of the number.
 * \n
 * If the input is a list, the result will also be a list.
 * \n
 * ```
 * cube([1, 2, 3, 4])   // [1, 8, 27, 64]
 * cube(5)              // 125
 * ```
 *
 * @param list A number or a list containing numbers.
 * @returns A number or a list containing numbers.
 */
export function cube(list) {
    if (Array.isArray(list)) {
        return list.map(a_num => Mathjs.cube(a_num));
    }
    ;
    return Mathjs.cube(list);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ViZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy9jdWJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDOzs7Ozs7Ozs7Ozs7R0FZRztBQUNGLE1BQU0sVUFBVSxJQUFJLENBQUMsSUFBcUI7SUFDdkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQWMsQ0FBQztLQUM5RDtJQUFBLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0IsQ0FBQyJ9