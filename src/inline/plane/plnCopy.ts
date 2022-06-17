import { TPlane, Txyz } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';

/**
 * Make a copy of the plane "pln".
 * 
 * Overloaded. pln can be one plane or a list of planes. 
 * 
 * @param pln The plane to be copied. 
 * @returns The copied plane. 
 */
 export function plnCopy(pln: TPlane|TPlane[]): TPlane|TPlane[] {
    // overloaded case
    const pln_dep: number = getArrDepth(pln);
    if (pln_dep === 3) { return (pln as TPlane[]).map(pln_one => plnCopy(pln_one)) as TPlane[]; }
    // normal case
    pln = pln as TPlane;
    return [pln[0].slice() as Txyz, pln[1].slice() as Txyz, pln[2].slice() as Txyz];
}