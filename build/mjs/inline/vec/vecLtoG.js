import { _vecXForm } from './common';
// ================================================================================================
/**
 * Transforms a vector from a local coordinate system defined by plane "p" to the global coordinate system.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v can be one vector, and p can be one plane.
 * - v can be a list of vectors, and p can be one plane.
 * - v can be one vector, and p can be a list of planes.
 * - v can be a list of vectors, and p can be a list of planes. These lists should have the **same size**.
 *
 * @param v The vector to be transformed.
 * @param p The source plane.
 * @returns A new vector or list of new vectors.
 */
export function vecLtoG(v, p) {
    return _vecXForm(v, p, true);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjTHRvRy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvdmVjL3ZlY0x0b0cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUdwQyxtR0FBbUc7QUFDbkc7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLE1BQU0sVUFBVSxPQUFPLENBQUMsQ0FBYyxFQUFFLENBQWtCO0lBQ3ZELE9BQU8sU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsQ0FBQyJ9