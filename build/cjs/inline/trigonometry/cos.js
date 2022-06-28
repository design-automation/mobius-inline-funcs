"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cos = void 0;
/**
 * Returns the cosine of the given number.
 * \n
 *```
 * cos(0);           // 1
 * cos(1);           // 0.5403023058681398
 * cos(PI);          // -1
 * cos(2 * PI);      // 1
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers.
 */
function cos(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.cos(a_num));
    }
    return Math.cos(num);
}
exports.cos = cos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9Ucmlnb25vbWV0cnkvY29zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBQ0YsU0FBZ0IsR0FBRyxDQUFDLEdBQW9CO0lBQ3JDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFjLENBQUM7S0FDMUQ7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBYSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUxBLGtCQUtBIn0=