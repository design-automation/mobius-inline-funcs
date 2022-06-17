import { checkNumArgs_noDebug } from '../_check_inline_args';
import { TPlane, TRay, Txyz } from '../libs/common';
import * as chk from '../_check_types';

import { rayMake } from './ray/rayMake';
import { rayFromTo } from './ray/rayFromTo';
import { rayCopy } from './ray/rayCopy';
import { rayMove } from './ray/rayMove';
import { rayRot } from './ray/rayRot';
import { rayLMove } from './ray/rayLMove';
import { rayFromPln } from './ray/rayFromPln';
import { rayLtoG } from './ray/rayLtoG';
import { rayGtoL } from './ray/rayGtoL';

export { rayMake }
export { rayFromTo }
export { rayCopy }
export { rayMove }
export { rayRot }
export { rayLMove }
export { rayFromPln }
export { rayLtoG }
export { rayGtoL }

export class rayClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    rayMake(origin: Txyz | Txyz[], dir: Txyz | Txyz[], len: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayMake', arguments, 3, 2);
        }
        return rayMake(origin, dir, len);
    }

    rayFromTo(xyz1: Txyz | Txyz[], xyz2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayFromTo', arguments, 2);
        }
        return rayFromTo(xyz1, xyz2);
    }

    rayCopy(ray: TRay | TRay[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayCopy', arguments, 1);
            chk.checkArgs('rayCopy', 'ray', ray, [chk.isRay, chk.isRayL]);
        }
        return rayCopy(ray);
    }

    rayMove(ray: TRay | TRay[], vec: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayMove', arguments, 2);
        }
        return rayMove(ray, vec);
    }

    rayRot(ray1: TRay | TRay[], ray2: TRay | TRay[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayRot', arguments, 3);
        }
        return rayRot(ray1, ray2, ang);
    }

    rayLMove(ray: TRay | TRay[], dist: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayLMove', arguments, 2);
        }
        return rayLMove(ray, dist);
    }

    rayFromPln(pln: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayFromPln', arguments, 1);
        }
        return rayFromPln(pln);
    }

    rayLtoG(r: TRay | TRay[], p: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayLtoG', arguments, 2);
        }
        return rayLtoG(r, p);
    }

    rayGtoL(r: TRay | TRay[], p: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayGtoL', arguments, 2);
        }
        return rayGtoL(r, p);
    }
}

