import { checkNumArgs_noDebug } from '../_check_inline_args';

import { sin } from './trigonometry/sin';
import { asin } from './trigonometry/asin';
import { sinh } from './trigonometry/sinh';
import { asinh } from './trigonometry/asinh';
import { cos } from './trigonometry/cos';
import { acos } from './trigonometry/acos';
import { cosh } from './trigonometry/cosh';
import { acosh } from './trigonometry/acosh';
import { tan } from './trigonometry/tan';
import { atan } from './trigonometry/atan';
import { atan2 } from './trigonometry/atan2';
import { tanh } from './trigonometry/tanh';
import { atanh } from './trigonometry/atanh';

export { sin }
export { asin }
export { sinh }
export { asinh }
export { cos }
export { acos }
export { cosh }
export { acosh }
export { tan }
export { atan }
export { atan2 }
export { tanh }
export { atanh }
export class trigonometryClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    sin(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sin', arguments, 1);
        }
        return sin(num);
    }

    asin(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('asin', arguments, 1);
        }
        return asin(num);
    }

    sinh(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sinh', arguments, 1);
        }
        return sinh(num);
    }

    asinh(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('asinh', arguments, 1);
        }
        return asinh(num);
    }

    cos(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('cos', arguments, 1);
        }
        return cos(num);
    }

    acos(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('acos', arguments, 1);
        }
        return acos(num);
    }

    cosh(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('cosh', arguments, 1);
        }
        return cosh(num);
    }

    acosh(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('acosh', arguments, 1);
        }
        return acosh(num);
    }

    tan(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('tan', arguments, 1);
        }
        return tan(num);
    }

    atan(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('atan', arguments, 1);
        }
        return atan(num);
    }

    atan2(xy: [number, number] | [number, number][]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('atan2', arguments, 1);
        }
        return atan2(xy);
    }

    tanh(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('tanh', arguments, 1);
        }
        return tanh(num);
    }

    atanh(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('atanh', arguments, 1);
        }
        return atanh(num);
    }
}

