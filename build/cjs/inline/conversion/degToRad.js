"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.degToRad = void 0;
/**
 * Converts degrees to radians.
 * ```
 * degToRad(45)   // 0.7853981633974483 (PI/4)
 * degToRad(180)  // 3.141592653589793 (PI)
 * ```
 * @param deg A number (representing degrees).
 * @returns A number (representing radians).
 */
function degToRad(deg) {
    if (Array.isArray(deg)) {
        return deg.map(a_deg => degToRad(a_deg));
    }
    return deg * (Math.PI / 180);
}
exports.degToRad = degToRad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVnVG9SYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2NvbnZlcnNpb24vZGVnVG9SYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7O0dBUUc7QUFDRixTQUFnQixRQUFRLENBQUMsR0FBb0I7SUFDMUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFhLENBQUM7S0FBRTtJQUNqRixPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUhBLDRCQUdBIn0=