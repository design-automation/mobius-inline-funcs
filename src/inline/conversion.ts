import { checkNumArgs_noDebug } from '../_check_inline_args';

import { boolean } from './conversion/boolean';
import { number } from './conversion/number';
import { string } from './conversion/string';
import { radToDeg } from './conversion/radToDeg';
import { degToRad } from './conversion/degToRad';
import { numToStr } from './conversion/numToStr';
import { numToCurr } from './conversion/numToCurr';

export { boolean }
export { number }
export { string }
export { radToDeg }
export { degToRad } 
export { numToStr }
export { numToCurr }

export class conversionClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    boolean(val: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('boolean', arguments, 1);
        }
        return boolean(val);
    }

    number(val: any) {
        if (this.__debug__) {
            checkNumArgs_noDebug('number', arguments, 1);
        }
        return number(val);
    }

    string(val: any) {
        if (this.__debug__) {
            checkNumArgs_noDebug('string', arguments, 1);
        }
        return string(val);
    }

    radToDeg(rad: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('radToDeg', arguments, 1);
        }
        return radToDeg(rad);
    }

    degToRad(deg: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('degToRad', arguments, 1);
        }
        return degToRad(deg);
    }

    numToStr(num: number | number[], frac_digits?: number, locale?: string) {
        if (this.__debug__) {
            checkNumArgs_noDebug('numToStr', arguments, 3, 1);
        }
        return numToStr(num, frac_digits, locale);
    }

    numToCurr(num: number | number[], currency: string, locale?: string) {
        if (this.__debug__) {
            checkNumArgs_noDebug('numToCurr', arguments, 3, 2);
        }
        return numToCurr(num, currency, locale);
    }
}

