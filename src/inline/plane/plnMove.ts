import { TPlane, Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';
import { vecAdd } from '../../libs/vectors';

/**
 * Move the plane "p" relative to the global X, Y, and Z axes, by vector "v".
 * \n
 * Overloaded with 3 cases. 
 * \n 
 * - pln can be one plane, and vec can be one vector.
 * - pln can be a list of planes, and vec can be one vector.
 * - pln can be a list of planes, and vec can be a list of vectors. These lists should have the **same size**.
 * 
 * @param pln The plane to be moved.
 * @param vec The vector to move the plane by.
 * @returns A new plane that has been moved. 
 */
 export function plnMove(pln: TPlane|TPlane[], vec: Txyz|Txyz[]): TPlane|TPlane[] {
    // overloaded case
    const pln_dep: number = getArrDepth(pln);
    const vec_dep: number = getArrDepth(vec);
    if (pln_dep === 3) {
        pln = pln as TPlane[];
        if (vec_dep === 1) {
            vec = vec as Txyz;
            return pln.map(pln_one => plnMove(pln_one, vec)) as TPlane[];
        } else if (vec_dep === 2 && pln.length === vec.length) {
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
    return [vecAdd(pln[0], vec), pln[1].slice() as Txyz, pln[2].slice() as Txyz];
}