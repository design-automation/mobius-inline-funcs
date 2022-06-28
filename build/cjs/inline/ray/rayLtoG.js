"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayLtoG = void 0;
const common_1 = require("./common");
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
function rayLtoG(r, p) {
    return (0, common_1._rayXForm)(r, p, true);
}
exports.rayLtoG = rayLtoG;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5THRvRy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheUx0b0cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscUNBQXFDO0FBRXJDOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0YsU0FBZ0IsT0FBTyxDQUFDLENBQWMsRUFBRSxDQUFrQjtJQUN2RCxPQUFPLElBQUEsa0JBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGQSwwQkFFQSJ9