import { Txyz } from '../../libs/common';
/**
 * Sets the magnitude of a vector to 1.
 * \n
 * Overloaded. v can be one vector or a list of vectors.
 * @param v The input vector or list of vectors.
 * @returns A new vector or list of new vectors(with a magnitude of 1).
 */
export declare function vecNorm(v: Txyz | Txyz[]): Txyz | Txyz[];
