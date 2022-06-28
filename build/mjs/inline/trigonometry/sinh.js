/**
 * Returns the hyperbolic sine (in radians) of the given number.
 * \n
 *```
 * sinh(0); // 0
 * sinh(1); // 1.1752011936438014
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers (in radians).
 */
export function sinh(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.sinh(a_num));
    }
    return Math.sinh(num);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvVHJpZ29ub21ldHJ5L3NpbmgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBQ0YsTUFBTSxVQUFVLElBQUksQ0FBQyxHQUFvQjtJQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ3BDLENBQUMifQ==