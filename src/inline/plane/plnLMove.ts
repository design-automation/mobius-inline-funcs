import { TPlane, Txyz } from '../../libs/common';
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
 export function plnLMove(pln: TPlane|TPlane[], vec: Txyz|Txyz[]): TPlane|TPlane[] {
    // overloaded case
    const pln_dep: number = getArrDepth(pln);
    const vec_dep: number = getArrDepth(vec);
    if (pln_dep === 3) {
        pln = pln as TPlane[];
        if (vec_dep === 1) {
            // many pln, one vec
            vec = vec as Txyz;
            return pln.map(pln_one => plnMove(pln_one, vec)) as TPlane[];
        } else if (vec_dep === 2 && pln.length === vec.length) {
            // many pln, many vec
            vec = vec as Txyz[];
            const planes: TPlane[] = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push( plnMove(pln[i], vec[i]) as TPlane );
            }
            return planes as TPlane[];
        } else {
            throw new Error('Error moving a list planes with a list of vectors: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln as TPlane;
    vec = vec as Txyz;
    const z_vec: Txyz = vecCross(pln[1], pln[2]);
    const x_move_vec: Txyz = vecMult(pln[1], vec[0]);
    const y_move_vec: Txyz = vecMult(pln[2], vec[1]);
    const z_move_vec: Txyz = vecMult(z_vec, vec[2]);
    const origin: Txyz = vecsAdd([pln[0], x_move_vec, y_move_vec, z_move_vec], false);
    return [origin, pln[1].slice() as Txyz, pln[2].slice() as Txyz];
}