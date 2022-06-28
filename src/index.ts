import { checkListsSameLen, checkNumArgs_noDebug } from './_check_inline_args';
import { TPlane, TRay, Txyz } from './libs/common';
import { copy, equal, len } from './inline/common';
import { checkArgs } from './_check_types';
import * as chk from './_check_types';

import * as constants from './inline/constants';


import { abs } from './inline/arithmetic/abs';
import { square } from './inline/arithmetic/square';
import { cube } from './inline/arithmetic/cube';
import { pow } from './inline/arithmetic/pow';
import { sqrt } from './inline/arithmetic/sqrt';
import { exp } from './inline/arithmetic/exp';
import { log } from './inline/arithmetic/log'
import { log10 } from './inline/arithmetic/log10';
import { round } from './inline/arithmetic/round';
import { sigFig } from './inline/arithmetic/sigFig';
import { ceil } from './inline/arithmetic/ceil';
import { floor } from './inline/arithmetic/floor';
import { sum } from './inline/arithmetic/sum';
import { prod } from './inline/arithmetic/prod';
import { hypot } from './inline/arithmetic/hypot';
import { norm } from './inline/arithmetic/norm';
import { isApprox } from './inline/arithmetic/isApprox';
import { isIn } from './inline/arithmetic/isIn';
import { isWithin } from './inline/arithmetic/isWithin';
import { remap } from './inline/arithmetic/remap';

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

import { colFalse } from './inline/colors/colFalse';
import { colScale } from './inline/colors/colScale';
import { colFromStr } from './inline/colors/colFromStr';

export { colFalse }
export { colScale }
export { colFromStr }

import { boolean } from './inline/conversion/boolean';
import { number } from './inline/conversion/number';
import { string } from './inline/conversion/string';
import { radToDeg } from './inline/conversion/radToDeg';
import { degToRad } from './inline/conversion/degToRad';
import { numToStr } from './inline/conversion/numToStr';
import { numToCurr } from './inline/conversion/numToCurr';

export { boolean }
export { number }
export { string }
export { radToDeg }
export { degToRad } 
export { numToStr }
export { numToCurr }

import { dictGet } from './inline/dict/dictGet';
import { dictKeys } from './inline/dict/dictKeys';
import { dictVals } from './inline/dict/dictVals';
import { dictHasKey } from './inline/dict/dictHasKey';
import { dictHasVal } from './inline/dict/dictHasVal';
import { dictFind } from './inline/dict/dictFind';
import { dictCopy } from './inline/dict/dictCopy';
import { dictEq } from './inline/dict/dictEq';

export { dictGet }
export { dictKeys }
export { dictVals }
export { dictHasKey }
export { dictHasVal }
export { dictFind }
export { dictCopy }
export { dictEq }

import { intersect } from './inline/geometry/intersect';
import { project } from './inline/geometry/project';
import { distance } from './inline/geometry/distance';
import { distanceM } from './inline/geometry/distanceM';
import { distanceMS } from './inline/geometry/distanceMS';

export { intersect }
export { project }
export { distance }
export { distanceM }
export { distanceMS }

import { listCopy } from './inline/list/listCopy';
import { listCount } from './inline/list/listCount';
import { listCull } from './inline/list/listCull';
import { listEq } from './inline/list/listEq';
import { listFind } from './inline/list/listFind';
import { listFlat } from './inline/list/listFlat';
import { listGet } from './inline/list/listGet';
import { listHas } from './inline/list/listHas';
import { listJoin } from './inline/list/listJoin';
import { listRep } from './inline/list/listRep';
import { listRev } from './inline/list/listRev';
import { listRot } from './inline/list/listRot';
import { listSlice } from './inline/list/listSlice';
import { listSort } from './inline/list/listSort';
import { listZip } from './inline/list/listZip';
import { range } from './inline/list/range';

export { listCopy };
export { listCount };
export { listCull };
export { listEq };
export { listFind };
export { listFlat };
export { listGet };
export { listHas };
export { listJoin };
export { listRep };
export { listRev };
export { listRot };
export { listSlice };
export { listSort };
export { listZip };
export { range };

