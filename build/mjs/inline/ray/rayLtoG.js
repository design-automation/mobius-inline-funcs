import { _rayXForm } from './common';
/**
 * Transforms a ray from a local coordinate system defined by plane "p" to the global coordinate system.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - r can be one ray, and p can be one plane.
 * - r can be a list of rays, and p can be one plane.
 * - r can be one ray, and p can be a list of planes.
 * - r can be a list of rays, and p can be a list of planes. These lists should have the **same size**.
 *
 *
 * @param r The ray to be transformed.
 * @param p The source plane.
 * @returns A new ray.
 */
export function rayLtoG(r, p) {
    return _rayXForm(r, p, true);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5THRvRy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheUx0b0cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVyQzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNGLE1BQU0sVUFBVSxPQUFPLENBQUMsQ0FBYyxFQUFFLENBQWtCO0lBQ3ZELE9BQU8sU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsQ0FBQyJ9