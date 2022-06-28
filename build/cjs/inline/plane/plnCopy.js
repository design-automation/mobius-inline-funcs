"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plnCopy = void 0;
const arrs_1 = require("../../libs/arrs");
/**
 * Make a copy of the plane "pln".
 *
 * Overloaded. pln can be one plane or a list of planes.
 *
 * @param pln The plane to be copied.
 * @returns The copied plane.
 */
function plnCopy(pln) {
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    if (pln_dep === 3) {
        return pln.map(pln_one => plnCopy(pln_one));
    }
    // normal case
    pln = pln;
    return [pln[0].slice(), pln[1].slice(), pln[2].slice()];
}
exports.plnCopy = plnCopy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuQ29weS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcGxhbmUvcGxuQ29weS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwQ0FBOEM7QUFFOUM7Ozs7Ozs7R0FPRztBQUNGLFNBQWdCLE9BQU8sQ0FBQyxHQUFvQjtJQUN6QyxrQkFBa0I7SUFDbEIsTUFBTSxPQUFPLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUFFLE9BQVEsR0FBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQWEsQ0FBQztLQUFFO0lBQzdGLGNBQWM7SUFDZCxHQUFHLEdBQUcsR0FBYSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFQQSwwQkFPQSJ9