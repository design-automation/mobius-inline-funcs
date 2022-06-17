import { getArrDepth } from '../../libs/arrs';
import { TRay, Txyz } from '../../libs/common';
import { vecAdd, vecFromTo, vecRot } from '../../libs/vectors';

/**
 * Rotate the ray "r1" around the ray "r2", by angle "a" (in radians).
 * \n
 * Overloaded with 3 cases. 
 * \n 
 * - ray1 can be one ray, ray2 can be one ray, and ang can be one number.
 * - ray1 can be a list of rays, ray2 can be one ray, and ang can be one number.
 * - ray1 can be a list of rays, ray2 can be a list of rays, and ang can be a list of numbers. These lists should have the **same size**.
 * 
 * @param ray1 The ray to be rotated.
 * @param ray2 The ray to be used as the axis of rotation. 
 * @param ang The angle (in radians) to rotate r1 by. 
 * @returns The new, rotated ray. 
 */
 export function rayRot(ray1: TRay|TRay[], ray2: TRay|TRay[], ang: number|number[]): TRay|TRay[] {
    // overloaded case
    const ray1_dep: number = getArrDepth(ray1);
    const ray2_dep: number = getArrDepth(ray2);
    const ang_dep: number = getArrDepth(ang);
    if (ray1_dep === 3) {
        ray1 = ray1 as TRay[];
        if (ray2_dep === 2 && ang_dep === 0) {
            //ray 1 list 
            ray2 = ray2 as TRay;
            ang = ang as number;
            return ray1.map(ray1_one => rayRot(ray1_one, ray2, ang)) as TRay[];
        } else if (ray2_dep === 3 && ang_dep === 1 && ray1.length === ray2.length && ray1.length === (ang as number[]).length) {
            //ray 1, ray 2 and ang lists 
            ray2 = ray2 as TRay[];
            ang = ang as number[];
            const rays: TRay[] = [];
            for (let i = 0; i < ray1.length; i++) {
                rays.push( rayRot(ray1[i], ray2[i], ang[i]) as TRay );
            }
            return rays as TRay[];
        } else {
            throw new Error('Error rotating a list planes with a list of ray2s and angles: The three lists must be of equal length.');
        }
    }
    // normal case
    ray1 = ray1 as TRay;
    ray2 = ray2 as TRay;
    ang = ang as number;
    const from_ray2_o_to_ray1_o: Txyz = vecFromTo(ray2[0], ray1[0]);
    const rot_ray1_origin: Txyz = vecAdd(ray2[0], vecRot(from_ray2_o_to_ray1_o, ray2[1], ang));
    return [rot_ray1_origin, vecRot(ray1[1], ray2[1], ang)];
}