"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strSub = void 0;
/**
 * Gets a substring beginning at the specified index and ending at the end of the string.
 * If `length` is set: Gets a substring beginning at the specified index and having the specified length.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str A string.
 * @param from An integer corresponding to the starting index.
 * @param length (Optional) An integer for the specified length.
 * @returns The modified string.
 */
function strSub(str, from, length) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.substr(from, length));
    }
    return str.substr(from, length);
}
exports.strSub = strSub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyU3ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdHJzL3N0clN1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7O0dBU0c7QUFDRixTQUFnQixNQUFNLENBQUMsR0FBb0IsRUFBRSxJQUFZLEVBQUUsTUFBZTtJQUN2RSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQUU7SUFDaEYsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBSEEsd0JBR0EifQ==