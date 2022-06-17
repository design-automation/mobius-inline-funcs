import { TPlane, Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';
import { vecRot } from '../../libs/vectors';

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
 export function plnLRotY(pln: TPlane|TPlane[], ang: number|number[]): TPlane|TPlane[] {
    // overloaded case
    const pln_dep: number = getArrDepth(pln);
    const ang_dep: number = getArrDepth(ang);
    if (pln_dep === 3) {
        pln = pln as TPlane[];
        if (ang_dep === 0) {
            // many pln, one ang
            ang = ang as number;
            return pln.map(pln_one => plnLRotY(pln_one, ang)) as TPlane[];
        } else if (ang_dep === 1 && pln.length === (ang as number[]).length) {
            // many pln, many ang
            ang = ang as number[];
            const planes: TPlane[] = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push( plnLRotY(pln[i], ang[i]) as TPlane );
            }
            return planes as TPlane[];
        } else {
            throw new Error('Error rotating a list planes with a list of angles: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln as TPlane;
    ang = ang as number;
    const x_axis: Txyz = vecRot(pln[1], pln[2], ang);
    return [pln[0].slice() as Txyz, x_axis, pln[2].slice() as Txyz];
}