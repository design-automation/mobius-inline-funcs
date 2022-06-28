"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayCopy = void 0;
const arrs_1 = require("../../libs/arrs");
/**
 * Make a copy of the ray "r".
 * \n
 * Overloaded. ray can be one ray or a list of rays.
 *
 * @param ray The original ray to be copied.
 * @returns A copy of the original ray.
 */
function rayCopy(ray) {
    // overloaded case
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    if (ray_dep === 3) {
        return ray.map(ray_one => rayCopy(ray_one));
    }
    // normal case
    return [ray[0].slice(), ray[1].slice()];
}
exports.rayCopy = rayCopy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5Q29weS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheUNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQThDO0FBRzlDOzs7Ozs7O0dBT0c7QUFDRixTQUFnQixPQUFPLENBQUMsR0FBZ0I7SUFDckMsa0JBQWtCO0lBQ2xCLE1BQU0sT0FBTyxHQUFXLElBQUEsa0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7UUFBRSxPQUFRLEdBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQVcsQ0FBQztLQUFFO0lBQ3pGLGNBQWM7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFOQSwwQkFNQSJ9