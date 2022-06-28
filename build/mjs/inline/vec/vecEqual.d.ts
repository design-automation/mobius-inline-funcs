import { Txyz } from '../../libs/common';
/**
 * Returns true if the difference between two vectors is smaller than a specified tolerance.
 * \n
 * Overloaded with 2 cases.
 * \n
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 *
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors.
 * @param tol A number to specify the tolerance.
 * @returns True or False.
 */
export declare function vecEqual(v1: Txyz | Txyz[], v2: Txyz | Txyz[], tol: number): boolean | boolean[];
