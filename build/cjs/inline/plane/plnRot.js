"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plnRot = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
/**
 * Rotate the plane "p" around the ray "r", by angle "a" (in radians).
 * \n
 * Overloaded with 3 cases.
 * \n
 * - pln can be one plane, ray can be one ray, and ang can be one number.
 * - pln can be a list of planes, ray can be one ray, and ang can be one number.
 * - pln can be a list of planes, ray can be a list of rays, and ang can be a list of numbers. These lists should have the **same size**.
 *
 * @param pln The plane to be rotated.
 * @param ray The ray to rotate the plane around.
 * @param ang The angle to rotate the plane, in radians.
 * @returns A new, rotated plane.
 */
function plnRot(pln, ray, ang) {
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (pln_dep === 3) {
        pln = pln;
        if (ray_dep === 2 && ang_dep === 0) {
            // pln is list
            ray = ray;
            ang = ang;
            return pln.map(pln_one => plnRot(pln_one, ray, ang));
        }
        else if (ray_dep === 3 && ang_dep === 1 && pln.length === ray.length && pln.length === ang.length) {
            // pln, ray and ang are lists 
            ray = ray;
            ang = ang;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnRot(pln[i], ray[i], ang[i]));
            }
            return planes;
        }
        else {
            throw new Error('Error rotating a list planes with a list of rays and angles: The three lists must be of equal length.');
        }
    }
    // normal case
    pln = pln;
    ray = ray;
    ang = ang;
    const from_ray_o_to_pln_o = (0, vectors_1.vecFromTo)(ray[0], pln[0]);
    const rot_pln_origin = (0, vectors_1.vecAdd)(ray[0], (0, vectors_1.vecRot)(from_ray_o_to_pln_o, ray[1], ang));
    return [rot_pln_origin, (0, vectors_1.vecRot)(pln[1], ray[1], ang), (0, vectors_1.vecRot)(pln[2], ray[1], ang)];
}
exports.plnRot = plnRot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuUm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9wbGFuZS9wbG5Sb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMENBQThDO0FBQzlDLGdEQUErRDtBQUUvRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0YsU0FBZ0IsTUFBTSxDQUFDLEdBQW9CLEVBQUUsR0FBZ0IsRUFBRSxHQUFvQjtJQUNoRixrQkFBa0I7SUFDbEIsTUFBTSxPQUFPLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sT0FBTyxHQUFXLElBQUEsa0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxNQUFNLE9BQU8sR0FBVyxJQUFBLGtCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQ2YsR0FBRyxHQUFHLEdBQWUsQ0FBQztRQUN0QixJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtZQUNoQyxjQUFjO1lBQ2QsR0FBRyxHQUFHLEdBQVcsQ0FBQztZQUNsQixHQUFHLEdBQUcsR0FBYSxDQUFDO1lBQ3BCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFhLENBQUM7U0FDcEU7YUFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBTSxHQUFnQixDQUFDLE1BQU0sRUFBRTtZQUMvRyw4QkFBOEI7WUFDOUIsR0FBRyxHQUFHLEdBQWEsQ0FBQztZQUNwQixHQUFHLEdBQUcsR0FBZSxDQUFDO1lBQ3RCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztZQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBRSxDQUFDO2FBQzNEO1lBQ0QsT0FBTyxNQUFrQixDQUFDO1NBQzdCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHVHQUF1RyxDQUFDLENBQUM7U0FDNUg7S0FDSjtJQUNELGNBQWM7SUFDZCxHQUFHLEdBQUcsR0FBYSxDQUFDO0lBQ3BCLEdBQUcsR0FBRyxHQUFXLENBQUM7SUFDbEIsR0FBRyxHQUFHLEdBQWEsQ0FBQztJQUNwQixNQUFNLG1CQUFtQixHQUFTLElBQUEsbUJBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsTUFBTSxjQUFjLEdBQVMsSUFBQSxnQkFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFBLGdCQUFNLEVBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEYsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFBLGdCQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFBLGdCQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLENBQUM7QUFoQ0Esd0JBZ0NBIn0=