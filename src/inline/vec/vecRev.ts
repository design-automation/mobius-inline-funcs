import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Reverses the direction of a vector.
 * \n
 * Overloaded. v can be one vector or a list of vectors.
 * 
 * @param v The input vector or list of vectors.
 * @returns A new vector or list of new vectors.
 */
 export function vecRev(v: Txyz|Txyz[]): Txyz|Txyz[] {
    // overloaded case
    const depth1: number = getArrDepth(v);
    if (depth1 === 2) {
        return (v as Txyz[]).map( v_val => vectors.vecRev(v_val as Txyz) as Txyz);
    }
    // normal case, vec is Txyz
    return vectors.vecRev(v as Txyz) as Txyz;
}