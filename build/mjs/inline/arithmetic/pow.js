/**
 * Returns a number representing the given base taken to the power of the given exponent.
 * \n
 * ```
 * pow(7, 2);    // 49
 * pow(4, 0.5);  // 2 (square root of 4)
 * pow(8, -1/3); // 0.5
 * pow(-7, 2);   // 49 (squares are positive)
 * pow(-7, 3);   // -343 (cubes can be negative)
 *
 * pow(-7, 0.5); // NaN (negative numbers don't have a real square root)
 * pow(-7, 1/3); // NaN (negative bases with fractional exponents always return NaN)
 * ```
 *
 * @param base A number or list of numbers.
 * @param xp A number, the exponent used to raise the base.
 * @returns A number or a list of numbers.
 */
export function pow(base, xp) {
    if (Array.isArray(base)) {
        return base.map(a_num => Math.pow(a_num, xp));
    }
    return Math.pow(base, xp);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9hcml0aG1ldGljL3Bvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDRixNQUFNLFVBQVUsR0FBRyxDQUFDLElBQXFCLEVBQUUsRUFBVTtJQUNsRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQWMsQ0FBQztLQUMvRDtJQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEMsQ0FBQyJ9