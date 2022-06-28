"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acos = void 0;
/**
 * Returns the arc-cosine (in radians) of the given number between -1 and 1; otherwise, NaN.
 * \n
 *```
 * acos(-2);  // NaN
 * acos(-1);  // 3.141592653589793
 * acos(0);   // 1.5707963267948966
 * acos(0.5); // 1.0471975511965979
 * acos(1);   // 0
 * acos(2);   // NaN
 *```
 * @param num A number or list of numbers between -1 and 1.
 * @returns A number, list of numbers or NaN.
 */
function acos(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.acos(a_num));
    }
    return Math.acos(num);
}
exports.acos = acos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvVHJpZ29ub21ldHJ5L2Fjb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLFNBQWdCLElBQUksQ0FBQyxHQUFvQjtJQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFMQSxvQkFLQSJ9