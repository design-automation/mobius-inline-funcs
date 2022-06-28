import { getArrDepth } from '../../libs/arrs';
import { vecAdd, vecMult, vecNorm } from '../../libs/vectors';
/**
 * Move the ray "r" relative to the ray direction vector, by distance "d".
 * \n
 * Overloaded with 3 cases.
 * \n
 * - ray can be one ray, and dist can be one number.
 * - ray can be a list of rays, and dist can be one number.
 * - ray can be a list of rays, and dist can be a list of numbers. These lists should have the **same size**.
 *
 * @param ray The ray to be moved.
 * @param dist The distance to move the ray by.
 * @returns The new, moved ray.
 */
export function rayLMove(ray, dist) {
    // overloaded case
    const ray_dep = getArrDepth(ray);
    const dist_dep = getArrDepth(dist);
    if (ray_dep === 3) {
        ray = ray;
        if (dist_dep === 0) {
            dist = dist;
            return ray.map(ray_one => rayLMove(ray_one, dist));
        }
        else if (dist_dep === 1 && ray.length === dist.length) {
            dist = dist;
            const rays = [];
            for (let i = 0; i < ray.length; i++) {
                rays.push(rayLMove(ray[i], dist[i]));
            }
            return rays;
        }
        else {
            throw new Error('Error moving a list rays with a list of distances: The two lists must be of equal length.');
        }
    }
    // normal case
    ray = ray;
    dist = dist;
    const vec = vecMult(vecNorm(ray[1]), dist);
    return [vecAdd(ray[0], vec), ray[1].slice()];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5TE1vdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3JheS9yYXlMTW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUQ7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0YsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFnQixFQUFFLElBQXFCO0lBRTdELGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsTUFBTSxRQUFRLEdBQVcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUNmLEdBQUcsR0FBRyxHQUFhLENBQUM7UUFDcEIsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLElBQUksR0FBRyxJQUFjLENBQUM7WUFDdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBVyxDQUFDO1NBQ2hFO2FBQU0sSUFBSSxRQUFRLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQU0sSUFBaUIsQ0FBQyxNQUFNLEVBQUU7WUFDbkUsSUFBSSxHQUFHLElBQWdCLENBQUM7WUFDeEIsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFTLENBQUUsQ0FBQzthQUNsRDtZQUNELE9BQU8sSUFBYyxDQUFDO1NBQ3pCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDJGQUEyRixDQUFDLENBQUM7U0FDaEg7S0FDSjtJQUNELGNBQWM7SUFDZCxHQUFHLEdBQUcsR0FBVyxDQUFDO0lBQ2xCLElBQUksR0FBRyxJQUFjLENBQUM7SUFDdEIsTUFBTSxHQUFHLEdBQVMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQztBQUN6RCxDQUFDIn0=