import { isVec3 } from "../../index";
/**
 * Returns true if the value is a plane, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
export function isPln(v) {
    return Array.isArray(v) && v.length === 3 && isVec3(v[0]) && isVec3(v[1]) && isVec3(v[2]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNQbG4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3R5cGVzL2lzUGxuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckM7Ozs7R0FJRztBQUNGLE1BQU0sVUFBVSxLQUFLLENBQUMsQ0FBTTtJQUN6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUYsQ0FBQyJ9