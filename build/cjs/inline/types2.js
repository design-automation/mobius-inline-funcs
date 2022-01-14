"use strict";
/**
 * Functions to check types.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.types2Class = exports._isWithin = exports._isIn = exports.isUndef = exports.isNull = exports.isNaN = exports.isPln = exports.isRay = exports.isCol = exports.isVec3 = exports.isVec2 = exports.isDict = exports.isList = exports.isStr = exports.isBool = exports.isFlt = exports.isInt = exports.isNum = void 0;
const _check_inline_args_1 = require("../_check_inline_args");
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
/**
 * Returns true if the value is a number, false otherwise.
 * @param v
 */
function isNum(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isNum', arguments, 1);
    }
    return typeof v === 'number';
}
exports.isNum = isNum;
/**
 * Returns true if the value is a integer, false otherwise.
 * @param v
 */
function isInt(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isInt', arguments, 1);
    }
    return Number.isInteger(v);
}
exports.isInt = isInt;
/**
 * Returns true if the value is a floating point number, false otherwise.
 * @param v
 */
function isFlt(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isFlt', arguments, 1);
    }
    // return !Number.isNaN(v) && v % 1 > 0;
    return typeof v === 'number';
}
exports.isFlt = isFlt;
/**
 * Returns true if the value is a boolean, false otherwise.
 * @param v
 */
function isBool(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isBool', arguments, 1);
    }
    return typeof v === 'boolean';
}
exports.isBool = isBool;
/**
 * Returns true if the value is a string, false otherwise.
 * @param v
 */
function isStr(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isStr', arguments, 1);
    }
    return typeof v === 'string';
}
exports.isStr = isStr;
/**
 * Returns true if the value is a list, false otherwise.
 * @param v
 */
function isList(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isList', arguments, 1);
    }
    return Array.isArray(v);
}
exports.isList = isList;
/**
 * Returns true if the value is a dictionary, false otherwise.
 * @param v
 */
function isDict(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isDict', arguments, 1);
    }
    // return typeof v === 'object' && !Array.isArray(v);
    return v.constructor === Object;
}
exports.isDict = isDict;
/**
 * Returns true if the value is a list of two numbers, false otherwise.
 * @param v
 */
function isVec2(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isVec2', arguments, 1);
    }
    return Array.isArray(v) && v.length === 2 &&
        typeof v[0] === 'number' && typeof v[1] === 'number';
}
exports.isVec2 = isVec2;
/**
 * Returns true if the value is a list of three numbers, false otherwise.
 * @param v
 */
function isVec3(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isVec3', arguments, 1);
    }
    return Array.isArray(v) && v.length === 3 &&
        typeof v[0] === 'number' && typeof v[1] === 'number' && typeof v[2] === 'number';
}
exports.isVec3 = isVec3;
/**
 * Returns true if the value is a list of three numbers in the range [0, 1], false otherwise.
 * @param v
 */
function isCol(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isCol', arguments, 1);
    }
    return isVec3(debug, v) && _isWithin(0, v[0], 1) && _isWithin(0, v[1], 1) && _isWithin(0, v[2], 1);
}
exports.isCol = isCol;
/**
 * Returns true if the value is a ray, false otherwise.
 * @param v
 */
function isRay(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isRay', arguments, 1);
    }
    return Array.isArray(v) && v.length === 2 && isVec3(debug, v[0]) && isVec3(debug, v[1]);
}
exports.isRay = isRay;
/**
 * Returns true if the value is a plane, false otherwise.
 * @param v
 */
function isPln(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isPln', arguments, 1);
    }
    return Array.isArray(v) && v.length === 3 && isVec3(debug, v[0]) && isVec3(debug, v[1]) && isVec3(debug, v[2]);
}
exports.isPln = isPln;
/**
 * Returns true is the value is not a number (NaN), false otherwise.
 * @param v
 */
