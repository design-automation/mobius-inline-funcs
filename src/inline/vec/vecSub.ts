import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Subtracts v2 from v1.
 * \n
 * Overloaded with 4 cases. 
 * \n 
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be one vector.
 * - v1 can be one vector, and v2 can be a list of vectors. 
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 * 
 * @param v1 The vector or list of vectors to be subtracted from.
 * @param v2 The vector or list of vectors to subtract by. (Is unmodified by the expression.)
 * @param norm True or False: Normalize the resulting vector.
 * @returns The result vector. 
 */
 export function vecSub(v1: Txyz|Txyz[], v2: Txyz|Txyz[], norm: boolean = false): Txyz|Txyz[] {
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecSub(v1_val as Txyz, v2 as Txyz, norm) as Txyz);
        } else if (depth1 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecSub(v1 as Txyz, v2_val as Txyz, norm) as Txyz);
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecSub(v1[i] as Txyz, v2[i] as Txyz, norm) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error adding lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecSub(v1 as Txyz, v2 as Txyz, norm) as Txyz;
}