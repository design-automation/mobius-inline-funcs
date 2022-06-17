import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
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
 export function vecRot(v1: Txyz|Txyz[], v2: Txyz|Txyz[], ang: number|number[]): Txyz|Txyz[] {
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    const depth3: number = getArrDepth(ang);
    if (depth1 === 2 || depth2 === 2 || depth3 === 1) {
        if (depth2 === 1 && depth3 === 0) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecRot(v1_val as Txyz, v2 as Txyz, ang as number) as Txyz);
        } else if (depth1 === 1 && depth3 === 0) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecRot(v1 as Txyz, v2_val as Txyz, ang as number) as Txyz);
        } else if (depth1 === 1 && depth2 === 1) {
            // only ang is number[]
            return (ang as number[]).map( ang_val => vectors.vecRot(v1 as Txyz, v2 as Txyz, ang_val as number) as Txyz);
        } else if (depth1 === 1) {
            // v2 is Txyz[] and ang is number[], they must be equal length
            ang = ang as number[];
            if (v2.length === ang.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v2.length; i++) {
                    vecs.push( vectors.vecRot(v1 as Txyz, v2[i] as Txyz, ang[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        } else if (depth2 === 1) {
            // v1 is Txyz[] and ang is number[], they must be equal length
            ang = ang as number[];
            if (v1.length === ang.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecRot(v1[i] as Txyz, v2 as Txyz, ang[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating angles between lists of vectors: The two lists must be of equal length.');
            }
        } else if (depth3 === 0) {
            // v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecRot(v1[i] as Txyz, v2[i] as Txyz, ang as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        } else {
            // all three v1 and v2 are Txyz[] and ang is number[], they must be all equal length
            ang = ang as number[];
            if (v1.length === v2.length && v2.length === ang.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecRot(v1[i] as Txyz, v2[i] as Txyz, ang[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating vectors between lists of vectors and angles: The lists must be of equal length.');
            }
        }
    }
    // normal case, v1 and v2 and ang are Txyz
    return vectors.vecRot(v1 as Txyz, v2 as Txyz, ang as number) as Txyz;
}