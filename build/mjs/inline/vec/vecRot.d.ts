import { Txyz } from '../../libs/common';
/**
 * Rotates one vector around another vector by a specified angle (in radians).
 * \n
 * Overloaded with 8 cases.
 * \n
 * - All single inputs
 *      - v1 can be one vector, v2 can be one vector, and ang can be one number.
 * - Two single inputs, one list
 *      - v1 can be a list of vectors, v2 can be one vector, and ang can be one number.
 *      - v1 can be one vector, v2 can be a list of vectors, and ang can be one number.
 *      - v1 can be one vector, v2 can be one vector, and ang can be a list of numbers.
 * - One single input, two lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and ang can be one number. These lists should have the **same length**.
 *      - v1 can be a list of vectors, v2 can be one vector, and ang be a list of numbers. These lists should have the **same length**.
 *      - v1 can be one vector, v2 can be a list of vectors, and ang can be a list of numbers. These lists should have the **same length**.
 * - All lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and ang can be a list of numbers. All lists should have the **same length**.
 *
 * @param v1 The first vector or list of vectors to be rotated.
 * @param v2 The second vector or list of vectors for v1 to rotate around.
 * @param ang The angle or list of angles to rotate v1 by (in radians).
 * @returns The new vector.
 */
export declare function vecRot(v1: Txyz | Txyz[], v2: Txyz | Txyz[], ang: number | number[]): Txyz | Txyz[];
