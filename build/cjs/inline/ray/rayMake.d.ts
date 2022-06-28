import { TRay, Txyz } from '../../libs/common';
/**
 * Creates a ray from an origin "o" and a direction vector "d".
 * If `len` is set: Creates a ray from an origin "o", a direction vector "d", and length "l".
 * \n
 * Overloaded with 4 cases.
 * \n
 * - origin can be one coordinate, dir can be one plane, and len can be one integer.
 * - origin can be a list of coordinates, dir can be one plane, and len can be one integer.
 * - origin can be one coordinate, dir can be a list of planes, and len can be one integer.
 * - origin can be a list of coordinates, dir can be a list of planes, and len can be one integer. These lists should have the **same size**.
 *
 * @param origin Coordinates or a list of coordinates in the form of [x, y, z].
 * @param dir A vector or list of vectors that provides the direction.
 * @param len (Optional) An integer for the length.
 * @returns A new ray.
 */
export declare function rayMake(origin: Txyz | Txyz[], dir: Txyz | Txyz[], len?: number): TRay | TRay[];
