import { Txyz } from '../../libs/common';
/**
 * Calculate the angle (0 to 2PI) between two vectors, relative to the plane normal.
 * \n
 * Unlike the vecAng() function, this funtion may return an angle larger than PI.
 * \n
 * The function calculates the angle from the first vector to the second vector
 * in a counter-clockwise direction, assuming the normal is pointing up towards the viewer.
 * \n
 * Overloaded with 8 cases.
 * \n
 * - All single inputs
 *      - v1 can be one vector, v2 can be one vector, and v3 can be one vector.
 * - Two single inputs, one list
 *      - v1 can be a list of vectors, v2 can be one vector, and v3 can be one vector.
 *      - v1 can be one vector, v2 can be a list of vectors, and v3 can be one vector.
 *      - v1 can be one vector, v2 can be one vector, and v3 can be a list of vectors.
 * - One single input, two lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and v3 can be one vector. These lists should have the **same length**.
 *      - v1 can be a list of vectors, v2 can be one vector, and v3 be a list of vectors. These lists should have the **same length**.
 *      - v1 can be one vector, v2 can be a list of vectors, and v3 can be a list of vectors. These lists should have the **same length**.
 * - All lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and v3 can be a list of vectors. All lists should have the **same length**.
 *
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors.
 * @param v3 A normal vector or a list of normal vectors.
 * @returns The angle, in radians.
 */
export declare function vecAng2(v1: Txyz | Txyz[], v2: Txyz | Txyz[], v3: Txyz | Txyz[]): number | number[];
