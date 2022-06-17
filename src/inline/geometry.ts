import { checkNumArgs_noDebug } from '../_check_inline_args';
type Txyz = [number, number, number];
type TRay = [Txyz, Txyz];
type TPlane = [Txyz, Txyz, Txyz];
import * as chk from '../_check_types';

import { intersect } from './geometry/intersect';
import { project } from './geometry/project';
import { distance } from './geometry/distance';
import { distanceM } from './geometry/distanceM';
import { distanceMS } from './geometry/distanceMS';

export { intersect }
export { project }
export { distance }
export { distanceM }
export { distanceMS }
export class geometryClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    intersect(r1: TRay, r2: TRay|TPlane, met: number = 2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('intersect', arguments, 3, 2);
            chk.checkArgs('intersect', 'r1', r1, [chk.isRay]);
            chk.checkArgs('intersect', 'r2', r2, [chk.isRay]);
        }
        return intersect(r1, r2, met);
    }

    project(c: Txyz, r: TRay|TPlane, met: number = 2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('project', arguments, 3, 2);
            chk.checkArgs('project', 'c', c, [chk.isXYZ]);
            chk.checkArgs('project', 'r', r, [chk.isRay, chk.isPln]);
        }
        return project(c, r, met);
    }

    distance(c1: Txyz, c2: Txyz|TRay|TPlane) {
        if (this.__debug__) {
            checkNumArgs_noDebug('distance', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return distance(c1, c2);
    }

    distanceM(c1: Txyz, c2: Txyz|TRay|TPlane) {
        if (this.__debug__) {
            checkNumArgs_noDebug('distanceM', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return distanceM(c1, c2);
    }

    distanceMS(c1: Txyz, c2: Txyz|TRay|TPlane) {
        if (this.__debug__) {
            checkNumArgs_noDebug('distanceMS', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return distanceMS(c1, c2);
    }
}

