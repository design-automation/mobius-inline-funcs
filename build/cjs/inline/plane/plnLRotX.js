"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plnLRotX = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
/**
 * Rotate the plane "p" around the local X axis, by angle "a" (in radians).
 * \n
 * Can be overloaded.
 *
 * @param pln Plane to be rotated (around the X axis).
 * @param ang Angle to rotate plane by, in radians.
 * @returns The new, rotated plane.
 */
function plnLRotX(pln, ang) {
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (pln_dep === 3) {
        pln = pln;
        if (ang_dep === 0) {
            // many pln, one ang
            ang = ang;
            return pln.map(pln_one => plnLRotX(pln_one, ang));
        }
        else if (ang_dep === 1 && pln.length === ang.length) {
            // many pln, many ang
            ang = ang;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnLRotX(pln[i], ang[i]));
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
    const y_axis = (0, vectors_1.vecRot)(pln[2], pln[1], ang);
    return [pln[0].slice(), pln[1].slice(), y_axis];
}
exports.plnLRotX = plnLRotX;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuTFJvdFguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3BsYW5lL3BsbkxSb3RYLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBDQUE4QztBQUM5QyxnREFBNEM7QUFFNUM7Ozs7Ozs7O0dBUUc7QUFDRixTQUFnQixRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFvQjtJQUNoRSxrQkFBa0I7SUFDbEIsTUFBTSxPQUFPLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sT0FBTyxHQUFXLElBQUEsa0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7UUFDZixHQUFHLEdBQUcsR0FBZSxDQUFDO1FBQ3RCLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtZQUNmLG9CQUFvQjtZQUNwQixHQUFHLEdBQUcsR0FBYSxDQUFDO1lBQ3BCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQWEsQ0FBQztTQUNqRTthQUFNLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFNLEdBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ2pFLHFCQUFxQjtZQUNyQixHQUFHLEdBQUcsR0FBZSxDQUFDO1lBQ3RCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztZQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBVyxDQUFFLENBQUM7YUFDckQ7WUFDRCxPQUFPLE1BQWtCLENBQUM7U0FDN0I7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsNEZBQTRGLENBQUMsQ0FBQztTQUNqSDtLQUNKO0lBQ0QsY0FBYztJQUNkLEdBQUcsR0FBRyxHQUFhLENBQUM7SUFDcEIsR0FBRyxHQUFHLEdBQWEsQ0FBQztJQUNwQixNQUFNLE1BQU0sR0FBUyxJQUFBLGdCQUFNLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBM0JBLDRCQTJCQSJ9