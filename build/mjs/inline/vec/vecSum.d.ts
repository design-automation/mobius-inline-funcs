import { Txyz } from '../../libs/common';
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
export declare function vecSum(...v: Txyz[]): Txyz;
