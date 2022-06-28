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
export function strEnds(str, ends) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.endsWith(ends));
    }
    return str.endsWith(ends);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyRW5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy9zdHJFbmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBQ0YsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFvQixFQUFFLElBQVk7SUFDdkQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQUU7SUFDMUUsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLENBQUMifQ==