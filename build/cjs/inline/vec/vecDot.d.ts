import { Txyz } from '../../libs/common';
/**
 * Calculates the dot product of two vectors.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be one vector.
 * - v1 can be one vector, and v2 can be a list of vectors.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors.
 * @returns The number, the result dot product.
 */
export declare function vecDot(v1: Txyz | Txyz[], v2: Txyz | Txyz[]): number | number[];
