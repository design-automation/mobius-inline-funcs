/**
 * Returns the largest integer less than or equal to the specified number.
 *```
 * floor( 45.95); //  45
 * floor( 45.05); //  45
 * floor(  4   ); //   4
 * floor(-45.05); // -46
 * floor(-45.95); // -46
 * ```
 *
 * @param num A number or list of numbers.
 * @returns An integer or list of integers.
 */
export function floor(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.floor(a_num));
    }
    return Math.floor(num);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2FyaXRobWV0aWMvZmxvb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0YsTUFBTSxVQUFVLEtBQUssQ0FBQyxHQUFvQjtJQUN2QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzVEO0lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ3JDLENBQUMifQ==