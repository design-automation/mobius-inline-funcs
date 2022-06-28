import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Sets the magnitude of a vector.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v can be one vector, and num can be one number.
 * - v can be a list of vectors, and num can be one number.
 * - v can be one vector, and num can be a list of numbers.
 * - v can be a list of vectors, and num can be a list of numbers. These lists should have the **same size**.
 * @param v The input vector or list of vectors. (It can have no set magnitude or have its current one be overwritten).
 * @param num A number or list of numbers for the new magnitude of v.
 * @returns The result vector or a list of result vectors.
 */
export function vecSetLen(v, num) {
    // overloaded case
    const depth1 = getArrDepth(v);
    const depth2 = getArrDepth(num);
    if (depth1 === 2 || depth2 === 1) {
        if (depth2 === 0) {
            // only vec is Txyz[]
            return v.map(v_val => vectors.vecSetLen(v_val, num));
        }
        else if (depth1 === 1) {
            // only num is number[]
            return num.map(num_val => vectors.vecSetLen(v, num_val));
        }
        else {
            // vec is Txyz and num is number[], they must be equal length
            num = num;
            if (v.length === num.length) {
                const vecs = [];
                for (let i = 0; i < v.length; i++) {
                    vecs.push(vectors.vecSetLen(v[i], num[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error setting lengths for a lists of vectors: The list of vector lengths must be the same length as the list of vectors.');
            }
        }
    }
    // normal case, vec is Txyz and num is number
    return vectors.vecSetLen(v, num);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjU2V0TGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjU2V0TGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDRixNQUFNLFVBQVUsU0FBUyxDQUFDLENBQWMsRUFBRSxHQUFvQjtJQUMzRCxrQkFBa0I7SUFDbEIsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDZCxxQkFBcUI7WUFDckIsT0FBUSxDQUFZLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFhLEVBQUUsR0FBYSxDQUFTLENBQUMsQ0FBQztTQUMvRjthQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQix1QkFBdUI7WUFDdkIsT0FBUSxHQUFnQixDQUFDLEdBQUcsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBUyxFQUFFLE9BQWlCLENBQVMsQ0FBQyxDQUFDO1NBQ3JHO2FBQU07WUFDSCw2REFBNkQ7WUFDN0QsR0FBRyxHQUFHLEdBQWUsQ0FBQztZQUN0QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO2dCQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFXLENBQVMsQ0FBRSxDQUFDO2lCQUMxRTtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQ1gsMEhBQTBILENBQUMsQ0FBQzthQUNuSTtTQUNKO0tBQ0o7SUFDRCw2Q0FBNkM7SUFDN0MsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQVMsRUFBRSxHQUFhLENBQVMsQ0FBQztBQUMvRCxDQUFDIn0=