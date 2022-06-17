import { checkNumArgs } from '../_check_inline_args';
import { checkArgs, isStr, isStrL } from '../_check_types';
import * as chk from '../_check_types';

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

    colFalse(vals: number | number[], min: number, max: number) {
        if (this.__debug__) {
            checkNumArgs('colFalse', arguments, 3);
            chk.checkArgs('colFalse', 'vals', vals, [chk.isNum]);
            chk.checkArgs('colFalse', 'min', min, [chk.isNum]);
            chk.checkArgs('colFalse', 'max', max, [chk.isNum]);
        }
        return colFalse(vals, min, max);
    }

    colScale(vals: number | number[], min: number, max: number, scale: undefined) {
        if (this.__debug__) {
            checkNumArgs('colScale', arguments, 4);
            chk.checkArgs('colScale', 'vals', vals, [chk.isNum]);
            chk.checkArgs('colScale', 'min', min, [chk.isNum]);
            chk.checkArgs('colScale', 'max', max, [chk.isNum]);
            //TODO argcheck for scale: list or string representing brewer scale?
        }
        return colScale(vals, min, max, scale);
    }

    colFromStr(col_str: string|string[]) {
        if (this.__debug__) {
            checkNumArgs('colFromStr', arguments, 1);
            checkArgs('colFromStr', 'col_str', col_str, [isStr, isStrL]);
        }
        return colFromStr(col_str);
    }
}