import { plnMake } from './inline/plane/plnMake';
import { plnCopy } from './inline/plane/plnCopy';
import { plnMove } from './inline/plane/plnMove';
import { plnRot } from './inline/plane/plnRot';
import { plnLMove } from './inline/plane/plnLMove';
import { plnLRotX } from './inline/plane/plnLRotX';
import { plnLRotY } from './inline/plane/plnLRotY';
import { plnLRotZ } from './inline/plane/plnLRotZ';
import { plnFromRay } from './inline/plane/plnFromRay';

export { plnMake }
export { plnCopy }
export { plnMove }
export { plnRot }
export { plnLMove }
export { plnLRotX }
export { plnLRotY }
export { plnLRotZ }
export { plnFromRay }

import { rand } from './inline/rand/rand';
import { randInt } from './inline/rand/randInt';
import { randPick } from './inline/rand/randPick';

export { rand }
export { randInt }
export { randPick }


import { rayMake } from './inline/ray/rayMake';
import { rayFromTo } from './inline/ray/rayFromTo';
import { rayCopy } from './inline/ray/rayCopy';
import { rayMove } from './inline/ray/rayMove';
import { rayRot } from './inline/ray/rayRot';
import { rayLMove } from './inline/ray/rayLMove';
import { rayFromPln } from './inline/ray/rayFromPln';
import { rayLtoG } from './inline/ray/rayLtoG';
import { rayGtoL } from './inline/ray/rayGtoL';

export { rayMake }
export { rayFromTo }
export { rayCopy }
export { rayMove }
export { rayRot }
export { rayLMove }
export { rayFromPln }
export { rayLtoG }
export { rayGtoL }

import { setMake } from './inline/set/setMake';
import { setUni } from './inline/set/setUni';
import { setInt } from './inline/set/setInt';
import { setDif } from './inline/set/setDif';

export { setMake }
export { setUni }
export { setInt }
export { setDif }

import { min } from './inline/statistics/min';
import { max } from './inline/statistics/max';
import { mad } from './inline/statistics/mad';
import { mean } from './inline/statistics/mean';
import { median } from './inline/statistics/median';
import { mode } from './inline/statistics/mode';
import { std } from './inline/statistics/std';
import { vari } from './inline/statistics/vari';

export { min }
export { max }
export { mad }
export { mean }
export { median }
export { mode }
export { std }
export { vari }

import { strRepl } from './inline/strs/strRepl';
import { strUpp } from './inline/strs/strUpp';
import { strLow } from './inline/strs/strLow';
import { strTrim } from './inline/strs/strTrim';
import { strTrimR } from './inline/strs/strTrimR';
import { strTrimL } from './inline/strs/strTrimL';
import { strPadL } from './inline/strs/strPadL';
import { strPadR } from './inline/strs/strPadR';
import { strSub } from './inline/strs/strSub';
import { strStarts } from './inline/strs/strStarts';
import { strEnds } from './inline/strs/strEnds';
import { strToJSON } from './inline/strs/strToJSON';

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

import { sin } from './inline/Trigonometry/sin';
import { asin } from './inline/Trigonometry/asin';
import { sinh } from './inline/Trigonometry/sinh';
import { asinh } from './inline/Trigonometry/asinh';
import { cos } from './inline/Trigonometry/cos';
import { acos } from './inline/Trigonometry/acos';
import { cosh } from './inline/Trigonometry/cosh';
import { acosh } from './inline/Trigonometry/acosh';
import { tan } from './inline/Trigonometry/tan';
import { atan } from './inline/Trigonometry/atan';
import { atan2 } from './inline/Trigonometry/atan2';
import { tanh } from './inline/Trigonometry/tanh';
import { atanh } from './inline/Trigonometry/atanh';

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

