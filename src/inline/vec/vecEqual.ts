import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Returns true if the difference between two vectors is smaller than a specified tolerance.
 * \n
 * Overloaded with 2 cases. 
 * \n 
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 * 
 * @param v1 The first vector or list of vectors. 
 * @param v2 The second vector or list of vectors.
 * @param tol A number to specify the tolerance.
 * @returns True or False. 
 */
 export function vecEqual(v1: Txyz|Txyz[], v2: Txyz|Txyz[], tol: number): boolean|boolean[] {
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth1 === 1 || depth2 === 1) {
            throw new Error(
                'Error calculating vector equality between multiple vectors: The two lists must be of equal length.');
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const eq: boolean[] = [];
                for (let i = 0; i < v1.length; i++) {
                    eq.push( vectors.vecEqual(v1[i] as Txyz, v2[i] as Txyz, tol) as boolean );
                }
                return eq;
            } else {
                throw new Error(
                    'Error calculating vector equality between multiple vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecEqual(v1 as Txyz, v2 as Txyz, tol) as boolean;
}