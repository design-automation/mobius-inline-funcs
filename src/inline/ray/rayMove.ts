import { getArrDepth } from '../../libs/arrs';
import { TRay, Txyz } from '../../libs/common';
import { vecAdd } from '../../libs/vectors';

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
 export function rayMove(ray: TRay|TRay[], vec: Txyz|Txyz[]): TRay|TRay[] {
    // overloaded case
    const ray_dep: number = getArrDepth(ray);
    const vec_dep: number = getArrDepth(vec);
    if (ray_dep === 3) {
        ray = ray as TRay[];
        if (vec_dep === 1) {
            vec = vec as Txyz;
            return ray.map(ray_one => rayMove(ray_one, vec)) as TRay[];
        } else if (vec_dep === 2 && ray.length === vec.length) {
            vec = vec as Txyz[];
            const rays: TRay[] = [];
            for (let i = 0; i < ray.length; i++) {
                rays.push( rayMove(ray[i], vec[i]) as TRay );
            }
            return rays as TRay[];
        } else {
            throw new Error('Error moving a list rays with a list of vectors: The two lists must be of equal length.');
        }
    }
    // normal case
    ray = ray as TRay;
    vec = vec as Txyz;
    return [vecAdd(ray[0], vec), ray[1].slice() as Txyz];
}