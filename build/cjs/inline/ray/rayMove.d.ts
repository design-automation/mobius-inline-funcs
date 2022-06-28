import { TRay, Txyz } from '../../libs/common';
/**
 * Move the ray "r" relative to the global X, Y, and Z axes, by vector "v".
 * \n
 * Overloaded with 3 cases.
 * \n
 * - ray can be one ray, and vec can be one vector.
 * - ray can be a list of rays, and vec can be one vector.
 * - ray can be a list of rays, and vec can be a list of vectors. These lists should have the **same size**.
 *
 * @param ray The ray to be moved.
 * @param vec The vector to move the ray with.
 * @returns The new, moved ray.
 */
export declare function rayMove(ray: TRay | TRay[], vec: Txyz | Txyz[]): TRay | TRay[];
