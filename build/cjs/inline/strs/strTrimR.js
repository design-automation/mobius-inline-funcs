"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strTrimR = void 0;
/**
 * Removes whitespace from the right end of a string.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str Input string.
 * @returns The modified string.
 */
function strTrimR(str) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.trimRight());
    }
    return str.trimEnd();
}
exports.strTrimR = strTrimR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyVHJpbVIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3N0cnMvc3RyVHJpbVIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7OztHQU1HO0FBQ0YsU0FBZ0IsUUFBUSxDQUFDLEdBQW9CO0lBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQUU7SUFDdkUsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDekIsQ0FBQztBQUhBLDRCQUdBIn0=