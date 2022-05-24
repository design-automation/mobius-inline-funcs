import { checkNumArgs_noDebug } from '../_check_inline_args';

import { abs } from './arithmetic/abs';
import { square } from './arithmetic/square';
import { cube } from './arithmetic/cube';
import { pow } from './arithmetic/pow';
import { sqrt } from './arithmetic/sqrt';
import { exp } from './arithmetic/exp';
import { log } from './arithmetic/log'
import { log10 } from './arithmetic/log10';
import { round } from './arithmetic/round';
import { sigFig } from './arithmetic/sigFig';
import { ceil } from './arithmetic/ceil';
import { floor } from './arithmetic/floor';
import { sum } from './arithmetic/sum';
import { prod } from './arithmetic/prod';
import { hypot } from './arithmetic/hypot';
import { norm } from './arithmetic/norm';
import { isApprox } from './arithmetic/isApprox';
import { isIn } from './arithmetic/isIn';
import { isWithin } from './arithmetic/isWithin';
import { remap } from './arithmetic/remap';

export { abs }
export { square }
export { cube } 
export { pow }
export { sqrt }
export { exp }
export { log }
export { log10 }
export { round }
export { sigFig }
export { ceil }
export { floor }
export { sum }
export { prod }
export { hypot }
export { norm }
export { isApprox }
export { isIn }
export { isWithin }
export { remap }
export class arithmeticClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    abs(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('abs', arguments, 1);
        }
        return abs(num);
    }

    square(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('square', arguments, 1);
        }
        return square(list);
    }

    cube(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('cube', arguments, 1);
        }
        return cube(list);
    }
    
    pow(base, xp) {
        if (this.__debug__) {
            checkNumArgs_noDebug('pow', arguments, 2);
        }
        return pow(base, xp);
    }

    sqrt(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sqrt', arguments, 1);
        }
        return sqrt(num);
    }

    exp(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('exp', arguments, 1);
        }
        return exp(num);
    }

    log(base) {
        if (this.__debug__) {
            checkNumArgs_noDebug('log', arguments, 1);
        }
        return log(base);
    }

    log10(base) {
        if (this.__debug__) {
            checkNumArgs_noDebug('log10', arguments, 1);
        }
        return log10(base);
    }

    round(num, dec_pla = 0) {
        if (this.__debug__) {
            checkNumArgs_noDebug('round', arguments, 1);
        }
        return round(num, dec_pla = 0);
    }

    sigFig(num, sig_figs) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sigFig', arguments, 2);
        }
        return sigFig(num, sig_figs);
    }

    ceil(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('ceil', arguments, 1);
        }
        return ceil(num);
    }

    floor(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('floor', arguments, 1);
        }
        return floor(num);
    }

    sum(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sum', arguments, 1);
        }
        return sum(list);
    }

    prod(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('prod', arguments, 1);
        }
        return prod(list);
    }

    hypot(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('hypot', arguments, 1);
        }
        return hypot(list);
    }

    norm(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('norm', arguments, 1, 2);
        }
        return norm(list);
    }

    isApprox(n1, n2, t) {
        if (this.__debug__) {
            checkNumArgs_noDebug('isApprox', arguments, 3);
        }
        return isApprox(n1, n2, t);
    }

    isIn(v1, v2, v3) {
        if (this.__debug__) {
            checkNumArgs_noDebug('isIn', arguments, 3);
        }
        return isIn(v1, v2, v3);
    }

    isWithin(v1, v2, v3) {
        if (this.__debug__) {
            checkNumArgs_noDebug('isWithin', arguments, 3);
        }
        return isWithin(v1, v2, v3);
    }
    remap(num, d1, d2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('remap', arguments, 3);
        }
        return remap(num, d1, d2);
    }
}

