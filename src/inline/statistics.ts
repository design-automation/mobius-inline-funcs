import { checkNumArgs_noDebug } from '../_check_inline_args';
import * as chk from '../_check_types';

import { min } from './statistics/min';
import { max } from './statistics/max';
import { mad } from './statistics/mad';
import { mean } from './statistics/mean';
import { median } from './statistics/median';
import { mode } from './statistics/mode';
import { std } from './statistics/std';
import { vari } from './statistics/vari';

export { min }
export { max }
export { mad }
export { mean }
export { median }
export { mode }
export { std }
export { vari }
export class statisticsClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    min(list: any) {
        if (this.__debug__) {
            checkNumArgs_noDebug('min', arguments, 1);
        }
        return min(list);
    }

    max(list: any) {
        if (this.__debug__) {
            checkNumArgs_noDebug('max', arguments, 1);
        }
        return max(list);
    }

    mad(list: number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('mad', arguments, 1);
        }
        return mad(list);
    }

    mean(list: number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('mean', arguments, 1);
        }
        return mean(list);
    }

    median(list: number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('median', arguments, 1);
        }
        return median(list);
    }

    mode(list: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('mode', arguments, 1);
        }
        return mode(list);
    }

    std(list: number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('std', arguments, 1);
        }
        return std(list);
    }

    vari(list: number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vari', arguments, 1);
        }
        return vari(list);
    }
}

