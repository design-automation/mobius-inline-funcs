"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acosh = void 0;
/**
 * Returns the hyperbolic arc-cosine of the given number. If the number is less than 1, NaN.
 * \n
 * ```
 * acosh(-1);  // NaN
 * acosh(0);   // NaN
 * acosh(0.5); // NaN
 * acosh(1);   // 0
 * acosh(2);   // 1.3169578969248166
 *```
 * @param num A number or list of numbers.
 * @returns A number, or NaN.
 */
function acosh(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.acosh(a_num));
    }
    return Math.acosh(num);
}
exports.acosh = acosh;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNvc2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL1RyaWdvbm9tZXRyeS9hY29zaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7QUFDRixTQUFnQixLQUFLLENBQUMsR0FBb0I7SUFDdkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQWMsQ0FBQztLQUM1RDtJQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFhLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBTEEsc0JBS0EifQ==