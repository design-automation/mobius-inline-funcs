import { getArrDepth } from '../../libs/arrs';
import { vecFromTo } from '../../libs/vectors';
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
export function rayFromTo(xyz1, xyz2) {
    // overloaded case
    const depth1 = getArrDepth(xyz1);
    const depth2 = getArrDepth(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only xyz1 is Txyz[]
            return xyz1.map(a_xyz1 => [a_xyz1, vecFromTo(a_xyz1, xyz2)]);
        }
        else if (depth1 === 1) {
            // only xyz2 is Txyz[]
            return xyz2.map(a_xyz2 => [xyz1, vecFromTo(xyz1, a_xyz2)]);
        }
        else {
            // both xyz1 and xyz2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const rays = [];
                for (let i = 0; i < xyz1.length; i++) {
                    rays.push([xyz1[i], vecFromTo(xyz1[i], xyz2[i])]);
                }
                return rays;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both xyz1 and xyz2 are Txyz
    return [xyz1, vecFromTo(xyz1, xyz2)];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5RnJvbVRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9yYXkvcmF5RnJvbVRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLE1BQU0sVUFBVSxTQUFTLENBQUMsSUFBaUIsRUFBRSxJQUFpQjtJQUMzRCxrQkFBa0I7SUFDbEIsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDZCxzQkFBc0I7WUFDdEIsT0FBUSxJQUFlLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUFZLENBQUMsQ0FBUyxDQUFFLENBQUM7U0FDdEc7YUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsc0JBQXNCO1lBQ3RCLE9BQVEsSUFBZSxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFZLEVBQUUsTUFBYyxDQUFDLENBQVMsQ0FBRSxDQUFDO1NBQ3BHO2FBQU07WUFDSCwyREFBMkQ7WUFDM0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxHQUFXLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFTLENBQUMsQ0FBUyxDQUFFLENBQUM7aUJBQy9FO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FDWCw0R0FBNEcsQ0FBQyxDQUFDO2FBQ3JIO1NBQ0o7S0FDSjtJQUNELDJDQUEyQztJQUMzQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFZLEVBQUUsSUFBWSxDQUFDLENBQVMsQ0FBQztBQUNqRSxDQUFDIn0=