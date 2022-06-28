/**
 * Returns the square root of the given number. If the number is negative, NaN is returned.
 * \n
 * ```
 * sqrt(9); // 3
 * sqrt(2); // 1.414213562373095
 *
 * sqrt(1);  // 1
 * sqrt(0);  // 0
 * sqrt(-1); // NaN
 * sqrt(-0); // -0
 * ```
 *
 * @param num A number or list of numbers.
 * @returns A number, NaN, or a list of numbers.
 */
export function sqrt(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.sqrt(a_num));
    }
    return Math.sqrt(num);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy9zcXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNGLE1BQU0sVUFBVSxJQUFJLENBQUMsR0FBb0I7SUFDdEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQWMsQ0FBQztLQUMzRDtJQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFhLENBQUMsQ0FBQztBQUNwQyxDQUFDIn0=