"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radToDeg = void 0;
/**
 * Converts radians to degrees.
 * ```
 * radToDeg(PI)         // 180
 * radToDeg(PI / 2)     // 90
 * ```
 * @param rad A number (representing radians).
 * @returns A number (representing degrees).
 */
function radToDeg(rad) {
    if (Array.isArray(rad)) {
        return rad.map(a_rad => radToDeg(a_rad));
    }
    return rad * (180 / Math.PI);
}
exports.radToDeg = radToDeg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkVG9EZWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2NvbnZlcnNpb24vcmFkVG9EZWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7O0dBUUc7QUFDRixTQUFnQixRQUFRLENBQUMsR0FBb0I7SUFDMUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFhLENBQUM7S0FBRTtJQUNqRixPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUhBLDRCQUdBIn0=