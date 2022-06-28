import { Txyz } from '../../libs/common';
/**
 * Creates a vector between two points.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - xyz1 can be one coordinate, and xyz2 can be one coordinate.
 * - xyz1 can be a list of coordinates, and xyz2 can be one coordinate.
 * - xyz1 can be one coordinate, and xyz2 can be a list of coordinates.
 * - xyz1 can be a list of coordinates, and xyz2 can be a list of coordinates. These lists should have the **same size**.
 *
 * @param xyz1 The first point or list of points.
 * @param xyz2 The second point or list of points.
 * @returns The new vector.
 */
export declare function vecFromTo(xyz1: Txyz | Txyz[], xyz2: Txyz | Txyz[]): Txyz | Txyz[];
