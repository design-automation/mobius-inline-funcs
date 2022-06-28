"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plnFromRay = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
/**
 * Generate a plane from a ray. The plane is perpendicular to the ray,
 * and the origin of the plane will be the same as the ray.
 *
 * Overloaded. ray can be one ray or a list of rays.
 *
 * @param ray Input ray (or list of rays) to generate a plane (or list of planes) from.
 * @returns A plane or list of planes.
 */
function plnFromRay(ray) {
    // overloaded case
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    if (ray_dep === 3) {
        return ray.map(ray_one => plnFromRay(ray_one));
    }
    // normal case
    ray = ray;
    const z_vec = (0, vectors_1.vecNorm)(ray[1]);
    let vec = [0, 0, 1];
    if ((0, vectors_1.vecDot)(vec, z_vec) === 1) {
        vec = [1, 0, 0];
    }
    const x_axis = (0, vectors_1.vecCross)(vec, z_vec);
    const y_axis = (0, vectors_1.vecCross)(x_axis, z_vec);
    return [ray[0].slice(), x_axis, y_axis];
}
exports.plnFromRay = plnFromRay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuRnJvbVJheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcGxhbmUvcGxuRnJvbVJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwQ0FBOEM7QUFDOUMsZ0RBQStEO0FBRS9EOzs7Ozs7OztHQVFHO0FBQ0YsU0FBZ0IsVUFBVSxDQUFDLEdBQWdCO0lBRXhDLGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBVyxJQUFBLGtCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQUUsT0FBUSxHQUFjLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFjLENBQUM7S0FBRTtJQUNoRyxjQUFjO0lBQ2QsR0FBRyxHQUFHLEdBQVcsQ0FBQztJQUNsQixNQUFNLEtBQUssR0FBUyxJQUFBLGlCQUFPLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsSUFBSSxHQUFHLEdBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksSUFBQSxnQkFBTSxFQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMUIsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNuQjtJQUNELE1BQU0sTUFBTSxHQUFTLElBQUEsa0JBQVEsRUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsTUFBTSxNQUFNLEdBQVMsSUFBQSxrQkFBUSxFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBZkEsZ0NBZUEifQ==