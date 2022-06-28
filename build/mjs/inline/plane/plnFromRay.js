import { getArrDepth } from '../../libs/arrs';
import { vecCross, vecNorm, vecDot } from '../../libs/vectors';
/**
 * Generate a plane from a ray. The plane is perpendicular to the ray,
 * and the origin of the plane will be the same as the ray.
 *
 * Overloaded. ray can be one ray or a list of rays.
 *
 * @param ray Input ray (or list of rays) to generate a plane (or list of planes) from.
 * @returns A plane or list of planes.
 */
export function plnFromRay(ray) {
    // overloaded case
    const ray_dep = getArrDepth(ray);
    if (ray_dep === 3) {
        return ray.map(ray_one => plnFromRay(ray_one));
    }
    // normal case
    ray = ray;
    const z_vec = vecNorm(ray[1]);
    let vec = [0, 0, 1];
    if (vecDot(vec, z_vec) === 1) {
        vec = [1, 0, 0];
    }
    const x_axis = vecCross(vec, z_vec);
    const y_axis = vecCross(x_axis, z_vec);
    return [ray[0].slice(), x_axis, y_axis];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuRnJvbVJheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcGxhbmUvcGxuRnJvbVJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0Q7Ozs7Ozs7O0dBUUc7QUFDRixNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQWdCO0lBRXhDLGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQUUsT0FBUSxHQUFjLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFjLENBQUM7S0FBRTtJQUNoRyxjQUFjO0lBQ2QsR0FBRyxHQUFHLEdBQVcsQ0FBQztJQUNsQixNQUFNLEtBQUssR0FBUyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsSUFBSSxHQUFHLEdBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMUIsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNuQjtJQUNELE1BQU0sTUFBTSxHQUFTLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsTUFBTSxNQUFNLEdBQVMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNwRCxDQUFDIn0=