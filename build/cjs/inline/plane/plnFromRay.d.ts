import { TPlane, TRay } from '../../libs/common';
/**
 * Generate a plane from a ray. The plane is perpendicular to the ray,
 * and the origin of the plane will be the same as the ray.
 *
 * Overloaded. ray can be one ray or a list of rays.
 *
 * @param ray Input ray (or list of rays) to generate a plane (or list of planes) from.
 * @returns A plane or list of planes.
 */
export declare function plnFromRay(ray: TRay | TRay[]): TPlane | TPlane[];
