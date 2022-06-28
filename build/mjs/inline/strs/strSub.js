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
export function strSub(str, from, length) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.substr(from, length));
    }
    return str.substr(from, length);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyU3ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdHJzL3N0clN1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0dBU0c7QUFDRixNQUFNLFVBQVUsTUFBTSxDQUFDLEdBQW9CLEVBQUUsSUFBWSxFQUFFLE1BQWU7SUFDdkUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUFFO0lBQ2hGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQyJ9