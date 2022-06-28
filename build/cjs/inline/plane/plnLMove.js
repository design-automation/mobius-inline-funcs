"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plnLMove = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
const plnMove_1 = require("./plnMove");
/**
 * Move the plane "p" relative to the local X, Y, and Z axes, by vector "v".
 * \n
 * Overloaded with 3 cases.
 * \n
 * - pln can be one plane, and vec can be one vector.
 * - pln can be a list of planes, and vec can be one vector.
 * - pln can be a list of planes, and vec can be a list of vectors. These lists should have the **same size**.
 *
 * @param pln The plane to be moved.
 * @param vec The vector to move the plane by.
 * @returns The new, moved plane.
 */
function plnLMove(pln, vec) {
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const vec_dep = (0, arrs_1.getArrDepth)(vec);
    if (pln_dep === 3) {
        pln = pln;
        if (vec_dep === 1) {
            // many pln, one vec
            vec = vec;
            return pln.map(pln_one => (0, plnMove_1.plnMove)(pln_one, vec));
        }
        else if (vec_dep === 2 && pln.length === vec.length) {
            // many pln, many vec
            vec = vec;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push((0, plnMove_1.plnMove)(pln[i], vec[i]));
            }
            return planes;
        }
        else {
            throw new Error('Error moving a list planes with a list of vectors: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln;
    vec = vec;
    const z_vec = (0, vectors_1.vecCross)(pln[1], pln[2]);
    const x_move_vec = (0, vectors_1.vecMult)(pln[1], vec[0]);
    const y_move_vec = (0, vectors_1.vecMult)(pln[2], vec[1]);
    const z_move_vec = (0, vectors_1.vecMult)(z_vec, vec[2]);
    const origin = (0, vectors_1.vecsAdd)([pln[0], x_move_vec, y_move_vec, z_move_vec], false);
    return [origin, pln[1].slice(), pln[2].slice()];
}
exports.plnLMove = plnLMove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuTE1vdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3BsYW5lL3BsbkxNb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBDQUE4QztBQUM5QyxnREFBZ0U7QUFDaEUsdUNBQW9DO0FBQ3BDOzs7Ozs7Ozs7Ozs7R0FZRztBQUNGLFNBQWdCLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQWdCO0lBQzVELGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBVyxJQUFBLGtCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsTUFBTSxPQUFPLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUNmLEdBQUcsR0FBRyxHQUFlLENBQUM7UUFDdEIsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ2Ysb0JBQW9CO1lBQ3BCLEdBQUcsR0FBRyxHQUFXLENBQUM7WUFDbEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBQSxpQkFBTyxFQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBYSxDQUFDO1NBQ2hFO2FBQU0sSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNuRCxxQkFBcUI7WUFDckIsR0FBRyxHQUFHLEdBQWEsQ0FBQztZQUNwQixNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUUsSUFBQSxpQkFBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQVcsQ0FBRSxDQUFDO2FBQ3BEO1lBQ0QsT0FBTyxNQUFrQixDQUFDO1NBQzdCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDJGQUEyRixDQUFDLENBQUM7U0FDaEg7S0FDSjtJQUNELGNBQWM7SUFDZCxHQUFHLEdBQUcsR0FBYSxDQUFDO0lBQ3BCLEdBQUcsR0FBRyxHQUFXLENBQUM7SUFDbEIsTUFBTSxLQUFLLEdBQVMsSUFBQSxrQkFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxNQUFNLFVBQVUsR0FBUyxJQUFBLGlCQUFPLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sVUFBVSxHQUFTLElBQUEsaUJBQU8sRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsTUFBTSxVQUFVLEdBQVMsSUFBQSxpQkFBTyxFQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxNQUFNLE1BQU0sR0FBUyxJQUFBLGlCQUFPLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBL0JBLDRCQStCQSJ9