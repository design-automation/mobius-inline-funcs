import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Calculates the magnitude of a vector.
 * \n
 * Overloaded. v can be one vector or a list of vectors.
 * 
 * @param v The input vector or list of vectors. 
 * @returns A number or list of numbers. 
 */
 export function vecLen(v: Txyz|Txyz[]): number|number[] {
    // overloaded case
    const depth1: number = getArrDepth(v);
    if (depth1 === 2) {
        return (v as Txyz[]).map( v_val => vectors.vecLen(v_val as Txyz) as number);
    }
    // normal case, vec is Txyz
    return vectors.vecLen(v as Txyz) as number;
}