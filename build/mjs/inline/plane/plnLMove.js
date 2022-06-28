import { getArrDepth } from '../../libs/arrs';
import { vecCross, vecMult, vecsAdd } from '../../libs/vectors';
import { plnMove } from './plnMove';
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
export function plnLMove(pln, vec) {
    // overloaded case
    const pln_dep = getArrDepth(pln);
    const vec_dep = getArrDepth(vec);
    if (pln_dep === 3) {
        pln = pln;
        if (vec_dep === 1) {
            // many pln, one vec
            vec = vec;
            return pln.map(pln_one => plnMove(pln_one, vec));
        }
        else if (vec_dep === 2 && pln.length === vec.length) {
            // many pln, many vec
            vec = vec;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnMove(pln[i], vec[i]));
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
    const z_vec = vecCross(pln[1], pln[2]);
    const x_move_vec = vecMult(pln[1], vec[0]);
    const y_move_vec = vecMult(pln[2], vec[1]);
    const z_move_vec = vecMult(z_vec, vec[2]);
    const origin = vecsAdd([pln[0], x_move_vec, y_move_vec, z_move_vec], false);
    return [origin, pln[1].slice(), pln[2].slice()];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuTE1vdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3BsYW5lL3BsbkxNb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDOzs7Ozs7Ozs7Ozs7R0FZRztBQUNGLE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFnQjtJQUM1RCxrQkFBa0I7SUFDbEIsTUFBTSxPQUFPLEdBQVcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sT0FBTyxHQUFXLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7UUFDZixHQUFHLEdBQUcsR0FBZSxDQUFDO1FBQ3RCLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtZQUNmLG9CQUFvQjtZQUNwQixHQUFHLEdBQUcsR0FBVyxDQUFDO1lBQ2xCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQWEsQ0FBQztTQUNoRTthQUFNLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDbkQscUJBQXFCO1lBQ3JCLEdBQUcsR0FBRyxHQUFhLENBQUM7WUFDcEIsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFXLENBQUUsQ0FBQzthQUNwRDtZQUNELE9BQU8sTUFBa0IsQ0FBQztTQUM3QjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQywyRkFBMkYsQ0FBQyxDQUFDO1NBQ2hIO0tBQ0o7SUFDRCxjQUFjO0lBQ2QsR0FBRyxHQUFHLEdBQWEsQ0FBQztJQUNwQixHQUFHLEdBQUcsR0FBVyxDQUFDO0lBQ2xCLE1BQU0sS0FBSyxHQUFTLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxVQUFVLEdBQVMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxNQUFNLFVBQVUsR0FBUyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sVUFBVSxHQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxNQUFNLEdBQVMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEYsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxDQUFDLENBQUM7QUFDcEUsQ0FBQyJ9