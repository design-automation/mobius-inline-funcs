import { isNum } from "./types/isNum";
import { isInt } from "./types/isInt";
import { isFlt } from "./types/isFlt";
import { isBool } from "./types/isBool";
import { isStr } from "./types/isStr";
import { isList } from "./types/isList";
import { isDict } from "./types/isDict";
import { isVec2 } from "./types/isVec2";
import { isVec3 } from "./types/isVec3";
import { isCol } from "./types/isCol";
import { isRay } from "./types/isRay";
import { isPln } from "./types/isPln";
import { isNaN } from "./types/isNaN"
import { isNull } from "./types/isNull";
import { isUndef } from "./types/isUndef";
import { _isWithin } from "./types/common";

export { isNum }
export { isInt }
export { isFlt }
export { isBool }
export { isStr }
export { isList }
export { isDict }
export { isVec2 }
export { isVec3 }
export { isCol }
export { isRay }
export { isPln }
export { isNaN }
export { isNull }
export { isUndef }
export { _isWithin }

/**
 * Functions to check types.
 * @module
 */

// ['isNum(v)', 'Returns true if the value is a number, false otherwise.'],
// ['isInt(v)', 'Returns true if the value is a integer, false otherwise.'],
// ['isFlt(v)', 'Returns true if the value is a floating point number, false otherwise.'],
// ['isBool(v)', 'Returns true if the value is a boolean, false otherwise.'],
// ['isStr(v)', 'Returns true if the value is a string, false otherwise.'],
// ['isList(v)', 'Returns true if the value is a list, false otherwise.'],
// ['isDict(v)', 'Returns true if the value is a dictionary, false otherwise.'],
// ['isVec2(v)', 'Returns true if the value is a list of two numbers, false otherwise.'],
// ['isVec3(v)', 'Returns true if the value is a list of three numbers, false otherwise.'],
// ['isCol(v)', 'Returns true if the value is a list of three numbers in the range [0, 1], false otherwise.'],
// ['isRay(v)', 'Returns true if the value is a ray, false otherwise.'],
// ['isPln(v)', 'Returns true if the value is a plane, false otherwise.'],
// ['isNaN(v)', 'Returns true is the value is not a number (NaN), false otherwise.'],
// ['isNull(v)', 'Returns true is the value is null, false otherwise.'],
// ['isUndef(v)', 'Returns true is the value is undefined, false otherwise.'],



export class typesClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    isNum(v: any) {
        return isNum(v);
    }

    isInt(v: any) {
        return isInt(v);
    }

    isFlt(v: any) {
        return isFlt(v);
    }

    isBool(v: any) {
        return isBool(v);
    }

    isStr(v: any) {
        return isStr(v);
    }

    isList(v: any) {
        return isList(v);
    }

    isDict(v: any) {
        return isDict(v);
    }

    isVec2(v: any) {
        return isVec2(v);
    }

    isVec3(v: any) {
        return isVec3(v);
    }

    isCol(v: any) {
        return isCol(v);
    }

    isRay(v: any) {
        return isRay(v);
    }

    isPln(v: any) {
        return isPln(v);
    }

    isNaN(v: any) {
        return isNaN(v);
    }

    isNull(v: any) {
        return isNull(v);
    }

    isUndef(v: any) {
        return isUndef(v);
    }

    _isWithin(v1: any, v2: any, v3: any) {
        return _isWithin(v1, v2, v3);
    }
}