import { isNum } from "./inline/types/isNum";
import { isInt } from "./inline/types/isInt";
import { isFlt } from "./inline/types/isFlt";
import { isBool } from "./inline/types/isBool";
import { isStr } from "./inline/types/isStr";
import { isList } from "./inline/types/isList";
import { isDict } from "./inline/types/isDict";
import { isVec2 } from "./inline/types/isVec2";
import { isVec3 } from "./inline/types/isVec3";
import { isCol } from "./inline/types/isCol";
import { isRay } from "./inline/types/isRay";
import { isPln } from "./inline/types/isPln";
import { isNaN } from "./inline/types/isNaN"
import { isNull } from "./inline/types/isNull";
import { isUndef } from "./inline/types/isUndef";
import { _isWithin } from "./inline/types/common";

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

import { vecSum } from './inline/vec/vecSum';
import { vecAvg } from './inline/vec/vecAvg';
import { vecAvgDir } from './inline/vec/vecAvgDir';
import { vecAdd } from './inline/vec/vecAdd';
import { vecSub } from './inline/vec/vecSub';
import { vecDiv } from './inline/vec/vecDiv';
import { vecMult } from './inline/vec/vecMult';
import { vecSetLen } from './inline/vec/vecSetLen';
import { vecDot } from './inline/vec/vecDot';
import { vecCross } from './inline/vec/vecCross';
import { vecAng } from './inline/vec/vecAng';
import { vecFromTo } from './inline/vec/vecFromTo';
import { vecEqual } from './inline/vec/vecEqual';
import { vecAng2 } from './inline/vec/vecAng2';
import { vecRot } from './inline/vec/vecRot';
import { vecLen } from './inline/vec/vecLen';
import { vecNorm } from './inline/vec/vecNorm';
import { vecRev } from './inline/vec/vecRev';
import { vecLtoG } from './inline/vec/vecLtoG';
import { vecGtoL } from './inline/vec/vecGtoL';

export { vecSum }
export { vecAvg }
export { vecAvgDir }
export { vecAdd }
export { vecSub }
export { vecDiv }
export { vecMult }
export { vecSetLen }
export { vecDot }
export { vecCross }
export { vecAng }
export { vecFromTo }
export { vecEqual }
export { vecAng2 }
export { vecRot }
export { vecLen }
export { vecNorm }
export { vecRev }
export { vecLtoG }
export { vecGtoL }

export class InlineFuncs {
    __debug__: boolean
    constructor(debug?: boolean) {
        if (debug === undefined) { 
            this.__debug__ = true
        } else {
            this.__debug__ = debug;
        }
    }

    // CONSTANTS ===================================================================================

    PI = constants.PI

    XY = constants.XY
    XZ = constants.XZ
    YX = constants.YX
    YZ = constants.YZ
    ZX = constants.ZX
    ZY = constants.ZY

    VX = constants.VX
    VY = constants.VY
    VZ = constants.VZ
    VO = constants.VO

    RX = constants.RX
    RY = constants.RY
    RZ = constants.RZ

    EUL = constants.EUL
    PI2 = constants.PI2

    // ARITHMETIC ==================================================================================

