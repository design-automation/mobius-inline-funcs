import { TPlane, Txyz } from '../../libs/common';
/**
 * Creates a plane from an origin "o", an "x" axis vector, and any other vector in the "xy" plane.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - origin can be one coordinate, x_vec can be one vector, and xy_vec can be one vector.
 * - origin can be a list of coordinates, x_vec can be one vector, and xy_vec can be one vector.
 * - origin can be a list of coordinates, x_vec can be a list of vectors, and xy_vec can be one vector. These lists should have the **same size**.
 * - origin can be a list of coordinates, and v2 can be a list of vectors. These lists should have the **same size**.
 *
 * @param origin A point/position or list of points/positions.
 * @param x_vec A vector or a list of vectors.
 * @param xy_vec Another vector or list of vectors.
 * @returns A plane.
 */
export declare function plnMake(origin: Txyz | Txyz[], x_vec: Txyz | Txyz[], xy_vec: Txyz | Txyz[]): TPlane | TPlane[];
