import { getArrDepth } from '../../libs/arrs';
import { vecAdd } from '../../libs/vectors';
/**
 * Move the ray "r" relative to the global X, Y, and Z axes, by vector "v".
 * \n
 * Overloaded with 3 cases.
 * \n
 * - ray can be one ray, and vec can be one vector.
 * - ray can be a list of rays, and vec can be one vector.
 * - ray can be a list of rays, and vec can be a list of vectors. These lists should have the **same size**.
 *
 * @param ray The ray to be moved.
 * @param vec The vector to move the ray with.
 * @returns The new, moved ray.
 */
export function rayMove(ray, vec) {
    // overloaded case
    const ray_dep = getArrDepth(ray);
    const vec_dep = getArrDepth(vec);
    if (ray_dep === 3) {
        ray = ray;
        if (vec_dep === 1) {
            vec = vec;
            return ray.map(ray_one => rayMove(ray_one, vec));
        }
        else if (vec_dep === 2 && ray.length === vec.length) {
            vec = vec;
            const rays = [];
            for (let i = 0; i < ray.length; i++) {
                rays.push(rayMove(ray[i], vec[i]));
            }
            return rays;
        }
        else {
            throw new Error('Error moving a list rays with a list of vectors: The two lists must be of equal length.');
        }
    }
    // normal case
    ray = ray;
    vec = vec;
    return [vecAdd(ray[0], vec), ray[1].slice()];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5TW92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheU1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU1Qzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDRixNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQWdCLEVBQUUsR0FBZ0I7SUFDdkQsa0JBQWtCO0lBQ2xCLE1BQU0sT0FBTyxHQUFXLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQ2YsR0FBRyxHQUFHLEdBQWEsQ0FBQztRQUNwQixJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDZixHQUFHLEdBQUcsR0FBVyxDQUFDO1lBQ2xCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQVcsQ0FBQztTQUM5RDthQUFNLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDbkQsR0FBRyxHQUFHLEdBQWEsQ0FBQztZQUNwQixNQUFNLElBQUksR0FBVyxFQUFFLENBQUM7WUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQVMsQ0FBRSxDQUFDO2FBQ2hEO1lBQ0QsT0FBTyxJQUFjLENBQUM7U0FDekI7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMseUZBQXlGLENBQUMsQ0FBQztTQUM5RztLQUNKO0lBQ0QsY0FBYztJQUNkLEdBQUcsR0FBRyxHQUFXLENBQUM7SUFDbEIsR0FBRyxHQUFHLEdBQVcsQ0FBQztJQUNsQixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQztBQUN6RCxDQUFDIn0=