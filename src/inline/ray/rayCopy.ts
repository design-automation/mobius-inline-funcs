import { getArrDepth } from '../../libs/arrs';
import { TRay, Txyz } from '../../libs/common';

/**
 * Make a copy of the ray "r".
 * \n
 * Overloaded. ray can be one ray or a list of rays.
 * 
 * @param ray The original ray to be copied.
 * @returns A copy of the original ray.
 */
 export function rayCopy(ray: TRay|TRay[]): TRay|TRay[] {
    // overloaded case
    const ray_dep: number = getArrDepth(ray);
    if (ray_dep === 3) { return (ray as TRay[]).map(ray_one => rayCopy(ray_one)) as TRay[]; }
    // normal case
    return [ray[0].slice() as Txyz, ray[1].slice() as Txyz];
}