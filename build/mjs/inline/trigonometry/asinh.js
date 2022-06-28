/**
 * Returns the hyperbolic arcsine of the given number.
 * \n
 *```
 * asinh(1);  // 0.881373587019543
 * asinh(0);  // 0
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers.
 */
export function asinh(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.asinh(a_num));
    }
    return Math.asinh(num);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpbmguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL1RyaWdvbm9tZXRyeS9hc2luaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0dBU0c7QUFDRixNQUFNLFVBQVUsS0FBSyxDQUFDLEdBQW9CO0lBQ3ZDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFjLENBQUM7S0FDNUQ7SUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBYSxDQUFDLENBQUM7QUFDckMsQ0FBQyJ9