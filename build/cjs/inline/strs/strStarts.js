"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strStarts = void 0;
/**
 * Returns true if the string s1 starts with s2, false otherwise.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str A string, "s1".
 * @param starts A string, "s2".
 * @returns True or False.
 */
function strStarts(str, starts) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.startsWith(starts));
    }
    return str.startsWith(starts);
}
exports.strStarts = strStarts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyU3RhcnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdHJzL3N0clN0YXJ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7OztHQU9HO0FBQ0YsU0FBZ0IsU0FBUyxDQUFDLEdBQW9CLEVBQUUsTUFBYztJQUMzRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUM5RSxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUhBLDhCQUdBIn0=