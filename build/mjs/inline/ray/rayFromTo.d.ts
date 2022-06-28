import { TRay, Txyz } from '../../libs/common';
/**
 * Creates a ray between two points.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - xyz1 can be one coordinate, and xyz2 can be one coordinate.
 * - xyz1 can be a list of coordinates, and xyz2 can be one coordinate.
 * - xyz1 can be one coordinate, and xyz2 can be a list of coordinates.
 * - xyz1 can be a list of coordinates, and xyz2 can be a list of coordinates. These lists should have the **same size**.
 *
 * @param xyz1 Coordinate 1.
 * @param xyz2 Coordinate 2.
 * @returns The created ray or list of rays that has xyz1 as an origin and xyz2 as an endpoint.
 */
export declare function rayFromTo(xyz1: Txyz | Txyz[], xyz2: Txyz | Txyz[]): TRay | TRay[];
