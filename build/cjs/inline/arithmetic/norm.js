"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.norm = void 0;
const Mathjs = __importStar(require("mathjs"));
/**
 * Returns the norm of a number or list of numbers. The norm of a mathematical object is a quantity
 * that generally describes the length, size, or extent of the object.
 * \n
 * The norm (length) of a vector should not be confused with a normal vector (a vector perpendicular
 * to a surface).
 *
 * ```
 * norm(-3.5)                        // returns 3.5
 *
 * norm([1, 2, -3], Infinity)        // returns 3
 * norm([1, 2, -3], -Infinity)       // returns 1
 * norm([3, 4], 2)                   // returns 5
 *
 * norm([[1, 2], [3, 4]], 1)         // returns 6
 * ```
 * `p`: A vector space is a set that is closed under finite vector addition and scalar
 * multiplication. The basic example is `n`-dimensional Euclidean space, ie. by default, this
 * function will calculate the length of the input in 2D space.
 *
 * @param list A number or list of numbers.
 * @param p (Optional) Vector space, a number. Its default value is 2.
 * Other supported numbers include `Infinity` and `-Infinity`.
 * @returns A number (The norm).
 */
function norm(list, p) {
    if (p !== undefined) {
        return Mathjs.norm(list, p);
    }
    return Mathjs.norm(list);
}
exports.norm = norm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy9ub3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBaUM7QUFFakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUNGLFNBQWdCLElBQUksQ0FBQyxJQUFxQixFQUFFLENBQWlCO0lBQzFELElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNqQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFMQSxvQkFLQSJ9