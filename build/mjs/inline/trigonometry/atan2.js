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
export function atan2(xy) {
    if (Array.isArray(xy[0])) {
        return xy.map(a_xy => Math.atan2(a_xy[1], a_xy[0]));
    }
    xy = xy;
    return Math.atan2(xy[1], xy[0]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRhbjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL1RyaWdvbm9tZXRyeS9hdGFuMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0YsTUFBTSxVQUFVLEtBQUssQ0FBQyxFQUF1QztJQUMxRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdEIsT0FBUSxFQUF5QixDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFjLENBQUM7S0FDN0Y7SUFDRCxFQUFFLEdBQUcsRUFBc0IsQ0FBQztJQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMifQ==