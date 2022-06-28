"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tan = void 0;
/**
 * Returns the tangent of the given number.
 * \n
 * ```
 * tan(1); // 1.5574077246549023
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number.
 */
function tan(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.tan(a_num));
    }
    return Math.tan(num);
}
exports.tan = tan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9Ucmlnb25vbWV0cnkvdGFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7OztHQVFHO0FBQ0YsU0FBZ0IsR0FBRyxDQUFDLEdBQW9CO0lBQ3JDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFjLENBQUM7S0FDMUQ7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBYSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUxBLGtCQUtBIn0=