import { TRay } from '../../libs/common';
/**
 * Make a copy of the ray "r".
 * \n
 * Overloaded. ray can be one ray or a list of rays.
 *
 * @param ray The original ray to be copied.
 * @returns A copy of the original ray.
 */
export declare function rayCopy(ray: TRay | TRay[]): TRay | TRay[];
