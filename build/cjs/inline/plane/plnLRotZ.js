"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plnLRotZ = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
/**
 * Rotate the plane "p" around the local Z axis, by angle "a" (in radians).
 * \n
 * Overloaded with 3 cases.
 * \n
 * - pln can be one plane, and ang can be one number.
 * - pln can be a list of planes, and ang can be one number.
 * - pln can be a list of planes, and ang can be a list of numbers. These lists should have the **same size**.
 *
 * @param pln Plane to be rotated (around the Z axis).
 * @param ang Angle to rotate plane by, in radians.
 * @returns The new, rotated plane.
 */
function plnLRotZ(pln, ang) {
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (pln_dep === 3) {
        pln = pln;
        if (ang_dep === 0) {
            // many pln, one ang
            ang = ang;
            return pln.map(pln_one => plnLRotZ(pln_one, ang));
        }
        else if (ang_dep === 1 && pln.length === ang.length) {
            // many pln, many ang
            ang = ang;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnLRotZ(pln[i], ang[i]));
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
    const z_vec = (0, vectors_1.vecCross)(pln[1], pln[2]);
    const x_axis = (0, vectors_1.vecRot)(pln[1], z_vec, ang);
    const y_axis = (0, vectors_1.vecRot)(pln[2], z_vec, ang);
    return [pln[0].slice(), x_axis, y_axis];
}
exports.plnLRotZ = plnLRotZ;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuTFJvdFouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3BsYW5lL3BsbkxSb3RaLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBDQUE4QztBQUM5QyxnREFBc0Q7QUFFdEQ7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0YsU0FBZ0IsUUFBUSxDQUFDLEdBQW9CLEVBQUUsR0FBb0I7SUFDaEUsa0JBQWtCO0lBQ2xCLE1BQU0sT0FBTyxHQUFXLElBQUEsa0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxNQUFNLE9BQU8sR0FBVyxJQUFBLGtCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQ2YsR0FBRyxHQUFHLEdBQWUsQ0FBQztRQUN0QixJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDZixvQkFBb0I7WUFDcEIsR0FBRyxHQUFHLEdBQWEsQ0FBQztZQUNwQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFhLENBQUM7U0FDakU7YUFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBTSxHQUFnQixDQUFDLE1BQU0sRUFBRTtZQUNqRSxxQkFBcUI7WUFDckIsR0FBRyxHQUFHLEdBQWUsQ0FBQztZQUN0QixNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBRSxDQUFDO2FBQ3JEO1lBQ0QsT0FBTyxNQUFrQixDQUFDO1NBQzdCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDRGQUE0RixDQUFDLENBQUM7U0FDakg7S0FDSjtJQUNELGNBQWM7SUFDZCxHQUFHLEdBQUcsR0FBYSxDQUFDO0lBQ3BCLEdBQUcsR0FBRyxHQUFhLENBQUM7SUFDcEIsTUFBTSxLQUFLLEdBQVMsSUFBQSxrQkFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxNQUFNLE1BQU0sR0FBUyxJQUFBLGdCQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxNQUFNLE1BQU0sR0FBUyxJQUFBLGdCQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBN0JBLDRCQTZCQSJ9