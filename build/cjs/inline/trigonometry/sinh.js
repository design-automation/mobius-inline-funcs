"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sinh = void 0;
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
function sinh(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.sinh(a_num));
    }
    return Math.sinh(num);
}
exports.sinh = sinh;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvVHJpZ29ub21ldHJ5L3NpbmgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7OztHQVNHO0FBQ0YsU0FBZ0IsSUFBSSxDQUFDLEdBQW9CO0lBQ3RDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFjLENBQUM7S0FDM0Q7SUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBYSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUxBLG9CQUtBIn0=