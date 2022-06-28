import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Returns true if the difference between two vectors is smaller than a specified tolerance.
 * \n
 * Overloaded with 2 cases.
 * \n
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 *
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors.
 * @param tol A number to specify the tolerance.
 * @returns True or False.
 */
export function vecEqual(v1, v2, tol) {
    // overloaded case
    const depth1 = getArrDepth(v1);
    const depth2 = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth1 === 1 || depth2 === 1) {
            throw new Error('Error calculating vector equality between multiple vectors: The two lists must be of equal length.');
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const eq = [];
                for (let i = 0; i < v1.length; i++) {
                    eq.push(vectors.vecEqual(v1[i], v2[i], tol));
                }
                return eq;
            }
            else {
                throw new Error('Error calculating vector equality between multiple vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecEqual(v1, v2, tol);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjRXF1YWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3ZlYy92ZWNFcXVhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxtR0FBbUc7QUFDbkc7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0YsTUFBTSxVQUFVLFFBQVEsQ0FBQyxFQUFlLEVBQUUsRUFBZSxFQUFFLEdBQVc7SUFDbkUsa0JBQWtCO0lBQ2xCLE1BQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDOUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FDWCxvR0FBb0csQ0FBQyxDQUFDO1NBQzdHO2FBQU07WUFDSCx1REFBdUQ7WUFDdkQsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLE1BQU0sRUFBRSxHQUFjLEVBQUUsQ0FBQztnQkFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hDLEVBQUUsQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBUyxFQUFFLEdBQUcsQ0FBWSxDQUFFLENBQUM7aUJBQzdFO2dCQUNELE9BQU8sRUFBRSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FDWCxvR0FBb0csQ0FBQyxDQUFDO2FBQzdHO1NBQ0o7S0FDSjtJQUNELHVDQUF1QztJQUN2QyxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxHQUFHLENBQVksQ0FBQztBQUNwRSxDQUFDIn0=