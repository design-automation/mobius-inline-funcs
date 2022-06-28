import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Calculates the average vector given a list of vectors.
 * \n
 * The input vectors and resulting average vector are all normalised.
 * \n
 * The function can be called in two ways:
 * `vec = vecAvg([vec1, vec2, vec3])`
 * `vec = vecAvg(vec1, vec2, vec3)`
 * \n
 * @param v  A list of vectors or just multiple vectors.
 * @returns The average vector.
 */
export function vecAvg(...v) {
    const depth1 = getArrDepth(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    }
    else if (depth1 < 2) {
        throw new Error('Error averaging vectors: The vectors are bad.' + JSON.stringify(v));
    }
    // return the average vector
    return vectors.vecAvg(v);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjQXZnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjQXZnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7R0FXRztBQUNGLE1BQU0sVUFBVSxNQUFNLENBQUMsR0FBRyxDQUFTO0lBQ2hDLE1BQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDWixhQUFhO1FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO1NBQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hGO0lBQ0QsNEJBQTRCO0lBQzVCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVMsQ0FBQztBQUNyQyxDQUFDIn0=