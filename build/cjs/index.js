"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listGet = exports.listFlat = exports.listFind = exports.listEq = exports.listCull = exports.listCount = exports.listCopy = exports.distanceMS = exports.distanceM = exports.distance = exports.project = exports.intersect = exports.dictEq = exports.dictCopy = exports.dictFind = exports.dictHasVal = exports.dictHasKey = exports.dictVals = exports.dictKeys = exports.dictGet = exports.numToCurr = exports.numToStr = exports.degToRad = exports.radToDeg = exports.string = exports.number = exports.boolean = exports.colFromStr = exports.colScale = exports.colFalse = exports.remap = exports.isWithin = exports.isIn = exports.isApprox = exports.norm = exports.hypot = exports.prod = exports.sum = exports.floor = exports.ceil = exports.sigFig = exports.round = exports.log10 = exports.log = exports.exp = exports.sqrt = exports.pow = exports.cube = exports.square = exports.abs = void 0;
exports.strPadR = exports.strPadL = exports.strTrimL = exports.strTrimR = exports.strTrim = exports.strLow = exports.strUpp = exports.strRepl = exports.vari = exports.std = exports.mode = exports.median = exports.mean = exports.mad = exports.max = exports.min = exports.setDif = exports.setInt = exports.setUni = exports.setMake = exports.rayGtoL = exports.rayLtoG = exports.rayFromPln = exports.rayLMove = exports.rayRot = exports.rayMove = exports.rayCopy = exports.rayFromTo = exports.rayMake = exports.randPick = exports.randInt = exports.rand = exports.plnFromRay = exports.plnLRotZ = exports.plnLRotY = exports.plnLRotX = exports.plnLMove = exports.plnRot = exports.plnMove = exports.plnCopy = exports.plnMake = exports.range = exports.listZip = exports.listSort = exports.listSlice = exports.listRot = exports.listRev = exports.listRep = exports.listJoin = exports.listHas = void 0;
exports.vecNorm = exports.vecLen = exports.vecRot = exports.vecAng2 = exports.vecEqual = exports.vecFromTo = exports.vecAng = exports.vecCross = exports.vecDot = exports.vecSetLen = exports.vecMult = exports.vecDiv = exports.vecSub = exports.vecAdd = exports.vecAvgDir = exports.vecAvg = exports.vecSum = exports._isWithin = exports.isUndef = exports.isNull = exports.isNaN = exports.isPln = exports.isRay = exports.isCol = exports.isVec3 = exports.isVec2 = exports.isDict = exports.isList = exports.isStr = exports.isBool = exports.isFlt = exports.isInt = exports.isNum = exports.atanh = exports.tanh = exports.atan2 = exports.atan = exports.tan = exports.acosh = exports.cosh = exports.acos = exports.cos = exports.asinh = exports.sinh = exports.asin = exports.sin = exports.strToJSON = exports.strEnds = exports.strStarts = exports.strSub = void 0;
exports.InlineFuncs = exports.vecGtoL = exports.vecLtoG = exports.vecRev = void 0;
const _check_inline_args_1 = require("./_check_inline_args");
const common_1 = require("./inline/common");
const _check_types_1 = require("./_check_types");
const chk = __importStar(require("./_check_types"));
const constants = __importStar(require("./inline/constants"));
const abs_1 = require("./inline/arithmetic/abs");
Object.defineProperty(exports, "abs", { enumerable: true, get: function () { return abs_1.abs; } });
const square_1 = require("./inline/arithmetic/square");
Object.defineProperty(exports, "square", { enumerable: true, get: function () { return square_1.square; } });
const cube_1 = require("./inline/arithmetic/cube");
Object.defineProperty(exports, "cube", { enumerable: true, get: function () { return cube_1.cube; } });
const pow_1 = require("./inline/arithmetic/pow");
Object.defineProperty(exports, "pow", { enumerable: true, get: function () { return pow_1.pow; } });
const sqrt_1 = require("./inline/arithmetic/sqrt");
Object.defineProperty(exports, "sqrt", { enumerable: true, get: function () { return sqrt_1.sqrt; } });
const exp_1 = require("./inline/arithmetic/exp");
Object.defineProperty(exports, "exp", { enumerable: true, get: function () { return exp_1.exp; } });
const log_1 = require("./inline/arithmetic/log");
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return log_1.log; } });
const log10_1 = require("./inline/arithmetic/log10");
Object.defineProperty(exports, "log10", { enumerable: true, get: function () { return log10_1.log10; } });
const round_1 = require("./inline/arithmetic/round");
Object.defineProperty(exports, "round", { enumerable: true, get: function () { return round_1.round; } });
const sigFig_1 = require("./inline/arithmetic/sigFig");
Object.defineProperty(exports, "sigFig", { enumerable: true, get: function () { return sigFig_1.sigFig; } });
const ceil_1 = require("./inline/arithmetic/ceil");
Object.defineProperty(exports, "ceil", { enumerable: true, get: function () { return ceil_1.ceil; } });
const floor_1 = require("./inline/arithmetic/floor");
Object.defineProperty(exports, "floor", { enumerable: true, get: function () { return floor_1.floor; } });
const sum_1 = require("./inline/arithmetic/sum");
Object.defineProperty(exports, "sum", { enumerable: true, get: function () { return sum_1.sum; } });
const prod_1 = require("./inline/arithmetic/prod");
Object.defineProperty(exports, "prod", { enumerable: true, get: function () { return prod_1.prod; } });
const hypot_1 = require("./inline/arithmetic/hypot");
Object.defineProperty(exports, "hypot", { enumerable: true, get: function () { return hypot_1.hypot; } });
const norm_1 = require("./inline/arithmetic/norm");
Object.defineProperty(exports, "norm", { enumerable: true, get: function () { return norm_1.norm; } });
const isApprox_1 = require("./inline/arithmetic/isApprox");
Object.defineProperty(exports, "isApprox", { enumerable: true, get: function () { return isApprox_1.isApprox; } });
const isIn_1 = require("./inline/arithmetic/isIn");
Object.defineProperty(exports, "isIn", { enumerable: true, get: function () { return isIn_1.isIn; } });
const isWithin_1 = require("./inline/arithmetic/isWithin");
Object.defineProperty(exports, "isWithin", { enumerable: true, get: function () { return isWithin_1.isWithin; } });
const remap_1 = require("./inline/arithmetic/remap");
Object.defineProperty(exports, "remap", { enumerable: true, get: function () { return remap_1.remap; } });
const colFalse_1 = require("./inline/colors/colFalse");
Object.defineProperty(exports, "colFalse", { enumerable: true, get: function () { return colFalse_1.colFalse; } });
const colScale_1 = require("./inline/colors/colScale");
Object.defineProperty(exports, "colScale", { enumerable: true, get: function () { return colScale_1.colScale; } });
const colFromStr_1 = require("./inline/colors/colFromStr");
Object.defineProperty(exports, "colFromStr", { enumerable: true, get: function () { return colFromStr_1.colFromStr; } });
const boolean_1 = require("./inline/conversion/boolean");
Object.defineProperty(exports, "boolean", { enumerable: true, get: function () { return boolean_1.boolean; } });
const number_1 = require("./inline/conversion/number");
Object.defineProperty(exports, "number", { enumerable: true, get: function () { return number_1.number; } });
const string_1 = require("./inline/conversion/string");
Object.defineProperty(exports, "string", { enumerable: true, get: function () { return string_1.string; } });
const radToDeg_1 = require("./inline/conversion/radToDeg");
Object.defineProperty(exports, "radToDeg", { enumerable: true, get: function () { return radToDeg_1.radToDeg; } });
const degToRad_1 = require("./inline/conversion/degToRad");
Object.defineProperty(exports, "degToRad", { enumerable: true, get: function () { return degToRad_1.degToRad; } });
const numToStr_1 = require("./inline/conversion/numToStr");
Object.defineProperty(exports, "numToStr", { enumerable: true, get: function () { return numToStr_1.numToStr; } });
const numToCurr_1 = require("./inline/conversion/numToCurr");
Object.defineProperty(exports, "numToCurr", { enumerable: true, get: function () { return numToCurr_1.numToCurr; } });
const dictGet_1 = require("./inline/dict/dictGet");
Object.defineProperty(exports, "dictGet", { enumerable: true, get: function () { return dictGet_1.dictGet; } });
const dictKeys_1 = require("./inline/dict/dictKeys");
Object.defineProperty(exports, "dictKeys", { enumerable: true, get: function () { return dictKeys_1.dictKeys; } });
const dictVals_1 = require("./inline/dict/dictVals");
Object.defineProperty(exports, "dictVals", { enumerable: true, get: function () { return dictVals_1.dictVals; } });
const dictHasKey_1 = require("./inline/dict/dictHasKey");
Object.defineProperty(exports, "dictHasKey", { enumerable: true, get: function () { return dictHasKey_1.dictHasKey; } });
const dictHasVal_1 = require("./inline/dict/dictHasVal");
Object.defineProperty(exports, "dictHasVal", { enumerable: true, get: function () { return dictHasVal_1.dictHasVal; } });
const dictFind_1 = require("./inline/dict/dictFind");
Object.defineProperty(exports, "dictFind", { enumerable: true, get: function () { return dictFind_1.dictFind; } });
const dictCopy_1 = require("./inline/dict/dictCopy");
Object.defineProperty(exports, "dictCopy", { enumerable: true, get: function () { return dictCopy_1.dictCopy; } });
const dictEq_1 = require("./inline/dict/dictEq");
Object.defineProperty(exports, "dictEq", { enumerable: true, get: function () { return dictEq_1.dictEq; } });
const intersect_1 = require("./inline/geometry/intersect");
Object.defineProperty(exports, "intersect", { enumerable: true, get: function () { return intersect_1.intersect; } });
const project_1 = require("./inline/geometry/project");
Object.defineProperty(exports, "project", { enumerable: true, get: function () { return project_1.project; } });
const distance_1 = require("./inline/geometry/distance");
Object.defineProperty(exports, "distance", { enumerable: true, get: function () { return distance_1.distance; } });
const distanceM_1 = require("./inline/geometry/distanceM");
Object.defineProperty(exports, "distanceM", { enumerable: true, get: function () { return distanceM_1.distanceM; } });
const distanceMS_1 = require("./inline/geometry/distanceMS");
Object.defineProperty(exports, "distanceMS", { enumerable: true, get: function () { return distanceMS_1.distanceMS; } });
const listCopy_1 = require("./inline/list/listCopy");
Object.defineProperty(exports, "listCopy", { enumerable: true, get: function () { return listCopy_1.listCopy; } });
const listCount_1 = require("./inline/list/listCount");
Object.defineProperty(exports, "listCount", { enumerable: true, get: function () { return listCount_1.listCount; } });
const listCull_1 = require("./inline/list/listCull");
Object.defineProperty(exports, "listCull", { enumerable: true, get: function () { return listCull_1.listCull; } });
const listEq_1 = require("./inline/list/listEq");
Object.defineProperty(exports, "listEq", { enumerable: true, get: function () { return listEq_1.listEq; } });
const listFind_1 = require("./inline/list/listFind");
Object.defineProperty(exports, "listFind", { enumerable: true, get: function () { return listFind_1.listFind; } });
const listFlat_1 = require("./inline/list/listFlat");
Object.defineProperty(exports, "listFlat", { enumerable: true, get: function () { return listFlat_1.listFlat; } });
const listGet_1 = require("./inline/list/listGet");
Object.defineProperty(exports, "listGet", { enumerable: true, get: function () { return listGet_1.listGet; } });
const listHas_1 = require("./inline/list/listHas");
Object.defineProperty(exports, "listHas", { enumerable: true, get: function () { return listHas_1.listHas; } });
const listJoin_1 = require("./inline/list/listJoin");
Object.defineProperty(exports, "listJoin", { enumerable: true, get: function () { return listJoin_1.listJoin; } });
const listRep_1 = require("./inline/list/listRep");
Object.defineProperty(exports, "listRep", { enumerable: true, get: function () { return listRep_1.listRep; } });
const listRev_1 = require("./inline/list/listRev");
Object.defineProperty(exports, "listRev", { enumerable: true, get: function () { return listRev_1.listRev; } });
const listRot_1 = require("./inline/list/listRot");
Object.defineProperty(exports, "listRot", { enumerable: true, get: function () { return listRot_1.listRot; } });
const listSlice_1 = require("./inline/list/listSlice");
Object.defineProperty(exports, "listSlice", { enumerable: true, get: function () { return listSlice_1.listSlice; } });
const listSort_1 = require("./inline/list/listSort");
Object.defineProperty(exports, "listSort", { enumerable: true, get: function () { return listSort_1.listSort; } });
const listZip_1 = require("./inline/list/listZip");
Object.defineProperty(exports, "listZip", { enumerable: true, get: function () { return listZip_1.listZip; } });
const range_1 = require("./inline/list/range");
Object.defineProperty(exports, "range", { enumerable: true, get: function () { return range_1.range; } });
const plnMake_1 = require("./inline/plane/plnMake");
Object.defineProperty(exports, "plnMake", { enumerable: true, get: function () { return plnMake_1.plnMake; } });
const plnCopy_1 = require("./inline/plane/plnCopy");
Object.defineProperty(exports, "plnCopy", { enumerable: true, get: function () { return plnCopy_1.plnCopy; } });
const plnMove_1 = require("./inline/plane/plnMove");
Object.defineProperty(exports, "plnMove", { enumerable: true, get: function () { return plnMove_1.plnMove; } });
const plnRot_1 = require("./inline/plane/plnRot");
Object.defineProperty(exports, "plnRot", { enumerable: true, get: function () { return plnRot_1.plnRot; } });
const plnLMove_1 = require("./inline/plane/plnLMove");
Object.defineProperty(exports, "plnLMove", { enumerable: true, get: function () { return plnLMove_1.plnLMove; } });
const plnLRotX_1 = require("./inline/plane/plnLRotX");
Object.defineProperty(exports, "plnLRotX", { enumerable: true, get: function () { return plnLRotX_1.plnLRotX; } });
const plnLRotY_1 = require("./inline/plane/plnLRotY");
Object.defineProperty(exports, "plnLRotY", { enumerable: true, get: function () { return plnLRotY_1.plnLRotY; } });
const plnLRotZ_1 = require("./inline/plane/plnLRotZ");
Object.defineProperty(exports, "plnLRotZ", { enumerable: true, get: function () { return plnLRotZ_1.plnLRotZ; } });
const plnFromRay_1 = require("./inline/plane/plnFromRay");
Object.defineProperty(exports, "plnFromRay", { enumerable: true, get: function () { return plnFromRay_1.plnFromRay; } });
const rand_1 = require("./inline/rand/rand");
Object.defineProperty(exports, "rand", { enumerable: true, get: function () { return rand_1.rand; } });
const randInt_1 = require("./inline/rand/randInt");
Object.defineProperty(exports, "randInt", { enumerable: true, get: function () { return randInt_1.randInt; } });
const randPick_1 = require("./inline/rand/randPick");
Object.defineProperty(exports, "randPick", { enumerable: true, get: function () { return randPick_1.randPick; } });
const rayMake_1 = require("./inline/ray/rayMake");
Object.defineProperty(exports, "rayMake", { enumerable: true, get: function () { return rayMake_1.rayMake; } });
const rayFromTo_1 = require("./inline/ray/rayFromTo");
Object.defineProperty(exports, "rayFromTo", { enumerable: true, get: function () { return rayFromTo_1.rayFromTo; } });
const rayCopy_1 = require("./inline/ray/rayCopy");
Object.defineProperty(exports, "rayCopy", { enumerable: true, get: function () { return rayCopy_1.rayCopy; } });
const rayMove_1 = require("./inline/ray/rayMove");
Object.defineProperty(exports, "rayMove", { enumerable: true, get: function () { return rayMove_1.rayMove; } });
const rayRot_1 = require("./inline/ray/rayRot");
Object.defineProperty(exports, "rayRot", { enumerable: true, get: function () { return rayRot_1.rayRot; } });
const rayLMove_1 = require("./inline/ray/rayLMove");
Object.defineProperty(exports, "rayLMove", { enumerable: true, get: function () { return rayLMove_1.rayLMove; } });
const rayFromPln_1 = require("./inline/ray/rayFromPln");
Object.defineProperty(exports, "rayFromPln", { enumerable: true, get: function () { return rayFromPln_1.rayFromPln; } });
const rayLtoG_1 = require("./inline/ray/rayLtoG");
Object.defineProperty(exports, "rayLtoG", { enumerable: true, get: function () { return rayLtoG_1.rayLtoG; } });
const rayGtoL_1 = require("./inline/ray/rayGtoL");
Object.defineProperty(exports, "rayGtoL", { enumerable: true, get: function () { return rayGtoL_1.rayGtoL; } });
const setMake_1 = require("./inline/set/setMake");
Object.defineProperty(exports, "setMake", { enumerable: true, get: function () { return setMake_1.setMake; } });
const setUni_1 = require("./inline/set/setUni");
Object.defineProperty(exports, "setUni", { enumerable: true, get: function () { return setUni_1.setUni; } });
const setInt_1 = require("./inline/set/setInt");
Object.defineProperty(exports, "setInt", { enumerable: true, get: function () { return setInt_1.setInt; } });
const setDif_1 = require("./inline/set/setDif");
Object.defineProperty(exports, "setDif", { enumerable: true, get: function () { return setDif_1.setDif; } });
const min_1 = require("./inline/statistics/min");
Object.defineProperty(exports, "min", { enumerable: true, get: function () { return min_1.min; } });
const max_1 = require("./inline/statistics/max");
Object.defineProperty(exports, "max", { enumerable: true, get: function () { return max_1.max; } });
const mad_1 = require("./inline/statistics/mad");
Object.defineProperty(exports, "mad", { enumerable: true, get: function () { return mad_1.mad; } });
const mean_1 = require("./inline/statistics/mean");
Object.defineProperty(exports, "mean", { enumerable: true, get: function () { return mean_1.mean; } });
const median_1 = require("./inline/statistics/median");
Object.defineProperty(exports, "median", { enumerable: true, get: function () { return median_1.median; } });
const mode_1 = require("./inline/statistics/mode");
Object.defineProperty(exports, "mode", { enumerable: true, get: function () { return mode_1.mode; } });
const std_1 = require("./inline/statistics/std");
Object.defineProperty(exports, "std", { enumerable: true, get: function () { return std_1.std; } });
const vari_1 = require("./inline/statistics/vari");
Object.defineProperty(exports, "vari", { enumerable: true, get: function () { return vari_1.vari; } });
const strRepl_1 = require("./inline/strs/strRepl");
Object.defineProperty(exports, "strRepl", { enumerable: true, get: function () { return strRepl_1.strRepl; } });
const strUpp_1 = require("./inline/strs/strUpp");
Object.defineProperty(exports, "strUpp", { enumerable: true, get: function () { return strUpp_1.strUpp; } });
const strLow_1 = require("./inline/strs/strLow");
Object.defineProperty(exports, "strLow", { enumerable: true, get: function () { return strLow_1.strLow; } });
const strTrim_1 = require("./inline/strs/strTrim");
Object.defineProperty(exports, "strTrim", { enumerable: true, get: function () { return strTrim_1.strTrim; } });
const strTrimR_1 = require("./inline/strs/strTrimR");
Object.defineProperty(exports, "strTrimR", { enumerable: true, get: function () { return strTrimR_1.strTrimR; } });
const strTrimL_1 = require("./inline/strs/strTrimL");
Object.defineProperty(exports, "strTrimL", { enumerable: true, get: function () { return strTrimL_1.strTrimL; } });
const strPadL_1 = require("./inline/strs/strPadL");
Object.defineProperty(exports, "strPadL", { enumerable: true, get: function () { return strPadL_1.strPadL; } });
const strPadR_1 = require("./inline/strs/strPadR");
Object.defineProperty(exports, "strPadR", { enumerable: true, get: function () { return strPadR_1.strPadR; } });
const strSub_1 = require("./inline/strs/strSub");
Object.defineProperty(exports, "strSub", { enumerable: true, get: function () { return strSub_1.strSub; } });
const strStarts_1 = require("./inline/strs/strStarts");
Object.defineProperty(exports, "strStarts", { enumerable: true, get: function () { return strStarts_1.strStarts; } });
const strEnds_1 = require("./inline/strs/strEnds");
Object.defineProperty(exports, "strEnds", { enumerable: true, get: function () { return strEnds_1.strEnds; } });
const strToJSON_1 = require("./inline/strs/strToJSON");
Object.defineProperty(exports, "strToJSON", { enumerable: true, get: function () { return strToJSON_1.strToJSON; } });
const sin_1 = require("./inline/Trigonometry/sin");
Object.defineProperty(exports, "sin", { enumerable: true, get: function () { return sin_1.sin; } });
const asin_1 = require("./inline/Trigonometry/asin");
Object.defineProperty(exports, "asin", { enumerable: true, get: function () { return asin_1.asin; } });
const sinh_1 = require("./inline/Trigonometry/sinh");
Object.defineProperty(exports, "sinh", { enumerable: true, get: function () { return sinh_1.sinh; } });
const asinh_1 = require("./inline/Trigonometry/asinh");
Object.defineProperty(exports, "asinh", { enumerable: true, get: function () { return asinh_1.asinh; } });
const cos_1 = require("./inline/Trigonometry/cos");
Object.defineProperty(exports, "cos", { enumerable: true, get: function () { return cos_1.cos; } });
const acos_1 = require("./inline/Trigonometry/acos");
Object.defineProperty(exports, "acos", { enumerable: true, get: function () { return acos_1.acos; } });
const cosh_1 = require("./inline/Trigonometry/cosh");
Object.defineProperty(exports, "cosh", { enumerable: true, get: function () { return cosh_1.cosh; } });
const acosh_1 = require("./inline/Trigonometry/acosh");
Object.defineProperty(exports, "acosh", { enumerable: true, get: function () { return acosh_1.acosh; } });
const tan_1 = require("./inline/Trigonometry/tan");
Object.defineProperty(exports, "tan", { enumerable: true, get: function () { return tan_1.tan; } });
const atan_1 = require("./inline/Trigonometry/atan");
Object.defineProperty(exports, "atan", { enumerable: true, get: function () { return atan_1.atan; } });
const atan2_1 = require("./inline/Trigonometry/atan2");
Object.defineProperty(exports, "atan2", { enumerable: true, get: function () { return atan2_1.atan2; } });
const tanh_1 = require("./inline/Trigonometry/tanh");
Object.defineProperty(exports, "tanh", { enumerable: true, get: function () { return tanh_1.tanh; } });
const atanh_1 = require("./inline/Trigonometry/atanh");
Object.defineProperty(exports, "atanh", { enumerable: true, get: function () { return atanh_1.atanh; } });
const isNum_1 = require("./inline/types/isNum");
Object.defineProperty(exports, "isNum", { enumerable: true, get: function () { return isNum_1.isNum; } });
const isInt_1 = require("./inline/types/isInt");
Object.defineProperty(exports, "isInt", { enumerable: true, get: function () { return isInt_1.isInt; } });
const isFlt_1 = require("./inline/types/isFlt");
Object.defineProperty(exports, "isFlt", { enumerable: true, get: function () { return isFlt_1.isFlt; } });
const isBool_1 = require("./inline/types/isBool");
Object.defineProperty(exports, "isBool", { enumerable: true, get: function () { return isBool_1.isBool; } });
const isStr_1 = require("./inline/types/isStr");
Object.defineProperty(exports, "isStr", { enumerable: true, get: function () { return isStr_1.isStr; } });
const isList_1 = require("./inline/types/isList");
Object.defineProperty(exports, "isList", { enumerable: true, get: function () { return isList_1.isList; } });
const isDict_1 = require("./inline/types/isDict");
Object.defineProperty(exports, "isDict", { enumerable: true, get: function () { return isDict_1.isDict; } });
const isVec2_1 = require("./inline/types/isVec2");
Object.defineProperty(exports, "isVec2", { enumerable: true, get: function () { return isVec2_1.isVec2; } });
const isVec3_1 = require("./inline/types/isVec3");
Object.defineProperty(exports, "isVec3", { enumerable: true, get: function () { return isVec3_1.isVec3; } });
const isCol_1 = require("./inline/types/isCol");
Object.defineProperty(exports, "isCol", { enumerable: true, get: function () { return isCol_1.isCol; } });
const isRay_1 = require("./inline/types/isRay");
Object.defineProperty(exports, "isRay", { enumerable: true, get: function () { return isRay_1.isRay; } });
const isPln_1 = require("./inline/types/isPln");
Object.defineProperty(exports, "isPln", { enumerable: true, get: function () { return isPln_1.isPln; } });
const isNaN_1 = require("./inline/types/isNaN");
Object.defineProperty(exports, "isNaN", { enumerable: true, get: function () { return isNaN_1.isNaN; } });
const isNull_1 = require("./inline/types/isNull");
Object.defineProperty(exports, "isNull", { enumerable: true, get: function () { return isNull_1.isNull; } });
const isUndef_1 = require("./inline/types/isUndef");
Object.defineProperty(exports, "isUndef", { enumerable: true, get: function () { return isUndef_1.isUndef; } });
const common_2 = require("./inline/types/common");
Object.defineProperty(exports, "_isWithin", { enumerable: true, get: function () { return common_2._isWithin; } });
const vecSum_1 = require("./inline/vec/vecSum");
Object.defineProperty(exports, "vecSum", { enumerable: true, get: function () { return vecSum_1.vecSum; } });
const vecAvg_1 = require("./inline/vec/vecAvg");
Object.defineProperty(exports, "vecAvg", { enumerable: true, get: function () { return vecAvg_1.vecAvg; } });
const vecAvgDir_1 = require("./inline/vec/vecAvgDir");
Object.defineProperty(exports, "vecAvgDir", { enumerable: true, get: function () { return vecAvgDir_1.vecAvgDir; } });
const vecAdd_1 = require("./inline/vec/vecAdd");
Object.defineProperty(exports, "vecAdd", { enumerable: true, get: function () { return vecAdd_1.vecAdd; } });
const vecSub_1 = require("./inline/vec/vecSub");
Object.defineProperty(exports, "vecSub", { enumerable: true, get: function () { return vecSub_1.vecSub; } });
const vecDiv_1 = require("./inline/vec/vecDiv");
Object.defineProperty(exports, "vecDiv", { enumerable: true, get: function () { return vecDiv_1.vecDiv; } });
const vecMult_1 = require("./inline/vec/vecMult");
Object.defineProperty(exports, "vecMult", { enumerable: true, get: function () { return vecMult_1.vecMult; } });
const vecSetLen_1 = require("./inline/vec/vecSetLen");
Object.defineProperty(exports, "vecSetLen", { enumerable: true, get: function () { return vecSetLen_1.vecSetLen; } });
const vecDot_1 = require("./inline/vec/vecDot");
Object.defineProperty(exports, "vecDot", { enumerable: true, get: function () { return vecDot_1.vecDot; } });
const vecCross_1 = require("./inline/vec/vecCross");
Object.defineProperty(exports, "vecCross", { enumerable: true, get: function () { return vecCross_1.vecCross; } });
const vecAng_1 = require("./inline/vec/vecAng");
Object.defineProperty(exports, "vecAng", { enumerable: true, get: function () { return vecAng_1.vecAng; } });
const vecFromTo_1 = require("./inline/vec/vecFromTo");
Object.defineProperty(exports, "vecFromTo", { enumerable: true, get: function () { return vecFromTo_1.vecFromTo; } });
const vecEqual_1 = require("./inline/vec/vecEqual");
Object.defineProperty(exports, "vecEqual", { enumerable: true, get: function () { return vecEqual_1.vecEqual; } });
const vecAng2_1 = require("./inline/vec/vecAng2");
Object.defineProperty(exports, "vecAng2", { enumerable: true, get: function () { return vecAng2_1.vecAng2; } });
const vecRot_1 = require("./inline/vec/vecRot");
Object.defineProperty(exports, "vecRot", { enumerable: true, get: function () { return vecRot_1.vecRot; } });
const vecLen_1 = require("./inline/vec/vecLen");
Object.defineProperty(exports, "vecLen", { enumerable: true, get: function () { return vecLen_1.vecLen; } });
const vecNorm_1 = require("./inline/vec/vecNorm");
Object.defineProperty(exports, "vecNorm", { enumerable: true, get: function () { return vecNorm_1.vecNorm; } });
const vecRev_1 = require("./inline/vec/vecRev");
Object.defineProperty(exports, "vecRev", { enumerable: true, get: function () { return vecRev_1.vecRev; } });
const vecLtoG_1 = require("./inline/vec/vecLtoG");
Object.defineProperty(exports, "vecLtoG", { enumerable: true, get: function () { return vecLtoG_1.vecLtoG; } });
const vecGtoL_1 = require("./inline/vec/vecGtoL");
Object.defineProperty(exports, "vecGtoL", { enumerable: true, get: function () { return vecGtoL_1.vecGtoL; } });
class InlineFuncs {
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
            (0, _check_inline_args_1.checkNumArgs_noDebug)('abs', arguments, 1);
            chk.checkArgs('abs', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return (0, abs_1.abs)(num);
    }
    square(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('square', arguments, 1);
            chk.checkArgs('square', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return (0, square_1.square)(list);
    }
    cube(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('cube', arguments, 1);
            chk.checkArgs('cube', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return (0, cube_1.cube)(list);
    }
    pow(base, xp) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('pow', arguments, 2);
            chk.checkArgs('pow', 'base', base, [chk.isNum, chk.isNumL]);
            chk.checkArgs('pow', 'xp', xp, [chk.isNum]);
        }
        return (0, pow_1.pow)(base, xp);
    }
    sqrt(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('sqrt', arguments, 1);
            chk.checkArgs('sqrt', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return (0, sqrt_1.sqrt)(num);
    }
    exp(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('exp', arguments, 1);
            chk.checkArgs('exp', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return (0, exp_1.exp)(num);
    }
    log(base) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('log', arguments, 1);
            chk.checkArgs('log', 'base', base, [chk.isNum, chk.isNumL]);
        }
        return (0, log_1.log)(base);
    }
    log10(base) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('log10', arguments, 1);
            chk.checkArgs('log10', 'base', base, [chk.isNum, chk.isNumL]);
        }
        return (0, log10_1.log10)(base);
    }
    round(num, dec_pla = 0) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('round', arguments, 2, 1);
            chk.checkArgs('round', 'num', num, [chk.isNum, chk.isNumL]);
            chk.checkArgs('round', 'dec_pla', dec_pla, [chk.isInt]);
        }
        return (0, round_1.round)(num, dec_pla);
    }
    sigFig(num, sig_figs) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('sigFig', arguments, 2);
            chk.checkArgs('sigFig', 'num', num, [chk.isNum, chk.isNumL]);
            chk.checkArgs('sigFig', 'sig_figs', sig_figs, [chk.isInt]);
        }
        return (0, sigFig_1.sigFig)(num, sig_figs);
    }
    ceil(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('ceil', arguments, 1);
            chk.checkArgs('ceil', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return (0, ceil_1.ceil)(num);
    }
    floor(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('floor', arguments, 1);
            chk.checkArgs('floor', 'num', num, [chk.isNum, chk.isNumL]);
        }
        return (0, floor_1.floor)(num);
    }
    sum(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('sum', arguments, 1);
            chk.checkArgs('sum', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return (0, sum_1.sum)(list);
    }
    prod(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('prod', arguments, 1);
            chk.checkArgs('prod', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return (0, prod_1.prod)(list);
    }
    hypot(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('hypot', arguments, 1);
            chk.checkArgs('hypot', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return (0, hypot_1.hypot)(list);
    }
    norm(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('norm', arguments, 1, 2);
            chk.checkArgs('norm', 'list', list, [chk.isNum, chk.isNumL]);
        }
        return (0, norm_1.norm)(list);
    }
    isApprox(n1, n2, t) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('isApprox', arguments, 3);
            chk.checkArgs('isApprox', 'n1', n1, [chk.isNum]);
            chk.checkArgs('isApprox', 'n2', n2, [chk.isNum]);
            chk.checkArgs('isApprox', 't', t, [chk.isNum]);
        }
        return (0, isApprox_1.isApprox)(n1, n2, t);
    }
    isIn(v1, v2, v3) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('isIn', arguments, 3);
        }
        return (0, isIn_1.isIn)(v1, v2, v3);
    }
    isWithin(v1, v2, v3) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('isWithin', arguments, 3);
        }
        return (0, isWithin_1.isWithin)(v1, v2, v3);
    }
    remap(num, d1, d2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('remap', arguments, 3);
            chk.checkArgs('remap', 'num', num, [chk.isNum, chk.isNumL]);
            chk.checkArgs('remap', 'd1', d1, [chk.isNumL]);
            chk.checkArgs('remap', 'd2', d2, [chk.isNumL]);
        }
        return (0, remap_1.remap)(num, d1, d2);
    }
    // COLORS ======================================================================================
    colFalse(vals, min, max) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('colFalse', arguments, 3);
            chk.checkArgs('colFalse', 'vals', vals, [chk.isNum, chk.isNumL]);
            chk.checkArgs('colFalse', 'min', min, [chk.isNum]);
            chk.checkArgs('colFalse', 'max', max, [chk.isNum]);
        }
        return (0, colFalse_1.colFalse)(vals, min, max);
    }
    colScale(vals, min, max, scale) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('colScale', arguments, 4);
            chk.checkArgs('colScale', 'vals', vals, [chk.isNum, chk.isNumL]);
            chk.checkArgs('colScale', 'min', min, [chk.isNum]);
            chk.checkArgs('colScale', 'max', max, [chk.isNum]);
            //TODO argcheck for scale: list or string representing brewer scale?
        }
        return (0, colScale_1.colScale)(vals, min, max, scale);
    }
    colFromStr(col_str) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('colFromStr', arguments, 1);
            (0, _check_types_1.checkArgs)('colFromStr', 'col_str', col_str, [chk.isStr, chk.isStrL]);
        }
        return (0, colFromStr_1.colFromStr)(col_str);
    }
    // CONVERSION ==================================================================================
    boolean(val) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('boolean', arguments, 1);
        }
        return (0, boolean_1.boolean)(val);
    }
    number(val) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('number', arguments, 1);
        }
        return (0, number_1.number)(val);
    }
    string(val) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('string', arguments, 1);
        }
        return (0, string_1.string)(val);
    }
    radToDeg(rad) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('radToDeg', arguments, 1);
        }
        return (0, radToDeg_1.radToDeg)(rad);
    }
    degToRad(deg) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('degToRad', arguments, 1);
        }
        return (0, degToRad_1.degToRad)(deg);
    }
    numToStr(num, frac_digits, locale) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('numToStr', arguments, 3, 1);
        }
        return (0, numToStr_1.numToStr)(num, frac_digits, locale);
    }
    numToCurr(num, currency, locale) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('numToCurr', arguments, 3, 2);
        }
        return (0, numToCurr_1.numToCurr)(num, currency, locale);
    }
    // DICTIONARIES=================================================================================
    dictGet(dict, key) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('dictGet', arguments, 2);
            chk.checkArgs('dictGet', 'dict', dict, [chk.isDict]);
            chk.checkArgs('dictGet', 'key', key, [chk.isStr, chk.isStrL]);
        }
        return (0, dictGet_1.dictGet)(dict, key);
    }
    dictKeys(dict) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('dictKeys', arguments, 1);
            chk.checkArgs('dictKeys', 'dict', dict, [chk.isDict]);
        }
        return (0, dictKeys_1.dictKeys)(dict);
    }
    dictVals(dict) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('dictVals', arguments, 1);
            chk.checkArgs('dictVals', 'dict', dict, [chk.isDict]);
        }
        return (0, dictVals_1.dictVals)(dict);
    }
    dictHasKey(dict, key) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('dictHasKey', arguments, 2);
            chk.checkArgs('dictHasKey', 'dict', dict, [chk.isDict]);
            chk.checkArgs('dictHasKey', 'key', key, [chk.isStr, chk.isStrL]);
        }
        return (0, dictHasKey_1.dictHasKey)(dict, key);
    }
    dictHasVal(dict, val) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('dictHasVal', arguments, 2);
            chk.checkArgs('dictHasVal', 'dict', dict, [chk.isDict]);
        }
        return (0, dictHasVal_1.dictHasVal)(dict, val);
    }
    dictFind(dict, val) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('dictFind', arguments, 2);
            chk.checkArgs('dictFind', 'dict', dict, [chk.isDict]);
        }
        return (0, dictFind_1.dictFind)(dict, val);
    }
    dictCopy(dict) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('dictCopy', arguments, 1);
            chk.checkArgs('dictCopy', 'dict', dict, [chk.isDict]);
        }
        return (0, dictCopy_1.dictCopy)(dict);
    }
    dictEq(dict1, dict2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('dictEq', arguments, 2);
            chk.checkArgs('dictEq', 'dict1', dict1, [chk.isDict]);
            chk.checkArgs('dictEq', 'dict2', dict2, [chk.isDict]);
        }
        return (0, dictEq_1.dictEq)(dict1, dict2);
    }
    // GEOMETRY ====================================================================================
    intersect(r1, r2, met = 2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('intersect', arguments, 3, 2);
            chk.checkArgs('intersect', 'r1', r1, [chk.isRay]);
            chk.checkArgs('intersect', 'r2', r2, [chk.isRay]);
        }
        return (0, intersect_1.intersect)(r1, r2, met);
    }
    project(c, r, met = 2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('project', arguments, 3, 2);
            chk.checkArgs('project', 'c', c, [chk.isXYZ]);
            chk.checkArgs('project', 'r', r, [chk.isRay, chk.isPln]);
        }
        return (0, project_1.project)(c, r, met);
    }
    distance(c1, c2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('distance', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return (0, distance_1.distance)(c1, c2);
    }
    distanceM(c1, c2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('distanceM', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return (0, distanceM_1.distanceM)(c1, c2);
    }
    distanceMS(c1, c2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('distanceMS', arguments, 2);
            chk.checkArgs('project', 'c1', c1, [chk.isXYZ]);
            chk.checkArgs('project', 'c2', c2, [chk.isXYZ, chk.isRay, chk.isPln]);
        }
        return (0, distanceMS_1.distanceMS)(c1, c2);
    }
    // LIST ========================================================================================
    listCopy(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listCopy', arguments, 1);
            chk.checkArgs('listCopy', 'list', list, [chk.isList]);
        }
        return (0, listCopy_1.listCopy)(list);
    }
    listCount(list, val) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listCount', arguments, 2);
            chk.checkArgs('listCount', 'list', list, [chk.isList]);
        }
        return (0, listCount_1.listCount)(list, val);
    }
    listCull(list1, list2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listCull', arguments, 2, 1);
            chk.checkArgs('listCull', 'list1', list1, [chk.isList]);
            if (list2 !== undefined) {
                chk.checkArgs('listCull', 'list2', list2, [chk.isList]);
            }
        }
        return (0, listCull_1.listCull)(list1, list2);
    }
    listEq(list1, list2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listEq', arguments, 2);
            chk.checkArgs('listEq', 'list1', list1, [chk.isList]);
            chk.checkArgs('listEq', 'list2', list2, [chk.isList]);
        }
        return (0, listEq_1.listEq)(list1, list2);
    }
    listFind(list, val) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listFind', arguments, 2);
            chk.checkArgs('listFind', 'list', list, [chk.isList]);
        }
        return (0, listFind_1.listFind)(list, val);
    }
    listFlat(list, depth) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listFlat', arguments, 2, 1);
            chk.checkArgs('listFlat', 'list', list, [chk.isList]);
            if (depth !== undefined) {
                chk.checkArgs('listFlat', 'depth', depth, [chk.isInt]);
            }
        }
        return (0, listFlat_1.listFlat)(list, depth);
    }
    listGet(list, idx) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listGet', arguments, 2);
            chk.checkArgs('listGet', 'list', list, [chk.isList]);
            chk.checkArgs('listGet', 'index', idx, [chk.isInt, chk.isIntL]);
        }
        return (0, listGet_1.listGet)(list, idx);
    }
    listHas(list, val) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listHas', arguments, 2);
            chk.checkArgs('listHas', 'list', list, [chk.isList]);
        }
        return (0, listHas_1.listHas)(list, val);
    }
    listJoin(...lists) {
        if (this.__debug__) {
            // nothing to check
        }
        return (0, listJoin_1.listJoin)(...lists);
    }
    listRep(list, n) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listRep', arguments, 2);
            chk.checkArgs('listRep', 'n', n, [chk.isInt]);
        }
        return (0, listRep_1.listRep)(list, n);
    }
    listRev(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listRev', arguments, 1);
            chk.checkArgs('listRev', 'list', list, [chk.isList]);
        }
        return (0, listRev_1.listRev)(list);
    }
    listRot(list, rot) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listRot', arguments, 2);
            chk.checkArgs('listRot', 'list', list, [chk.isList]);
            chk.checkArgs('listRot', 'rot', rot, [chk.isInt]);
        }
        return (0, listRot_1.listRot)(list, rot);
    }
    listSlice(list, start, end) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listSlice', arguments, 3, 2);
            chk.checkArgs('listSlice', 'list', list, [chk.isList]);
            chk.checkArgs('listSlice', 'start', start, [chk.isInt]);
            if (end !== undefined) {
                chk.checkArgs('listSlice', 'end', end, [chk.isInt]);
            }
        }
        return (0, listSlice_1.listSlice)(list, start, end);
    }
    listSort(list1, list2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('listSort', arguments, 2, 1);
            chk.checkArgs('listSort', 'list1', list1, [chk.isList]);
            if (list2 !== undefined) {
                chk.checkArgs('listSort', 'list2', list1, [chk.isList]);
                (0, _check_inline_args_1.checkListsSameLen)('listSort', arguments);
            }
        }
        return (0, listSort_1.listSort)(list1, list2);
    }
    listZip(...list) {
        if (this.__debug__) {
            if ((0, common_1.len)(this.__debug__, list) === 1) {
                chk.checkArgs('listZip', 'list1', list[0], [chk.isLList]);
            }
        }
        return (0, listZip_1.listZip)(...list);
    }
    range(start, end, step) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('range', arguments, 3, 1);
            chk.checkArgs('range', 'start', start, [chk.isNum]);
            if (end !== undefined) {
                chk.checkArgs('range', 'end', end, [chk.isNum]);
            }
            if (step !== undefined) {
                chk.checkArgs('range', 'step', step, [chk.isNum]);
            }
        }
        return (0, range_1.range)(start, end, step);
    }
    // PLANES ======================================================================================
    plnMake(origin, x_vec, xy_vec) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('plnMake', arguments, 3);
            chk.checkArgs('plnMake', 'origin', origin, [chk.isXYZ, chk.isXYZL]);
            chk.checkArgs('plnMake', 'x_vec', x_vec, [chk.isXYZ, chk.isXYZL]);
            chk.checkArgs('plnMake', 'xy_vec', xy_vec, [chk.isXYZ, chk.isXYZL]);
        }
        return (0, plnMake_1.plnMake)(origin, x_vec, xy_vec);
    }
    plnCopy(pln) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('plnCopy', arguments, 1);
            chk.checkArgs('plnCopy', 'pln', pln, [chk.isPln, chk.isPlnL]);
        }
        return (0, plnCopy_1.plnCopy)(pln);
    }
    plnMove(pln, vec) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('plnMove', arguments, 2);
            chk.checkArgs('plnMove', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnMove', 'vec', vec, [chk.isXYZ, chk.isXYZL]);
        }
        return (0, plnMove_1.plnMove)(pln, vec);
    }
    plnRot(pln, ray, ang) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('plnRot', arguments, 3);
            chk.checkArgs('plnRot', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnRot', 'ray', ray, [chk.isRay, chk.isRayL]);
            chk.checkArgs('plnRot', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return (0, plnRot_1.plnRot)(pln, ray, ang);
    }
    plnLMove(pln, vec) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('plnLMake', arguments, 2);
            chk.checkArgs('plnLMove', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLMove', 'vec', vec, [chk.isXYZ, chk.isXYZL]);
        }
        return (0, plnLMove_1.plnLMove)(pln, vec);
    }
    plnLRotX(pln, ang) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('plnLRotX', arguments, 2);
            chk.checkArgs('plnLRotX', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLRotX', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return (0, plnLRotX_1.plnLRotX)(pln, ang);
    }
    plnLRotY(pln, ang) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('plnLRotY', arguments, 2);
            chk.checkArgs('plnLRotY', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLRotY', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return (0, plnLRotY_1.plnLRotY)(pln, ang);
    }
    plnLRotZ(pln, ang) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('plnLRotZ', arguments, 2);
            chk.checkArgs('plnLRotY', 'pln', pln, [chk.isPln, chk.isPlnL]);
            chk.checkArgs('plnLRotY', 'ang', ang, [chk.isNum, chk.isNumL]);
        }
        return (0, plnLRotZ_1.plnLRotZ)(pln, ang);
    }
    plnFromRay(ray) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('plnFromRay', arguments, 1);
            chk.checkArgs('plnFromRay', 'ray', ray, [chk.isRay, chk.isRayL]);
        }
        return (0, plnFromRay_1.plnFromRay)(ray);
    }
    // RAND ========================================================================================
    rand(min, max, seed) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rand', arguments, 3, 2);
            chk.checkArgs('rand', 'min', min, [chk.isNum]);
            chk.checkArgs('rand', 'max', max, [chk.isNum]);
        }
        return (0, rand_1.rand)(min, max, seed);
    }
    randInt(min, max, seed) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('randInt', arguments, 3, 2);
            chk.checkArgs('randInt', 'min', min, [chk.isNum]);
            chk.checkArgs('randInt', 'max', max, [chk.isNum]);
        }
        return (0, randInt_1.randInt)(min, max, seed);
    }
    randPick(list, num, seed) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('randPick', arguments, 3, 2);
            chk.checkArgs('randPick', 'list', list, [chk.isList]);
            chk.checkArgs('randPick', 'num', num, [chk.isNum]);
            chk.checkArgs('randPick', 'seed', seed, [chk.isNum]);
        }
        return (0, randPick_1.randPick)(list, num, seed);
    }
    // RAYS ========================================================================================
    rayMake(origin, dir, len) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rayMake', arguments, 3, 2);
        }
        return (0, rayMake_1.rayMake)(origin, dir, len);
    }
    rayFromTo(xyz1, xyz2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rayFromTo', arguments, 2);
        }
        return (0, rayFromTo_1.rayFromTo)(xyz1, xyz2);
    }
    rayCopy(ray) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rayCopy', arguments, 1);
            chk.checkArgs('rayCopy', 'ray', ray, [chk.isRay, chk.isRayL]);
        }
        return (0, rayCopy_1.rayCopy)(ray);
    }
    rayMove(ray, vec) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rayMove', arguments, 2);
        }
        return (0, rayMove_1.rayMove)(ray, vec);
    }
    rayRot(ray1, ray2, ang) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rayRot', arguments, 3);
        }
        return (0, rayRot_1.rayRot)(ray1, ray2, ang);
    }
    rayLMove(ray, dist) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rayLMove', arguments, 2);
        }
        return (0, rayLMove_1.rayLMove)(ray, dist);
    }
    rayFromPln(pln) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rayFromPln', arguments, 1);
        }
        return (0, rayFromPln_1.rayFromPln)(pln);
    }
    rayLtoG(r, p) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rayLtoG', arguments, 2);
        }
        return (0, rayLtoG_1.rayLtoG)(r, p);
    }
    rayGtoL(r, p) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('rayGtoL', arguments, 2);
        }
        return (0, rayGtoL_1.rayGtoL)(r, p);
    }
    // SETS ========================================================================================
    setMake(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('setMake', arguments, 1);
            chk.checkArgs('setMake', 'list', list, [chk.isList]);
        }
        return (0, setMake_1.setMake)(list);
    }
    setUni(list1, list2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('setUni', arguments, 2);
            chk.checkArgs('setUni', 'list1', list1, [chk.isList]);
            chk.checkArgs('setUni', 'list2', list2, [chk.isList]);
        }
        return (0, setUni_1.setUni)(list1, list2);
    }
    setInt(list1, list2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('setInt', arguments, 2);
            chk.checkArgs('setInt', 'list1', list1, [chk.isList]);
            chk.checkArgs('setInt', 'list2', list2, [chk.isList]);
        }
        return (0, setInt_1.setInt)(list1, list2);
    }
    setDif(list1, list2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('setDif', arguments, 2);
            chk.checkArgs('setDif', 'list1', list1, [chk.isList]);
            chk.checkArgs('setDif', 'list2', list2, [chk.isList]);
        }
        return (0, setDif_1.setDif)(list1, list2);
    }
    // STATISTICS ==================================================================================
    min(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('min', arguments, 1);
        }
        return (0, min_1.min)(list);
    }
    max(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('max', arguments, 1);
        }
        return (0, max_1.max)(list);
    }
    mad(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('mad', arguments, 1);
        }
        return (0, mad_1.mad)(list);
    }
    mean(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('mean', arguments, 1);
        }
        return (0, mean_1.mean)(list);
    }
    median(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('median', arguments, 1);
        }
        return (0, median_1.median)(list);
    }
    mode(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('mode', arguments, 1);
        }
        return (0, mode_1.mode)(list);
    }
    std(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('std', arguments, 1);
        }
        return (0, std_1.std)(list);
    }
    vari(list) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vari', arguments, 1);
        }
        return (0, vari_1.vari)(list);
    }
    // STRINGS =====================================================================================
    strRepl(str, search_str, new_str) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strRepl', arguments, 3);
        }
        return (0, strRepl_1.strRepl)(str, search_str, new_str);
    }
    strUpp(str) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strUpp', arguments, 1);
        }
        return (0, strUpp_1.strUpp)(str);
    }
    strLow(str) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strLow', arguments, 1);
        }
        return (0, strLow_1.strLow)(str);
    }
    strTrim(str) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strTrim', arguments, 1);
        }
        return (0, strTrim_1.strTrim)(str);
    }
    strTrimR(str) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strTrimR', arguments, 1);
        }
        return (0, strTrimR_1.strTrimR)(str);
    }
    strTrimL(str) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strTrimL', arguments, 1);
        }
        return (0, strTrimL_1.strTrimL)(str);
    }
    strPadL(str, max, fill) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strPadL', arguments, 3, 2);
        }
        return (0, strPadL_1.strPadL)(str, max, fill);
    }
    strPadR(str, max, fill) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strPadR', arguments, 3, 2);
        }
        return (0, strPadR_1.strPadR)(str, max, fill);
    }
    strSub(str, from, length) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strSub', arguments, 3, 2);
        }
        return (0, strSub_1.strSub)(str, from, length);
    }
    strStarts(str, starts) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strStarts', arguments, 2);
        }
        return (0, strStarts_1.strStarts)(str, starts);
    }
    strEnds(str, ends) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strEnds', arguments, 2);
        }
        return (0, strEnds_1.strEnds)(str, ends);
    }
    strToJSON(str) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('strToJSON', arguments, 1);
        }
        return (0, strToJSON_1.strToJSON)(str);
    }
    // TRIGONOMETRY ================================================================================
    sin(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('sin', arguments, 1);
        }
        return (0, sin_1.sin)(num);
    }
    asin(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('asin', arguments, 1);
        }
        return (0, asin_1.asin)(num);
    }
    sinh(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('sinh', arguments, 1);
        }
        return (0, sinh_1.sinh)(num);
    }
    asinh(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('asinh', arguments, 1);
        }
        return (0, asinh_1.asinh)(num);
    }
    cos(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('cos', arguments, 1);
        }
        return (0, cos_1.cos)(num);
    }
    acos(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('acos', arguments, 1);
        }
        return (0, acos_1.acos)(num);
    }
    cosh(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('cosh', arguments, 1);
        }
        return (0, cosh_1.cosh)(num);
    }
    acosh(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('acosh', arguments, 1);
        }
        return (0, acosh_1.acosh)(num);
    }
    tan(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('tan', arguments, 1);
        }
        return (0, tan_1.tan)(num);
    }
    atan(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('atan', arguments, 1);
        }
        return (0, atan_1.atan)(num);
    }
    atan2(xy) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('atan2', arguments, 1);
        }
        return (0, atan2_1.atan2)(xy);
    }
    tanh(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('tanh', arguments, 1);
        }
        return (0, tanh_1.tanh)(num);
    }
    atanh(num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('atanh', arguments, 1);
        }
        return (0, atanh_1.atanh)(num);
    }
    // TYPES =======================================================================================
    isNum(v) {
        return (0, isNum_1.isNum)(v);
    }
    isInt(v) {
        return (0, isInt_1.isInt)(v);
    }
    isFlt(v) {
        return (0, isFlt_1.isFlt)(v);
    }
    isBool(v) {
        return (0, isBool_1.isBool)(v);
    }
    isStr(v) {
        return (0, isStr_1.isStr)(v);
    }
    isList(v) {
        return (0, isList_1.isList)(v);
    }
    isDict(v) {
        return (0, isDict_1.isDict)(v);
    }
    isVec2(v) {
        return (0, isVec2_1.isVec2)(v);
    }
    isVec3(v) {
        return (0, isVec3_1.isVec3)(v);
    }
    isCol(v) {
        return (0, isCol_1.isCol)(v);
    }
    isRay(v) {
        return (0, isRay_1.isRay)(v);
    }
    isPln(v) {
        return (0, isPln_1.isPln)(v);
    }
    isNaN(v) {
        return (0, isNaN_1.isNaN)(v);
    }
    isNull(v) {
        return (0, isNull_1.isNull)(v);
    }
    isUndef(v) {
        return (0, isUndef_1.isUndef)(v);
    }
    _isWithin(v1, v2, v3) {
        return (0, common_2._isWithin)(v1, v2, v3);
    }
    // VECS ========================================================================================
    vecSum(...v) {
        if (this.__debug__) {
            (0, _check_types_1.checkArgs)('vecSum', 'v', v, [chk.isXYZL, chk.isXYZLL]);
        }
        return (0, vecSum_1.vecSum)(...v);
    }
    vecAvg(...v) {
        if (this.__debug__) {
            (0, _check_types_1.checkArgs)('vecAvg', 'v', v, [chk.isXYZL]);
        }
        return (0, vecAvg_1.vecAvg)(...v);
    }
    vecAvgDir(...v) {
        if (this.__debug__) {
            (0, _check_types_1.checkArgs)('vecAvgDir', 'v', v, [chk.isXYZL]);
        }
        return (0, vecAvgDir_1.vecAvgDir)(...v);
    }
    vecAdd(v1, v2, norm) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecAdd', arguments, 3, 2);
        }
        return (0, vecAdd_1.vecAdd)(v1, v2, norm);
    }
    vecSub(v1, v2, norm) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecSub', arguments, 3, 2);
        }
        return (0, vecSub_1.vecSub)(v1, v2, norm);
    }
    vecDiv(v, num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecDiv', arguments, 2);
        }
        return (0, vecDiv_1.vecDiv)(v, num);
    }
    vecMult(v, num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecMult', arguments, 2);
        }
        return (0, vecMult_1.vecMult)(v, num);
    }
    vecSetLen(v, num) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecSetLen', arguments, 2);
        }
        return (0, vecSetLen_1.vecSetLen)(v, num);
    }
    vecDot(v1, v2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecDot', arguments, 2);
        }
        return (0, vecDot_1.vecDot)(v1, v2);
    }
    vecCross(v1, v2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecCross', arguments, 2);
        }
        return (0, vecCross_1.vecCross)(v1, v2);
    }
    vecAng(v1, v2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecAng', arguments, 2);
        }
        return (0, vecAng_1.vecAng)(v1, v2);
    }
    vecFromTo(xyz1, xyz2) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecFromTo', arguments, 2);
        }
        return (0, vecFromTo_1.vecFromTo)(xyz1, xyz2);
    }
    vecEqual(v1, v2, tol) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecEqual', arguments, 3);
        }
        return (0, vecEqual_1.vecEqual)(v1, v2, tol);
    }
    vecAng2(v1, v2, v3) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecAng2', arguments, 3);
        }
        return (0, vecAng2_1.vecAng2)(v1, v2, v3);
    }
    vecRot(v1, v2, ang) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecRot', arguments, 3);
        }
        return (0, vecRot_1.vecRot)(v1, v2, ang);
    }
    vecLen(v) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecLen', arguments, 1);
            (0, _check_types_1.checkArgs)('vecLen', 'v', v, [chk.isXYZ, chk.isXYZL]);
        }
        return (0, vecLen_1.vecLen)(v);
    }
    vecNorm(v) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecNorm', arguments, 1);
        }
        return (0, vecNorm_1.vecNorm)(v);
    }
    vecRev(v) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecRev', arguments, 1);
        }
        return (0, vecRev_1.vecRev)(v);
    }
    vecLtoG(v, p) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecLtoG', arguments, 2);
        }
        return (0, vecLtoG_1.vecLtoG)(v, p);
    }
    vecGtoL(v, p) {
        if (this.__debug__) {
            (0, _check_inline_args_1.checkNumArgs_noDebug)('vecGtoL', arguments, 2);
        }
        return (0, vecGtoL_1.vecGtoL)(v, p);
    }
    // COMMON ========================================================================================
    len(data) {
        return (0, common_1.len)(this.__debug__, data);
    }
    copy(data) {
        return (0, common_1.copy)(this.__debug__, data);
    }
    equal(data1, data2) {
        return (0, common_1.equal)(this.__debug__, data1, data2);
    }
}
exports.InlineFuncs = InlineFuncs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUErRTtBQUUvRSw0Q0FBbUQ7QUFDbkQsaURBQTJDO0FBQzNDLG9EQUFzQztBQUV0Qyw4REFBZ0Q7QUFHaEQsaURBQThDO0FBcUJyQyxvRkFyQkEsU0FBRyxPQXFCQTtBQXBCWix1REFBb0Q7QUFxQjNDLHVGQXJCQSxlQUFNLE9BcUJBO0FBcEJmLG1EQUFnRDtBQXFCdkMscUZBckJBLFdBQUksT0FxQkE7QUFwQmIsaURBQThDO0FBcUJyQyxvRkFyQkEsU0FBRyxPQXFCQTtBQXBCWixtREFBZ0Q7QUFxQnZDLHFGQXJCQSxXQUFJLE9BcUJBO0FBcEJiLGlEQUE4QztBQXFCckMsb0ZBckJBLFNBQUcsT0FxQkE7QUFwQlosaURBQTZDO0FBcUJwQyxvRkFyQkEsU0FBRyxPQXFCQTtBQXBCWixxREFBa0Q7QUFxQnpDLHNGQXJCQSxhQUFLLE9BcUJBO0FBcEJkLHFEQUFrRDtBQXFCekMsc0ZBckJBLGFBQUssT0FxQkE7QUFwQmQsdURBQW9EO0FBcUIzQyx1RkFyQkEsZUFBTSxPQXFCQTtBQXBCZixtREFBZ0Q7QUFxQnZDLHFGQXJCQSxXQUFJLE9BcUJBO0FBcEJiLHFEQUFrRDtBQXFCekMsc0ZBckJBLGFBQUssT0FxQkE7QUFwQmQsaURBQThDO0FBcUJyQyxvRkFyQkEsU0FBRyxPQXFCQTtBQXBCWixtREFBZ0Q7QUFxQnZDLHFGQXJCQSxXQUFJLE9BcUJBO0FBcEJiLHFEQUFrRDtBQXFCekMsc0ZBckJBLGFBQUssT0FxQkE7QUFwQmQsbURBQWdEO0FBcUJ2QyxxRkFyQkEsV0FBSSxPQXFCQTtBQXBCYiwyREFBd0Q7QUFxQi9DLHlGQXJCQSxtQkFBUSxPQXFCQTtBQXBCakIsbURBQWdEO0FBcUJ2QyxxRkFyQkEsV0FBSSxPQXFCQTtBQXBCYiwyREFBd0Q7QUFxQi9DLHlGQXJCQSxtQkFBUSxPQXFCQTtBQXBCakIscURBQWtEO0FBcUJ6QyxzRkFyQkEsYUFBSyxPQXFCQTtBQUVkLHVEQUFvRDtBQUkzQyx5RkFKQSxtQkFBUSxPQUlBO0FBSGpCLHVEQUFvRDtBQUkzQyx5RkFKQSxtQkFBUSxPQUlBO0FBSGpCLDJEQUF3RDtBQUkvQywyRkFKQSx1QkFBVSxPQUlBO0FBRW5CLHlEQUFzRDtBQVE3Qyx3RkFSQSxpQkFBTyxPQVFBO0FBUGhCLHVEQUFvRDtBQVEzQyx1RkFSQSxlQUFNLE9BUUE7QUFQZix1REFBb0Q7QUFRM0MsdUZBUkEsZUFBTSxPQVFBO0FBUGYsMkRBQXdEO0FBUS9DLHlGQVJBLG1CQUFRLE9BUUE7QUFQakIsMkRBQXdEO0FBUS9DLHlGQVJBLG1CQUFRLE9BUUE7QUFQakIsMkRBQXdEO0FBUS9DLHlGQVJBLG1CQUFRLE9BUUE7QUFQakIsNkRBQTBEO0FBUWpELDBGQVJBLHFCQUFTLE9BUUE7QUFFbEIsbURBQWdEO0FBU3ZDLHdGQVRBLGlCQUFPLE9BU0E7QUFSaEIscURBQWtEO0FBU3pDLHlGQVRBLG1CQUFRLE9BU0E7QUFSakIscURBQWtEO0FBU3pDLHlGQVRBLG1CQUFRLE9BU0E7QUFSakIseURBQXNEO0FBUzdDLDJGQVRBLHVCQUFVLE9BU0E7QUFSbkIseURBQXNEO0FBUzdDLDJGQVRBLHVCQUFVLE9BU0E7QUFSbkIscURBQWtEO0FBU3pDLHlGQVRBLG1CQUFRLE9BU0E7QUFSakIscURBQWtEO0FBU3pDLHlGQVRBLG1CQUFRLE9BU0E7QUFSakIsaURBQThDO0FBU3JDLHVGQVRBLGVBQU0sT0FTQTtBQUVmLDJEQUF3RDtBQU0vQywwRkFOQSxxQkFBUyxPQU1BO0FBTGxCLHVEQUFvRDtBQU0zQyx3RkFOQSxpQkFBTyxPQU1BO0FBTGhCLHlEQUFzRDtBQU03Qyx5RkFOQSxtQkFBUSxPQU1BO0FBTGpCLDJEQUF3RDtBQU0vQywwRkFOQSxxQkFBUyxPQU1BO0FBTGxCLDZEQUEwRDtBQU1qRCwyRkFOQSx1QkFBVSxPQU1BO0FBRW5CLHFEQUFrRDtBQWlCekMseUZBakJBLG1CQUFRLE9BaUJBO0FBaEJqQix1REFBb0Q7QUFpQjNDLDBGQWpCQSxxQkFBUyxPQWlCQTtBQWhCbEIscURBQWtEO0FBaUJ6Qyx5RkFqQkEsbUJBQVEsT0FpQkE7QUFoQmpCLGlEQUE4QztBQWlCckMsdUZBakJBLGVBQU0sT0FpQkE7QUFoQmYscURBQWtEO0FBaUJ6Qyx5RkFqQkEsbUJBQVEsT0FpQkE7QUFoQmpCLHFEQUFrRDtBQWlCekMseUZBakJBLG1CQUFRLE9BaUJBO0FBaEJqQixtREFBZ0Q7QUFpQnZDLHdGQWpCQSxpQkFBTyxPQWlCQTtBQWhCaEIsbURBQWdEO0FBaUJ2Qyx3RkFqQkEsaUJBQU8sT0FpQkE7QUFoQmhCLHFEQUFrRDtBQWlCekMseUZBakJBLG1CQUFRLE9BaUJBO0FBaEJqQixtREFBZ0Q7QUFpQnZDLHdGQWpCQSxpQkFBTyxPQWlCQTtBQWhCaEIsbURBQWdEO0FBaUJ2Qyx3RkFqQkEsaUJBQU8sT0FpQkE7QUFoQmhCLG1EQUFnRDtBQWlCdkMsd0ZBakJBLGlCQUFPLE9BaUJBO0FBaEJoQix1REFBb0Q7QUFpQjNDLDBGQWpCQSxxQkFBUyxPQWlCQTtBQWhCbEIscURBQWtEO0FBaUJ6Qyx5RkFqQkEsbUJBQVEsT0FpQkE7QUFoQmpCLG1EQUFnRDtBQWlCdkMsd0ZBakJBLGlCQUFPLE9BaUJBO0FBaEJoQiwrQ0FBNEM7QUFpQm5DLHNGQWpCQSxhQUFLLE9BaUJBO0FBRWQsb0RBQWlEO0FBVXhDLHdGQVZBLGlCQUFPLE9BVUE7QUFUaEIsb0RBQWlEO0FBVXhDLHdGQVZBLGlCQUFPLE9BVUE7QUFUaEIsb0RBQWlEO0FBVXhDLHdGQVZBLGlCQUFPLE9BVUE7QUFUaEIsa0RBQStDO0FBVXRDLHVGQVZBLGVBQU0sT0FVQTtBQVRmLHNEQUFtRDtBQVUxQyx5RkFWQSxtQkFBUSxPQVVBO0FBVGpCLHNEQUFtRDtBQVUxQyx5RkFWQSxtQkFBUSxPQVVBO0FBVGpCLHNEQUFtRDtBQVUxQyx5RkFWQSxtQkFBUSxPQVVBO0FBVGpCLHNEQUFtRDtBQVUxQyx5RkFWQSxtQkFBUSxPQVVBO0FBVGpCLDBEQUF1RDtBQVU5QywyRkFWQSx1QkFBVSxPQVVBO0FBRW5CLDZDQUEwQztBQUlqQyxxRkFKQSxXQUFJLE9BSUE7QUFIYixtREFBZ0Q7QUFJdkMsd0ZBSkEsaUJBQU8sT0FJQTtBQUhoQixxREFBa0Q7QUFJekMseUZBSkEsbUJBQVEsT0FJQTtBQUdqQixrREFBK0M7QUFVdEMsd0ZBVkEsaUJBQU8sT0FVQTtBQVRoQixzREFBbUQ7QUFVMUMsMEZBVkEscUJBQVMsT0FVQTtBQVRsQixrREFBK0M7QUFVdEMsd0ZBVkEsaUJBQU8sT0FVQTtBQVRoQixrREFBK0M7QUFVdEMsd0ZBVkEsaUJBQU8sT0FVQTtBQVRoQixnREFBNkM7QUFVcEMsdUZBVkEsZUFBTSxPQVVBO0FBVGYsb0RBQWlEO0FBVXhDLHlGQVZBLG1CQUFRLE9BVUE7QUFUakIsd0RBQXFEO0FBVTVDLDJGQVZBLHVCQUFVLE9BVUE7QUFUbkIsa0RBQStDO0FBVXRDLHdGQVZBLGlCQUFPLE9BVUE7QUFUaEIsa0RBQStDO0FBVXRDLHdGQVZBLGlCQUFPLE9BVUE7QUFFaEIsa0RBQStDO0FBS3RDLHdGQUxBLGlCQUFPLE9BS0E7QUFKaEIsZ0RBQTZDO0FBS3BDLHVGQUxBLGVBQU0sT0FLQTtBQUpmLGdEQUE2QztBQUtwQyx1RkFMQSxlQUFNLE9BS0E7QUFKZixnREFBNkM7QUFLcEMsdUZBTEEsZUFBTSxPQUtBO0FBRWYsaURBQThDO0FBU3JDLG9GQVRBLFNBQUcsT0FTQTtBQVJaLGlEQUE4QztBQVNyQyxvRkFUQSxTQUFHLE9BU0E7QUFSWixpREFBOEM7QUFTckMsb0ZBVEEsU0FBRyxPQVNBO0FBUlosbURBQWdEO0FBU3ZDLHFGQVRBLFdBQUksT0FTQTtBQVJiLHVEQUFvRDtBQVMzQyx1RkFUQSxlQUFNLE9BU0E7QUFSZixtREFBZ0Q7QUFTdkMscUZBVEEsV0FBSSxPQVNBO0FBUmIsaURBQThDO0FBU3JDLG9GQVRBLFNBQUcsT0FTQTtBQVJaLG1EQUFnRDtBQVN2QyxxRkFUQSxXQUFJLE9BU0E7QUFFYixtREFBZ0Q7QUFhdkMsd0ZBYkEsaUJBQU8sT0FhQTtBQVpoQixpREFBOEM7QUFhckMsdUZBYkEsZUFBTSxPQWFBO0FBWmYsaURBQThDO0FBYXJDLHVGQWJBLGVBQU0sT0FhQTtBQVpmLG1EQUFnRDtBQWF2Qyx3RkFiQSxpQkFBTyxPQWFBO0FBWmhCLHFEQUFrRDtBQWF6Qyx5RkFiQSxtQkFBUSxPQWFBO0FBWmpCLHFEQUFrRDtBQWF6Qyx5RkFiQSxtQkFBUSxPQWFBO0FBWmpCLG1EQUFnRDtBQWF2Qyx3RkFiQSxpQkFBTyxPQWFBO0FBWmhCLG1EQUFnRDtBQWF2Qyx3RkFiQSxpQkFBTyxPQWFBO0FBWmhCLGlEQUE4QztBQWFyQyx1RkFiQSxlQUFNLE9BYUE7QUFaZix1REFBb0Q7QUFhM0MsMEZBYkEscUJBQVMsT0FhQTtBQVpsQixtREFBZ0Q7QUFhdkMsd0ZBYkEsaUJBQU8sT0FhQTtBQVpoQix1REFBb0Q7QUFhM0MsMEZBYkEscUJBQVMsT0FhQTtBQUVsQixtREFBZ0Q7QUFjdkMsb0ZBZEEsU0FBRyxPQWNBO0FBYloscURBQWtEO0FBY3pDLHFGQWRBLFdBQUksT0FjQTtBQWJiLHFEQUFrRDtBQWN6QyxxRkFkQSxXQUFJLE9BY0E7QUFiYix1REFBb0Q7QUFjM0Msc0ZBZEEsYUFBSyxPQWNBO0FBYmQsbURBQWdEO0FBY3ZDLG9GQWRBLFNBQUcsT0FjQTtBQWJaLHFEQUFrRDtBQWN6QyxxRkFkQSxXQUFJLE9BY0E7QUFiYixxREFBa0Q7QUFjekMscUZBZEEsV0FBSSxPQWNBO0FBYmIsdURBQW9EO0FBYzNDLHNGQWRBLGFBQUssT0FjQTtBQWJkLG1EQUFnRDtBQWN2QyxvRkFkQSxTQUFHLE9BY0E7QUFiWixxREFBa0Q7QUFjekMscUZBZEEsV0FBSSxPQWNBO0FBYmIsdURBQW9EO0FBYzNDLHNGQWRBLGFBQUssT0FjQTtBQWJkLHFEQUFrRDtBQWN6QyxxRkFkQSxXQUFJLE9BY0E7QUFiYix1REFBb0Q7QUFjM0Msc0ZBZEEsYUFBSyxPQWNBO0FBRWQsZ0RBQTZDO0FBaUJwQyxzRkFqQkEsYUFBSyxPQWlCQTtBQWhCZCxnREFBNkM7QUFpQnBDLHNGQWpCQSxhQUFLLE9BaUJBO0FBaEJkLGdEQUE2QztBQWlCcEMsc0ZBakJBLGFBQUssT0FpQkE7QUFoQmQsa0RBQStDO0FBaUJ0Qyx1RkFqQkEsZUFBTSxPQWlCQTtBQWhCZixnREFBNkM7QUFpQnBDLHNGQWpCQSxhQUFLLE9BaUJBO0FBaEJkLGtEQUErQztBQWlCdEMsdUZBakJBLGVBQU0sT0FpQkE7QUFoQmYsa0RBQStDO0FBaUJ0Qyx1RkFqQkEsZUFBTSxPQWlCQTtBQWhCZixrREFBK0M7QUFpQnRDLHVGQWpCQSxlQUFNLE9BaUJBO0FBaEJmLGtEQUErQztBQWlCdEMsdUZBakJBLGVBQU0sT0FpQkE7QUFoQmYsZ0RBQTZDO0FBaUJwQyxzRkFqQkEsYUFBSyxPQWlCQTtBQWhCZCxnREFBNkM7QUFpQnBDLHNGQWpCQSxhQUFLLE9BaUJBO0FBaEJkLGdEQUE2QztBQWlCcEMsc0ZBakJBLGFBQUssT0FpQkE7QUFoQmQsZ0RBQTRDO0FBaUJuQyxzRkFqQkEsYUFBSyxPQWlCQTtBQWhCZCxrREFBK0M7QUFpQnRDLHVGQWpCQSxlQUFNLE9BaUJBO0FBaEJmLG9EQUFpRDtBQWlCeEMsd0ZBakJBLGlCQUFPLE9BaUJBO0FBaEJoQixrREFBa0Q7QUFpQnpDLDBGQWpCQSxrQkFBUyxPQWlCQTtBQUVsQixnREFBNkM7QUFxQnBDLHVGQXJCQSxlQUFNLE9BcUJBO0FBcEJmLGdEQUE2QztBQXFCcEMsdUZBckJBLGVBQU0sT0FxQkE7QUFwQmYsc0RBQW1EO0FBcUIxQywwRkFyQkEscUJBQVMsT0FxQkE7QUFwQmxCLGdEQUE2QztBQXFCcEMsdUZBckJBLGVBQU0sT0FxQkE7QUFwQmYsZ0RBQTZDO0FBcUJwQyx1RkFyQkEsZUFBTSxPQXFCQTtBQXBCZixnREFBNkM7QUFxQnBDLHVGQXJCQSxlQUFNLE9BcUJBO0FBcEJmLGtEQUErQztBQXFCdEMsd0ZBckJBLGlCQUFPLE9BcUJBO0FBcEJoQixzREFBbUQ7QUFxQjFDLDBGQXJCQSxxQkFBUyxPQXFCQTtBQXBCbEIsZ0RBQTZDO0FBcUJwQyx1RkFyQkEsZUFBTSxPQXFCQTtBQXBCZixvREFBaUQ7QUFxQnhDLHlGQXJCQSxtQkFBUSxPQXFCQTtBQXBCakIsZ0RBQTZDO0FBcUJwQyx1RkFyQkEsZUFBTSxPQXFCQTtBQXBCZixzREFBbUQ7QUFxQjFDLDBGQXJCQSxxQkFBUyxPQXFCQTtBQXBCbEIsb0RBQWlEO0FBcUJ4Qyx5RkFyQkEsbUJBQVEsT0FxQkE7QUFwQmpCLGtEQUErQztBQXFCdEMsd0ZBckJBLGlCQUFPLE9BcUJBO0FBcEJoQixnREFBNkM7QUFxQnBDLHVGQXJCQSxlQUFNLE9BcUJBO0FBcEJmLGdEQUE2QztBQXFCcEMsdUZBckJBLGVBQU0sT0FxQkE7QUFwQmYsa0RBQStDO0FBcUJ0Qyx3RkFyQkEsaUJBQU8sT0FxQkE7QUFwQmhCLGdEQUE2QztBQXFCcEMsdUZBckJBLGVBQU0sT0FxQkE7QUFwQmYsa0RBQStDO0FBcUJ0Qyx3RkFyQkEsaUJBQU8sT0FxQkE7QUFwQmhCLGtEQUErQztBQXFCdEMsd0ZBckJBLGlCQUFPLE9BcUJBO0FBRWhCLE1BQWEsV0FBVztJQUVwQixZQUFZLEtBQWU7UUFRM0IsZ0dBQWdHO1FBRWhHLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBRWpCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBRWpCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBRWpCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBQ2pCLE9BQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFBO1FBRWpCLFFBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFBO1FBQ25CLFFBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFBO1FBNUJmLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtTQUN4QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBeUJELGdHQUFnRztJQUVoRyxHQUFHLENBQUMsR0FBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sSUFBQSxTQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUF1QjtRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsT0FBTyxJQUFBLGVBQU0sRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQXVCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLElBQUEsV0FBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBdUIsRUFBRSxFQUFVO1FBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxJQUFBLFNBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFzQjtRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxJQUFBLFdBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQXNCO1FBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLElBQUEsU0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBdUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMvRDtRQUNELE9BQU8sSUFBQSxTQUFHLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUF1QjtRQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFBLGFBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQXNCLEVBQUUsT0FBTyxHQUFHLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxJQUFBLGFBQUssRUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFzQixFQUFFLFFBQWdCO1FBQzNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxJQUFBLGVBQU0sRUFBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFzQjtRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxJQUFBLFdBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQXNCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLElBQUEsYUFBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBdUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMvRDtRQUNELE9BQU8sSUFBQSxTQUFHLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksQ0FBQyxJQUF1QjtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxJQUFBLFdBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQXVCO1FBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFDRCxPQUFPLElBQUEsYUFBSyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBdUI7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLElBQUEsV0FBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxDQUFTO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLElBQUEsbUJBQVEsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUEsV0FBSSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFDdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELEtBQUssQ0FBQyxHQUFzQixFQUFFLEVBQVksRUFBRSxFQUFZO1FBQ3BELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sSUFBQSxhQUFLLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0dBQWdHO0lBRWhHLFFBQVEsQ0FBQyxJQUF1QixFQUFFLEdBQVcsRUFBRSxHQUFXO1FBQ3RELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN0RDtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUF1QixFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBVTtRQUNsRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuRCxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkQsb0VBQW9FO1NBQ3ZFO1FBQ0QsT0FBTyxJQUFBLG1CQUFRLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUF3QjtRQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUEsd0JBQVMsRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDeEU7UUFDRCxPQUFPLElBQUEsdUJBQVUsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0dBQWdHO0lBRWhHLE9BQU8sQ0FBQyxHQUFvQjtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxJQUFBLGlCQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFRO1FBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sSUFBQSxlQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFRO1FBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sSUFBQSxlQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFzQjtRQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxJQUFBLG1CQUFRLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFzQjtRQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxJQUFBLG1CQUFRLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFzQixFQUFFLFdBQW9CLEVBQUUsTUFBZTtRQUNsRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFzQixFQUFFLFFBQWdCLEVBQUUsTUFBZTtRQUMvRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN0RDtRQUNELE9BQU8sSUFBQSxxQkFBUyxFQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGdHQUFnRztJQUVoRyxPQUFPLENBQUMsSUFBWSxFQUFFLEdBQXNCO1FBQ3hDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFBLGlCQUFPLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLEdBQXNCO1FBQzNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsT0FBTyxJQUFBLHVCQUFVLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLEdBQVE7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxPQUFPLElBQUEsdUJBQVUsRUFBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZLEVBQUUsR0FBVztRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLElBQUEsbUJBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVksRUFBRSxLQUFZO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBQSxlQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnR0FBZ0c7SUFFaEcsU0FBUyxDQUFDLEVBQVEsRUFBRSxFQUFlLEVBQUUsTUFBYyxDQUFDO1FBQ2hELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsRCxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLElBQUEscUJBQVMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBTyxFQUFFLENBQWMsRUFBRSxNQUFjLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxJQUFBLGlCQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUSxDQUFDLEVBQVEsRUFBRSxFQUFvQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRCxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsT0FBTyxJQUFBLG1CQUFRLEVBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFTLENBQUMsRUFBUSxFQUFFLEVBQW9CO1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLElBQUEscUJBQVMsRUFBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFRLEVBQUUsRUFBb0I7UUFDckMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6RTtRQUNELE9BQU8sSUFBQSx1QkFBVSxFQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0dBQWdHO0lBRWhHLFFBQVEsQ0FBQyxJQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxJQUFBLG1CQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELFNBQVMsQ0FBQyxJQUFXLEVBQUUsR0FBVztRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sSUFBQSxxQkFBUyxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsUUFBUSxDQUFDLEtBQVksRUFBRSxLQUFZO1FBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xELEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FDeEY7UUFDRCxPQUFPLElBQUEsbUJBQVEsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFZLEVBQUUsS0FBWTtRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RCxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLElBQUEsZUFBTSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsUUFBUSxDQUFDLElBQVcsRUFBRSxHQUFXO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxJQUFBLG1CQUFRLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxRQUFRLENBQUMsSUFBVyxFQUFFLEtBQWE7UUFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUN2RjtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLElBQVcsRUFBRSxHQUFzQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNuRTtRQUNELE9BQU8sSUFBQSxpQkFBTyxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsT0FBTyxDQUFDLElBQVcsRUFBRSxHQUFjO1FBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxJQUFBLGlCQUFPLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxRQUFRLENBQUMsR0FBRyxLQUFZO1FBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixtQkFBbUI7U0FDdEI7UUFDRCxPQUFPLElBQUEsbUJBQVEsRUFBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxPQUFPLENBQUMsSUFBYyxFQUFFLENBQVM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLElBQUEsaUJBQU8sRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE9BQU8sQ0FBQyxJQUFXO1FBQ2YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxPQUFPLElBQUEsaUJBQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsT0FBTyxDQUFDLElBQVcsRUFBRSxHQUFXO1FBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBQSxpQkFBTyxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsU0FBUyxDQUFDLElBQVcsRUFBRSxLQUFhLEVBQUUsR0FBVztRQUM3QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtnQkFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUNsRjtRQUNELE9BQU8sSUFBQSxxQkFBUyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELFFBQVEsQ0FBQyxLQUFZLEVBQUUsS0FBWTtRQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUNyQixHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELElBQUEsc0NBQWlCLEVBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7UUFDRCxPQUFPLElBQUEsbUJBQVEsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELE9BQU8sQ0FBQyxHQUFHLElBQVc7UUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksSUFBQSxZQUFHLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUM3RDtTQUNKO1FBQ0QsT0FBTyxJQUFBLGlCQUFPLEVBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsSUFBWTtRQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUFFO1lBQzNFLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFBSztTQUNwRjtRQUNELE9BQU8sSUFBQSxhQUFLLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0dBQWdHO0lBRWhHLE9BQU8sQ0FBQyxNQUFxQixFQUFFLEtBQW9CLEVBQUUsTUFBcUI7UUFDdEUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwRSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsRSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUNELE9BQU8sSUFBQSxpQkFBTyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFzQjtRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFBLGlCQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFzQixFQUFFLEdBQWtCO1FBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFDRCxPQUFPLElBQUEsaUJBQU8sRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFzQixFQUFFLEdBQWtCLEVBQUUsR0FBc0I7UUFDckUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3RCxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3RCxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRTtRQUNELE9BQU8sSUFBQSxlQUFNLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQXNCLEVBQUUsR0FBa0I7UUFDL0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvRCxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQXNCLEVBQUUsR0FBc0I7UUFDbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvRCxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQXNCLEVBQUUsR0FBc0I7UUFDbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvRCxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQXNCLEVBQUUsR0FBc0I7UUFDbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvRCxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQWtCO1FBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDcEU7UUFDRCxPQUFPLElBQUEsdUJBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0dBQWdHO0lBRWhHLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLElBQWE7UUFDeEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM5QztRQUNMLE9BQU8sSUFBQSxXQUFJLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsSUFBYTtRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0wsT0FBTyxJQUFBLGlCQUFPLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVcsRUFBRSxHQUFXLEVBQUUsSUFBYTtRQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBQSxtQkFBUSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGdHQUFnRztJQUVoRyxPQUFPLENBQUMsTUFBcUIsRUFBRSxHQUFrQixFQUFFLEdBQVk7UUFDM0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFDRCxPQUFPLElBQUEsaUJBQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxTQUFTLENBQUMsSUFBbUIsRUFBRSxJQUFtQjtRQUM5QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFBLHFCQUFTLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBa0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNqRTtRQUNELE9BQU8sSUFBQSxpQkFBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBa0IsRUFBRSxHQUFrQjtRQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxJQUFBLGlCQUFPLEVBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBbUIsRUFBRSxJQUFtQixFQUFFLEdBQXNCO1FBQ25FLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLElBQUEsZUFBTSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFrQixFQUFFLElBQXVCO1FBQ2hELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLElBQUEsbUJBQVEsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFzQjtRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxJQUFBLHVCQUFVLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFnQixFQUFFLENBQW9CO1FBQzFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLElBQUEsaUJBQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFnQixFQUFFLENBQW9CO1FBQzFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLElBQUEsaUJBQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGdHQUFnRztJQUVoRyxPQUFPLENBQUMsSUFBVztRQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxJQUFBLGlCQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFZLEVBQUUsS0FBWTtRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RCxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLElBQUEsZUFBTSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVksRUFBRSxLQUFZO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBQSxlQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWSxFQUFFLEtBQVk7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxJQUFBLGVBQU0sRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdHQUFnRztJQUVoRyxHQUFHLENBQUMsSUFBUztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUEsU0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBUztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUEsU0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBYztRQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUEsU0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBYztRQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUEsV0FBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBYztRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxJQUFBLGVBQU0sRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVc7UUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFBLFdBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQWM7UUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxJQUFBLFNBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQWM7UUFDZixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFBLFdBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0dBQWdHO0lBRWhHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU87UUFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sSUFBQSxpQkFBTyxFQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sSUFBQSxlQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sSUFBQSxlQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHO1FBQ1AsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sSUFBQSxpQkFBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBRztRQUNSLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLElBQUEsbUJBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQUc7UUFDUixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxJQUFBLG1CQUFRLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFDRCxPQUFPLElBQUEsaUJBQU8sRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxJQUFBLGlCQUFPLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTTtRQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBQSxlQUFNLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQUcsRUFBRSxNQUFNO1FBQ2pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLElBQUEscUJBQVMsRUFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLElBQUEsaUJBQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELFNBQVMsQ0FBQyxHQUFHO1FBQ1QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBQSxxQkFBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxnR0FBZ0c7SUFFaEcsR0FBRyxDQUFDLEdBQXNCO1FBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUEsU0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBc0I7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sSUFBQSxXQUFJLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFzQjtRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFBLFdBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQXNCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUEsYUFBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUNELE9BQU8sSUFBQSxTQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFzQjtRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFBLFdBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQXNCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUEsV0FBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBc0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sSUFBQSxhQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFzQjtRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxJQUFBLFNBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQXNCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUEsV0FBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxLQUFLLENBQUMsRUFBeUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUEseUNBQW9CLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sSUFBQSxhQUFLLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFzQjtRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBQSx5Q0FBb0IsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFBLFdBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQXNCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFBLHlDQUFvQixFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUEsYUFBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnR0FBZ0c7SUFFaEcsS0FBSyxDQUFDLENBQU07UUFDUixPQUFPLElBQUEsYUFBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBTTtRQUNSLE9BQU8sSUFBQSxhQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxJQUFBLGFBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDVCxPQUFPLElBQUEsZUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBTTtRQUNSLE9BQU8sSUFBQSxhQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFNO1FBQ1QsT0FBTyxJQUFBLGVBQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTSxDQUFDLENBQU07UUFDVCxPQUFPLElBQUEsZUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNULE9BQU8sSUFBQSxlQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFNO1FBQ1QsT0FBTyxJQUFBLGVBQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDLENBQU07UUFDUixPQUFPLElBQUEsYUFBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBTTtRQUNSLE9BQU8sSUFBQSxhQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFNO1FBQ1IsT0FBTyxJQUFBLGFBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSyxDQUFDLENBQU07UUFDUixPQUFPLElBQUEsYUFBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBTTtRQUNULE9BQU8sSUFBQSxlQUFN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