"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vecLtoG = void 0;
const common_1 = require("./common");
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
function vecLtoG(v, p) {
    return (0, common_1._vecXForm)(v, p, true);
}
exports.vecLtoG = vecLtoG;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjTHRvRy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvdmVjL3ZlY0x0b0cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW9DO0FBR3BDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0YsU0FBZ0IsT0FBTyxDQUFDLENBQWMsRUFBRSxDQUFrQjtJQUN2RCxPQUFPLElBQUEsa0JBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGQSwwQkFFQSJ9