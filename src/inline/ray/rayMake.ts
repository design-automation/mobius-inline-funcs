import { getArrDepth } from '../../libs/arrs';
import { TRay, Txyz } from '../../libs/common';
import { vecSetLen } from '../../libs/vectors';

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
 export function rayMake(origin: Txyz|Txyz[], dir: Txyz|Txyz[], len?: number): TRay|TRay[] {
    // overloaded case
    const origin_dep: number = getArrDepth(origin);
    const dir_dep: number = getArrDepth(dir);
    if (origin_dep === 2 || dir_dep === 2) {
        if (dir_dep === 1) {
            // only origin is Txyz[]
            return (origin as Txyz[]).map( origin_val => rayMake(origin_val as Txyz, dir as Txyz, len) as TRay);
        } else if (origin_dep === 1) {
            // only dir is Txyz[]
            return (dir as Txyz[]).map( dir_val => rayMake(origin as Txyz, dir_val as Txyz, len) as TRay);
        } else {
            // both origin and dir are Txyz[], they must be equal length
            if (origin.length === dir.length) {
                const vecs: TRay[] = [];
                for (let i = 0; i < origin.length; i++) {
                    vecs.push( rayMake(origin[i] as Txyz, dir[i] as Txyz, len) as TRay );
                }
                return vecs;
            } else {
                throw new Error('Error making rays with lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both origin and dir are Txyz
    const ray_vec: Txyz = len ? vecSetLen(dir as Txyz, len) : dir as Txyz;
    return [origin.slice() as Txyz, ray_vec];
}