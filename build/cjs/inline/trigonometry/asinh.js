"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asinh = void 0;
/**
 * Returns the hyperbolic arcsine of the given number.
 * \n
 *```
 * asinh(1);  // 0.881373587019543
 * asinh(0);  // 0
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers.
 */
function asinh(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.asinh(a_num));
    }
    return Math.asinh(num);
}
exports.asinh = asinh;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpbmguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL1RyaWdvbm9tZXRyeS9hc2luaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFDRixTQUFnQixLQUFLLENBQUMsR0FBb0I7SUFDdkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQWMsQ0FBQztLQUM1RDtJQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFhLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBTEEsc0JBS0EifQ==