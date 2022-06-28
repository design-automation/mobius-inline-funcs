import { _vecXForm } from './common';
/**
 * Transforms a vector from the global coordinate system to a local coordinate system defined by plane "p".
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v can be one vector, and p can be one plane.
 * - v can be a list of vectors, and p can be one plane.
 * - v can be one vector, and p can be a list of planes.
 * - v can be a list of vectors, and p can be a list of planes. These lists should have the **same size**.
 *
 * @param v The vector or list of vectors to be transformed.
 * @param p The target plane or list of planes.
 * @returns A new vector or list of new vectors.
 */
export function vecGtoL(v, p) {
    return _vecXForm(v, p, false);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjR3RvTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvdmVjL3ZlY0d0b0wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUdwQzs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0YsTUFBTSxVQUFVLE9BQU8sQ0FBQyxDQUFjLEVBQUUsQ0FBa0I7SUFDdkQsT0FBTyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsQyxDQUFDIn0=