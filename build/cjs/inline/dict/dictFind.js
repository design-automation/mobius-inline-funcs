"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dictFind = void 0;
/**
 * Returns the first key in the dictionary that has the given value.
 * \n
 * If the value does not exist, returns null.
 *
 * @param dict The dictionary.
 * @param val The value, can be any type.
 * @returns The first key, or null.
 */
function dictFind(dict, val) {
    for (const key of Object.keys(dict)) {
        if (dict[key] === val) {
            return key;
        }
    }
    return null;
}
exports.dictFind = dictFind;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEZpbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2RpY3QvZGljdEZpbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7O0dBUUc7QUFDRixTQUFnQixRQUFRLENBQUMsSUFBWSxFQUFFLEdBQWM7SUFDbEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUFFLE9BQU8sR0FBRyxDQUFDO1NBQUU7S0FDekM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBTEEsNEJBS0EifQ==