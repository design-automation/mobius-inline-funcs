import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Sets the magnitude of a vector to 1.
 * \n
 * Overloaded. v can be one vector or a list of vectors.
 * @param v The input vector or list of vectors. 
 * @returns A new vector or list of new vectors(with a magnitude of 1).
 */
 export function vecNorm(v: Txyz|Txyz[]): Txyz|Txyz[] {
    // overloaded case
    const depth1: number = getArrDepth(v);
    if (depth1 === 2) {
        return (v as Txyz[]).map( v_val => vectors.vecNorm(v_val as Txyz) as Txyz);
    }
    // normal case, vec is Txyz
    return vectors.vecNorm(v as Txyz) as Txyz;
}