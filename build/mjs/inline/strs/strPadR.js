/**
 * Pads the end of the s1 string with white spaces so that the resulting string reaches a given length.
 * If `fill/s2` has been set: Pads the end of the s1 string with the s2 string so that the resulting string reaches a given length.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str "s1", Input string.
 * @param max An integer (the desired length).
 * @param fill (Optional) "s2", The string to pad the input string with, starting from the right of s1.
 * @returns The modified string.
 */
export function strPadR(str, max, fill) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.padEnd(max, fill));
    }
    return str.padEnd(max, fill);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyUGFkUi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy9zdHJQYWRSLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRztBQUNGLE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBb0IsRUFBRSxHQUFXLEVBQUUsSUFBYTtJQUNyRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQUU7SUFDN0UsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDIn0=