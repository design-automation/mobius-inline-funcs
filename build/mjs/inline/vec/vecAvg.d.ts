import { Txyz } from '../../libs/common';
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
export declare function vecAvg(...v: Txyz[]): Txyz;
