/**
 * Returns the hyperbolic tangent of the given number.
 * \n
 *```
 * tanh(0);        // 0
 * tanh(Infinity); // 1
 * tanh(1);        // 0.7615941559557649
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers.
 */
export function tanh(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.tanh(a_num));
    }
    return Math.tanh(num);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFuaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvVHJpZ29ub21ldHJ5L3RhbmgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNGLE1BQU0sVUFBVSxJQUFJLENBQUMsR0FBb0I7SUFDdEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQWMsQ0FBQztLQUMzRDtJQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFhLENBQUMsQ0FBQztBQUNwQyxDQUFDIn0=