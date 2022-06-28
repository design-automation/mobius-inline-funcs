"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strTrimL = void 0;
/**
 * Removes whitespace from the left end of a string.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str Input string.
 * @returns The modified string.
 */
function strTrimL(str) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.trimLeft());
    }
    return str.trimStart();
}
exports.strTrimL = strTrimL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyVHJpbUwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3N0cnMvc3RyVHJpbUwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7OztHQU1HO0FBQ0YsU0FBZ0IsUUFBUSxDQUFDLEdBQW9CO0lBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQUU7SUFDdEUsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDM0IsQ0FBQztBQUhBLDRCQUdBIn0=