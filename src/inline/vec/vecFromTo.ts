import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Creates a vector between two points.
 * \n
 * Overloaded with 4 cases. 
 * \n 
 * - xyz1 can be one coordinate, and xyz2 can be one coordinate.
 * - xyz1 can be a list of coordinates, and xyz2 can be one coordinate.
 * - xyz1 can be one coordinate, and xyz2 can be a list of coordinates. 
 * - xyz1 can be a list of coordinates, and xyz2 can be a list of coordinates. These lists should have the **same size**.
 * 
 * @param xyz1 The first point or list of points.
 * @param xyz2 The second point or list of points.
 * @returns The new vector. 
 */
 export function vecFromTo(xyz1: Txyz|Txyz[], xyz2: Txyz|Txyz[]): Txyz|Txyz[] {
    // overloaded case
    const depth1: number = getArrDepth(xyz1);
    const depth2: number = getArrDepth(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return (xyz1 as Txyz[]).map( v1_val => vectors.vecFromTo(v1_val as Txyz, xyz2 as Txyz) as Txyz);
        } else if (depth1 === 1) {
            // only v2 is Txyz[]
            return (xyz2 as Txyz[]).map( v2_val => vectors.vecFromTo(xyz1 as Txyz, v2_val as Txyz) as Txyz);
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < xyz1.length; i++) {
                    vecs.push( vectors.vecFromTo(xyz1[i] as Txyz, xyz2[i] as Txyz) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecFromTo(xyz1 as Txyz, xyz2 as Txyz) as Txyz;
}