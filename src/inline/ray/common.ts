
import { getArrDepth } from '../../libs/arrs';
import { TPlane, TRay, Txyz } from '../../libs/common';
import { multMatrix, xformMatrix } from '../../libs/matrix';


export function _rayXForm(r: TRay|TRay[], p: TPlane|TPlane[], to_global: boolean): TRay|TRay[] {
    // overloaded case
    const depth1: number = getArrDepth(r);
    const depth2: number = getArrDepth(p);
    if (depth1 === 2 && depth2 === 2) {
        // r is TRay and p is TPlane
        r = r as TRay;
        p = p as TPlane;
        const p2: TPlane = [[0, 0, 0], p[1], p[2]];
        const origin: Txyz = multMatrix(r[0], xformMatrix(p, to_global));
        const dir: Txyz = multMatrix(r[1], xformMatrix(p2, to_global));
        return [origin, dir] as TRay;
    } else if (depth1 === 3 && depth2 === 2) {
        // r is TRay[] and p is TPlane
        r = r as TRay[];
        p = p as TPlane;
        const p2: TPlane = [[0, 0, 0], p[1], p[2]];
        const m = xformMatrix(p as TPlane, to_global);
        const m2 = xformMatrix(p2 as TPlane, to_global);
        const result: TRay[] = [];
        for (const a_r of r) {
            const origin: Txyz = multMatrix(a_r[0], m);
            const dir: Txyz = multMatrix(a_r[1], m2);
            result.push([origin, dir]);
        }
        return result;
    } else if (depth1 === 2 && depth2 === 3) {
        // r is TRay and p is TPlane[]
        r = r as TRay;
        p = p as TPlane[];
        const result: TRay[] = [];
        for (const a_p of p) {
            const p2: TPlane = [[0, 0, 0], a_p[1], a_p[2]];
            const origin: Txyz = multMatrix(r[0], xformMatrix(a_p, to_global));
            const dir: Txyz = multMatrix(r[1], xformMatrix(p2, to_global));
            result.push([origin, dir]);
        }
        return result;
    } else if (depth1 === 3 && depth2 === 3) {
        // r is TRay[] p is TPlane[], they must be equal length
        r = r as TRay[];
        p = p as TPlane[];
        if (r.length !== p.length) {
            throw new Error(
                'Error transforming rays: The list of rays and list of planes must be of equal length.');
        }
        const result: TRay[] = [];
        for (let i = 0; i < r.length; i++) {
            const p2: TPlane = [[0, 0, 0], p[i][1], p[i][2]];
            const origin: Txyz = multMatrix(r[i][0], xformMatrix(p[i], to_global));
            const dir: Txyz = multMatrix(r[i][1], xformMatrix(p2, to_global));
            result.push([origin, dir]);
        }
        return result;
    }
    throw new Error(
        'Error transforming rays: Cannot process the input lists.');
}