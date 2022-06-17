/**
 * Functions to work with strings.
 */
import { checkNumArgs_noDebug } from '../_check_inline_args';

import { strRepl } from './strs/strRepl';
import { strUpp } from './strs/strUpp';
import { strLow } from './strs/strLow';
import { strTrim } from './strs/strTrim';
import { strTrimR } from './strs/strTrimR';
import { strTrimL } from './strs/strTrimL';
import { strPadL } from './strs/strPadL';
import { strPadR } from './strs/strPadR';
import { strSub } from './strs/strSub';
import { strStarts } from './strs/strStarts';
import { strEnds } from './strs/strEnds';
import { strToJSON } from './strs/strToJSON';

export { strRepl }
export { strUpp }
export { strLow }
export { strTrim }
export { strTrimR }
export { strTrimL }
export { strPadL }
export { strPadR }
export { strSub }
export { strStarts }
export { strEnds }
export { strToJSON}



// ['strRepl(s,search,new)', 'Replace all instances of specified search string with a new string.'],
// ['strUpp(s), 'Converts all the alphabetic characters in a string to uppercase.']
// ['strLow(s), 'Converts all the alphabetic characters in a string to lowercase.']
// ['strTrim(s), 'Removes the leading and trailing white space and line terminator characters from a string.
// ['strTrimL(s), 'Removes whitespace from the left end of a string.
// ['strTrimR(s), 'Removes whitespace from the right end of a string.
// ['strPadL(s1, m), 'Pads the start of the s1 string with white spaces so that the resulting string reaches a given length.
// ['strPadL(s1, m, s2), 'Pads the start of the s1 string with the s2 string so that the resulting string reaches a given length.
// ['strPadR(s1, m), 'Pads the end of the s1 string with white spaces so that the resulting string reaches a given length.
// ['strPadR(s1, m, s2), 'Pads the end of the s1 string with the s2 string so that the resulting string reaches a given length.
// ['strSub(s, from), 'Gets a substring beginning at the specified location.
// ['strSub(s, from, length), 'Gets a substring beginning at the specified location and having the specified length.
// ['strStarts(s1, s2), 'Returns true if the string s1 starts with s3, false otherwise.
// ['strEnds(s1, s2), 'Returns true if the string s1 ends with s3, false otherwise.




export class strsClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    strRepl(str, search_str, new_str) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strRepl', arguments, 3);
        }
        return strRepl(str, search_str, new_str);
    }

    strUpp(str) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strUpp', arguments, 1);
        }
        return strUpp(str);
    }

    strLow(str) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strLow', arguments, 1);
        }
        return strLow(str);
    }

    strTrim(str) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strTrim', arguments, 1);
        }
        return strTrim(str);
    }

    strTrimR(str) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strTrimR', arguments, 1);
        }
        return strTrimR(str);
    }

    strTrimL(str) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strTrimL', arguments, 1);
        }
        return strTrimL(str);
    }

    strPadL(str, max, fill) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strPadL', arguments, 3, 2);
        }
        return strPadL(str, max, fill);
    }

    strPadR(str, max, fill) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strPadR', arguments, 3, 2);
        }
        return strPadR(str, max, fill);
    }

    strSub(str, from, length) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strSub', arguments, 3, 2);
        }
        return strSub(str, from, length);
    }

    strStarts(str, starts) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strStarts', arguments, 2);
        }
        return strStarts(str, starts);
    }

    strEnds(str, ends) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strEnds', arguments, 2);
        }
        return strEnds(str, ends);
    }
    strToJSON(str) {
        if (this.__debug__) {
            checkNumArgs_noDebug('strToJSON', arguments, 1);
        }
        return strToJSON(str);
    }
}

