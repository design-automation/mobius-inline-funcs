import * as isect from '../libs/intersect';
import * as dist from '../libs/distance';
import { checkNumArgs } from '../_check_inline_args';
type Txyz = [number, number, number];
type TRay = [Txyz, Txyz];
type TPlane = [Txyz, Txyz, Txyz];

/**
 * Returns the intersection xyz between two rays or a ray and a plane, where...
 * \n
 * - `intersect(r1, r2)`, Returns the intersection xyz between two infinite rays.
 * - `intersect(r1, r2, m)`, Returns the intersection xyz between two rays, where:
 *      - if `m=2`, rays are infinite in both directions
 *      - if `m=1` rays are infinite in one direction
 *      - if `m=0`, rays are not infinite.
 * 
 * - `intersect(r, p)`, Returns the intersection xyz between an infinite ray r and an infinite plane p,
 * - `intersect(r, p, m)`, Returns the intersection xyz between a ray r and an infinite plane p, where:
 *      - if `m=2`, the ray is infinite in both directions, 
 *      - if `m=1` the ray is infinite in one direction, 
 *      - and if `m=0`, the ray is not infinite.
 * 
 * @param r1 The first ray.
 * @param r2 The second ray or plane.
 * @param met (Optional) Creates certain conditions, as seen above.
 * @returns The xyz coordinates of the intersection between two rays.
 */
export function intersect(debug: boolean, r1: TRay, r2: TRay|TPlane, met: number = 2) {
    if (debug) {
        checkNumArgs('intersect', arguments, 3, 2);
    }
    return isect.intersect(r1, r2, met);
}
/**
 * Returns the xyz from projecting an xyz c onto an infinite ray r...
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
export function project(debug: boolean, c: Txyz, r: TRay|TPlane, met: number = 2) {
    if (debug) {
        checkNumArgs('project', arguments, 3, 2);
    }
    return isect.project(c, r, met);
}
/**
 * `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following: 
 * 
 * 
 * Returns the Euclidean distance between two xyzs, a and b.
 * Returns the Euclidean distance between an xyz a and an infinite ray b.
 * Returns the Euclidean distance between an xyz a and an infinite plane b.
 * @param a The first xyz.
 * @param b The second xyz, an infinite ray, or an infinite plane. 
 * @returns A number, the distance. 
 */
export function distance(debug: boolean, a: Txyz, b: Txyz|TRay|TPlane) {
    if (debug) {
        checkNumArgs('distance', arguments, 2);
    }
    return dist.distance(a, b);
}
/**
 * `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following: 
 * 
 * 
 * Returns the Manhattan distance between two xyzs, a and b.
 * Returns the Manhattan distance between an xyz a and an infinite ray b.
 * Returns the Manhattan distance between an xyz a and an infinite plane b.
 * \n
 * <a href="https://www.omnicalculator.com/math/manhattan-distance#what-is-the-manhattan-distance" target="_blank"> See here for an explanation on the Manhattan distance. </a>
 * 
 * @param a The first xyz.
 * @param b The second xyz, an infinite ray, or an infinite plane. 
 * @returns A number, the Manhattan distance between the points. 
 */
export function distanceM(debug: boolean, a: Txyz, b: Txyz|TRay|TPlane) {
    if (debug) {
        checkNumArgs('distanceM', arguments, 2);
    }
    return dist.distanceManhattan(a, b);
}
/**
 * `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following: 
 * 
 * 
 * Returns the Manhattan squared distance between two xyzs, a and b.
 * Returns the Manhattan squared distance between an xyz a and an infinite ray b.
 * Returns the Manhattan squared distance between an xyz a and an infinite plane b.
 * \n
 * <a href="https://www.omnicalculator.com/math/manhattan-distance#what-is-the-manhattan-distance" target="_blank"> See here for an explanation on the Manhattan distance. </a>
 * 
 * @param a The first point/position.
 * @param b The second point/position.
 * @returns A number. The Manhattan squared distance between the points. 
 */
export function distanceMS(debug: boolean, a: Txyz, b: Txyz|TRay|TPlane) {
    if (debug) {
        checkNumArgs('distanceMS', arguments, 2);
    }
    return dist.distanceManhattanSq(a, b);
}



export class geometryClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    intersect(r1, r2, met) {
        return intersect(this.__debug__, r1, r2, met);
    }

    project(c, r, met) {
        return project(this.__debug__, c, r, met);
    }

    distance(c1, c2) {
        return distance(this.__debug__, c1, c2);
    }

    distanceM(c1, c2) {
        return distanceM(this.__debug__, c1, c2);
    }

    distanceMS(c1, c2) {
        return distanceMS(this.__debug__, c1, c2);
    }
}

