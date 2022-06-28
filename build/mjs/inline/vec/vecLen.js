import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Calculates the magnitude of a vector.
 * \n
 * Overloaded. v can be one vector or a list of vectors.
 *
 * @param v The input vector or list of vectors.
 * @returns A number or list of numbers.
 */
export function vecLen(v) {
    // overloaded case
    const depth1 = getArrDepth(v);
    if (depth1 === 2) {
        return v.map(v_val => vectors.vecLen(v_val));
    }
    // normal case, vec is Txyz
    return vectors.vecLen(v);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjTGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjTGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7OztHQU9HO0FBQ0YsTUFBTSxVQUFVLE1BQU0sQ0FBQyxDQUFjO0lBQ2xDLGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsT0FBUSxDQUFZLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFhLENBQVcsQ0FBQyxDQUFDO0tBQy9FO0lBQ0QsMkJBQTJCO0lBQzNCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFTLENBQVcsQ0FBQztBQUMvQyxDQUFDIn0=