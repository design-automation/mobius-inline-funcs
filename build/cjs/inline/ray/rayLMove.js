"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayLMove = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
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
function rayLMove(ray, dist) {
    // overloaded case
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    const dist_dep = (0, arrs_1.getArrDepth)(dist);
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
    const vec = (0, vectors_1.vecMult)((0, vectors_1.vecNorm)(ray[1]), dist);
    return [(0, vectors_1.vecAdd)(ray[0], vec), ray[1].slice()];
}
exports.rayLMove = rayLMove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5TE1vdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3JheS9yYXlMTW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQ0FBOEM7QUFFOUMsZ0RBQThEO0FBRTlEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNGLFNBQWdCLFFBQVEsQ0FBQyxHQUFnQixFQUFFLElBQXFCO0lBRTdELGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBVyxJQUFBLGtCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsTUFBTSxRQUFRLEdBQVcsSUFBQSxrQkFBVyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUNmLEdBQUcsR0FBRyxHQUFhLENBQUM7UUFDcEIsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLElBQUksR0FBRyxJQUFjLENBQUM7WUFDdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBVyxDQUFDO1NBQ2hFO2FBQU0sSUFBSSxRQUFRLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQU0sSUFBaUIsQ0FBQyxNQUFNLEVBQUU7WUFDbkUsSUFBSSxHQUFHLElBQWdCLENBQUM7WUFDeEIsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFTLENBQUUsQ0FBQzthQUNsRDtZQUNELE9BQU8sSUFBYyxDQUFDO1NBQ3pCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDJGQUEyRixDQUFDLENBQUM7U0FDaEg7S0FDSjtJQUNELGNBQWM7SUFDZCxHQUFHLEdBQUcsR0FBVyxDQUFDO0lBQ2xCLElBQUksR0FBRyxJQUFjLENBQUM7SUFDdEIsTUFBTSxHQUFHLEdBQVMsSUFBQSxpQkFBTyxFQUFDLElBQUEsaUJBQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsSUFBQSxnQkFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBMUJBLDRCQTBCQSJ9