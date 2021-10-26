import * as isect from '@design-automation/mobius-sim/dist/geom/intersect';
import * as dist from '@design-automation/mobius-sim/dist/geom/distance';
import { checkNumArgs } from '../_check_inline_args';
/**
 * Returns the intersection xyz between two rays, where...
    ['intersect(r1, r2)', 'Returns the intersection xyz between two infinite rays'],
    ['intersect(r1, r2, m)', 'Returns the intersection xyz between two rays, where ' +
        'if m=2, rays are infinite in both directions, ' +
        'if m=1 rays are infinite in one direction, ' +
        'and if m=0, rays are not infinite.'],
    ['intersect(r, p)', 'Returns the intersection xyz between an infinite ray r and an infinite plane p'],
    ['intersect(r, p, m)', 'Returns the intersection xyz between a ray r and an infinite plane p, where ' +
        'if m=2, the ray is infinite in both directions, ' +
        'if m=1 the ray is infinite in one direction, ' +
        'and if m=0, the ray is not infinite.'],
 * @param r1
 * @param r2
 * @param met
 */
export function intersect(debug, r1, r2, met = 2) {
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
        'if m=1 the ray is infinite in one direction, ' +
        'and if m=0, the ray is not infinite.'],
    ['project(c, p)', 'Returns the xyz from projecting an xyz c onto an infinite plane p']
 * @param c
 * @param r
 * @param met
 */
export function project(debug, c, r, met = 2) {
    if (debug) {
        checkNumArgs('project', arguments, 3, 2);
    }
    return isect.project(c, r, met);
}
/**
 * Returns the Euclidean distance between two xyzs, c1 and c2'
 * Returns the Euclidean distance between an xyz c and an infinite ray r'
 * Returns the Euclidean distance between an xyz c and an infinite plane p'
 * @param c1
 * @param c2
 */
export function distance(debug, c1, c2) {
    if (debug) {
        checkNumArgs('distance', arguments, 2);
    }
    return dist.distance(c1, c2);
}
/**
 * Returns the Manhattan distance between two xyzs, c1 and c2
 * Returns the Manhattan distance between an xyz c and an infinite ray r'
 * Returns the Manhattan distance between an xyz c and an infinite plane p'
 * @param c1
 * @param c2
 */
export function distanceM(debug, c1, c2) {
    if (debug) {
        checkNumArgs('distanceM', arguments, 2);
    }
    return dist.distanceManhattan(c1, c2);
}
/**
 * Returns the Manhattan squared distance between two xyzs, c1 and c2
 * Returns the Manhattan squared distance between an xyz c and an infinite ray r'
 * Returns the Manhattan squared distance between an xyz c and an infinite plane p'
 * @param c1
 * @param c2
 */
export function distanceMS(debug, c1, c2) {
    if (debug) {
        checkNumArgs('distanceMS', arguments, 2);
    }
    return dist.distanceManhattanSq(c1, c2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dlb21ldHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lubGluZS9fZ2VvbWV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxtREFBbUQsQ0FBQztBQUMzRSxPQUFPLEtBQUssSUFBSSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUtyRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQWMsRUFBRSxFQUFRLEVBQUUsRUFBZSxFQUFFLE1BQWMsQ0FBQztJQUNoRixJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUNELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYyxFQUFFLENBQU8sRUFBRSxDQUFjLEVBQUUsTUFBYyxDQUFDO0lBQzVFLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBQ0QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUNEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYyxFQUFFLEVBQVEsRUFBRSxFQUFvQjtJQUNuRSxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBQ0Q7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFjLEVBQUUsRUFBUSxFQUFFLEVBQW9CO0lBQ3BFLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFDRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUNEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBYyxFQUFFLEVBQVEsRUFBRSxFQUFvQjtJQUNyRSxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBQ0QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUMifQ==