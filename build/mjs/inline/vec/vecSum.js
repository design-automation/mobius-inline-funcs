import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
/**
 * Add multiple vectors. If only two vectors need to be added, `vecAdd` can be used.
 * \n
 * The function can be called in two ways:
 * `vec = vecSum([vec1, vec2, vec3])`
 * `vec = vecSum(vec1, vec2, vec3)`
 * \n
 * @param v A list of vectors or just multiple vectors.
 * @returns The result vector.
 */
export function vecSum(...v) {
    const depth1 = getArrDepth(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    }
    else if (depth1 < 2) {
        throw new Error('Error summing vectors: The vectors are bad.' + JSON.stringify(v));
    }
    // return the sum
    return vectors.vecSum(v, false);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjU3VtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjU3VtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDOzs7Ozs7Ozs7R0FTRztBQUNGLE1BQU0sVUFBVSxNQUFNLENBQUMsR0FBRyxDQUFTO0lBQ2hDLE1BQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDWixhQUFhO1FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO1NBQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RGO0lBQ0QsaUJBQWlCO0lBQ2pCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFTLENBQUM7QUFDNUMsQ0FBQyJ9