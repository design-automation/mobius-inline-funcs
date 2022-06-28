/**
 * Converts degrees to radians.
 * ```
 * degToRad(45)   // 0.7853981633974483 (PI/4)
 * degToRad(180)  // 3.141592653589793 (PI)
 * ```
 * @param deg A number (representing degrees).
 * @returns A number (representing radians).
 */
export function degToRad(deg) {
    if (Array.isArray(deg)) {
        return deg.map(a_deg => degToRad(a_deg));
    }
    return deg * (Math.PI / 180);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVnVG9SYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2NvbnZlcnNpb24vZGVnVG9SYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFDRixNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQW9CO0lBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFDO0tBQUU7SUFDakYsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLENBQUMifQ==