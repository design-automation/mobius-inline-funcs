import { TPlane, Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';
import { vecRot } from '../../libs/vectors';

/**
 * Rotate the plane "p" around the local X axis, by angle "a" (in radians).
 * \n
 * Can be overloaded. 
 * 
 * @param pln Plane to be rotated (around the X axis).
 * @param ang Angle to rotate plane by, in radians. 
 * @returns The new, rotated plane. 
 */
 export function plnLRotX(pln: TPlane|TPlane[], ang: number|number[]): TPlane|TPlane[] {
    // overloaded case
    const pln_dep: number = getArrDepth(pln);
    const ang_dep: number = getArrDepth(ang);
    if (pln_dep === 3) {
        pln = pln as TPlane[];
        if (ang_dep === 0) {
            // many pln, one ang
            ang = ang as number;
            return pln.map(pln_one => plnLRotX(pln_one, ang)) as TPlane[];
        } else if (ang_dep === 1 && pln.length === (ang as number[]).length) {
            // many pln, many ang
            ang = ang as number[];
            const planes: TPlane[] = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push( plnLRotX(pln[i], ang[i]) as TPlane );
            }
            return planes as TPlane[];
        } else {
            throw new Error('Error rotating a list planes with a list of angles: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln as TPlane;
    ang = ang as number;
    const y_axis: Txyz = vecRot(pln[2], pln[1], ang);
    return [pln[0].slice() as Txyz, pln[1].slice() as Txyz, y_axis];
}