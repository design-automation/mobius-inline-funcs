"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tanh = void 0;
/**
 * Returns the hyperbolic tangent of the given number.
 * \n
 *```
 * tanh(0);        // 0
 * tanh(Infinity); // 1
 * tanh(1);        // 0.7615941559557649
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers.
 */
function tanh(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.tanh(a_num));
    }
    return Math.tanh(num);
}
exports.tanh = tanh;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFuaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvVHJpZ29ub21ldHJ5L3RhbmgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNGLFNBQWdCLElBQUksQ0FBQyxHQUFvQjtJQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFMQSxvQkFLQSJ9