"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosh = void 0;
/**
 * Returns the hyperbolic cosine (in radians) of the given number.
 * \n
 *```
 * cosh(0); // 1
 * cosh(1); // 1.5430806348152437
 * ```
 *
 * @param num A number or list of numbers (in radians).
 * @returns A number.
 */
function cosh(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.cosh(a_num));
    }
    return Math.cosh(num);
}
exports.cosh = cosh;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvVHJpZ29ub21ldHJ5L2Nvc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNGLFNBQWdCLElBQUksQ0FBQyxHQUFvQjtJQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFMQSxvQkFLQSJ9