"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayMove = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
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
function rayMove(ray, vec) {
    // overloaded case
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    const vec_dep = (0, arrs_1.getArrDepth)(vec);
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
    return [(0, vectors_1.vecAdd)(ray[0], vec), ray[1].slice()];
}
exports.rayMove = rayMove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5TW92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheU1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQThDO0FBRTlDLGdEQUE0QztBQUU1Qzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDRixTQUFnQixPQUFPLENBQUMsR0FBZ0IsRUFBRSxHQUFnQjtJQUN2RCxrQkFBa0I7SUFDbEIsTUFBTSxPQUFPLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sT0FBTyxHQUFXLElBQUEsa0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7UUFDZixHQUFHLEdBQUcsR0FBYSxDQUFDO1FBQ3BCLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtZQUNmLEdBQUcsR0FBRyxHQUFXLENBQUM7WUFDbEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBVyxDQUFDO1NBQzlEO2FBQU0sSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNuRCxHQUFHLEdBQUcsR0FBYSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFXLEVBQUUsQ0FBQztZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBUyxDQUFFLENBQUM7YUFDaEQ7WUFDRCxPQUFPLElBQWMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO1NBQzlHO0tBQ0o7SUFDRCxjQUFjO0lBQ2QsR0FBRyxHQUFHLEdBQVcsQ0FBQztJQUNsQixHQUFHLEdBQUcsR0FBVyxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxJQUFBLGdCQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUF4QkEsMEJBd0JBIn0=