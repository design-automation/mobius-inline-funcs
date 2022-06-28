"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strPadL = void 0;
/**
 * Pads the start of the s1 string with white spaces so that the resulting string reaches a given length.
 * If `fill/s2` has been set: Pads the start of the s1 string with the s2 string so that the resulting string reaches a given length.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str "s1", Input string.
 * @param max An integer (the desired length).
 * @param fill (Optional) "s2", The string to pad the input string with, starting from the left of s1.
 * @returns The modified string.
 */
function strPadL(str, max, fill) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.padStart(max, fill));
    }
    return str.padStart(max, fill);
}
exports.strPadL = strPadL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyUGFkTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy9zdHJQYWRMLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7R0FTRztBQUNGLFNBQWdCLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQ3JFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUMvRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIQSwwQkFHQSJ9