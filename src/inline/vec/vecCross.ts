import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Calculates the cross product of two vectors.
 * \n
 * Overloaded with 4 cases. 
 * \n 
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be one vector.
 * - v1 can be one vector, and v2 can be a list of vectors. 
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors. 
 * @returns The resultant cross product, a list of 3 numbers. 
 */
 export function vecCross(v1: Txyz|Txyz[], v2: Txyz|Txyz[]): Txyz|Txyz[] {
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecCross(v1_val as Txyz, v2 as Txyz) as Txyz);
        } else if (depth1 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecCross(v1 as Txyz, v2_val as Txyz) as Txyz);
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecCross(v1[i] as Txyz, v2[i] as Txyz) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating cross product of two lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecCross(v1 as Txyz, v2 as Txyz) as Txyz;
}