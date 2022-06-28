"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atan2 = void 0;
/**
 * Returns the angle in radians (in [-π,π]) between the positive x-axis and the ray from (0,0) to
 * the point.
 * \n
 *```
 * atan2([15, 90]]); // 1.4056476493802699
 * atan2([90, 15]]); // 0.16514867741462683
 *```
 * @param xy A list of two numbers [x,y] or a list of lists [[x,y], [x,y], [x,y]...].
 * @returns A number (in radians).
 */
function atan2(xy) {
    if (Array.isArray(xy[0])) {
        return xy.map(a_xy => Math.atan2(a_xy[1], a_xy[0]));
    }
    xy = xy;
    return Math.atan2(xy[1], xy[0]);
}
exports.atan2 = atan2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRhbjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL1RyaWdvbm9tZXRyeS9hdGFuMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0YsU0FBZ0IsS0FBSyxDQUFDLEVBQXVDO0lBQzFELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN0QixPQUFRLEVBQXlCLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWMsQ0FBQztLQUM3RjtJQUNELEVBQUUsR0FBRyxFQUFzQixDQUFDO0lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQU5BLHNCQU1BIn0=