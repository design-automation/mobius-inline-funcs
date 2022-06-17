/**
 * Plane functions that modify planes. These functions do not modify the input plane.
 *
 * Overloaded:
 * - origin[], x_vec,   xy_vec
 * - origin,   x_vec[], xy_vec[]
 * - origin[], x_vec[], xy_vec[]
 */
import { checkNumArgs_noDebug } from '../_check_inline_args';
import { TPlane, Txyz, TRay } from '../libs/common';
import * as chk from '../_check_types';

import { plnMake } from './plane/plnMake';
import { plnCopy } from './plane/plnCopy';
import { plnMove } from './plane/plnMove';
import { plnRot } from './plane/plnRot';
import { plnLMove } from './plane/plnLMove';
import { plnLRotX } from './plane/plnLRotX';
import { plnLRotY } from './plane/plnLRotY';
import { plnLRotZ } from './plane/plnLRotZ';
import { plnFromRay } from './plane/plnFromRay';

export { plnMake }
export { plnCopy }
export { plnMove }
export { plnRot }
export { plnLMove }
export { plnLRotX }
export { plnLRotY }
export { plnLRotZ }
export { plnFromRay }
export class planeClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    plnMake(origin: Txyz | Txyz[], x_vec: Txyz | Txyz[], xy_vec: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnMake', arguments, 3);
            chk.checkArgs('plnMake', 'origin', origin, [chk.isXYZ, chk.isXYZL]);
            chk.checkArgs('plnMake', 'x_vec', x_vec, [chk.isXYZ, chk.isXYZL]);
            chk.checkArgs('plnMake', 'xy_vec', xy_vec, [chk.isXYZ, chk.isXYZL]);
        }
        return plnMake(origin, x_vec, xy_vec);
    }

    plnCopy(pln: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnCopy', arguments, 1);
            chk.checkArgs('plnCopy', 'pln', pln, [chk.isPln, chk.isPlnL]);
        }
        return plnCopy(pln);
    }

    plnMove(pln: TPlane | TPlane[], vec: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnMove', arguments, 2);
            chk.checkArgs('plnMove', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnMove', 'vec', vec, [chk.isXYZ, chk.isXYZL]);
        }
        return plnMove(pln, vec);
    }

    plnRot(pln: TPlane | TPlane[], ray: TRay | TRay[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnRot', arguments, 3);
        }
        return plnRot(pln, ray, ang);
    }

    plnLMove(pln: TPlane | TPlane[], vec: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLMake', arguments, 2);
        }
        return plnLMove(pln, vec);
    }

    plnLRotX(pln: TPlane | TPlane[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLRotX', arguments, 2);
        }
        return plnLRotX(pln, ang);
    }

    plnLRotY(pln: TPlane | TPlane[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLRotY', arguments, 2);
        }
        return plnLRotY(pln, ang);
    }

    plnLRotZ(pln: TPlane | TPlane[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLRotZ', arguments, 2);
        }
        return plnLRotZ(pln, ang);
    }

    plnFromRay(ray: TRay | TRay[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnFromRay', arguments, 1);
        }
        return plnFromRay(ray);
    }
}

