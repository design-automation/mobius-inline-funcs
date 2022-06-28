import { Txyz } from '../../libs/common';
/**
 * Subtracts v2 from v1.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be one vector.
 * - v1 can be one vector, and v2 can be a list of vectors.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 *
 * @param v1 The vector or list of vectors to be subtracted from.
 * @param v2 The vector or list of vectors to subtract by. (Is unmodified by the expression.)
 * @param norm True or False: Normalize the resulting vector.
 * @returns The result vector.
 */
export declare function vecSub(v1: Txyz | Txyz[], v2: Txyz | Txyz[], norm?: boolean): Txyz | Txyz[];
