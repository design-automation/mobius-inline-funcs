"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayFromTo = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
/**
 * Creates a ray between two points.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - xyz1 can be one coordinate, and xyz2 can be one coordinate.
 * - xyz1 can be a list of coordinates, and xyz2 can be one coordinate.
 * - xyz1 can be one coordinate, and xyz2 can be a list of coordinates.
 * - xyz1 can be a list of coordinates, and xyz2 can be a list of coordinates. These lists should have the **same size**.
 *
 * @param xyz1 Coordinate 1.
 * @param xyz2 Coordinate 2.
 * @returns The created ray or list of rays that has xyz1 as an origin and xyz2 as an endpoint.
 */
function rayFromTo(xyz1, xyz2) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(xyz1);
    const depth2 = (0, arrs_1.getArrDepth)(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only xyz1 is Txyz[]
            return xyz1.map(a_xyz1 => [a_xyz1, (0, vectors_1.vecFromTo)(a_xyz1, xyz2)]);
        }
        else if (depth1 === 1) {
            // only xyz2 is Txyz[]
            return xyz2.map(a_xyz2 => [xyz1, (0, vectors_1.vecFromTo)(xyz1, a_xyz2)]);
        }
        else {
            // both xyz1 and xyz2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const rays = [];
                for (let i = 0; i < xyz1.length; i++) {
                    rays.push([xyz1[i], (0, vectors_1.vecFromTo)(xyz1[i], xyz2[i])]);
                }
                return rays;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both xyz1 and xyz2 are Txyz
    return [xyz1, (0, vectors_1.vecFromTo)(xyz1, xyz2)];
}
exports.rayFromTo = rayFromTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5RnJvbVRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9yYXkvcmF5RnJvbVRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUE4QztBQUU5QyxnREFBK0M7QUFFL0M7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLFNBQWdCLFNBQVMsQ0FBQyxJQUFpQixFQUFFLElBQWlCO0lBQzNELGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxJQUFBLGtCQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxNQUFNLEdBQVcsSUFBQSxrQkFBVyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNkLHNCQUFzQjtZQUN0QixPQUFRLElBQWUsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFBLG1CQUFTLEVBQUMsTUFBYyxFQUFFLElBQVksQ0FBQyxDQUFTLENBQUUsQ0FBQztTQUN0RzthQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQixzQkFBc0I7WUFDdEIsT0FBUSxJQUFlLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBQSxtQkFBUyxFQUFDLElBQVksRUFBRSxNQUFjLENBQUMsQ0FBUyxDQUFFLENBQUM7U0FDcEc7YUFBTTtZQUNILDJEQUEyRDtZQUMzRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO2dCQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFBLG1CQUFTLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQVMsQ0FBQyxDQUFTLENBQUUsQ0FBQztpQkFDL0U7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUNYLDRHQUE0RyxDQUFDLENBQUM7YUFDckg7U0FDSjtLQUNKO0lBQ0QsMkNBQTJDO0lBQzNDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBQSxtQkFBUyxFQUFDLElBQVksRUFBRSxJQUFZLENBQUMsQ0FBUyxDQUFDO0FBQ2pFLENBQUM7QUEzQkEsOEJBMkJBIn0=