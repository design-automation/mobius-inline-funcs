import { getArrDepth } from '../../libs/arrs';
import { TRay, Txyz } from '../../libs/common';
import { vecAdd, vecMult, vecNorm } from '../../libs/vectors';

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
 export function rayLMove(ray: TRay|TRay[], dist: number|number[]): TRay|TRay[] {

    // overloaded case
    const ray_dep: number = getArrDepth(ray);
    const dist_dep: number = getArrDepth(dist);
    if (ray_dep === 3) {
        ray = ray as TRay[];
        if (dist_dep === 0) {
            dist = dist as number;
            return ray.map(ray_one => rayLMove(ray_one, dist)) as TRay[];
        } else if (dist_dep === 1 && ray.length === (dist as number[]).length) {
            dist = dist as number[];
            const rays: TRay[] = [];
            for (let i = 0; i < ray.length; i++) {
                rays.push( rayLMove(ray[i], dist[i]) as TRay );
            }
            return rays as TRay[];
        } else {
            throw new Error('Error moving a list rays with a list of distances: The two lists must be of equal length.');
        }
    }
    // normal case
    ray = ray as TRay;
    dist = dist as number;
    const vec: Txyz = vecMult(vecNorm(ray[1]), dist);
    return [vecAdd(ray[0], vec), ray[1].slice() as Txyz];
}