import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Sets the magnitude of a vector to 1.
 * \n
 * Overloaded. v can be one vector or a list of vectors.
 * @param v The input vector or list of vectors.
 * @returns A new vector or list of new vectors(with a magnitude of 1).
 */
export function vecNorm(v) {
    // overloaded case
    const depth1 = getArrDepth(v);
    if (depth1 === 2) {
        return v.map(v_val => vectors.vecNorm(v_val));
    }
    // normal case, vec is Txyz
    return vectors.vecNorm(v);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjTm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvdmVjL3ZlY05vcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUMsbUdBQW1HO0FBQ25HOzs7Ozs7R0FNRztBQUNGLE1BQU0sVUFBVSxPQUFPLENBQUMsQ0FBYztJQUNuQyxrQkFBa0I7SUFDbEIsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNkLE9BQVEsQ0FBWSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBYSxDQUFTLENBQUMsQ0FBQztLQUM5RTtJQUNELDJCQUEyQjtJQUMzQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBUyxDQUFTLENBQUM7QUFDOUMsQ0FBQyJ9