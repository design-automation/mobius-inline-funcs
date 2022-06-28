import { Txyz } from '../../libs/common';
/**
 * Sets the magnitude of a vector.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v can be one vector, and num can be one number.
 * - v can be a list of vectors, and num can be one number.
 * - v can be one vector, and num can be a list of numbers.
 * - v can be a list of vectors, and num can be a list of numbers. These lists should have the **same size**.
 * @param v The input vector or list of vectors. (It can have no set magnitude or have its current one be overwritten).
 * @param num A number or list of numbers for the new magnitude of v.
 * @returns The result vector or a list of result vectors.
 */
export declare function vecSetLen(v: Txyz | Txyz[], num: number | number[]): Txyz | Txyz[];
