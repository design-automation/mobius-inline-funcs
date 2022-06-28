/**
 * Returns the tangent of the given number.
 * \n
 * ```
 * tan(1); // 1.5574077246549023
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number.
 */
export function tan(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.tan(a_num));
    }
    return Math.tan(num);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9Ucmlnb25vbWV0cnkvdGFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBQ0YsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFvQjtJQUNyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzFEO0lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ25DLENBQUMifQ==