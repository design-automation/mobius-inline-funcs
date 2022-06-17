import { rand } from './rand/rand';
import { randInt } from './rand/randInt';
import { randPick } from './rand/randPick';

export { rand }
export { randInt }
export { randPick }

import { checkNumArgs_noDebug } from '../_check_inline_args';
export class randClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    rand(min: number, max: number, seed: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rand', arguments, 3, 2);
        }
        return rand(min, max, seed);
    }

    randInt(min: number, max: number, seed: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('randInt', arguments, 3, 2);
        }
        return randInt(min, max, seed);
    }

    randPick(list: any[], num: number, seed: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('randPick', arguments, 3, 2);
        }
        return randPick(list, num, seed);
    }
}

