import { Txyz, TPlane } from '../../libs/common';
import { getArrDepth } from '../../libs/arrs';
import { xformMatrix, multMatrix } from '../../libs/matrix';

// ================================================================================================
export function _vecXForm(v: Txyz|Txyz[], p: TPlane|TPlane[], to_global: boolean): Txyz|Txyz[] {
    // overloaded case
    const depth1: number = getArrDepth(v);
    const depth2: number = getArrDepth(p);
    if (depth1 === 1 && depth2 === 2) {
        // v is Txyz and p is TPlane
        return multMatrix(v as Txyz, xformMatrix(p as TPlane, to_global));
    } else if (depth1 === 2 && depth2 === 2) {
         // v is Txyz[] and p is TPlane
        const matrix = xformMatrix(p as TPlane, to_global);
        return (v as Txyz[]).map( a_v => multMatrix(a_v, matrix));
    } else if (depth1 === 1 && depth2 === 3) {
        // v is Txyz and p is TPlane[]
        const result: Txyz[] = [];
        for (const a_p of p) {
            const matrix = xformMatrix(a_p as TPlane, to_global);
            result.push(multMatrix(v as Txyz, matrix));
        }
        return result;
    } else if (depth1 === 2 && depth2 === 3) {
        // v is Txyz[] p is TPlane[], they must be equal length
        if (v.length === p.length) {
            const result: Txyz[] = [];
            for (let i = 0; i < v.length; i++) {
                const matrix = xformMatrix(p[i] as TPlane, to_global);
                result.push(multMatrix(v[i] as Txyz, matrix));
            }
            return result;
        } else {
            throw new Error(
                'Error transforming vectors: The list of vectors and list of planes must be of equal length.');
        }
    }
    throw new Error(
        'Error transforming vectors: Cannot process the input lists.');
}