import * as vectors from '../../libs/vectors';
import { Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

/**
 * Add multiple vectors. If only two vectors need to be added, `vecAdd` can be used.
 * \n
 * The function can be called in two ways:
 * `vec = vecSum([vec1, vec2, vec3])`
 * `vec = vecSum(vec1, vec2, vec3)`
 * \n
 * @param v A list of vectors or just multiple vectors.
 * @returns The result vector.
 */
 export function vecSum(...v: Txyz[]): Txyz {
    const depth1: number = getArrDepth(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    } else if (depth1 < 2) {
        throw new Error('Error summing vectors: The vectors are bad.' + JSON.stringify(v));
    }
    // return the sum
    return vectors.vecSum(v, false) as Txyz;
}