"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listFind = void 0;
/**
 * Returns the index of the first occurence of the value in the list.
 *
 * If the value does not exist, returns null.
 *
 * @param list The list.
 * @param val The value, can be of any type.
 * @returns The index of the first occurence of the value (an integer), or null.
 */
function listFind(list, val) {
    const index = list.indexOf(val);
    if (index === -1) {
        return null;
    }
    return index;
}
exports.listFind = listFind;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEZpbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2xpc3QvbGlzdEZpbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7Ozs7Ozs7O0dBUUc7QUFDRixTQUFnQixRQUFRLENBQUMsSUFBVyxFQUFFLEdBQVE7SUFDM0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBTkEsNEJBTUEifQ==