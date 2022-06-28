import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Calculates the dot product of two vectors.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be one vector.
 * - v1 can be one vector, and v2 can be a list of vectors.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors.
 * @returns The number, the result dot product.
 */
export function vecDot(v1, v2) {
    // overloaded case
    const depth1 = getArrDepth(v1);
    const depth2 = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vectors.vecDot(v1_val, v2));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vectors.vecDot(v1, v2_val));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vals = [];
                for (let i = 0; i < v1.length; i++) {
                    vals.push(vectors.vecDot(v1[i], v2[i]));
                }
                return vals;
            }
            else {
                throw new Error('Error calculating dot product of two lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecDot(v1, v2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjRG90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjRG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDRixNQUFNLFVBQVUsTUFBTSxDQUFDLEVBQWUsRUFBRSxFQUFlO0lBQ3BELGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNkLG9CQUFvQjtZQUNwQixPQUFRLEVBQWEsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQWMsRUFBRSxFQUFVLENBQVcsQ0FBQyxDQUFDO1NBQzlGO2FBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLG9CQUFvQjtZQUNwQixPQUFRLEVBQWEsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQVUsRUFBRSxNQUFjLENBQVcsQ0FBQyxDQUFDO1NBQzlGO2FBQU07WUFDSCx1REFBdUQ7WUFDdkQsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztnQkFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBUyxDQUFXLENBQUUsQ0FBQztpQkFDdkU7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUNYLCtGQUErRixDQUFDLENBQUM7YUFDeEc7U0FDSjtLQUNKO0lBQ0QsdUNBQXVDO0lBQ3ZDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFVLEVBQUUsRUFBVSxDQUFXLENBQUM7QUFDNUQsQ0FBQyJ9