"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atan = void 0;
/**
 * Returns the arc-tangent (in radians) of the given number.
 * \n
 * ```
 * atan(1);   // 0.7853981633974483
 * atan(0);   // 0
 * atan(-0);  // -0
 * atan(Infinity);   //  1.5707963267948966
 * atan(-Infinity);  // -1.5707963267948966
 * ```
 *
 * // The angle that the line [(0,0);(x,y)] forms with the x-axis in a Cartesian coordinate system
 * atan(y / x);
 *
 * @param num A number or list of numbers between -1 and 1.
 */
function atan(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.atan(a_num));
    }
    return Math.atan(num);
}
exports.atan = atan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvVHJpZ29ub21ldHJ5L2F0YW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0YsU0FBZ0IsSUFBSSxDQUFDLEdBQW9CO0lBQ3RDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFjLENBQUM7S0FDM0Q7SUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBYSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUxBLG9CQUtBIn0=