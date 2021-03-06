import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Calculates a normalised vector with a direction that is the average of the directions of the input vectors.
 * \n
 * The result is equivalent to:
 * `vec = vecNorm(vecSum(vecNorm(v)))`
 * \n
 * Note that if the input vectors cancel each other out, the result will be `[0,0,0]`. 
 * \n
 * The function can be called in two ways:
 * `vec = vecAvgDir([vec1, vec2, vec3])`
 * `vec = vecAvgDir(vec1, vec2, vec3)`
 * \n
 * @param v A list of input vectors or just multiple vectors. 
 * @returns The result vector.
 */
 export function vecAvgDir(...v: Txyz[]): Txyz {
    const depth1: number = getArrDepth(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    } else if (depth1 < 2) {
        throw new Error('Error averaging vectors: The vectors are bad.' + JSON.stringify(v));
    }
    // return the average vector
    return vectors.vecAvgDir(v) as Txyz;
}