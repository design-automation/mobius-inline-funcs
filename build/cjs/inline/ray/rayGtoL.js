"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayGtoL = void 0;
const common_1 = require("./common");
/**
 * Transforms a ray from the global coordinate system to a local coordinate system defined by plane "p".
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
 * @param p The target plane.
 * @returns A new ray.
 */
function rayGtoL(r, p) {
    return (0, common_1._rayXForm)(r, p, false);
}
exports.rayGtoL = rayGtoL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5R3RvTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheUd0b0wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscUNBQXFDO0FBRXJDOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0YsU0FBZ0IsT0FBTyxDQUFDLENBQWMsRUFBRSxDQUFrQjtJQUN2RCxPQUFPLElBQUEsa0JBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFGQSwwQkFFQSJ9