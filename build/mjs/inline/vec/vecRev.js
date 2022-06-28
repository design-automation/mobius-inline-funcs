import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Reverses the direction of a vector.
 * \n
 * Overloaded. v can be one vector or a list of vectors.
 *
 * @param v The input vector or list of vectors.
 * @returns A new vector or list of new vectors.
 */
export function vecRev(v) {
    // overloaded case
    const depth1 = getArrDepth(v);
    if (depth1 === 2) {
        return v.map(v_val => vectors.vecRev(v_val));
    }
    // normal case, vec is Txyz
    return vectors.vecRev(v);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjUmV2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjUmV2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7OztHQU9HO0FBQ0YsTUFBTSxVQUFVLE1BQU0sQ0FBQyxDQUFjO0lBQ2xDLGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsT0FBUSxDQUFZLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFhLENBQVMsQ0FBQyxDQUFDO0tBQzdFO0lBQ0QsMkJBQTJCO0lBQzNCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFTLENBQVMsQ0FBQztBQUM3QyxDQUFDIn0=