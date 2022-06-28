"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ceil = void 0;
/**
 * Returns the smallest integer greater than or equal to the given number.
 *```
 * ceil(.95);    // 1
 * ceil(4);      // 4
 * ceil(7.004);  // 8
 * ceil(-0.95);  // -0
 * ceil(-4);     // -4
 * ceil(-7.004); // -7
 * ```
 *
 * @param num A number or list of numbers.
 * @returns An integer or list of integers.
 */
function ceil(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.ceil(a_num));
    }
    return Math.ceil(num);
}
exports.ceil = ceil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy9jZWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDRixTQUFnQixJQUFJLENBQUMsR0FBb0I7SUFDdEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQWMsQ0FBQztLQUMzRDtJQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFhLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBTEEsb0JBS0EifQ==