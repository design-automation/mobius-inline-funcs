"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exp = void 0;
/**
 * Returns a number representing e raised to the power of x, where e is Euler's number and x is the argument.
 *
 * @param num A number or list of numbers.
 * @returns A number or a list of numbers.
 */
function exp(num) {
    if (Array.isArray(num)) {
        return num.map(a_num => Math.exp(a_num));
    }
    return Math.exp(num);
}
exports.exp = exp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9hcml0aG1ldGljL2V4cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7R0FLRztBQUNGLFNBQWdCLEdBQUcsQ0FBQyxHQUFvQjtJQUNyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBYyxDQUFDO0tBQzFEO0lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQWEsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFMQSxrQkFLQSJ9