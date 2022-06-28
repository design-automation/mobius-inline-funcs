/**
 * Returns the hyperbolic arc-tangent of the given number.
 * \n
 *```
 * atanh(-2);  // NaN
 * atanh(-1);  // -Infinity
 * atanh(0);   // 0
 * atanh(0.5); // 0.5493061443340548
 * atanh(1);   // Infinity
 * atanh(2);   // NaN
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers.
 */
export function atanh(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.atanh(a_num));
    }
    return Math.atanh(num);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRhbmguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL1RyaWdvbm9tZXRyeS9hdGFuaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0YsTUFBTSxVQUFVLEtBQUssQ0FBQyxHQUFvQjtJQUN2QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzVEO0lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ3JDLENBQUMifQ==