function isNaN(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isNaN', arguments, 1);
    }
    return Number.isNaN(v);
}
exports.isNaN = isNaN;
/**
 * Returns true is the value is null, false otherwise.
 * @param v
 */
function isNull(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isNull', arguments, 1);
    }
    return v === null;
}
exports.isNull = isNull;
/**
 * Returns true is the value is undefined, false otherwise.
 * @param v
 */
function isUndef(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isUndef', arguments, 1);
    }
    return v === undefined;
}
exports.isUndef = isUndef;
/**
 * To be completed...
 * @param v1
 * @param v2
 * @param v3
 */
function _isIn(v1, v2, v3) {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 < v2 && v2 < v3;
}
exports._isIn = _isIn;
/**
 * To be completed...
 * @param v1
 * @param v2
 * @param v3
 */
function _isWithin(v1, v2, v3) {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 <= v2 && v2 <= v3;
}
exports._isWithin = _isWithin;
class types2Class {
    constructor(debug) {
        this.__debug__ = debug;
    }
    isNum(v) {
        return isNum(this.__debug__, v);
    }
    isInt(v) {
        return isInt(this.__debug__, v);
    }
    isFlt(v) {
        return isFlt(this.__debug__, v);
    }
    isBool(v) {
        return isBool(this.__debug__, v);
    }
    isStr(v) {
        return isStr(this.__debug__, v);
    }
    isList(v) {
        return isList(this.__debug__, v);
    }
    isDict(v) {
        return isDict(this.__debug__, v);
    }
    isVec2(v) {
        return isVec2(this.__debug__, v);
    }
    isVec3(v) {
        return isVec3(this.__debug__, v);
    }
    isCol(v) {
        return isCol(this.__debug__, v);
    }
    isRay(v) {
        return isRay(this.__debug__, v);
    }
    isPln(v) {
        return isPln(this.__debug__, v);
    }
    isNaN(v) {
        return isNaN(this.__debug__, v);
    }
    isNull(v) {
        return isNull(this.__debug__, v);
    }
    isUndef(v) {
        return isUndef(this.__debug__, v);
    }
    _isIn(v1, v2, v3) {
        return _isIn(v1, v2, v3);
    }
    _isWithin(v1, v2, v3) {
        return _isWithin(v1, v2, v3);
    }
}
exports.types2Class = types2Class;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS90eXBlczIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7QUFFSCw4REFBcUQ7QUFFckQsMkVBQTJFO0FBQzNFLDRFQUE0RTtBQUM1RSwwRkFBMEY7QUFDMUYsNkVBQTZFO0FBQzdFLDJFQUEyRTtBQUMzRSwwRUFBMEU7QUFDMUUsZ0ZBQWdGO0FBQ2hGLHlGQUF5RjtBQUN6RiwyRkFBMkY7QUFDM0YsOEdBQThHO0FBQzlHLHdFQUF3RTtBQUN4RSwwRUFBMEU7QUFDMUUscUZBQXFGO0FBQ3JGLHdFQUF3RTtBQUN4RSw4RUFBOEU7QUFFOUU7OztHQUdHO0FBQ0gsU0FBZ0IsS0FBSyxDQUFDLEtBQWMsRUFBRSxDQUFNO0lBQ3hDLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBTEQsc0JBS0M7QUFDRDs7O0dBR0c7QUFDSCxTQUFnQixLQUFLLENBQUMsS0FBYyxFQUFFLENBQU07SUFDeEMsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBTEQsc0JBS0M7QUFDRDs7O0dBR0c7QUFDSCxTQUFnQixLQUFLLENBQUMsS0FBYyxFQUFFLENBQU07SUFDeEMsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELHdDQUF3QztJQUN4QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FB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LENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNKLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDSixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNKLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ0osT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDSixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ0osT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLENBQUM7UUFDTCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQ1osT0FBTyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNoQixPQUFPLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDSjtBQXpFRCxrQ0F5RUMifQ==