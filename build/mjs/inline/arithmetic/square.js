import * as Mathjs from 'mathjs';
/**
 * Returns the square of the number.
 * \n
 * If the input is a list, the result will also be a list.
 * \n
 * ```
 * square([1, 2, 3, 4])    // [1, 4, 9, 16]
 * square(5)               // 25
 * ```
 *
 * @param list A number or a list containing numbers.
 * @returns A number or a list containing numbers.
 *
 */
export function square(list) {
    if (Array.isArray(list)) {
        return list.map(a_num => Mathjs.square(a_num));
    }
    ;
    return Mathjs.square(list);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9hcml0aG1ldGljL3NxdWFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQzs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0YsTUFBTSxVQUFVLE1BQU0sQ0FBQyxJQUFxQjtJQUN6QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQ2hFO0lBQUEsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixDQUFDIn0=