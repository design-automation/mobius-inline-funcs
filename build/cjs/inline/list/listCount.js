"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCount = void 0;
/**
 * Returns the number of times the value is in the list.
 *
 * @param list The list.
 * @param val The value, can be any type.
 * @returns An integer.
 */
function listCount(list, val) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === val) {
            count += 1;
        }
    }
    return count;
}
exports.listCount = listCount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdENvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9saXN0L2xpc3RDb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQTs7Ozs7O0dBTUc7QUFDRixTQUFnQixTQUFTLENBQUMsSUFBVyxFQUFFLEdBQVE7SUFDNUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2pCLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQVJBLDhCQVFBIn0=