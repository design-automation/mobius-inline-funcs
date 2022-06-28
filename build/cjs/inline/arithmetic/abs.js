"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abs = void 0;
/**
 * Returns the absolute value of the given number.
 * \n
 * ```
 * abs('-1');     // 1
 * abs(-2);       // 2
 * abs(null);     // 0
 * abs('');       // 0
 * abs([]);       // 0
 * abs([2]);      // [2]
 * abs([1,2]);    // [1,2]
 * abs({});       // NaN
 * abs('string'); // NaN
 * abs();         // NaN
 * ```
 *
 * @param num A number or list of numbers.
 * @returns A number, list of numbers or NaN if invalid.
 *
 */
function abs(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.abs(a_num));
    }
    return Math.abs(num);
}
exports.abs = abs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9hcml0aG1ldGljL2Ficy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNGLFNBQWdCLEdBQUcsQ0FBQyxHQUFvQjtJQUVyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzFEO0lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFOQSxrQkFNQSJ9