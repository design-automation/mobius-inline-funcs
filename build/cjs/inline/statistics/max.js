"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = void 0;
const min_1 = require("./min");
/**
 * Returns the largest of the given numbers.
 *
 * If any one or more of the parameters cannot be converted into a number, NaN is returned.
 *```
 * max([5,3,6,2,4])    // 6
 *```
 * @param list A list of numbers, or a sequence of numbers.
 * @returns A number.
 */
function max(list) {
    const args = Array.prototype.slice.call(arguments, min_1.min.length);
    if (args.length === 0) {
        if (list.constructor === [].constructor) {
            return Math.max.apply(Math, list);
        }
        return list;
    }
    args.push(list);
    return Math.max.apply(Math, args);
}
exports.max = max;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdGF0aXN0aWNzL21heC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBNEI7QUFFNUI7Ozs7Ozs7OztHQVNHO0FBQ0YsU0FBZ0IsR0FBRyxDQUFDLElBQVM7SUFDMUIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLFNBQVMsRUFBRSxTQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEUsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFWQSxrQkFVQSJ9