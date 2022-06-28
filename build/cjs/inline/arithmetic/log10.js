"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log10 = void 0;
/**
 * Returns the base 10 logarithm of the given number or list of numbers. If the number is negative, NaN is returned.
 * \n
 * If a custom base is needed, using `log10(y) / log10(x)` will return the logarithm of `y` with base `x`. (log x (y))
 * \n
 * ```
 * Math.log10(2);       // 0.3010299956639812
 * Math.log10(1);       // 0
 * Math.log10(0);       // -Infinity
 * Math.log10(-2);      // NaN
 * Math.log10(100000);  // 5
 * ```
 *
 * @param base A number or list of numbers.
 * @returns A number, list of numbers, `Infinity` or `NaN`.
 */
function log10(base) {
    if (Array.isArray(base)) {
        return base.map(a_num => Math.log10(a_num));
    }
    return Math.log10(base);
}
exports.log10 = log10;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nMTAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2FyaXRobWV0aWMvbG9nMTAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0YsU0FBZ0IsS0FBSyxDQUFDLElBQXFCO0lBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFjLENBQUM7S0FDN0Q7SUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUxBLHNCQUtBIn0=