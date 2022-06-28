import * as dist from '../../libs/distance';
/**
 * `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following:
 * \n
 * - Returns the Euclidean distance between two xyzs, a and b.
 * - Returns the Euclidean distance between an xyz a and an infinite ray b.
 * - Returns the Euclidean distance between an xyz a and an infinite plane b.
 * @param a The first xyz.
 * @param b The second xyz, an infinite ray, or an infinite plane.
 * @returns A number, the distance.
 */
export function distance(a, b) {
    return dist.distance(a, b);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2dlb21ldHJ5L2Rpc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0scUJBQXFCLENBQUM7QUFLNUM7Ozs7Ozs7OztHQVNHO0FBQ0YsTUFBTSxVQUFVLFFBQVEsQ0FBQyxDQUFPLEVBQUUsQ0FBbUI7SUFDbEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDIn0=