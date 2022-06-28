import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Subtracts v2 from v1.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be one vector.
 * - v1 can be one vector, and v2 can be a list of vectors.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 *
 * @param v1 The vector or list of vectors to be subtracted from.
 * @param v2 The vector or list of vectors to subtract by. (Is unmodified by the expression.)
 * @param norm True or False: Normalize the resulting vector.
 * @returns The result vector.
 */
export function vecSub(v1, v2, norm = false) {
    // overloaded case
    const depth1 = getArrDepth(v1);
    const depth2 = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vectors.vecSub(v1_val, v2, norm));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vectors.vecSub(v1, v2_val, norm));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vectors.vecSub(v1[i], v2[i], norm));
                }
                return vecs;
            }
            else {
                throw new Error('Error adding lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecSub(v1, v2, norm);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjU3ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjU3ViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNGLE1BQU0sVUFBVSxNQUFNLENBQUMsRUFBZSxFQUFFLEVBQWUsRUFBRSxPQUFnQixLQUFLO0lBQzNFLGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNkLG9CQUFvQjtZQUNwQixPQUFRLEVBQWEsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQWMsRUFBRSxFQUFVLEVBQUUsSUFBSSxDQUFTLENBQUMsQ0FBQztTQUNsRzthQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQixvQkFBb0I7WUFDcEIsT0FBUSxFQUFhLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFVLEVBQUUsTUFBYyxFQUFFLElBQUksQ0FBUyxDQUFDLENBQUM7U0FDbEc7YUFBTTtZQUNILHVEQUF1RDtZQUN2RCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDekIsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO2dCQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFTLEVBQUUsSUFBSSxDQUFTLENBQUUsQ0FBQztpQkFDM0U7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUNYLHVFQUF1RSxDQUFDLENBQUM7YUFDaEY7U0FDSjtLQUNKO0lBQ0QsdUNBQXVDO0lBQ3ZDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLElBQUksQ0FBUyxDQUFDO0FBQ2hFLENBQUMifQ==