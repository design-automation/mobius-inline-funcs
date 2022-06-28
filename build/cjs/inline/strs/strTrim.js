"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strTrim = void 0;
/**
 * Removes the leading and trailing white space and line terminator characters from a string.
 * For example, \ is considered a line terminator character.
 * ```
 * strTrim("This\ is a \sentence")                \\ "This is a sentence"
 * strTrim("   This used to have whitespace   ")  \\ "This used to have whitespace"
 * ```
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str Input string.
 * @returns The modified string.
 */
function strTrim(str) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.trim());
    }
    return str.trim();
}
exports.strTrim = strTrim;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyVHJpbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy9zdHJUcmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBQ0YsU0FBZ0IsT0FBTyxDQUFDLEdBQW9CO0lBQ3pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQUU7SUFDbEUsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUhBLDBCQUdBIn0=