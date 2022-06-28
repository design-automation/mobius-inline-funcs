"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqrt = void 0;
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
function sqrt(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.sqrt(a_num));
    }
    return Math.sqrt(num);
}
exports.sqrt = sqrt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy9zcXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNGLFNBQWdCLElBQUksQ0FBQyxHQUFvQjtJQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFMQSxvQkFLQSJ9