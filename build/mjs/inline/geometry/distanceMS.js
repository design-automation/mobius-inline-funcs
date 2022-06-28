import * as dist from '../../libs/distance';
/**
 * `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following:
 * \n
 * - Returns the Manhattan squared distance between two xyzs, a and b.
 * - Returns the Manhattan squared distance between an xyz a and an infinite ray b.
 * - Returns the Manhattan squared distance between an xyz a and an infinite plane b.
 * \n
 * <a href="https://www.omnicalculator.com/math/manhattan-distance#what-is-the-manhattan-distance" target="_blank"> See here for an explanation on the Manhattan distance. </a>
 *
 * @param a The first point/position.
 * @param b The second point/position.
 * @returns A number. The Manhattan squared distance between the points.
 */
export function distanceMS(a, b) {
    return dist.distanceManhattanSq(a, b);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2VNUy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZ2VvbWV0cnkvZGlzdGFuY2VNUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssSUFBSSxNQUFNLHFCQUFxQixDQUFDO0FBSzVDOzs7Ozs7Ozs7Ozs7R0FZRztBQUNGLE1BQU0sVUFBVSxVQUFVLENBQUMsQ0FBTyxFQUFFLENBQW1CO0lBQ3BELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxQyxDQUFDIn0=