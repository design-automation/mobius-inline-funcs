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
exports.vecGtoL = exports.vecLtoG = exports.vecRev = exports.vecNorm = exports.vecLen = exports.vecRot = exports.vecAng2 = exports.vecEqual = exports.vecFromTo = exports.vecAng = exports.vecCross = exports.vecDot = exports.vecSetLen = exports.vecMult = exports.vecDiv = exports.vecSub = exports.vecAdd = exports.vecSum = void 0;
const vec = __importStar(require("../libs/vectors"));
const arrs_1 = require("../libs/arrs");
const matrix_1 = require("../libs/matrix");
const _check_inline_args_1 = require("../_check_inline_args");
const _check_types_1 = require("../_check_types");
// export const vecAdd = vec.vecAdd;
// export const vecSub = vec.vecSub;
// export const vecDiv = vec.vecDiv;
// export const vecMult = vec.vecMult;
// export const vecSetLen = vec.vecSetLen;
// export const vecDot = vec.vecDot;
// export const vecCross = vec.vecCross;
// export const vecAng = vec.vecAng;
// export const vecFromTo = vec.vecFromTo;
// export const vecEqual = vec.vecEqual;
// export const vecAng2 = vec.vecAng2;
// export const vecRot = vec.vecRot;
// export const vecLen = vec.vecLen;
// export const vecNorm = vec.vecNorm;
// export const vecRev = vec.vecRev;
// Overloaded vector functions
// ================================================================================================
/**
 * Add multiple vectors
 * @param v
 */
function vecSum(debug, ...v) {
    const depth1 = (0, arrs_1.getArrDepth)(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    }
    else if (depth1 < 2) {
        throw new Error('Error summing vectors: The vectors are bad.' + JSON.stringify(v));
    }
    if (debug) {
        (0, _check_types_1.checkArgs)('vecSum', 'v', v, [_check_types_1.isXYZL]);
    }
    // return the sum
    return vec.vecSum(v, false);
}
exports.vecSum = vecSum;
// ================================================================================================
/**
 * Adds two vectors
 * @param v1
 * @param v2
 * @param norm
 */
