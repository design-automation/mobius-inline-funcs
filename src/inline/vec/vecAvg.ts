import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

// ================================================================================================
/**
 * Calculates the average vector given a list of vectors.
 * \n
 * The input vectors and resulting average vector are all normalised.
 * \n
 * The function can be called in two ways:
 * `vec = vecAvg([vec1, vec2, vec3])`
 * `vec = vecAvg(vec1, vec2, vec3)`
 * \n 
 * @param v  A list of vectors or just multiple vectors.
 * @returns The average vector. 
 */
 export function vecAvg(...v: Txyz[]): Txyz {
    const depth1: number = getArrDepth(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    } else if (depth1 < 2) {
        throw new Error('Error averaging vectors: The vectors are bad.' + JSON.stringify(v));
    }
    // return the average vector
    return vectors.vecAvg(v) as Txyz;
}