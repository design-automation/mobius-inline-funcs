import { checkNumArgs_noDebug } from '../_check_inline_args';
import { checkArgs, isXYZ, isXYZL } from '../_check_types';
import { Txyz, TPlane } from '../libs/common'

import { vecSum } from './vec/vecSum';
import { vecAvg } from './vec/vecAvg';
import { vecAvgDir } from './vec/vecAvgDir';
import { vecAdd } from './vec/vecAdd';
import { vecSub } from './vec/vecSub';
import { vecDiv } from './vec/vecDiv';
import { vecMult } from './vec/vecMult';
import { vecSetLen } from './vec/vecSetLen';
import { vecDot } from './vec/vecDot';
import { vecCross } from './vec/vecCross';
import { vecAng } from './vec/vecAng';
import { vecFromTo } from './vec/vecFromTo';
import { vecEqual } from './vec/vecEqual';
import { vecAng2 } from './vec/vecAng2';
import { vecRot } from './vec/vecRot';
import { vecLen } from './vec/vecLen';
import { vecNorm } from './vec/vecNorm';
import { vecRev } from './vec/vecRev';
import { vecLtoG } from './vec/vecLtoG';
import { vecGtoL } from './vec/vecGtoL';

export { vecSum }
export { vecAvg }
export { vecAvgDir }
export { vecAdd }
export { vecSub }
export { vecDiv }
export { vecMult }
export { vecSetLen }
export { vecDot }
export { vecCross }
export { vecAng }
export { vecFromTo }
export { vecEqual }
export { vecAng2 }
export { vecRot }
export { vecLen }
export { vecNorm }
export { vecRev }
export { vecLtoG }
export { vecGtoL }


// Overloaded vector functions
// ================================================================================================

export class vecClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    vecSum(...v: Txyz[]) {
        if (this.__debug__) {
            checkArgs('vecSum', 'v', v, [isXYZL]);
        }
        return vecSum(...v);
    }

    vecAvg(...v: Txyz[]) {
        if (this.__debug__) {
            checkArgs('vecAvg', 'v', v, [isXYZL]);
        }
        return vecAvg(...v);
    }

    vecAvgDir(...v: Txyz[]) {
        if (this.__debug__) {
            checkArgs('vecAvgDir', 'v', v, [isXYZL]);
        }
        return vecAvgDir(...v);
    }

    vecAdd(v1: Txyz | Txyz[], v2: Txyz | Txyz[], norm: boolean) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecAdd', arguments, 3, 2);
        }
        return vecAdd(v1, v2, norm);
    }

    vecSub(v1: Txyz | Txyz[], v2: Txyz | Txyz[], norm: boolean) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecSub', arguments, 3, 2);
        }
        return vecSub(v1, v2, norm);
    }

    vecDiv(v: Txyz | Txyz[], num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecDiv', arguments, 2);
        }
        return vecDiv(v, num);
    }

    vecMult(v: Txyz | Txyz[], num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecMult', arguments, 2);
        }
        return vecMult(v, num);
    }

    vecSetLen(v: Txyz | Txyz[], num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecSetLen', arguments, 2);
        }
        return vecSetLen(v, num);
    }

    vecDot(v1: Txyz | Txyz[], v2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecDot', arguments, 2);
        }
        return vecDot(v1, v2);
    }

    vecCross(v1: Txyz | Txyz[], v2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecCross', arguments, 2);
        }
        return vecCross(v1, v2);
    }

    vecAng(v1: Txyz | Txyz[], v2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecAng', arguments, 2);
        }
        return vecAng(v1, v2);
    }

    vecFromTo(xyz1: Txyz | Txyz[], xyz2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecFromTo', arguments, 2);
        }
        return vecFromTo(xyz1, xyz2);
    }

    vecEqual(v1: Txyz | Txyz[], v2: Txyz | Txyz[], tol: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecEqual', arguments, 3);
        }
        return vecEqual(v1, v2, tol);
    }

    vecAng2(v1: Txyz | Txyz[], v2: Txyz | Txyz[], v3: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecAng2', arguments, 3);
        }
        return vecAng2(v1, v2, v3);
    }

    vecRot(v1: Txyz | Txyz[], v2: Txyz | Txyz[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecRot', arguments, 3);
        }
        return vecRot(v1, v2, ang);
    }

    vecLen(v: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecLen', arguments, 1);
            checkArgs('vecLen', 'v', v, [isXYZ, isXYZL]);
        }
        return vecLen(v);
    }

    vecNorm(v: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecNorm', arguments, 1);
        }
        return vecNorm(v);
    }

    vecRev(v: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecRev', arguments, 1);
        }
        return vecRev(v);
    }

    vecLtoG(v: Txyz | Txyz[], p: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecLtoG', arguments, 2);
        }
        return vecLtoG(v, p);
    }

    vecGtoL(v: Txyz | Txyz[], p: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecGtoL', arguments, 2);
        }
        return vecGtoL(v, p);
    }
}

