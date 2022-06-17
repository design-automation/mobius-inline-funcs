import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
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
 export function vecAng2(v1: Txyz|Txyz[], v2: Txyz|Txyz[], v3: Txyz|Txyz[]): number|number[] {
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    const depth3: number = getArrDepth(v3);
    if (depth1 === 2 || depth2 === 2 || depth3 === 2) {
        if (depth2 === 1 && depth3 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecAng2(v1_val as Txyz, v2 as Txyz, v3 as Txyz) as number);
        } else if (depth1 === 1 && depth3 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecAng2(v1 as Txyz, v2_val as Txyz, v3 as Txyz) as number);
        } else if (depth1 === 1 && depth2 === 1) {
            // only v3 is Txyz[]
            return (v3 as Txyz[]).map( v3_val => vectors.vecAng2(v1 as Txyz, v2 as Txyz, v3_val as Txyz) as number);
        } else if (depth1 === 1) {
            // v2 and v3 are Txyz[], they must be equal length
            if (v2.length === v3.length) {
                const angs: number[] = [];
                for (let i = 0; i < v2.length; i++) {
                    angs.push( vectors.vecAng2(v1 as Txyz, v2[i] as Txyz, v3[i] as Txyz) as number );
                }
                return angs;
            } else {
                throw new Error(
                    'Error calculating angles between lists of vectors: The two lists must be of equal length.');
            }
        } else if (depth2 === 1) {
            // v1 and v3 are Txyz[], they must be equal length
            if (v1.length === v3.length) {
                const angs: number[] = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push( vectors.vecAng2(v1[i] as Txyz, v2 as Txyz, v3[i] as Txyz) as number );
                }
                return angs;
            } else {
                throw new Error(
                    'Error calculating angles between lists of vectors: The two lists must be of equal length.');
            }
        } else if (depth3 === 1) {
            // v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const angs: number[] = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push( vectors.vecAng2(v1[i] as Txyz, v2[i] as Txyz, v3 as Txyz) as number );
                }
                return angs;
            } else {
                throw new Error(
                    'Error calculating angles between lists of vectors and normals: The two lists must be of equal length.');
            }
        } else {
            // all three v1 and v2 and v3 are Txyz[], they must be all equal length
            if (v1.length === v2.length && v2.length === v3.length) {
                const angs: number[] = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push( vectors.vecAng2(v1[i] as Txyz, v2[i] as Txyz, v3[i] as Txyz) as number );
                }
                return angs;
            } else {
                throw new Error(
                    'Error calculating vectors between lists of vectors and normals: The two lists must be of equal length.');
            }
        }
    }
    // normal case, v1 and v2 and v3 are Txyz
    return vectors.vecAng2(v1 as Txyz, v2 as Txyz, v3 as Txyz) as number;
}