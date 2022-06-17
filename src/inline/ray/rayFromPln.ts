import { getArrDepth } from '../../libs/arrs';
import { TRay, Txyz, TPlane } from '../../libs/common';
import { vecCross } from '../../libs/vectors';

/**
 * Create a ray from a plane "p", with the same origin and with a direction along the plane's z axis.
 * \n
 * Overloaded. pln can be one plane or a list of planes.
 * 
 * @param pln The input plane to create a ray from. 
 * @returns A ray. 
 */
 export function rayFromPln(pln: TPlane|TPlane[]): TRay|TRay[] {
    // overloaded case
    const pln_dep: number = getArrDepth(pln);
    if (pln_dep === 3) { return (pln as TPlane[]).map( pln_one => rayFromPln(pln_one) ) as TRay[]; }
    // normal case
    pln = pln as TPlane;
    return [pln[0].slice() as Txyz, vecCross(pln[1], pln[2])];
}