    abs(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('abs', arguments, 1);
            chk.checkArgs('abs', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return abs(num);
    }

    square(list: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('square', arguments, 1);
            chk.checkArgs('square', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return square(list);
    }

    cube(list: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('cube', arguments, 1);
            chk.checkArgs('cube', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return cube(list);
    }
    
    pow(base: number | number[], xp: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('pow', arguments, 2);
            chk.checkArgs('pow', 'base', base, [chk.isNum, chk.isNumL]);
            chk.checkArgs('pow', 'xp', xp, [chk.isNum]);
        }
        return pow(base, xp);
    }

    sqrt(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sqrt', arguments, 1);
            chk.checkArgs('sqrt', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return sqrt(num);
    }

    exp(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('exp', arguments, 1);
            chk.checkArgs('exp', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return exp(num);
    }

    log(base: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('log', arguments, 1);
            chk.checkArgs('log', 'base', base, [chk.isNum, chk.isNumL]);
        }
        return log(base);
    }

    log10(base: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('log10', arguments, 1);
            chk.checkArgs('log10', 'base', base, [chk.isNum, chk.isNumL]);
        }
        return log10(base);
    }

    round(num: number | number[], dec_pla = 0) {
        if (this.__debug__) {
            checkNumArgs_noDebug('round', arguments, 2, 1);
            chk.checkArgs('round', 'num', num, [chk.isNum, chk.isNumL]);
            chk.checkArgs('round', 'dec_pla', dec_pla, [chk.isInt]);
        }
        return round(num, dec_pla);
    }

    sigFig(num: number | number[], sig_figs: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sigFig', arguments, 2);
            chk.checkArgs('sigFig', 'num', num, [chk.isNum, chk.isNumL]);
            chk.checkArgs('sigFig', 'sig_figs', sig_figs, [chk.isInt]);
        }
        return sigFig(num, sig_figs);
    }

    ceil(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('ceil', arguments, 1);
            chk.checkArgs('ceil', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return ceil(num);
    }

    floor(num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('floor', arguments, 1);
            chk.checkArgs('floor', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return floor(num);
    }

    sum(list: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sum', arguments, 1);
            chk.checkArgs('sum', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return sum(list);
    }

    prod(list: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('prod', arguments, 1);
            chk.checkArgs('prod', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return prod(list);
    }

    hypot(list: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('hypot', arguments, 1);
            chk.checkArgs('hypot', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return hypot(list);
    }

    norm(list: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('norm', arguments, 1, 2);
            chk.checkArgs('norm', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return norm(list);
    }

    isApprox(n1: number, n2: number, t: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('isApprox', arguments, 3);
            chk.checkArgs('isApprox', 'n1', n1, [chk.isNum]);
            chk.checkArgs('isApprox', 'n2', n2, [chk.isNum]);
            chk.checkArgs('isApprox', 't', t, [chk.isNum]);
        }
        return isApprox(n1, n2, t);
    }

    isIn(v1: number, v2: number, v3: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('isIn', arguments, 3);
        }
        return isIn(v1, v2, v3);
    }

    isWithin(v1: number, v2: number, v3: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('isWithin', arguments, 3);
        }
        return isWithin(v1, v2, v3);
    }
    remap(num: number | number[], d1: number[], d2: number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('remap', arguments, 3);
            chk.checkArgs('remap', 'num', num, [chk.isNum, chk.isNumL]);
            chk.checkArgs('remap', 'd1', d1, [chk.isNumL]);
            chk.checkArgs('remap', 'd2', d2, [chk.isNumL]);
        }
        return remap(num, d1, d2);
    }

    // COLORS ======================================================================================

    colFalse(vals: number | number[], min: number, max: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('colFalse', arguments, 3);
            chk.checkArgs('colFalse', 'vals', vals, [chk.isNum, chk.isNumL]);
            chk.checkArgs('colFalse', 'min', min, [chk.isNum]);
            chk.checkArgs('colFalse', 'max', max, [chk.isNum]);
        }
        return colFalse(vals, min, max);
    }

    colScale(vals: number | number[], min: number, max: number, scale: any) {
        if (this.__debug__) {
            checkNumArgs_noDebug('colScale', arguments, 4);
            chk.checkArgs('colScale', 'vals', vals, [chk.isNum, chk.isNumL]);
            chk.checkArgs('colScale', 'min', min, [chk.isNum]);
            chk.checkArgs('colScale', 'max', max, [chk.isNum]);
            //TODO argcheck for scale: list or string representing brewer scale?
        }
        return colScale(vals, min, max, scale);
    }

    colFromStr(col_str: string|string[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('colFromStr', arguments, 1);
            checkArgs('colFromStr', 'col_str', col_str, [chk.isStr, chk.isStrL]);
        }
        return colFromStr(col_str);
    }

    // CONVERSION ==================================================================================

    boolean(val: number | string) {
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

    // DICTIONARIES=================================================================================

    dictGet(dict: object, key: string | string[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictGet', arguments, 2);
            chk.checkArgs('dictGet', 'dict', dict, [chk.isDict]);
            chk.checkArgs('dictGet', 'key', key, [chk.isStr, chk.isStrL]);
        }
        return dictGet(dict, key);
    }

    dictKeys(dict: object) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictKeys', arguments, 1);
            chk.checkArgs('dictKeys', 'dict', dict, [chk.isDict]);
        }
        return dictKeys(dict);
    }

    dictVals(dict: object) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictVals', arguments, 1);
            chk.checkArgs('dictVals', 'dict', dict, [chk.isDict]);
        }
        return dictVals(dict);
    }

    dictHasKey(dict: object, key: string | string[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictHasKey', arguments, 2);
            chk.checkArgs('dictHasKey', 'dict', dict, [chk.isDict]);
            chk.checkArgs('dictHasKey', 'key', key, [chk.isStr, chk.isStrL]);
        }
        return dictHasKey(dict, key);
    }

    dictHasVal(dict: object, val: any) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictHasVal', arguments, 2);
            chk.checkArgs('dictHasVal', 'dict', dict, [chk.isDict]);
        }
        return dictHasVal(dict, val);
    }

    dictFind(dict: object, val: string) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictFind', arguments, 2);
            chk.checkArgs('dictFind', 'dict', dict, [chk.isDict]);
        }
        return dictFind(dict, val);
    }

    dictCopy(dict: object) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictCopy', arguments, 1);
            chk.checkArgs('dictCopy', 'dict', dict, [chk.isDict]);
        }
        return dictCopy(dict);
    }

    dictEq(dict1: any[], dict2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictEq', arguments, 2);
            chk.checkArgs('dictEq', 'dict1', dict1, [chk.isDict]);
            chk.checkArgs('dictEq', 'dict2', dict2, [chk.isDict]);
        }
        return dictEq(dict1, dict2);
    }

    // GEOMETRY ====================================================================================

    intersect(r1: TRay, r2: TRay|TPlane, met: number = 2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('intersect', arguments, 3, 2);
            chk.checkArgs('intersect', 'r1', r1, [chk.isRay]);
            chk.checkArgs('intersect', 'r2', r2, [chk.isRay]);
        }
        return intersect(r1, r2, met);
    }

    project(c: Txyz, r: TRay|TPlane, met: number = 2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('project', arguments, 3, 2);
            chk.checkArgs('project', 'c', c, [chk.isXYZ]);
            chk.checkArgs('project', 'r', r, [chk.isRay, chk.isPln]);
        }
        return project(c, r, met);
    }

    distance(c1: Txyz, c2: Txyz|TRay|TPlane) {
        if (this.__debug__) {
            checkNumArgs_noDebug('distance', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return distance(c1, c2);
    }

    distanceM(c1: Txyz, c2: Txyz|TRay|TPlane) {
        if (this.__debug__) {
            checkNumArgs_noDebug('distanceM', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return distanceM(c1, c2);
    }

    distanceMS(c1: Txyz, c2: Txyz|TRay|TPlane) {
        if (this.__debug__) {
            checkNumArgs_noDebug('distanceMS', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return distanceMS(c1, c2);
    }

    // LIST ========================================================================================

    listCopy(list: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCopy', arguments, 1);
            chk.checkArgs('listCopy', 'list', list, [chk.isList]);
        }
        return listCopy(list);
    }
    listCount(list: any[], val: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCount', arguments, 2);
            chk.checkArgs('listCount', 'list', list, [chk.isList]);
        }
        return listCount(list, val);
    }
    listCull(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCull', arguments, 2, 1);
            chk.checkArgs('listCull', 'list1', list1, [chk.isList]);
            if (list2 !== undefined) { chk.checkArgs('listCull', 'list2', list2, [chk.isList]); }
        }
        return listCull(list1, list2);
    }
    listEq(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listEq', arguments, 2);
            chk.checkArgs('listEq', 'list1', list1, [chk.isList]);
            chk.checkArgs('listEq', 'list2', list2, [chk.isList]);
        }
        return listEq(list1, list2);
    }
    listFind(list: any[], val: string) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listFind', arguments, 2);
            chk.checkArgs('listFind', 'list', list, [chk.isList]);
        }
        return listFind(list, val);
    }
    listFlat(list: any[], depth: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listFlat', arguments, 2, 1);
            chk.checkArgs('listFlat', 'list', list, [chk.isList]);
            if (depth !== undefined) { chk.checkArgs('listFlat', 'depth', depth, [chk.isInt]); }
        }
        return listFlat(list, depth);
    }
    listGet(list: any[], idx: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listGet', arguments, 2);
            chk.checkArgs('listGet', 'list', list, [chk.isList]);
            chk.checkArgs('listGet', 'index', idx, [chk.isInt, chk.isIntL]);
        }
        return listGet(list, idx);
    }
    listHas(list: any[], val: undefined) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listHas', arguments, 2);
            chk.checkArgs('listHas', 'list', list, [chk.isList]);
        }
        return listHas(list, val);
    }
    listJoin(...lists: any[]) {
        if (this.__debug__) {
            // nothing to check
        }
        return listJoin(...lists);
    }
    listRep(list: number[], n: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRep', arguments, 2);
            chk.checkArgs('listRep', 'n', n, [chk.isInt]);
        }
        return listRep(list, n);
    }
    listRev(list: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRev', arguments, 1);
            chk.checkArgs('listRev', 'list', list, [chk.isList]);
        }
        return listRev(list);
    }
    listRot(list: any[], rot: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRot', arguments, 2);
            chk.checkArgs('listRot', 'list', list, [chk.isList]);
            chk.checkArgs('listRot', 'rot', rot, [chk.isInt]);
        }
        return listRot(list, rot);
    }
    listSlice(list: any[], start: number, end: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listSlice', arguments, 3, 2);
            chk.checkArgs('listSlice', 'list', list, [chk.isList]);
            chk.checkArgs('listSlice', 'start', start, [chk.isInt]);
            if (end !== undefined) { chk.checkArgs('listSlice', 'end', end, [chk.isInt]); }
        }
        return listSlice(list, start, end);
    }
    listSort(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listSort', arguments, 2, 1);
            chk.checkArgs('listSort', 'list1', list1, [chk.isList]);
            if (list2 !== undefined) {
                chk.checkArgs('listSort', 'list2', list1, [chk.isList]);
                checkListsSameLen('listSort', arguments);
            }
        }
        return listSort(list1, list2);
    }
    listZip(...list: any[]) {
        if (this.__debug__) {
            if (len(this.__debug__, list) === 1) {
                chk.checkArgs('listZip', 'list1', list[0], [chk.isLList]);
            } 
        }
        return listZip(...list);
    }
    range(start: number, end: number, step: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('range', arguments, 3, 1);
            chk.checkArgs('range', 'start', start, [chk.isNum]);
            if (end !== undefined) { chk.checkArgs('range', 'end', end, [chk.isNum]); }
            if (step !== undefined) { chk.checkArgs('range', 'step', step, [chk.isNum]);    }
        }
        return range(start, end, step);
    }

    // PLANES ======================================================================================

    plnMake(origin: Txyz | Txyz[], x_vec: Txyz | Txyz[], xy_vec: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnMake', arguments, 3);
            chk.checkArgs('plnMake', 'origin', origin, [chk.isXYZ, chk.isXYZL]);
            chk.checkArgs('plnMake', 'x_vec', x_vec, [chk.isXYZ, chk.isXYZL]);
            chk.checkArgs('plnMake', 'xy_vec', xy_vec, [chk.isXYZ, chk.isXYZL]);
        }
        return plnMake(origin, x_vec, xy_vec);
    }

    plnCopy(pln: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnCopy', arguments, 1);
            chk.checkArgs('plnCopy', 'pln', pln, [chk.isPln, chk.isPlnL]);
        }
        return plnCopy(pln);
    }

    plnMove(pln: TPlane | TPlane[], vec: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnMove', arguments, 2);
            chk.checkArgs('plnMove', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnMove', 'vec', vec, [chk.isXYZ, chk.isXYZL]);
        }
        return plnMove(pln, vec);
    }

    plnRot(pln: TPlane | TPlane[], ray: TRay | TRay[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnRot', arguments, 3);
            chk.checkArgs('plnRot', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnRot', 'ray', ray, [chk.isRay, chk.isRayL]);
            chk.checkArgs('plnRot', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return plnRot(pln, ray, ang);
    }

    plnLMove(pln: TPlane | TPlane[], vec: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLMake', arguments, 2);
            chk.checkArgs('plnLMove', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLMove', 'vec', vec, [chk.isXYZ, chk.isXYZL]);
        }
        return plnLMove(pln, vec);
    }

    plnLRotX(pln: TPlane | TPlane[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLRotX', arguments, 2);
            chk.checkArgs('plnLRotX', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLRotX', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return plnLRotX(pln, ang);
    }

    plnLRotY(pln: TPlane | TPlane[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLRotY', arguments, 2);
            chk.checkArgs('plnLRotY', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLRotY', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return plnLRotY(pln, ang);
    }

    plnLRotZ(pln: TPlane | TPlane[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLRotZ', arguments, 2);
            chk.checkArgs('plnLRotY', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLRotY', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return plnLRotZ(pln, ang);
    }

    plnFromRay(ray: TRay | TRay[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnFromRay', arguments, 1);
            chk.checkArgs('plnFromRay', 'ray', ray, [chk.isRay, chk.isRayL]);
        }
        return plnFromRay(ray);
    }

    // RAND ========================================================================================

    rand(min: number, max: number, seed?: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rand', arguments, 3, 2);
            chk.checkArgs('rand', 'min', min, [chk.isNum]);
            chk.checkArgs('rand', 'max', max, [chk.isNum]);
            }
        return rand(min, max, seed);
    }

    randInt(min: number, max: number, seed?: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('randInt', arguments, 3, 2);
            chk.checkArgs('randInt', 'min', min, [chk.isNum]);
            chk.checkArgs('randInt', 'max', max, [chk.isNum]);
            }
        return randInt(min, max, seed);
    }

    randPick(list: any[], num: number, seed?: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('randPick', arguments, 3, 2);
            chk.checkArgs('randPick', 'list', list, [chk.isList]);
            chk.checkArgs('randPick', 'num', num, [chk.isNum]);
            chk.checkArgs('randPick', 'seed', seed, [chk.isNum]);
        }
        return randPick(list, num, seed);
    }

    // RAYS ========================================================================================

    rayMake(origin: Txyz | Txyz[], dir: Txyz | Txyz[], len?: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayMake', arguments, 3, 2);
        }
        return rayMake(origin, dir, len);
    }

    rayFromTo(xyz1: Txyz | Txyz[], xyz2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayFromTo', arguments, 2);
        }
        return rayFromTo(xyz1, xyz2);
    }

    rayCopy(ray: TRay | TRay[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayCopy', arguments, 1);
            chk.checkArgs('rayCopy', 'ray', ray, [chk.isRay, chk.isRayL]);
        }
        return rayCopy(ray);
    }

    rayMove(ray: TRay | TRay[], vec: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayMove', arguments, 2);
        }
        return rayMove(ray, vec);
    }

    rayRot(ray1: TRay | TRay[], ray2: TRay | TRay[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayRot', arguments, 3);
        }
        return rayRot(ray1, ray2, ang);
    }

    rayLMove(ray: TRay | TRay[], dist: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayLMove', arguments, 2);
        }
        return rayLMove(ray, dist);
    }

    rayFromPln(pln: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayFromPln', arguments, 1);
        }
        return rayFromPln(pln);
    }

    rayLtoG(r: TRay | TRay[], p: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayLtoG', arguments, 2);
        }
        return rayLtoG(r, p);
    }

    rayGtoL(r: TRay | TRay[], p: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayGtoL', arguments, 2);
        }
        return rayGtoL(r, p);
    }

    // SETS ========================================================================================

    setMake(list: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setMake', arguments, 1);
            chk.checkArgs('setMake', 'list', list, [chk.isList]);
        }
        return setMake(list);
    }

    setUni(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setUni', arguments, 2);
            chk.checkArgs('setUni', 'list1', list1, [chk.isList]);
            chk.checkArgs('setUni', 'list2', list2, [chk.isList]);
        }
        return setUni(list1, list2);
    }

    setInt(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setInt', arguments, 2);
            chk.checkArgs('setInt', 'list1', list1, [chk.isList]);
            chk.checkArgs('setInt', 'list2', list2, [chk.isList]);
        }
        return setInt(list1, list2);
    }

    setDif(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setDif', arguments, 2);
            chk.checkArgs('setDif', 'list1', list1, [chk.isList]);
            chk.checkArgs('setDif', 'list2', list2, [chk.isList]);
        }
        return setDif(list1, list2);
    }

    // STATISTICS ==================================================================================

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

    // STRINGS =====================================================================================

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

    // TRIGONOMETRY ================================================================================

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

    // TYPES =======================================================================================

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

    // VECS ========================================================================================

    vecSum(...v: Txyz[]) {
        if (this.__debug__) {
            checkArgs('vecSum', 'v', v, [chk.isXYZL, chk.isXYZLL]);
        }
        return vecSum(...v);
    }

    vecAvg(...v: Txyz[]) {
        if (this.__debug__) {
            checkArgs('vecAvg', 'v', v, [chk.isXYZL]);
        }
        return vecAvg(...v);
    }

    vecAvgDir(...v: Txyz[]) {
        if (this.__debug__) {
            checkArgs('vecAvgDir', 'v', v, [chk.isXYZL]);
        }
        return vecAvgDir(...v);
    }

    vecAdd(v1: Txyz | Txyz[], v2: Txyz | Txyz[], norm: boolean) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecAdd', arguments, 3, 2);
        }
        return vecAdd(v1, v2, norm);
    }

    vecSub(v1: Txyz | Txyz[], v2: Txyz | Txyz[], norm: boolean) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecSub', arguments, 3, 2);
        }
        return vecSub(v1, v2, norm);
    }

    vecDiv(v: Txyz | Txyz[], num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecDiv', arguments, 2);
        }
        return vecDiv(v, num);
    }

    vecMult(v: Txyz | Txyz[], num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecMult', arguments, 2);
        }
        return vecMult(v, num);
    }

    vecSetLen(v: Txyz | Txyz[], num: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecSetLen', arguments, 2);
        }
        return vecSetLen(v, num);
    }

    vecDot(v1: Txyz | Txyz[], v2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecDot', arguments, 2);
        }
        return vecDot(v1, v2);
    }

    vecCross(v1: Txyz | Txyz[], v2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecCross', arguments, 2);
        }
        return vecCross(v1, v2);
    }

    vecAng(v1: Txyz | Txyz[], v2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecAng', arguments, 2);
        }
        return vecAng(v1, v2);
    }

    vecFromTo(xyz1: Txyz | Txyz[], xyz2: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecFromTo', arguments, 2);
        }
        return vecFromTo(xyz1, xyz2);
    }

    vecEqual(v1: Txyz | Txyz[], v2: Txyz | Txyz[], tol: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecEqual', arguments, 3);
        }
        return vecEqual(v1, v2, tol);
    }

    vecAng2(v1: Txyz | Txyz[], v2: Txyz | Txyz[], v3: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecAng2', arguments, 3);
        }
        return vecAng2(v1, v2, v3);
    }

    vecRot(v1: Txyz | Txyz[], v2: Txyz | Txyz[], ang: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecRot', arguments, 3);
        }
        return vecRot(v1, v2, ang);
    }

    vecLen(v: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecLen', arguments, 1);
            checkArgs('vecLen', 'v', v, [chk.isXYZ, chk.isXYZL]);
        }
        return vecLen(v);
    }

    vecNorm(v: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecNorm', arguments, 1);
        }
        return vecNorm(v);
    }

    vecRev(v: Txyz | Txyz[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecRev', arguments, 1);
        }
        return vecRev(v);
    }

    vecLtoG(v: Txyz | Txyz[], p: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecLtoG', arguments, 2);
        }
        return vecLtoG(v, p);
    }

    vecGtoL(v: Txyz | Txyz[], p: TPlane | TPlane[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecGtoL', arguments, 2);
        }
        return vecGtoL(v, p);
    }

    // COMMON ========================================================================================

    len(data) {
        return len(this.__debug__, data);
    }

    copy(data) {
        return copy(this.__debug__, data);
    }

    equal(data1, data2) {
        return equal(this.__debug__, data1, data2);
    }

}