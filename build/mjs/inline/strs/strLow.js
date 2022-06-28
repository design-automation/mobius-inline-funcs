/**
 * Converts all the alphabetic characters in a string to lowercase.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str Input string, or list of input strings.
 * @returns The modified lowercase string.
 */
export function strLow(str) {
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.toLowerCase());
    }
    return str.toLowerCase();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyTG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdHJzL3N0ckxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDRixNQUFNLFVBQVUsTUFBTSxDQUFDLEdBQW9CO0lBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQUU7SUFDekUsT0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDN0IsQ0FBQyJ9