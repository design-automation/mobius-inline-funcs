"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
/**
 * Returns the natural logarithm (base e) of the given number or list of numbers. If the number is negative, NaN is returned.
 * \n
 * If a custom base is needed, using `log(y) / log(x)` will return the logarithm of `y` with base `x`. (log x (y))
 * \n
 * ```
 * log(-1);  // NaN, out of range
 * log(0);   // -Infinity
 * log(1);   // 0
 * log(10);  // 2.302585092994046
 * ```
 * @param base A number or list of numbers.
 * @returns A number, list of numbers, `Infinity` or `NaN`.
 */
function log(base) {
    if (Array.isArray(base)) {
        return base.map(a_num => Math.log(a_num));
    }
    return Math.log(base);
}
exports.log = log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9hcml0aG1ldGljL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0YsU0FBZ0IsR0FBRyxDQUFDLElBQXFCO0lBRXRDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFjLENBQUM7S0FDM0Q7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBYyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQU5BLGtCQU1BIn0=