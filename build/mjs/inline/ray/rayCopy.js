import { getArrDepth } from '../../libs/arrs';
/**
 * Make a copy of the ray "r".
 * \n
 * Overloaded. ray can be one ray or a list of rays.
 *
 * @param ray The original ray to be copied.
 * @returns A copy of the original ray.
 */
export function rayCopy(ray) {
    // overloaded case
    const ray_dep = getArrDepth(ray);
    if (ray_dep === 3) {
        return ray.map(ray_one => rayCopy(ray_one));
    }
    // normal case
    return [ray[0].slice(), ray[1].slice()];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5Q29weS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheUNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlDOzs7Ozs7O0dBT0c7QUFDRixNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQWdCO0lBQ3JDLGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQUUsT0FBUSxHQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFXLENBQUM7S0FBRTtJQUN6RixjQUFjO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQztBQUM1RCxDQUFDIn0=