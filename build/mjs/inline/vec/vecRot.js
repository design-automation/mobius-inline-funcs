import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Rotates one vector around another vector by a specified angle (in radians).
 * \n
 * Overloaded with 8 cases.
 * \n
 * - All single inputs
 *      - v1 can be one vector, v2 can be one vector, and ang can be one number.
 * - Two single inputs, one list
 *      - v1 can be a list of vectors, v2 can be one vector, and ang can be one number.
 *      - v1 can be one vector, v2 can be a list of vectors, and ang can be one number.
 *      - v1 can be one vector, v2 can be one vector, and ang can be a list of numbers.
 * - One single input, two lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and ang can be one number. These lists should have the **same length**.
 *      - v1 can be a list of vectors, v2 can be one vector, and ang be a list of numbers. These lists should have the **same length**.
 *      - v1 can be one vector, v2 can be a list of vectors, and ang can be a list of numbers. These lists should have the **same length**.
 * - All lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and ang can be a list of numbers. All lists should have the **same length**.
 *
 * @param v1 The first vector or list of vectors to be rotated.
 * @param v2 The second vector or list of vectors for v1 to rotate around.
 * @param ang The angle or list of angles to rotate v1 by (in radians).
 * @returns The new vector.
 */
export function vecRot(v1, v2, ang) {
    // overloaded case
    const depth1 = getArrDepth(v1);
    const depth2 = getArrDepth(v2);
    const depth3 = getArrDepth(ang);
    if (depth1 === 2 || depth2 === 2 || depth3 === 1) {
        if (depth2 === 1 && depth3 === 0) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vectors.vecRot(v1_val, v2, ang));
        }
        else if (depth1 === 1 && depth3 === 0) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vectors.vecRot(v1, v2_val, ang));
        }
        else if (depth1 === 1 && depth2 === 1) {
            // only ang is number[]
            return ang.map(ang_val => vectors.vecRot(v1, v2, ang_val));
        }
        else if (depth1 === 1) {
            // v2 is Txyz[] and ang is number[], they must be equal length
            ang = ang;
            if (v2.length === ang.length) {
                const vecs = [];
                for (let i = 0; i < v2.length; i++) {
                    vecs.push(vectors.vecRot(v1, v2[i], ang[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth2 === 1) {
            // v1 is Txyz[] and ang is number[], they must be equal length
            ang = ang;
            if (v1.length === ang.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vectors.vecRot(v1[i], v2, ang[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating angles between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth3 === 0) {
            // v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vectors.vecRot(v1[i], v2[i], ang));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        }
        else {
            // all three v1 and v2 are Txyz[] and ang is number[], they must be all equal length
            ang = ang;
            if (v1.length === v2.length && v2.length === ang.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vectors.vecRot(v1[i], v2[i], ang[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating vectors between lists of vectors and angles: The lists must be of equal length.');
            }
        }
    }
    // normal case, v1 and v2 and ang are Txyz
    return vectors.vecRot(v1, v2, ang);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjUm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjUm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUNGLE1BQU0sVUFBVSxNQUFNLENBQUMsRUFBZSxFQUFFLEVBQWUsRUFBRSxHQUFvQjtJQUMxRSxrQkFBa0I7SUFDbEIsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixvQkFBb0I7WUFDcEIsT0FBUSxFQUFhLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFjLEVBQUUsRUFBVSxFQUFFLEdBQWEsQ0FBUyxDQUFDLENBQUM7U0FDM0c7YUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQyxvQkFBb0I7WUFDcEIsT0FBUSxFQUFhLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFVLEVBQUUsTUFBYyxFQUFFLEdBQWEsQ0FBUyxDQUFDLENBQUM7U0FDM0c7YUFBTSxJQUFJLE1BQU0sS0FB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