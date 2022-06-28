import { Txyz } from '../../libs/common';
/**
 * Adds two vectors. If more vectors need to be added at once, use `vecSum`.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be one vector.
 * - v1 can be one vector, and v2 can be a list of vectors.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 *
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors.
 * @param norm True or False: Normalize the resulting vector.
 * @returns The result vector.
 *
 */
export declare function vecAdd(v1: Txyz | Txyz[], v2: Txyz | Txyz[], norm?: boolean): Txyz | Txyz[];
