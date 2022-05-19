import * as isect from '../libs/intersect';
import * as dist from '../libs/distance';
import { checkNumArgs } from '../_check_inline_args';
type Txyz = [number, number, number];
type TRay = [Txyz, Txyz];
type TPlane = [Txyz, Txyz, Txyz];

/**
 * Returns the intersection xyz between two rays, where...
 * 
 * 
 * - 'intersect(r1, r2)', Returns the intersection xyz between two infinite rays.
 * - 'intersect(r1, r2, m)', 'Returns the intersection xyz between two rays, where:
      - if m=2, rays are infinite in both directions
      - if m=1 rays are infinite in one direction
      - if m=0, rays are not infinite.
    'intersect(r, p)', 'Returns the intersection xyz between an infinite ray r and an infinite plane p'],
    ['intersect(r, p, m)', 'Returns the intersection xyz between a ray r and an infinite plane p, where ' +
        'if m=2, the ray is infinite in both directions, ' +
        'if m=1 the ray is infinite in one direction, ' +
        'and if m=0, the ray is not infinite.'],
 * @param r1 The first ray.
 * @param r2 The second ray. 
 * @param met (Optional) Creates certain conditions, as seen above.
 * @returns The intersection, xyz (a list that represents a point/position) between two ways.
 */
export function intersect(debug: boolean, r1: TRay, r2: TRay|TPlane, met: number = 2) {
    if (debug) {
        checkNumArgs('intersect', arguments, 3, 2);
    }
    return isect.intersect(r1, r2, met);
}
/**
 * Returns the xyz from projecting an xyz c onto an infinite ray r...
    ['project(c, r)', 'Returns the xyz from projecting an xyz c onto an infinite ray r'],
    ['project(c, r, m)', 'Returns the xyz from projecting an xyz c onto an infinite ray r, where ' +
        'if m=2, the ray is infinite in both directions, ' +
        'if m=1 the ray is infinite in one direction, s' +
        'and if m=0, the ray is not infinite.'],
    ['project(c, p)', 'Returns the xyz from projecting an xyz c onto an infinite plane p']
 * @param c A point/position.
 * @param r A ray. 
 * @param met (Optional) Creates certain conditions, as seen above.
 * @returns A list of 3 numbers, representing the xyz point. 
 */
export function project(debug: boolean, c: Txyz, r: TRay|TPlane, met: number = 2) {
    if (debug) {
        checkNumArgs('project', arguments, 3, 2);
    }
    return isect.project(c, r, met);
}
/**
 * Returns the Euclidean distance between two xyzs, a and b'
 * Returns the Euclidean distance between an xyz a and an infinite ray b'
 * Returns the Euclidean distance between an xyz a and an infinite plane b'
 * @param a The first point/position.
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
 * Returns the Manhattan distance between two xyzs, c1 and c2
 * Returns the Manhattan distance between an xyz c and an infinite ray r'
 * Returns the Manhattan distance between an xyz c and an infinite plane p'
 * 
 * <a href="https://www.omnicalculator.com/math/manhattan-distance#what-is-the-manhattan-distance" target="_blank"> See here for an explanation on the Manhattan distance. </a>
 * 
 * @param c1 The first point/position.
 * @param c2 The second point/position.
 * @returns A number. The Manhattan distance between the points. 
 */
export function distanceM(debug: boolean, c1: Txyz, c2: Txyz|TRay|TPlane) {
    if (debug) {
        checkNumArgs('distanceM', arguments, 2);
    }
    return dist.distanceManhattan(c1, c2);
}
/**
 * Returns the Manhattan squared distance between two xyzs, c1 and c2
 * Returns the Manhattan squared distance between an xyz c and an infinite ray r'
 * Returns the Manhattan squared distance between an xyz c and an infinite plane p'
 * 
 * <a href="https://www.omnicalculator.com/math/manhattan-distance#what-is-the-manhattan-distance" target="_blank"> See here for an explanation on the Manhattan distance. </a>
 * 
 * @param c1 The first point/position.
 * @param c2 The second point/position.
 * @returns A number. The Manhattan squared distance between the points. 
 */
export function distanceMS(debug: boolean, c1: Txyz, c2: Txyz|TRay|TPlane) {
    if (debug) {
        checkNumArgs('distanceMS', arguments, 2);
    }
    return dist.distanceManhattanSq(c1, c2);
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

