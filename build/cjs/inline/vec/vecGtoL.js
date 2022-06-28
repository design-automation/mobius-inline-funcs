"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vecGtoL = void 0;
const common_1 = require("./common");
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
function vecGtoL(v, p) {
    return (0, common_1._vecXForm)(v, p, false);
}
exports.vecGtoL = vecGtoL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjR3RvTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvdmVjL3ZlY0d0b0wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW9DO0FBR3BDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDRixTQUFnQixPQUFPLENBQUMsQ0FBYyxFQUFFLENBQWtCO0lBQ3ZELE9BQU8sSUFBQSxrQkFBUyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUZBLDBCQUVBIn0=