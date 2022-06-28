"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dictGet = void 0;
/**
 * Returns the item in the dictionary specified by key.
 * \n
 * If the key does not exist, undefined is returned.
 * If a list of keys is provided, then a list of values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a single string or a list of strings.
 * @returns The value (or list of values) associated with the given key.
 */
function dictGet(dict, key) {
    if (Array.isArray(key)) {
        return key.map(a_key => dict[a_key]);
    }
    return dict[key];
}
exports.dictGet = dictGet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZGljdC9kaWN0R2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7R0FTRztBQUNGLFNBQWdCLE9BQU8sQ0FBQyxJQUFZLEVBQUUsR0FBb0I7SUFDdkQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFVLENBQUM7S0FBRTtJQUMzRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQVEsQ0FBQztBQUM1QixDQUFDO0FBSEEsMEJBR0EifQ==