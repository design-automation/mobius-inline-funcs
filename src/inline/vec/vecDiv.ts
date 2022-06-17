import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Divides a vector by a number.
 * \n
 * Overloaded with 4 cases. 
 * \n 
 * - v can be one vector, and num can be one number.
 * - v can be a list of vectors, and num can be one number.
 * - v can be one vector, and num can be a list of numbers. 
 * - v can be a list of vectors, and num can be a list of numbers. These lists should have the **same size**.
 * 
 * @param v The input vector or list of vectors.
 * @param num A number or list of numbers (to divide the vector by).
 * @returns The result vector.
 * 
 */
 export function vecDiv(v: Txyz|Txyz[], num: number|number[]): Txyz|Txyz[] {
    // overloaded case
    const depth1: number = getArrDepth(v);
    const depth2: number = getArrDepth(num);
    if (depth1 === 2 || depth2 === 1) {
        if (depth2 === 0) {
            // only vec is Txyz[]
            return (v as Txyz[]).map( v_val => vectors.vecDiv(v_val as Txyz, num as number) as Txyz);
        } else if (depth1 === 1) {
            // only num is number[]
            return (num as number[]).map( num_val => vectors.vecDiv(v as Txyz, num_val as number) as Txyz);
        } else {
            // vec is Txyz and num is number[], they must be equal length
            num = num as number[];
            if (v.length === num.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v.length; i++) {
                    vecs.push( vectors.vecDiv(v[i] as Txyz, num[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error dividing a lists of vectors: The list of divisors must be the same length as the list of vectors.');
            }
        }
    }
    // normal case, vec is Txyz and num is number
    return vectors.vecDiv(v as Txyz, num as number) as Txyz;
}