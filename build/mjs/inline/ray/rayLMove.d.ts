import { TRay } from '../../libs/common';
/**
 * Move the ray "r" relative to the ray direction vector, by distance "d".
 * \n
 * Overloaded with 3 cases.
 * \n
 * - ray can be one ray, and dist can be one number.
 * - ray can be a list of rays, and dist can be one number.
 * - ray can be a list of rays, and dist can be a list of numbers. These lists should have the **same size**.
 *
 * @param ray The ray to be moved.
 * @param dist The distance to move the ray by.
 * @returns The new, moved ray.
 */
export declare function rayLMove(ray: TRay | TRay[], dist: number | number[]): TRay | TRay[];
