import * as isect from '../../libs/intersect';
type Txyz = [number, number, number];
type TRay = [Txyz, Txyz];
type TPlane = [Txyz, Txyz, Txyz];

/**
 * Returns the xyz from projecting an xyz c onto an infinite ray r or infinite plane p where...
 * \n
 * - `project(c, r)`, Returns the xyz from projecting an xyz c onto an infinite ray r,
 * - `project(c, r, m)`, Returns the xyz from projecting an xyz c onto an infinite ray r, where:
 *      - if `m=2`, the ray is infinite in both directions, 
 *      - if `m=1`, the ray is infinite in one direction, 
 *      - and if `m=0`, the ray is not infinite.
 * - `project(c, p)`, Returns the xyz from projecting an xyz c onto an infinite plane p.
 * @param c An xyz coordinate.
 * @param r A ray or a plane.
 * @param met (Optional) Creates certain conditions, as seen above.
 * @returns An xyz coordinate.
 */
 export function project(c: Txyz, r: TRay|TPlane, met: number = 2) {
    return isect.project(c, r, met);
}