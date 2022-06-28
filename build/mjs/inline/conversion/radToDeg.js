/**
 * Converts radians to degrees.
 * ```
 * radToDeg(PI)         // 180
 * radToDeg(PI / 2)     // 90
 * ```
 * @param rad A number (representing radians).
 * @returns A number (representing degrees).
 */
export function radToDeg(rad) {
    if (Array.isArray(rad)) {
        return rad.map(a_rad => radToDeg(a_rad));
    }
    return rad * (180 / Math.PI);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkVG9EZWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2NvbnZlcnNpb24vcmFkVG9EZWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFDRixNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQW9CO0lBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFDO0tBQUU7SUFDakYsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLENBQUMifQ==