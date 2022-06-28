import { getArrDepth } from '../../libs/arrs';
import { vecCross } from '../../libs/vectors';
/**
 * Create a ray from a plane "p", with the same origin and with a direction along the plane's z axis.
 * \n
 * Overloaded. pln can be one plane or a list of planes.
 *
 * @param pln The input plane to create a ray from.
 * @returns A ray.
 */
export function rayFromPln(pln) {
    // overloaded case
    const pln_dep = getArrDepth(pln);
    if (pln_dep === 3) {
        return pln.map(pln_one => rayFromPln(pln_one));
    }
    // normal case
    pln = pln;
    return [pln[0].slice(), vecCross(pln[1], pln[2])];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5RnJvbVBsbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheUZyb21QbG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5Qzs7Ozs7OztHQU9HO0FBQ0YsTUFBTSxVQUFVLFVBQVUsQ0FBQyxHQUFvQjtJQUM1QyxrQkFBa0I7SUFDbEIsTUFBTSxPQUFPLEdBQVcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUFFLE9BQVEsR0FBZ0IsQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQVksQ0FBQztLQUFFO0lBQ2hHLGNBQWM7SUFDZCxHQUFHLEdBQUcsR0FBYSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELENBQUMifQ==