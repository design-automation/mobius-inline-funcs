"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dictHasKey = void 0;
/**
 * Returns true if the dictionary contains the given key, false otherwise.
 * \n
 * If a list of keys is given, a list of true/false values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a string or a list of strings.
 * @returns True or False, or a list of True/False values.
 */
function dictHasKey(dict, key) {
    if (Array.isArray(key)) {
        return key.map(a_key => dict.hasOwnProperty(a_key));
    }
    return dict.hasOwnProperty(key);
}
exports.dictHasKey = dictHasKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEhhc0tleS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZGljdC9kaWN0SGFzS2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7OztHQVFHO0FBQ0YsU0FBZ0IsVUFBVSxDQUFDLElBQVksRUFBRSxHQUFvQjtJQUMxRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFjLENBQUM7S0FBRTtJQUM5RixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUhBLGdDQUdBIn0=