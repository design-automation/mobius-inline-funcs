/**
 * Returns the natural logarithm (base e) of the given number or list of numbers. If the number is negative, NaN is returned.
 * \n
 * If a custom base is needed, using `log(y) / log(x)` will return the logarithm of `y` with base `x`. (log x (y))
 * \n
 * ```
 * log(-1);  // NaN, out of range
 * log(0);   // -Infinity
 * log(1);   // 0
 * log(10);  // 2.302585092994046
 * ```
 * @param base A number or list of numbers.
 * @returns A number, list of numbers, `Infinity` or `NaN`.
 */
export function log(base) {
    if (Array.isArray(base)) {
        return base.map(a_num => Math.log(a_num));
    }
    return Math.log(base);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9hcml0aG1ldGljL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0YsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFxQjtJQUV0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQWMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMifQ==