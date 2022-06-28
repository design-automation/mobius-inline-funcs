"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plnLRotY = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
/**
 * Rotate the plane "p" around the local Y axis, by angle "a" (in radians).
 * \n
 * Overloaded with 3 cases.
 * \n
 * - pln can be one plane, and ang can be one number.
 * - pln can be a list of planes, and ang can be one number.
 * - pln can be a list of planes, and ang can be a list of numbers. These lists should have the **same size**.
 *
 * @param pln Plane to be rotated (around the Y axis).
 * @param ang Angle to rotate plane by, in radians.
 * @returns The new, rotated plane.
 *
 */
function plnLRotY(pln, ang) {
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (pln_dep === 3) {
        pln = pln;
        if (ang_dep === 0) {
            // many pln, one ang
            ang = ang;
            return pln.map(pln_one => plnLRotY(pln_one, ang));
        }
        else if (ang_dep === 1 && pln.length === ang.length) {
            // many pln, many ang
            ang = ang;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnLRotY(pln[i], ang[i]));
            }
            return planes;
        }
        else {
            throw new Error('Error rotating a list planes with a list of angles: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln;
    ang = ang;
    const x_axis = (0, vectors_1.vecRot)(pln[1], pln[2], ang);
    return [pln[0].slice(), x_axis, pln[2].slice()];
}
exports.plnLRotY = plnLRotY;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuTFJvdFkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3BsYW5lL3BsbkxSb3RZLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBDQUE4QztBQUM5QyxnREFBNEM7QUFFNUM7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLFNBQWdCLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQW9CO0lBQ2hFLGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBVyxJQUFBLGtCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsTUFBTSxPQUFPLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUNmLEdBQUcsR0FBRyxHQUFlLENBQUM7UUFDdEIsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ2Ysb0JBQW9CO1lBQ3BCLEdBQUcsR0FBRyxHQUFhLENBQUM7WUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBYSxDQUFDO1NBQ2pFO2FBQU0sSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQU0sR0FBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDakUscUJBQXFCO1lBQ3JCLEdBQUcsR0FBRyxHQUFlLENBQUM7WUFDdEIsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFXLENBQUUsQ0FBQzthQUNyRDtZQUNELE9BQU8sTUFBa0IsQ0FBQztTQUM3QjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyw0RkFBNEYsQ0FBQyxDQUFDO1NBQ2pIO0tBQ0o7SUFDRCxjQUFjO0lBQ2QsR0FBRyxHQUFHLEdBQWEsQ0FBQztJQUNwQixHQUFHLEdBQUcsR0FBYSxDQUFDO0lBQ3BCLE1BQU0sTUFBTSxHQUFTLElBQUEsZ0JBQU0sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUEzQkEsNEJBMkJBIn0=