import * as vectors from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';
// ================================================================================================
/**
 * Calculate the angle (0 to 2PI) between two vectors, relative to the plane normal.
 * \n
 * Unlike the vecAng() function, this funtion may return an angle larger than PI.
 * \n
 * The function calculates the angle from the first vector to the second vector
 * in a counter-clockwise direction, assuming the normal is pointing up towards the viewer.
 * \n
 * Overloaded with 8 cases.
 * \n
 * - All single inputs
 *      - v1 can be one vector, v2 can be one vector, and v3 can be one vector.
 * - Two single inputs, one list
 *      - v1 can be a list of vectors, v2 can be one vector, and v3 can be one vector.
 *      - v1 can be one vector, v2 can be a list of vectors, and v3 can be one vector.
 *      - v1 can be one vector, v2 can be one vector, and v3 can be a list of vectors.
 * - One single input, two lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and v3 can be one vector. These lists should have the **same length**.
 *      - v1 can be a list of vectors, v2 can be one vector, and v3 be a list of vectors. These lists should have the **same length**.
 *      - v1 can be one vector, v2 can be a list of vectors, and v3 can be a list of vectors. These lists should have the **same length**.
 * - All lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and v3 can be a list of vectors. All lists should have the **same length**.
 *
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors.
 * @param v3 A normal vector or a list of normal vectors.
 * @returns The angle, in radians.
 */
export function vecAng2(v1, v2, v3) {
    // overloaded case
    const depth1 = getArrDepth(v1);
    const depth2 = getArrDepth(v2);
    const depth3 = getArrDepth(v3);
    if (depth1 === 2 || depth2 === 2 || depth3 === 2) {
        if (depth2 === 1 && depth3 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vectors.vecAng2(v1_val, v2, v3));
        }
        else if (depth1 === 1 && depth3 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vectors.vecAng2(v1, v2_val, v3));
        }
        else if (depth1 === 1 && depth2 === 1) {
            // only v3 is Txyz[]
            return v3.map(v3_val => vectors.vecAng2(v1, v2, v3_val));
        }
        else if (depth1 === 1) {
            // v2 and v3 are Txyz[], they must be equal length
            if (v2.length === v3.length) {
                const angs = [];
                for (let i = 0; i < v2.length; i++) {
                    angs.push(vectors.vecAng2(v1, v2[i], v3[i]));
                }
                return angs;
            }
            else {
                throw new Error('Error calculating angles between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth2 === 1) {
            // v1 and v3 are Txyz[], they must be equal length
            if (v1.length === v3.length) {
                const angs = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push(vectors.vecAng2(v1[i], v2, v3[i]));
                }
                return angs;
            }
            else {
                throw new Error('Error calculating angles between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth3 === 1) {
            // v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const angs = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push(vectors.vecAng2(v1[i], v2[i], v3));
                }
                return angs;
            }
            else {
                throw new Error('Error calculating angles between lists of vectors and normals: The two lists must be of equal length.');
            }
        }
        else {
            // all three v1 and v2 and v3 are Txyz[], they must be all equal length
            if (v1.length === v2.length && v2.length === v3.length) {
                const angs = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push(vectors.vecAng2(v1[i], v2[i], v3[i]));
                }
                return angs;
            }
            else {
                throw new Error('Error calculating vectors between lists of vectors and normals: The two lists must be of equal length.');
            }
        }
    }
    // normal case, v1 and v2 and v3 are Txyz
    return vectors.vecAng2(v1, v2, v3);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjQW5nMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvdmVjL3ZlY0FuZzIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUMsbUdBQW1HO0FBQ25HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkc7QUFDRixNQUFNLFVBQVUsT0FBTyxDQUFDLEVBQWUsRUFBRSxFQUFlLEVBQUUsRUFBZTtJQUN0RSxrQkFBa0I7SUFDbEIsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixvQkFBb0I7WUFDcEIsT0FBUSxFQUFhLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFjLEVBQUUsRUFBVSxFQUFFLEVBQVUsQ0FBVyxDQUFDLENBQUM7U0FDM0c7YUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQyxvQkFBb0I7WUFDcEIsT0FBUSxFQUFhLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFVLEVBQUUsTUFBYyxFQUFFLEVBQVUsQ0FBVyxDQUFDLENBQUM7U0FDM0c7YUFBTSxJQUFJLE1B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