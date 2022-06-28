"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strRepl = void 0;
/**
 * Replace all instances of specified search string with a new string. The search string can be a regular expression.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str String to search through and modify.
 * @param search_str String to search for and replace.
 * @param new_str New string to replace search\_str.
 * @returns The modified string.
 */
function strRepl(str, search_str, new_str) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.replace(search_str, new_str));
    }
    return str.replace(search_str, new_str);
}
exports.strRepl = strRepl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyUmVwbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy9zdHJSZXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7OztHQVFHO0FBQ0YsU0FBZ0IsT0FBTyxDQUFDLEdBQW9CLEVBQUUsVUFBa0IsRUFBRSxPQUFlO0lBQzlFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUN4RixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFIQSwwQkFHQSJ9