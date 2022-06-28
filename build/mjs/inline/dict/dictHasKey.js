/**
 * Returns true if the dictionary contains the given key, false otherwise.
 * \n
 * If a list of keys is given, a list of true/false values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a string or a list of strings.
 * @returns True or False, or a list of True/False values.
 */
export function dictHasKey(dict, key) {
    if (Array.isArray(key)) {
        return key.map(a_key => dict.hasOwnProperty(a_key));
    }
    return dict.hasOwnProperty(key);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEhhc0tleS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZGljdC9kaWN0SGFzS2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBQ0YsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFZLEVBQUUsR0FBb0I7SUFDMUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQUU7SUFDOUYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLENBQUMifQ==