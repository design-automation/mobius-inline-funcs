import * as isect from '../../libs/intersect';
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
export function project(c, r, met = 2) {
    return isect.project(c, r, met);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZ2VvbWV0cnkvcHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLHNCQUFzQixDQUFDO0FBSzlDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDRixNQUFNLFVBQVUsT0FBTyxDQUFDLENBQU8sRUFBRSxDQUFjLEVBQUUsTUFBYyxDQUFDO0lBQzdELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLENBQUMifQ==