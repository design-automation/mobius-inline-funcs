import { Txyz } from '../../libs/common';
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
export declare function vecDiv(v: Txyz | Txyz[], num: number | number[]): Txyz | Txyz[];
