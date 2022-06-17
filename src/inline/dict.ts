/**
 * Functions for working with dictionaries. The functions do not modify input dictionaries.
 */

import { dictGet } from './dict/dictGet';
import { dictKeys } from './dict/dictKeys';
import { dictVals } from './dict/dictVals';
import { dictHasKey } from './dict/dictHasKey';
import { dictHasVal } from './dict/dictHasVal';
import { dictFind } from './dict/dictFind';
import { dictCopy } from './dict/dictCopy';
import { dictEq } from './dict/dictEq';

export { dictGet }
export { dictKeys }
export { dictVals }
export { dictHasKey }
export { dictHasVal }
export { dictFind }
export { dictCopy }
export { dictEq }

import * as chk from '../_check_types';
import { isDict, isStr, isStrL } from '../_check_types';
import { checkNumArgs_noDebug } from '../_check_inline_args';
export class dictClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    dictGet(dict: object, key: string | string[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictGet', arguments, 2);
            chk.checkArgs('dictGet', 'dict', dict, [isDict]);
            chk.checkArgs('dictGet', 'key', key, [isStr, isStrL]);
        }
        return dictGet(dict, key);
    }

    dictKeys(dict: object) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictKeys', arguments, 1);
            chk.checkArgs('dictKeys', 'dict', dict, [isDict]);
        }
        return dictKeys(dict);
    }

    dictVals(dict: object) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictVals', arguments, 1);
            chk.checkArgs('dictVals', 'dict', dict, [isDict]);
        }
        return dictVals(dict);
    }

    dictHasKey(dict: object, key: string | string[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictHasKey', arguments, 2);
            chk.checkArgs('dictHasKey', 'dict', dict, [isDict]);
            chk.checkArgs('dictHasKey', 'key', key, [isStr, isStrL]);
        }
        return dictHasKey(dict, key);
    }

    dictHasVal(dict: object, val: any) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictHasVal', arguments, 2);
            chk.checkArgs('dictHasVal', 'dict', dict, [isDict]);
        }
        return dictHasVal(dict, val);
    }

    dictFind(dict: object, val: string) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictFind', arguments, 2);
            chk.checkArgs('dictFind', 'dict', dict, [isDict]);
        }
        return dictFind(dict, val);
    }

    dictCopy(dict: object) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictCopy', arguments, 1);
            chk.checkArgs('dictCopy', 'dict', dict, [isDict]);
        }
        return dictCopy(dict);
    }

    dictEq(dict1: any[], dict2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictEq', arguments, 2);
            chk.checkArgs('dictEq', 'dict1', dict1, [isDict]);
            chk.checkArgs('dictEq', 'dict2', dict2, [isDict]);
        }
        return dictEq(dict1, dict2);
    }
}

