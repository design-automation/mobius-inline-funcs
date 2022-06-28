import { isVec3 } from "../../index";
/**
 * Returns true if the value is a ray, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
export function isRay(v) {
    return Array.isArray(v) && v.length === 2 && isVec3(v[0]) && isVec3(v[1]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNSYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3R5cGVzL2lzUmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckM7Ozs7R0FJRztBQUNGLE1BQU0sVUFBVSxLQUFLLENBQUMsQ0FBTTtJQUN6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RSxDQUFDIn0=