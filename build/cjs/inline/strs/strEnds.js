"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strEnds = void 0;
/**
 * Returns true if the string s1 ends with s2, false otherwise.
 * \n
 * Overloaded with 2 cases.
 * \n
 * - str can be one string and ends can be one string.
 * - str can be a list of strings and ends can be one string.
 * @param str A string or list of strings, "s1".
 * @param ends A string, "s2".
 * @returns True or False.
 *
 */
function strEnds(str, ends) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.endsWith(ends));
    }
    return str.endsWith(ends);
}
exports.strEnds = strEnds;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyRW5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy9zdHJFbmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBQ0YsU0FBZ0IsT0FBTyxDQUFDLEdBQW9CLEVBQUUsSUFBWTtJQUN2RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUMxRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUhBLDBCQUdBIn0=