import { TPlane, TRay, Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';
import { vecAdd, vecFromTo, vecRot } from '../../libs/vectors';

/**
 * Rotate the plane "p" around the ray "r", by angle "a" (in radians).
 * \n
 * Overloaded with 3 cases. 
 * \n 
 * - pln can be one plane, ray can be one ray, and ang can be one number.
 * - pln can be a list of planes, ray can be one ray, and ang can be one number.
 * - pln can be a list of planes, ray can be a list of rays, and ang can be a list of numbers. These lists should have the **same size**.
 * 
 * @param pln The plane to be rotated.
 * @param ray The ray to rotate the plane around. 
 * @param ang The angle to rotate the plane, in radians. 
 * @returns A new, rotated plane. 
 */
 export function plnRot(pln: TPlane|TPlane[], ray: TRay|TRay[], ang: number|number[]): TPlane|TPlane[] {
    // overloaded case
    const pln_dep: number = getArrDepth(pln);
    const ray_dep: number = getArrDepth(ray);
    const ang_dep: number = getArrDepth(ang);
    if (pln_dep === 3) {
        pln = pln as TPlane[];
        if (ray_dep === 2 && ang_dep === 0) {
            // pln is list
            ray = ray as TRay;
            ang = ang as number;
            return pln.map(pln_one => plnRot(pln_one, ray, ang)) as TPlane[];
        } else if (ray_dep === 3 && ang_dep === 1 && pln.length === ray.length && pln.length === (ang as number[]).length) {
            // pln, ray and ang are lists 
            ray = ray as TRay[];
            ang = ang as number[];
            const planes: TPlane[] = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push( plnRot(pln[i], ray[i], ang[i]) as TPlane );
            }
            return planes as TPlane[];
        } else {
            throw new Error('Error rotating a list planes with a list of rays and angles: The three lists must be of equal length.');
        }
    }
    // normal case
    pln = pln as TPlane;
    ray = ray as TRay;
    ang = ang as number;
    const from_ray_o_to_pln_o: Txyz = vecFromTo(ray[0], pln[0]);
    const rot_pln_origin: Txyz = vecAdd(ray[0], vecRot(from_ray_o_to_pln_o, ray[1], ang));
    return [rot_pln_origin, vecRot(pln[1], ray[1], ang), vecRot(pln[2], ray[1], ang)];
}