function vecAdd(debug, v1, v2, norm = false) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecAdd', arguments, 3, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vec.vecAdd(v1_val, v2, norm));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vec.vecAdd(v1, v2_val, norm));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vec.vecAdd(v1[i], v2[i], norm));
                }
                return vecs;
            }
            else {
                throw new Error('Error adding lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vec.vecAdd(v1, v2, norm);
}
exports.vecAdd = vecAdd;
// ================================================================================================
/**
 * Subtracts v2 from v1
 * @param v1
 * @param v2
 * @param norm
 */
function vecSub(debug, v1, v2, norm = false) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecSub', arguments, 3, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vec.vecSub(v1_val, v2, norm));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vec.vecSub(v1, v2_val, norm));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vec.vecSub(v1[i], v2[i], norm));
                }
                return vecs;
            }
            else {
                throw new Error('Error adding lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vec.vecSub(v1, v2, norm);
}
exports.vecSub = vecSub;
// ================================================================================================
/**
 * Divides a vector by a numbe
 * @param v
 * @param num
 */
function vecDiv(debug, v, num) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecDiv', arguments, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    const depth2 = (0, arrs_1.getArrDepth)(num);
    if (depth1 === 2 || depth2 === 1) {
        if (depth2 === 0) {
            // only vec is Txyz[]
            return v.map(v_val => vec.vecDiv(v_val, num));
        }
        else if (depth1 === 1) {
            // only num is number[]
            return num.map(num_val => vec.vecDiv(v, num_val));
        }
        else {
            // vec is Txyz and num is number[], they must be equal length
            num = num;
            if (v.length === num.length) {
                const vecs = [];
                for (let i = 0; i < v.length; i++) {
                    vecs.push(vec.vecDiv(vec[i], num[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error dividing a lists of vectors: The list of divisors must be the same length as the list of vectors.');
            }
        }
    }
    // normal case, vec is Txyz and num is number
    return vec.vecDiv(v, num);
}
exports.vecDiv = vecDiv;
// ================================================================================================
/**
 * Multiplies a vector by a number
 * @param v
 * @param num
 */
function vecMult(debug, v, num) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecMult', arguments, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    const depth2 = (0, arrs_1.getArrDepth)(num);
    if (depth1 === 2 || depth2 === 1) {
        if (depth2 === 0) {
            // only vec is Txyz[]
            return v.map(v_val => vec.vecMult(v_val, num));
        }
        else if (depth1 === 1) {
            // only num is number[]
            return num.map(num_val => vec.vecMult(v, num_val));
        }
        else {
            // vec is Txyz and num is number[], they must be equal length
            num = num;
            if (v.length === num.length) {
                const vecs = [];
                for (let i = 0; i < v.length; i++) {
                    vecs.push(vec.vecMult(v[i], num[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error dividing a lists of vectors: The list of multipliers must be the same length as the list of vectors.');
            }
        }
    }
    // normal case, vec is Txyz and num is number
    return vec.vecMult(v, num);
}
exports.vecMult = vecMult;
// ================================================================================================
/**
 * Sets the magnitude of a vector
 * @param v
 * @param num
 */
function vecSetLen(debug, v, num) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecSetLen', arguments, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    const depth2 = (0, arrs_1.getArrDepth)(num);
    if (depth1 === 2 || depth2 === 1) {
        if (depth2 === 0) {
            // only vec is Txyz[]
            return v.map(v_val => vec.vecSetLen(v_val, num));
        }
        else if (depth1 === 1) {
            // only num is number[]
            return num.map(num_val => vec.vecSetLen(v, num_val));
        }
        else {
            // vec is Txyz and num is number[], they must be equal length
            num = num;
            if (v.length === num.length) {
                const vecs = [];
                for (let i = 0; i < v.length; i++) {
                    vecs.push(vec.vecSetLen(v[i], num[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error setting lengths for a lists of vectors: The list of vector lengths must be the same length as the list of vectors.');
            }
        }
    }
    // normal case, vec is Txyz and num is number
    return vec.vecSetLen(v, num);
}
exports.vecSetLen = vecSetLen;
// ================================================================================================
/**
 * Calculates the dot product of two vectors
 * @param v1
 * @param v2
 */
function vecDot(debug, v1, v2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecDot', arguments, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vec.vecDot(v1_val, v2));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vec.vecDot(v1, v2_val));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vals = [];
                for (let i = 0; i < v1.length; i++) {
                    vals.push(vec.vecDot(v1[i], v2[i]));
                }
                return vals;
            }
            else {
                throw new Error('Error calculating dot product of two lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vec.vecDot(v1, v2);
}
exports.vecDot = vecDot;
// ================================================================================================
/**
 * Calculates the cross product of two vectors
 * @param v1
 * @param v2
 */
function vecCross(debug, v1, v2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecCross', arguments, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vec.vecCross(v1_val, v2));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vec.vecCross(v1, v2_val));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vec.vecCross(v1[i], v2[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating cross product of two lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vec.vecCross(v1, v2);
}
exports.vecCross = vecCross;
// ================================================================================================
/**
 * Calculate the angle (0 to PI) between two vectors.
 * \n
 * The inner (smaller) angle is always returned, which will always be smaller than or equal to PI.
 * @param v1
 * @param v2
 */
function vecAng(debug, v1, v2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecAng', arguments, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vec.vecAng(v1_val, v2));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vec.vecAng(v1, v2_val));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const angs = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push(vec.vecAng(v1[i], v2[i]));
                }
                return angs;
            }
            else {
                throw new Error('Error calculating angle between two lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vec.vecAng(v1, v2);
}
exports.vecAng = vecAng;
// ================================================================================================
/**
 * Creates a vector between two points
 * @param xyz1
 * @param xyz2
 */
function vecFromTo(debug, xyz1, xyz2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecFromTo', arguments, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(xyz1);
    const depth2 = (0, arrs_1.getArrDepth)(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return xyz1.map(v1_val => vec.vecFromTo(v1_val, xyz2));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return xyz2.map(v2_val => vec.vecFromTo(xyz1, v2_val));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const vecs = [];
                for (let i = 0; i < xyz1.length; i++) {
                    vecs.push(vec.vecFromTo(xyz1[i], xyz2[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vec.vecFromTo(xyz1, xyz2);
}
exports.vecFromTo = vecFromTo;
// ================================================================================================
/**
 * Returns true if the difference between two vectors is smaller than a specified tolerance
 * @param v1
 * @param v2
 * @param tol
 */
function vecEqual(debug, v1, v2, tol) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecEqual', arguments, 3);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1 || depth2 === 1) {
            throw new Error('Error calculating vector equality between multiple vectors: The two lists must be of equal length.');
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const eq = [];
                for (let i = 0; i < v1.length; i++) {
                    eq.push(vec.vecEqual(v1[i], v2[i], tol));
                }
                return eq;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vec.vecEqual(v1, v2, tol);
}
exports.vecEqual = vecEqual;
// ================================================================================================
/**
 * Calculate the angle (0 to 2PI) between two vectors, relative to the plane normal.
 * \n
 * Unlike the vecAng() function, this funtion may return an angle larger than PI.
 * \n
 * The function calculates the angle from the first vector to the second vector
 * in a counter-clockwise direction, assuming the normal is pointing up towards the viewer.
 * \n
 * @param v1
 * @param v2
 * @param v3
 */
function vecAng2(debug, v1, v2, v3) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecAng2', arguments, 3);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    const depth3 = (0, arrs_1.getArrDepth)(v3);
    if (depth1 === 2 || depth2 === 2 || depth3 === 2) {
        if (depth2 === 1 && depth3 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vec.vecAng2(v1_val, v2, v3));
        }
        else if (depth1 === 1 && depth3 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vec.vecAng2(v1, v2_val, v3));
        }
        else if (depth1 === 1 && depth2 === 1) {
            // only v3 is Txyz[]
            return v3.map(v3_val => vec.vecAng2(v1, v2, v3_val));
        }
        else if (depth1 === 1) {
            // v2 and v3 are Txyz[], they must be equal length
            if (v2.length === v3.length) {
                const angs = [];
                for (let i = 0; i < v2.length; i++) {
                    angs.push(vec.vecAng2(v1, v2[i], v3[i]));
                }
                return angs;
            }
            else {
                throw new Error('Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth2 === 1) {
            // v1 and v3 are Txyz[], they must be equal length
            if (v1.length === v3.length) {
                const angs = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push(vec.vecAng2(v1[i], v2, v3[i]));
                }
                return angs;
            }
            else {
                throw new Error('Error calculating angles between between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth3 === 1) {
            // v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const angs = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push(vec.vecAng2(v1[i], v2[i], v3));
                }
                return angs;
            }
            else {
                throw new Error('Error calculating angles between two between lists of vectors and normals: The two lists must be of equal length.');
            }
        }
        else {
            // all three v1 and v2 and v3 are Txyz[], they must be all equal length
            if (v1.length === v2.length && v2.length === v3.length) {
                const angs = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push(vec.vecAng2(v1[i], v2[i], v3[i]));
                }
                return angs;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of vectors and normals: The two lists must be of equal length.');
            }
        }
    }
    // normal case, v1 and v2 and v3 are Txyz
    return vec.vecAng2(v1, v2, v3);
}
exports.vecAng2 = vecAng2;
// ================================================================================================
/**
 * Rotates one vector around another vector.
 * @param v1
 * @param v2
 * @param ang
 */
function vecRot(debug, v1, v2, ang) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecRot', arguments, 3);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    const depth3 = (0, arrs_1.getArrDepth)(ang);
    if (depth1 === 2 || depth2 === 2 || depth3 === 2) {
        if (depth2 === 1 && depth3 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vec.vecRot(v1_val, v2, ang));
        }
        else if (depth1 === 1 && depth3 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vec.vecRot(v1, v2_val, ang));
        }
        else if (depth1 === 1 && depth2 === 1) {
            // only ang is number[]
            return ang.map(ang_val => vec.vecRot(v1, v2, ang_val));
        }
        else if (depth1 === 1) {
            // v2 is Txyz[] and ang is number[], they must be equal length
            ang = ang;
            if (v2.length === ang.length) {
                const vecs = [];
                for (let i = 0; i < v2.length; i++) {
                    vecs.push(vec.vecRot(v1, v2[i], ang[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth2 === 1) {
            // v1 is Txyz[] and ang is number[], they must be equal length
            ang = ang;
            if (v1.length === ang.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vec.vecRot(v1[i], v2, ang[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating angles between between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth3 === 1) {
            // v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vec.vecRot(v1[i], v2[i], ang));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating angles between two between lists of vectors and normals: The two lists must be of equal length.');
            }
        }
        else {
            // all three v1 and v2 are Txyz[] and ang is number[], they must be all equal length
            ang = ang;
            if (v1.length === v2.length && v2.length === ang.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vec.vecRot(v1[i], v2[i], ang[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of vectors and normals: The two lists must be of equal length.');
            }
        }
    }
    // normal case, v1 and v2 and ang are Txyz
    return vec.vecRot(v1, v2, ang);
}
exports.vecRot = vecRot;
// ================================================================================================
/**
 * Calculates the magnitude of a vector
 * @param v
 */
function vecLen(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecLen', arguments, 1);
        (0, _check_types_1.checkArgs)('vecLen', 'v', v, [_check_types_1.isXYZ, _check_types_1.isXYZL]);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    if (depth1 === 2) {
        return v.map(v_val => vec.vecLen(v_val));
    }
    // normal case, vec is Txyz
    return vec.vecLen(v);
}
exports.vecLen = vecLen;
// ================================================================================================
/**
 * Sets the magnitude of a vector to 1
 * @param v
 */
function vecNorm(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecNorm', arguments, 1);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    if (depth1 === 2) {
        return v.map(v_val => vec.vecNorm(v_val));
    }
    // normal case, vec is Txyz
    return vec.vecNorm(v);
}
exports.vecNorm = vecNorm;
// ================================================================================================
/**
 * Reverses the direction of a vector
 * @param v
 */
function vecRev(debug, v) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecRev', arguments, 1);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    if (depth1 === 2) {
        return v.map(v_val => vec.vecRev(v_val));
    }
    // normal case, vec is Txyz
    return vec.vecRev(v);
}
exports.vecRev = vecRev;
// ================================================================================================
/**
 * Transforms a vector from a local coordinate system define by plane "p" to the global coordinate system.
 * @param v
 * @param p
 */
function vecLtoG(debug, v, p) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecLtoG', arguments, 2);
    }
    return _vecXForm(v, p, true);
}
exports.vecLtoG = vecLtoG;
/**
 * Transforms a vector from the global coordinate system to a local coordinate system define by plane "p".
 * @param v
 * @param p
 */
function vecGtoL(debug, v, p) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vecGtoL', arguments, 2);
    }
    return _vecXForm(v, p, false);
}
exports.vecGtoL = vecGtoL;
// ================================================================================================
function _vecXForm(v, p, to_global) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    const depth2 = (0, arrs_1.getArrDepth)(p);
    if (depth1 === 1 && depth2 === 2) {
        // v is Txyz and p is TPlane
        return (0, matrix_1.multMatrix)(v, (0, matrix_1.xformMatrix)(p, to_global));
    }
    else if (depth1 === 2 && depth2 === 2) {
        // v is Txyz[] and p is TPlane
        const matrix = (0, matrix_1.xformMatrix)(p, to_global);
        return v.map(a_v => (0, matrix_1.multMatrix)(a_v, matrix));
    }
    else if (depth1 === 1 && depth2 === 3) {
        // v is Txyz and p is TPlane[]
        const result = [];
        for (const a_p of p) {
            const matrix = (0, matrix_1.xformMatrix)(a_p, to_global);
            result.push((0, matrix_1.multMatrix)(v, matrix));
        }
        return result;
    }
    else if (depth1 === 2 && depth2 === 3) {
        // v is Txyz[] p is TPlane[], they must be equal length
        if (v.length === p.length) {
            const result = [];
            for (let i = 0; i < v.length; i++) {
                const matrix = (0, matrix_1.xformMatrix)(p[i], to_global);
                result.push((0, matrix_1.multMatrix)(v[i], matrix));
            }
            return result;
        }
        else {
            throw new Error('Error transforming vectors: The list of vectors and list of planes must be of equal length.');
        }
    }
    throw new Error('Error transforming vectors: Cannot process the input lists.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lubGluZS92ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1QztBQUV2Qyx1Q0FBMkM7QUFDM0MsMkNBQXlEO0FBQ3pELDhEQUFxRDtBQUNyRCxrREFBMkQ7QUFFM0Qsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQyxvQ0FBb0M7QUFDcEMsd0NBQXdDO0FBQ3hDLG9DQUFvQztBQUNwQywwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFFcEMsOEJBQThCO0FBQzlCLG1HQUFtRztBQUNuRzs7O0dBR0c7QUFDSCxTQUFnQixNQUFNLENBQUMsS0FBYyxFQUFFLEdBQUcsQ0FBUztJQUMvQyxNQUFNLE1BQU0sR0FBVyxJQUFBLGtCQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ1osYUFBYTtRQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNsQztTQUFNLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0RjtJQUNELElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSx3QkFBUyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMscUJBQU0sQ0FBQyxDQUFDLENBQUM7S0FDekM7SUFDRCxpQkFBaUI7SUFDakIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFD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