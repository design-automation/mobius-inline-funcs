import { checkListsSameLen, checkNumArgs_noDebug } from './_check_inline_args';
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
import { log } from './inline/arithmetic/log';
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
export { abs };
export { square };
export { cube };
export { pow };
export { sqrt };
export { exp };
export { log };
export { log10 };
export { round };
export { sigFig };
export { ceil };
export { floor };
export { sum };
export { prod };
export { hypot };
export { norm };
export { isApprox };
export { isIn };
export { isWithin };
export { remap };
import { colFalse } from './inline/colors/colFalse';
import { colScale } from './inline/colors/colScale';
import { colFromStr } from './inline/colors/colFromStr';
export { colFalse };
export { colScale };
export { colFromStr };
import { boolean } from './inline/conversion/boolean';
import { number } from './inline/conversion/number';
import { string } from './inline/conversion/string';
import { radToDeg } from './inline/conversion/radToDeg';
import { degToRad } from './inline/conversion/degToRad';
import { numToStr } from './inline/conversion/numToStr';
import { numToCurr } from './inline/conversion/numToCurr';
export { boolean };
export { number };
export { string };
export { radToDeg };
export { degToRad };
export { numToStr };
export { numToCurr };
import { dictGet } from './inline/dict/dictGet';
import { dictKeys } from './inline/dict/dictKeys';
import { dictVals } from './inline/dict/dictVals';
import { dictHasKey } from './inline/dict/dictHasKey';
import { dictHasVal } from './inline/dict/dictHasVal';
import { dictFind } from './inline/dict/dictFind';
import { dictCopy } from './inline/dict/dictCopy';
import { dictEq } from './inline/dict/dictEq';
export { dictGet };
export { dictKeys };
export { dictVals };
export { dictHasKey };
export { dictHasVal };
export { dictFind };
export { dictCopy };
export { dictEq };
import { intersect } from './inline/geometry/intersect';
import { project } from './inline/geometry/project';
import { distance } from './inline/geometry/distance';
import { distanceM } from './inline/geometry/distanceM';
import { distanceMS } from './inline/geometry/distanceMS';
export { intersect };
export { project };
export { distance };
export { distanceM };
export { distanceMS };
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
export { plnMake };
export { plnCopy };
export { plnMove };
export { plnRot };
export { plnLMove };
export { plnLRotX };
export { plnLRotY };
export { plnLRotZ };
export { plnFromRay };
import { rand } from './inline/rand/rand';
import { randInt } from './inline/rand/randInt';
import { randPick } from './inline/rand/randPick';
export { rand };
export { randInt };
export { randPick };
import { rayMake } from './inline/ray/rayMake';
import { rayFromTo } from './inline/ray/rayFromTo';
import { rayCopy } from './inline/ray/rayCopy';
import { rayMove } from './inline/ray/rayMove';
import { rayRot } from './inline/ray/rayRot';
import { rayLMove } from './inline/ray/rayLMove';
import { rayFromPln } from './inline/ray/rayFromPln';
import { rayLtoG } from './inline/ray/rayLtoG';
import { rayGtoL } from './inline/ray/rayGtoL';
export { rayMake };
export { rayFromTo };
export { rayCopy };
export { rayMove };
export { rayRot };
export { rayLMove };
export { rayFromPln };
export { rayLtoG };
export { rayGtoL };
import { setMake } from './inline/set/setMake';
import { setUni } from './inline/set/setUni';
import { setInt } from './inline/set/setInt';
import { setDif } from './inline/set/setDif';
export { setMake };
export { setUni };
export { setInt };
export { setDif };
import { min } from './inline/statistics/min';
import { max } from './inline/statistics/max';
import { mad } from './inline/statistics/mad';
import { mean } from './inline/statistics/mean';
import { median } from './inline/statistics/median';
import { mode } from './inline/statistics/mode';
import { std } from './inline/statistics/std';
import { vari } from './inline/statistics/vari';
export { min };
export { max };
export { mad };
export { mean };
export { median };
export { mode };
export { std };
export { vari };
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
export { strRepl };
export { strUpp };
export { strLow };
export { strTrim };
export { strTrimR };
export { strTrimL };
export { strPadL };
export { strPadR };
export { strSub };
export { strStarts };
export { strEnds };
export { strToJSON };
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
export { sin };
export { asin };
export { sinh };
export { asinh };
export { cos };
export { acos };
export { cosh };
export { acosh };
export { tan };
export { atan };
export { atan2 };
export { tanh };
export { atanh };
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
import { isNaN } from "./inline/types/isNaN";
import { isNull } from "./inline/types/isNull";
import { isUndef } from "./inline/types/isUndef";
import { _isWithin } from "./inline/types/common";
export { isNum };
export { isInt };
export { isFlt };
export { isBool };
export { isStr };
export { isList };
export { isDict };
export { isVec2 };
export { isVec3 };
export { isCol };
export { isRay };
export { isPln };
export { isNaN };
export { isNull };
export { isUndef };
export { _isWithin };
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
export { vecSum };
export { vecAvg };
export { vecAvgDir };
export { vecAdd };
export { vecSub };
export { vecDiv };
export { vecMult };
export { vecSetLen };
export { vecDot };
export { vecCross };
export { vecAng };
export { vecFromTo };
export { vecEqual };
export { vecAng2 };
export { vecRot };
export { vecLen };
export { vecNorm };
export { vecRev };
export { vecLtoG };
export { vecGtoL };
export class InlineFuncs {
    constructor(debug) {
        // CONSTANTS ===================================================================================
        this.PI = constants.PI;
        this.XY = constants.XY;
        this.XZ = constants.XZ;
        this.YX = constants.YX;
        this.YZ = constants.YZ;
        this.ZX = constants.ZX;
        this.ZY = constants.ZY;
        this.VX = constants.VX;
        this.VY = constants.VY;
        this.VZ = constants.VZ;
        this.VO = constants.VO;
        this.RX = constants.RX;
        this.RY = constants.RY;
        this.RZ = constants.RZ;
        this.EUL = constants.EUL;
        this.PI2 = constants.PI2;
        if (debug === undefined) {
            this.__debug__ = true;
        }
        else {
            this.__debug__ = debug;
        }
    }
    // ARITHMETIC ==================================================================================
    abs(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('abs', arguments, 1);
            chk.checkArgs('abs', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return abs(num);
    }
    square(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('square', arguments, 1);
            chk.checkArgs('square', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return square(list);
    }
    cube(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('cube', arguments, 1);
            chk.checkArgs('cube', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return cube(list);
    }
    pow(base, xp) {
        if (this.__debug__) {
            checkNumArgs_noDebug('pow', arguments, 2);
            chk.checkArgs('pow', 'base', base, [chk.isNum, chk.isNumL]);
            chk.checkArgs('pow', 'xp', xp, [chk.isNum]);
        }
        return pow(base, xp);
    }
    sqrt(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sqrt', arguments, 1);
            chk.checkArgs('sqrt', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return sqrt(num);
    }
    exp(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('exp', arguments, 1);
            chk.checkArgs('exp', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return exp(num);
    }
    log(base) {
        if (this.__debug__) {
            checkNumArgs_noDebug('log', arguments, 1);
            chk.checkArgs('log', 'base', base, [chk.isNum, chk.isNumL]);
        }
        return log(base);
    }
    log10(base) {
        if (this.__debug__) {
            checkNumArgs_noDebug('log10', arguments, 1);
            chk.checkArgs('log10', 'base', base, [chk.isNum, chk.isNumL]);
        }
        return log10(base);
    }
    round(num, dec_pla = 0) {
        if (this.__debug__) {
            checkNumArgs_noDebug('round', arguments, 2, 1);
            chk.checkArgs('round', 'num', num, [chk.isNum, chk.isNumL]);
            chk.checkArgs('round', 'dec_pla', dec_pla, [chk.isInt]);
        }
        return round(num, dec_pla);
    }
    sigFig(num, sig_figs) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sigFig', arguments, 2);
            chk.checkArgs('sigFig', 'num', num, [chk.isNum, chk.isNumL]);
            chk.checkArgs('sigFig', 'sig_figs', sig_figs, [chk.isInt]);
        }
        return sigFig(num, sig_figs);
    }
    ceil(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('ceil', arguments, 1);
            chk.checkArgs('ceil', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return ceil(num);
    }
    floor(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('floor', arguments, 1);
            chk.checkArgs('floor', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return floor(num);
    }
    sum(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sum', arguments, 1);
            chk.checkArgs('sum', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return sum(list);
    }
    prod(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('prod', arguments, 1);
            chk.checkArgs('prod', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return prod(list);
    }
    hypot(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('hypot', arguments, 1);
            chk.checkArgs('hypot', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return hypot(list);
    }
    norm(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('norm', arguments, 1, 2);
            chk.checkArgs('norm', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return norm(list);
    }
    isApprox(n1, n2, t) {
        if (this.__debug__) {
            checkNumArgs_noDebug('isApprox', arguments, 3);
            chk.checkArgs('isApprox', 'n1', n1, [chk.isNum]);
            chk.checkArgs('isApprox', 'n2', n2, [chk.isNum]);
            chk.checkArgs('isApprox', 't', t, [chk.isNum]);
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
            chk.checkArgs('remap', 'num', num, [chk.isNum, chk.isNumL]);
            chk.checkArgs('remap', 'd1', d1, [chk.isNumL]);
            chk.checkArgs('remap', 'd2', d2, [chk.isNumL]);
        }
        return remap(num, d1, d2);
    }
    // COLORS ======================================================================================
    colFalse(vals, min, max) {
        if (this.__debug__) {
            checkNumArgs_noDebug('colFalse', arguments, 3);
            chk.checkArgs('colFalse', 'vals', vals, [chk.isNum, chk.isNumL]);
            chk.checkArgs('colFalse', 'min', min, [chk.isNum]);
            chk.checkArgs('colFalse', 'max', max, [chk.isNum]);
        }
        return colFalse(vals, min, max);
    }
    colScale(vals, min, max, scale) {
        if (this.__debug__) {
            checkNumArgs_noDebug('colScale', arguments, 4);
            chk.checkArgs('colScale', 'vals', vals, [chk.isNum, chk.isNumL]);
            chk.checkArgs('colScale', 'min', min, [chk.isNum]);
            chk.checkArgs('colScale', 'max', max, [chk.isNum]);
            //TODO argcheck for scale: list or string representing brewer scale?
        }
        return colScale(vals, min, max, scale);
    }
    colFromStr(col_str) {
        if (this.__debug__) {
            checkNumArgs_noDebug('colFromStr', arguments, 1);
            checkArgs('colFromStr', 'col_str', col_str, [chk.isStr, chk.isStrL]);
        }
        return colFromStr(col_str);
    }
    // CONVERSION ==================================================================================
    boolean(val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('boolean', arguments, 1);
        }
        return boolean(val);
    }
    number(val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('number', arguments, 1);
        }
        return number(val);
    }
    string(val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('string', arguments, 1);
        }
        return string(val);
    }
    radToDeg(rad) {
        if (this.__debug__) {
            checkNumArgs_noDebug('radToDeg', arguments, 1);
        }
        return radToDeg(rad);
    }
    degToRad(deg) {
        if (this.__debug__) {
            checkNumArgs_noDebug('degToRad', arguments, 1);
        }
        return degToRad(deg);
    }
    numToStr(num, frac_digits, locale) {
        if (this.__debug__) {
            checkNumArgs_noDebug('numToStr', arguments, 3, 1);
        }
        return numToStr(num, frac_digits, locale);
    }
    numToCurr(num, currency, locale) {
        if (this.__debug__) {
            checkNumArgs_noDebug('numToCurr', arguments, 3, 2);
        }
        return numToCurr(num, currency, locale);
    }
    // DICTIONARIES=================================================================================
    dictGet(dict, key) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictGet', arguments, 2);
            chk.checkArgs('dictGet', 'dict', dict, [chk.isDict]);
            chk.checkArgs('dictGet', 'key', key, [chk.isStr, chk.isStrL]);
        }
        return dictGet(dict, key);
    }
    dictKeys(dict) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictKeys', arguments, 1);
            chk.checkArgs('dictKeys', 'dict', dict, [chk.isDict]);
        }
        return dictKeys(dict);
    }
    dictVals(dict) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictVals', arguments, 1);
            chk.checkArgs('dictVals', 'dict', dict, [chk.isDict]);
        }
        return dictVals(dict);
    }
    dictHasKey(dict, key) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictHasKey', arguments, 2);
            chk.checkArgs('dictHasKey', 'dict', dict, [chk.isDict]);
            chk.checkArgs('dictHasKey', 'key', key, [chk.isStr, chk.isStrL]);
        }
        return dictHasKey(dict, key);
    }
    dictHasVal(dict, val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictHasVal', arguments, 2);
            chk.checkArgs('dictHasVal', 'dict', dict, [chk.isDict]);
        }
        return dictHasVal(dict, val);
    }
    dictFind(dict, val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictFind', arguments, 2);
            chk.checkArgs('dictFind', 'dict', dict, [chk.isDict]);
        }
        return dictFind(dict, val);
    }
    dictCopy(dict) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictCopy', arguments, 1);
            chk.checkArgs('dictCopy', 'dict', dict, [chk.isDict]);
        }
        return dictCopy(dict);
    }
    dictEq(dict1, dict2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('dictEq', arguments, 2);
            chk.checkArgs('dictEq', 'dict1', dict1, [chk.isDict]);
            chk.checkArgs('dictEq', 'dict2', dict2, [chk.isDict]);
        }
        return dictEq(dict1, dict2);
    }
    // GEOMETRY ====================================================================================
    intersect(r1, r2, met = 2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('intersect', arguments, 3, 2);
            chk.checkArgs('intersect', 'r1', r1, [chk.isRay]);
            chk.checkArgs('intersect', 'r2', r2, [chk.isRay]);
        }
        return intersect(r1, r2, met);
    }
    project(c, r, met = 2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('project', arguments, 3, 2);
            chk.checkArgs('project', 'c', c, [chk.isXYZ]);
            chk.checkArgs('project', 'r', r, [chk.isRay, chk.isPln]);
        }
        return project(c, r, met);
    }
    distance(c1, c2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('distance', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return distance(c1, c2);
    }
    distanceM(c1, c2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('distanceM', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return distanceM(c1, c2);
    }
    distanceMS(c1, c2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('distanceMS', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return distanceMS(c1, c2);
    }
    // LIST ========================================================================================
    listCopy(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCopy', arguments, 1);
            chk.checkArgs('listCopy', 'list', list, [chk.isList]);
        }
        return listCopy(list);
    }
    listCount(list, val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCount', arguments, 2);
            chk.checkArgs('listCount', 'list', list, [chk.isList]);
        }
        return listCount(list, val);
    }
    listCull(list1, list2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCull', arguments, 2, 1);
            chk.checkArgs('listCull', 'list1', list1, [chk.isList]);
            if (list2 !== undefined) {
                chk.checkArgs('listCull', 'list2', list2, [chk.isList]);
            }
        }
        return listCull(list1, list2);
    }
    listEq(list1, list2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listEq', arguments, 2);
            chk.checkArgs('listEq', 'list1', list1, [chk.isList]);
            chk.checkArgs('listEq', 'list2', list2, [chk.isList]);
        }
        return listEq(list1, list2);
    }
    listFind(list, val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listFind', arguments, 2);
            chk.checkArgs('listFind', 'list', list, [chk.isList]);
        }
        return listFind(list, val);
    }
    listFlat(list, depth) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listFlat', arguments, 2, 1);
            chk.checkArgs('listFlat', 'list', list, [chk.isList]);
            if (depth !== undefined) {
                chk.checkArgs('listFlat', 'depth', depth, [chk.isInt]);
            }
        }
        return listFlat(list, depth);
    }
    listGet(list, idx) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listGet', arguments, 2);
            chk.checkArgs('listGet', 'list', list, [chk.isList]);
            chk.checkArgs('listGet', 'index', idx, [chk.isInt, chk.isIntL]);
        }
        return listGet(list, idx);
    }
    listHas(list, val) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listHas', arguments, 2);
            chk.checkArgs('listHas', 'list', list, [chk.isList]);
        }
        return listHas(list, val);
    }
    listJoin(...lists) {
        if (this.__debug__) {
            // nothing to check
        }
        return listJoin(...lists);
    }
    listRep(list, n) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRep', arguments, 2);
            chk.checkArgs('listRep', 'n', n, [chk.isInt]);
        }
        return listRep(list, n);
    }
    listRev(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRev', arguments, 1);
            chk.checkArgs('listRev', 'list', list, [chk.isList]);
        }
        return listRev(list);
    }
    listRot(list, rot) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRot', arguments, 2);
            chk.checkArgs('listRot', 'list', list, [chk.isList]);
            chk.checkArgs('listRot', 'rot', rot, [chk.isInt]);
        }
        return listRot(list, rot);
    }
    listSlice(list, start, end) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listSlice', arguments, 3, 2);
            chk.checkArgs('listSlice', 'list', list, [chk.isList]);
            chk.checkArgs('listSlice', 'start', start, [chk.isInt]);
            if (end !== undefined) {
                chk.checkArgs('listSlice', 'end', end, [chk.isInt]);
            }
        }
        return listSlice(list, start, end);
    }
    listSort(list1, list2) {
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
    listZip(...list) {
        if (this.__debug__) {
            if (len(this.__debug__, list) === 1) {
                chk.checkArgs('listZip', 'list1', list[0], [chk.isLList]);
            }
        }
        return listZip(...list);
    }
    range(start, end, step) {
        if (this.__debug__) {
            checkNumArgs_noDebug('range', arguments, 3, 1);
            chk.checkArgs('range', 'start', start, [chk.isNum]);
            if (end !== undefined) {
                chk.checkArgs('range', 'end', end, [chk.isNum]);
            }
            if (step !== undefined) {
                chk.checkArgs('range', 'step', step, [chk.isNum]);
            }
        }
        return range(start, end, step);
    }
    // PLANES ======================================================================================
    plnMake(origin, x_vec, xy_vec) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnMake', arguments, 3);
            chk.checkArgs('plnMake', 'origin', origin, [chk.isXYZ, chk.isXYZL]);
            chk.checkArgs('plnMake', 'x_vec', x_vec, [chk.isXYZ, chk.isXYZL]);
            chk.checkArgs('plnMake', 'xy_vec', xy_vec, [chk.isXYZ, chk.isXYZL]);
        }
        return plnMake(origin, x_vec, xy_vec);
    }
    plnCopy(pln) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnCopy', arguments, 1);
            chk.checkArgs('plnCopy', 'pln', pln, [chk.isPln, chk.isPlnL]);
        }
        return plnCopy(pln);
    }
    plnMove(pln, vec) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnMove', arguments, 2);
            chk.checkArgs('plnMove', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnMove', 'vec', vec, [chk.isXYZ, chk.isXYZL]);
        }
        return plnMove(pln, vec);
    }
    plnRot(pln, ray, ang) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnRot', arguments, 3);
            chk.checkArgs('plnRot', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnRot', 'ray', ray, [chk.isRay, chk.isRayL]);
            chk.checkArgs('plnRot', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return plnRot(pln, ray, ang);
    }
    plnLMove(pln, vec) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLMake', arguments, 2);
            chk.checkArgs('plnLMove', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLMove', 'vec', vec, [chk.isXYZ, chk.isXYZL]);
        }
        return plnLMove(pln, vec);
    }
    plnLRotX(pln, ang) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLRotX', arguments, 2);
            chk.checkArgs('plnLRotX', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLRotX', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return plnLRotX(pln, ang);
    }
    plnLRotY(pln, ang) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLRotY', arguments, 2);
            chk.checkArgs('plnLRotY', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLRotY', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return plnLRotY(pln, ang);
    }
    plnLRotZ(pln, ang) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnLRotZ', arguments, 2);
            chk.checkArgs('plnLRotY', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLRotY', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return plnLRotZ(pln, ang);
    }
    plnFromRay(ray) {
        if (this.__debug__) {
            checkNumArgs_noDebug('plnFromRay', arguments, 1);
            chk.checkArgs('plnFromRay', 'ray', ray, [chk.isRay, chk.isRayL]);
        }
        return plnFromRay(ray);
    }
    // RAND ========================================================================================
    rand(min, max, seed) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rand', arguments, 3, 2);
            chk.checkArgs('rand', 'min', min, [chk.isNum]);
            chk.checkArgs('rand', 'max', max, [chk.isNum]);
        }
        return rand(min, max, seed);
    }
    randInt(min, max, seed) {
        if (this.__debug__) {
            checkNumArgs_noDebug('randInt', arguments, 3, 2);
            chk.checkArgs('randInt', 'min', min, [chk.isNum]);
            chk.checkArgs('randInt', 'max', max, [chk.isNum]);
        }
        return randInt(min, max, seed);
    }
    randPick(list, num, seed) {
        if (this.__debug__) {
            checkNumArgs_noDebug('randPick', arguments, 3, 2);
            chk.checkArgs('randPick', 'list', list, [chk.isList]);
            chk.checkArgs('randPick', 'num', num, [chk.isNum]);
            chk.checkArgs('randPick', 'seed', seed, [chk.isNum]);
        }
        return randPick(list, num, seed);
    }
    // RAYS ========================================================================================
    rayMake(origin, dir, len) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayMake', arguments, 3, 2);
        }
        return rayMake(origin, dir, len);
    }
    rayFromTo(xyz1, xyz2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayFromTo', arguments, 2);
        }
        return rayFromTo(xyz1, xyz2);
    }
    rayCopy(ray) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayCopy', arguments, 1);
            chk.checkArgs('rayCopy', 'ray', ray, [chk.isRay, chk.isRayL]);
        }
        return rayCopy(ray);
    }
    rayMove(ray, vec) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayMove', arguments, 2);
        }
        return rayMove(ray, vec);
    }
    rayRot(ray1, ray2, ang) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayRot', arguments, 3);
        }
        return rayRot(ray1, ray2, ang);
    }
    rayLMove(ray, dist) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayLMove', arguments, 2);
        }
        return rayLMove(ray, dist);
    }
    rayFromPln(pln) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayFromPln', arguments, 1);
        }
        return rayFromPln(pln);
    }
    rayLtoG(r, p) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayLtoG', arguments, 2);
        }
        return rayLtoG(r, p);
    }
    rayGtoL(r, p) {
        if (this.__debug__) {
            checkNumArgs_noDebug('rayGtoL', arguments, 2);
        }
        return rayGtoL(r, p);
    }
    // SETS ========================================================================================
    setMake(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setMake', arguments, 1);
            chk.checkArgs('setMake', 'list', list, [chk.isList]);
        }
        return setMake(list);
    }
    setUni(list1, list2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setUni', arguments, 2);
            chk.checkArgs('setUni', 'list1', list1, [chk.isList]);
            chk.checkArgs('setUni', 'list2', list2, [chk.isList]);
        }
        return setUni(list1, list2);
    }
    setInt(list1, list2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setInt', arguments, 2);
            chk.checkArgs('setInt', 'list1', list1, [chk.isList]);
            chk.checkArgs('setInt', 'list2', list2, [chk.isList]);
        }
        return setInt(list1, list2);
    }
    setDif(list1, list2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setDif', arguments, 2);
            chk.checkArgs('setDif', 'list1', list1, [chk.isList]);
            chk.checkArgs('setDif', 'list2', list2, [chk.isList]);
        }
        return setDif(list1, list2);
    }
    // STATISTICS ==================================================================================
    min(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('min', arguments, 1);
        }
        return min(list);
    }
    max(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('max', arguments, 1);
        }
        return max(list);
    }
    mad(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('mad', arguments, 1);
        }
        return mad(list);
    }
    mean(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('mean', arguments, 1);
        }
        return mean(list);
    }
    median(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('median', arguments, 1);
        }
        return median(list);
    }
    mode(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('mode', arguments, 1);
        }
        return mode(list);
    }
    std(list) {
        if (this.__debug__) {
            checkNumArgs_noDebug('std', arguments, 1);
        }
        return std(list);
    }
    vari(list) {
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
    sin(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sin', arguments, 1);
        }
        return sin(num);
    }
    asin(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('asin', arguments, 1);
        }
        return asin(num);
    }
    sinh(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('sinh', arguments, 1);
        }
        return sinh(num);
    }
    asinh(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('asinh', arguments, 1);
        }
        return asinh(num);
    }
    cos(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('cos', arguments, 1);
        }
        return cos(num);
    }
    acos(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('acos', arguments, 1);
        }
        return acos(num);
    }
    cosh(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('cosh', arguments, 1);
        }
        return cosh(num);
    }
    acosh(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('acosh', arguments, 1);
        }
        return acosh(num);
    }
    tan(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('tan', arguments, 1);
        }
        return tan(num);
    }
    atan(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('atan', arguments, 1);
        }
        return atan(num);
    }
    atan2(xy) {
        if (this.__debug__) {
            checkNumArgs_noDebug('atan2', arguments, 1);
        }
        return atan2(xy);
    }
    tanh(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('tanh', arguments, 1);
        }
        return tanh(num);
    }
    atanh(num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('atanh', arguments, 1);
        }
        return atanh(num);
    }
    // TYPES =======================================================================================
    isNum(v) {
        return isNum(v);
    }
    isInt(v) {
        return isInt(v);
    }
    isFlt(v) {
        return isFlt(v);
    }
    isBool(v) {
        return isBool(v);
    }
    isStr(v) {
        return isStr(v);
    }
    isList(v) {
        return isList(v);
    }
    isDict(v) {
        return isDict(v);
    }
    isVec2(v) {
        return isVec2(v);
    }
    isVec3(v) {
        return isVec3(v);
    }
    isCol(v) {
        return isCol(v);
    }
    isRay(v) {
        return isRay(v);
    }
    isPln(v) {
        return isPln(v);
    }
    isNaN(v) {
        return isNaN(v);
    }
    isNull(v) {
        return isNull(v);
    }
    isUndef(v) {
        return isUndef(v);
    }
    _isWithin(v1, v2, v3) {
        return _isWithin(v1, v2, v3);
    }
    // VECS ========================================================================================
    vecSum(...v) {
        if (this.__debug__) {
            checkArgs('vecSum', 'v', v, [chk.isXYZL, chk.isXYZLL]);
        }
        return vecSum(...v);
    }
    vecAvg(...v) {
        if (this.__debug__) {
            checkArgs('vecAvg', 'v', v, [chk.isXYZL]);
        }
        return vecAvg(...v);
    }
    vecAvgDir(...v) {
        if (this.__debug__) {
            checkArgs('vecAvgDir', 'v', v, [chk.isXYZL]);
        }
        return vecAvgDir(...v);
    }
    vecAdd(v1, v2, norm) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecAdd', arguments, 3, 2);
        }
        return vecAdd(v1, v2, norm);
    }
    vecSub(v1, v2, norm) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecSub', arguments, 3, 2);
        }
        return vecSub(v1, v2, norm);
    }
    vecDiv(v, num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecDiv', arguments, 2);
        }
        return vecDiv(v, num);
    }
    vecMult(v, num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecMult', arguments, 2);
        }
        return vecMult(v, num);
    }
    vecSetLen(v, num) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecSetLen', arguments, 2);
        }
        return vecSetLen(v, num);
    }
    vecDot(v1, v2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecDot', arguments, 2);
        }
        return vecDot(v1, v2);
    }
    vecCross(v1, v2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecCross', arguments, 2);
        }
        return vecCross(v1, v2);
    }
    vecAng(v1, v2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecAng', arguments, 2);
        }
        return vecAng(v1, v2);
    }
    vecFromTo(xyz1, xyz2) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecFromTo', arguments, 2);
        }
        return vecFromTo(xyz1, xyz2);
    }
    vecEqual(v1, v2, tol) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecEqual', arguments, 3);
        }
        return vecEqual(v1, v2, tol);
    }
    vecAng2(v1, v2, v3) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecAng2', arguments, 3);
        }
        return vecAng2(v1, v2, v3);
    }
    vecRot(v1, v2, ang) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecRot', arguments, 3);
        }
        return vecRot(v1, v2, ang);
    }
    vecLen(v) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecLen', arguments, 1);
            checkArgs('vecLen', 'v', v, [chk.isXYZ, chk.isXYZL]);
        }
        return vecLen(v);
    }
    vecNorm(v) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecNorm', arguments, 1);
        }
        return vecNorm(v);
    }
    vecRev(v) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecRev', arguments, 1);
        }
        return vecRev(v);
    }
    vecLtoG(v, p) {
        if (this.__debug__) {
            checkNumArgs_noDebug('vecLtoG', arguments, 2);
        }
        return vecLtoG(v, p);
    }
    vecGtoL(v, p) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0UsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxHQUFHLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxLQUFLLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFDN0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0seUJBQXlCLENBQUM7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Z0dBQWdHO0lBRWhHLEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFNO1FBQ1QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFNO1FBQ1QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFNO1FBQ1QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFNO1FBQ1QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFNO1FBQ1QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFNO1FBQ1QsT0FBTyxNQUFN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