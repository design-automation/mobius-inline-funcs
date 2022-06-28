"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayFromPln = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
/**
 * Create a ray from a plane "p", with the same origin and with a direction along the plane's z axis.
 * \n
 * Overloaded. pln can be one plane or a list of planes.
 *
 * @param pln The input plane to create a ray from.
 * @returns A ray.
 */
function rayFromPln(pln) {
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    if (pln_dep === 3) {
        return pln.map(pln_one => rayFromPln(pln_one));
    }
    // normal case
    pln = pln;
    return [pln[0].slice(), (0, vectors_1.vecCross)(pln[1], pln[2])];
}
exports.rayFromPln = rayFromPln;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5RnJvbVBsbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheUZyb21QbG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQThDO0FBRTlDLGdEQUE4QztBQUU5Qzs7Ozs7OztHQU9HO0FBQ0YsU0FBZ0IsVUFBVSxDQUFDLEdBQW9CO0lBQzVDLGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBVyxJQUFBLGtCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQUUsT0FBUSxHQUFnQixDQUFDLEdBQUcsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBWSxDQUFDO0tBQUU7SUFDaEcsY0FBYztJQUNkLEdBQUcsR0FBRyxHQUFhLENBQUM7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsRUFBRSxJQUFBLGtCQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQVBBLGdDQU9BIn0=