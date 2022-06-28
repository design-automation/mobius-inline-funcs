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
export function dictGet(dict, key) {
    if (Array.isArray(key)) {
        return key.map(a_key => dict[a_key]);
    }
    return dict[key];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZGljdC9kaWN0R2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRztBQUNGLE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBWSxFQUFFLEdBQW9CO0lBQ3ZELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBVSxDQUFDO0tBQUU7SUFDM0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFRLENBQUM7QUFDNUIsQ0FBQyJ9