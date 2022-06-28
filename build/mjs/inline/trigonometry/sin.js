/**
 * Returns the sine of the given number.
 * \n
 *```
 * sin(0);           // 0
 * sin(PI/2);        // 1
 * ```
 *
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers.
 */
export function sin(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.sin(a_num));
    }
    return Math.sin(num);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9Ucmlnb25vbWV0cnkvc2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDRixNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQW9CO0lBQ3JDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFjLENBQUM7S0FDMUQ7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBYSxDQUFDLENBQUM7QUFDbkMsQ0FBQyJ9