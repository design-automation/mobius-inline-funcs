import * as dist from '../../libs/distance';
/**
 * `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following:
 * \n
 * - Returns the Manhattan distance between two xyzs, a and b.
 * - Returns the Manhattan distance between an xyz a and an infinite ray b.
 * - Returns the Manhattan distance between an xyz a and an infinite plane b.
 * \n
 * <a href="https://www.omnicalculator.com/math/manhattan-distance#what-is-the-manhattan-distance" target="_blank"> See here for an explanation on the Manhattan distance. </a>
 *
 * @param a The first xyz.
 * @param b The second xyz, an infinite ray, or an infinite plane.
 * @returns A number, the Manhattan distance between the points.
 */
export function distanceM(a, b) {
    return dist.distanceManhattan(a, b);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2VNLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9nZW9tZXRyeS9kaXN0YW5jZU0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLElBQUksTUFBTSxxQkFBcUIsQ0FBQztBQUs1Qzs7Ozs7Ozs7Ozs7O0dBWUc7QUFDRixNQUFNLFVBQVUsU0FBUyxDQUFDLENBQU8sRUFBRSxDQUFtQjtJQUNuRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQyJ9