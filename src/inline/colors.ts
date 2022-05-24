import { checkNumArgs } from '../_check_inline_args';
import { checkArgs, isStr, isStrL } from '../_check_types';

import { colFalse } from './colors/colFalse';
import { colScale } from './colors/colScale';
import { colFromStr } from './colors/colFromStr';

export { colFalse }
export { colScale }
export { colFromStr }
export class colorsClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    colFalse(vals, min, max) {
        if (this.__debug__) {
            checkNumArgs('colFalse', arguments, 3);
        }
        return colFalse(vals, min, max);
    }

    colScale(vals, min, max, scale) {
        if (this.__debug__) {
            checkNumArgs('colScale', arguments, 4);
        }
        return colScale(vals, min, max, scale);
    }

    colFromStr(col_str) {
        if (this.__debug__) {
            checkNumArgs('colFromStr', arguments, 1);
            checkArgs('colFromStr', 'col_str', col_str, [isStr, isStrL]);
        }
        return colFromStr(col_str);
    }
}

