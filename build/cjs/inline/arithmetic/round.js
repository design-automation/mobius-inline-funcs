"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = void 0;
/**
 * The value of the given number rounded to the nearest integer.
 * ```
 * round( 20.49); //  20
 * round( 20.5 ); //  21
 * round( 42   ); //  42
 * round(-20.5 ); // -20
 * round(-20.51); // -21
 * ```
 *
 * @param num A number or list of numbers.
 * @param dec_pla An integer. Set as 0 by default.
 * @returns An integer or list of integers.
 */
function round(num, dec_pla = 0) {
    if (Array.isArray(num)) {
        return num.map(a_num => round(a_num, dec_pla));
    }
    num = num;
    if (dec_pla === 0) {
        return Math.round(num);
    }
    if (dec_pla > 0) {
        const dec = Math.pow(10, dec_pla);
        return Math.round(num * dec) / dec;
    }
    else {
        const dec = Math.pow(10, Math.abs(dec_pla));
        return Math.round(num / dec) * dec;
    }
}
exports.round = round;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2FyaXRobWV0aWMvcm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLFNBQWdCLEtBQUssQ0FBQyxHQUFvQixFQUFFLE9BQU8sR0FBRyxDQUFDO0lBQ3BELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFjLENBQUM7S0FDaEU7SUFDRCxHQUFHLEdBQUcsR0FBYSxDQUFDO0lBQ3BCLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUFFO0lBQzlDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtRQUNiLE1BQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ3RDO1NBQU07UUFDSCxNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDdEM7QUFDTCxDQUFDO0FBYkEsc0JBYUEifQ==