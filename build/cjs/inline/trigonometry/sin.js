"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sin = void 0;
/**
 * Returns the sine of the given number.
 * \n
 *```
 * sin(0);           // 0
 * sin(PI/2);        // 1
 * ```
 *
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers.
 */
function sin(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.sin(a_num));
    }
    return Math.sin(num);
}
exports.sin = sin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9Ucmlnb25vbWV0cnkvc2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDRixTQUFnQixHQUFHLENBQUMsR0FBb0I7SUFDckMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQWMsQ0FBQztLQUMxRDtJQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFhLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBTEEsa0JBS0EifQ==