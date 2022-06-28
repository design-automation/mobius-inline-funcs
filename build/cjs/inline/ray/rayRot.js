"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayRot = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
/**
 * Rotate the ray "r1" around the ray "r2", by angle "a" (in radians).
 * \n
 * Overloaded with 3 cases.
 * \n
 * - ray1 can be one ray, ray2 can be one ray, and ang can be one number.
 * - ray1 can be a list of rays, ray2 can be one ray, and ang can be one number.
 * - ray1 can be a list of rays, ray2 can be a list of rays, and ang can be a list of numbers. These lists should have the **same size**.
 *
 * @param ray1 The ray to be rotated.
 * @param ray2 The ray to be used as the axis of rotation.
 * @param ang The angle (in radians) to rotate r1 by.
 * @returns The new, rotated ray.
 */
function rayRot(ray1, ray2, ang) {
    // overloaded case
    const ray1_dep = (0, arrs_1.getArrDepth)(ray1);
    const ray2_dep = (0, arrs_1.getArrDepth)(ray2);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (ray1_dep === 3) {
        ray1 = ray1;
        if (ray2_dep === 2 && ang_dep === 0) {
            //ray 1 list 
            ray2 = ray2;
            ang = ang;
            return ray1.map(ray1_one => rayRot(ray1_one, ray2, ang));
        }
        else if (ray2_dep === 3 && ang_dep === 1 && ray1.length === ray2.length && ray1.length === ang.length) {
            //ray 1, ray 2 and ang lists 
            ray2 = ray2;
            ang = ang;
            const rays = [];
            for (let i = 0; i < ray1.length; i++) {
                rays.push(rayRot(ray1[i], ray2[i], ang[i]));
            }
            return rays;
        }
        else {
            throw new Error('Error rotating a list planes with a list of ray2s and angles: The three lists must be of equal length.');
        }
    }
    // normal case
    ray1 = ray1;
    ray2 = ray2;
    ang = ang;
    const from_ray2_o_to_ray1_o = (0, vectors_1.vecFromTo)(ray2[0], ray1[0]);
    const rot_ray1_origin = (0, vectors_1.vecAdd)(ray2[0], (0, vectors_1.vecRot)(from_ray2_o_to_ray1_o, ray2[1], ang));
    return [rot_ray1_origin, (0, vectors_1.vecRot)(ray1[1], ray2[1], ang)];
}
exports.rayRot = rayRot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5Um90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9yYXkvcmF5Um90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUE4QztBQUU5QyxnREFBK0Q7QUFFL0Q7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLFNBQWdCLE1BQU0sQ0FBQyxJQUFpQixFQUFFLElBQWlCLEVBQUUsR0FBb0I7SUFDOUUsa0JBQWtCO0lBQ2xCLE1BQU0sUUFBUSxHQUFXLElBQUEsa0JBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxNQUFNLFFBQVEsR0FBVyxJQUFBLGtCQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsTUFBTSxPQUFPLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtRQUNoQixJQUFJLEdBQUcsSUFBYyxDQUFDO1FBQ3RCLElBQUksUUFBUSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLGFBQWE7WUFDYixJQUFJLEdBQUcsSUFBWSxDQUFDO1lBQ3BCLEdBQUcsR0FBRyxHQUFhLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQVcsQ0FBQztTQUN0RTthQUFNLElBQUksUUFBUSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFNLEdBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ25ILDZCQUE2QjtZQUM3QixJQUFJLEdBQUcsSUFBYyxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxHQUFlLENBQUM7WUFDdEIsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBUyxDQUFFLENBQUM7YUFDekQ7WUFDRCxPQUFPLElBQWMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyx3R0FBd0csQ0FBQyxDQUFDO1NBQzdIO0tBQ0o7SUFDRCxjQUFjO0lBQ2QsSUFBSSxHQUFHLElBQVksQ0FBQztJQUNwQixJQUFJLEdBQUcsSUFBWSxDQUFDO0lBQ3BCLEdBQUcsR0FBRyxHQUFhLENBQUM7SUFDcEIsTUFBTSxxQkFBcUIsR0FBUyxJQUFBLG1CQUFTLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sZUFBZSxHQUFTLElBQUEsZ0JBQU0sRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBQSxnQkFBTSxFQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBaENBLHdCQWdDQSJ9