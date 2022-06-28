import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Creates a vector between two points.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - xyz1 can be one coordinate, and xyz2 can be one coordinate.
 * - xyz1 can be a list of coordinates, and xyz2 can be one coordinate.
 * - xyz1 can be one coordinate, and xyz2 can be a list of coordinates.
 * - xyz1 can be a list of coordinates, and xyz2 can be a list of coordinates. These lists should have the **same size**.
 *
 * @param xyz1 The first point or list of points.
 * @param xyz2 The second point or list of points.
 * @returns The new vector.
 */
export function vecFromTo(xyz1, xyz2) {
    // overloaded case
    const depth1 = getArrDepth(xyz1);
    const depth2 = getArrDepth(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return xyz1.map(v1_val => vectors.vecFromTo(v1_val, xyz2));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return xyz2.map(v2_val => vectors.vecFromTo(xyz1, v2_val));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const vecs = [];
                for (let i = 0; i < xyz1.length; i++) {
                    vecs.push(vectors.vecFromTo(xyz1[i], xyz2[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecFromTo(xyz1, xyz2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjRnJvbVRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjRnJvbVRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0YsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUFpQixFQUFFLElBQWlCO0lBQzNELGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNkLG9CQUFvQjtZQUNwQixPQUFRLElBQWUsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUFZLENBQVMsQ0FBQyxDQUFDO1NBQ25HO2FBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLG9CQUFvQjtZQUNwQixPQUFRLElBQWUsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQVksRUFBRSxNQUFjLENBQVMsQ0FBQyxDQUFDO1NBQ25HO2FBQU07WUFDSCx1REFBdUQ7WUFDdkQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxHQUFXLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBUyxDQUFTLENBQUUsQ0FBQztpQkFDNUU7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUNYLDRHQUE0RyxDQUFDLENBQUM7YUFDckg7U0FDSjtLQUNKO0lBQ0QsdUNBQXVDO0lBQ3ZDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFZLEVBQUUsSUFBWSxDQUFTLENBQUM7QUFDakUsQ0FBQyJ9