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
exports.vecClass = exports.vecGtoL = exports.vecLtoG = exports.vecRev = exports.vecNorm = exports.vecLen = exports.vecRot = exports.vecAng2 = exports.vecEqual = exports.vecFromTo = exports.vecAng = exports.vecCross = exports.vecDot = exports.vecSetLen = exports.vecMult = exports.vecDiv = exports.vecSub = exports.vecAdd = exports.vecAvgDir = exports.vecAvg = exports.vecSum = void 0;
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
 * \n
 * The function can be called in two ways:
 * `vec = vecSum([vec1, vec2, vec3])`
 * `vec = vecSum(vec1, vec2, vec3)`
 * \n
 * @param v A list of vectors.
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
 * Calculates the average vector given a list of vectors.
 * \n
 * The input vectors and resulting average vecotr are all normalised.
 * \n
 * The function can be called in two ways:
 * `vec = vecAvg([vec1, vec2, vec3])`
 * `vec = vecAvg(vec1, vec2, vec3)`
 * \n
 * @param v
 */
function vecAvg(debug, ...v) {
    const depth1 = (0, arrs_1.getArrDepth)(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    }
    else if (depth1 < 2) {
        throw new Error('Error averaging vectors: The vectors are bad.' + JSON.stringify(v));
    }
    if (debug) {
        (0, _check_types_1.checkArgs)('vecAvg', 'v', v, [_check_types_1.isXYZL]);
    }
    // return the average vector
    return vec.vecAvg(v);
}
exports.vecAvg = vecAvg;
// ================================================================================================
/**
 * Calculates a normalised vector with a direction that is the average of the directions of the input vectors.
 * \n
 * The result is equivalent to:
 * `vec = vecNorm(vecSum(vecNorm(v)))`
 * \n
 * Note that if the input vectors cancel each other out, the result will be `[0,0,0]`.
 * \n
 * The function can be called in two ways:
 * `vec = vecAvgDir([vec1, vec2, vec3])`
 * `vec = vecAvgDir(vec1, vec2, vec3)`
 * \n
 * @param v A list of input vectors.
 */
function vecAvgDir(debug, ...v) {
    const depth1 = (0, arrs_1.getArrDepth)(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    }
    else if (depth1 < 2) {
        throw new Error('Error averaging vectors: The vectors are bad.' + JSON.stringify(v));
    }
    if (debug) {
        (0, _check_types_1.checkArgs)('vecAvgDir', 'v', v, [_check_types_1.isXYZL]);
    }
    // return the average vector
    return vec.vecAvgDir(v);
}
exports.vecAvgDir = vecAvgDir;
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
class vecClass {
    constructor(debug) {
        this.__debug__ = debug;
    }
    vecSum(...v) {
        return vecSum(this.__debug__, ...v);
    }
    vecAvg(...v) {
        return vecAvg(this.__debug__, ...v);
    }
    vecAvgDir(...v) {
        return vecAvgDir(this.__debug__, ...v);
    }
    vecAdd(v1, v2, norm) {
        return vecAdd(this.__debug__, v1, v2, norm);
    }
    vecSub(v1, v2, norm) {
        return vecSub(this.__debug__, v1, v2, norm);
    }
    vecDiv(v, num) {
        return vecDiv(this.__debug__, v, num);
    }
    vecMult(v, num) {
        return vecMult(this.__debug__, v, num);
    }
    vecSetLen(v, num) {
        return vecSetLen(this.__debug__, v, num);
    }
    vecDot(v1, v2) {
        return vecDot(this.__debug__, v1, v2);
    }
    vecCross(v1, v2) {
        return vecCross(this.__debug__, v1, v2);
    }
    vecAng(v1, v2) {
        return vecAng(this.__debug__, v1, v2);
    }
    vecFromTo(xyz1, xyz2) {
        return vecFromTo(this.__debug__, xyz1, xyz2);
    }
    vecEqual(v1, v2, tol) {
        return vecEqual(this.__debug__, v1, v2, tol);
    }
    vecAng2(v1, v2, v3) {
        return vecAng2(this.__debug__, v1, v2, v3);
    }
    vecRot(v1, v2, ang) {
        return vecRot(this.__debug__, v1, v2, ang);
    }
    vecLen(v) {
        return vecLen(this.__debug__, v);
    }
    vecNorm(v) {
        return vecNorm(this.__debug__, v);
    }
    vecRev(v) {
        return vecRev(this.__debug__, v);
    }
    vecLtoG(v, p) {
        return vecLtoG(this.__debug__, v, p);
    }
    vecGtoL(v, p) {
        return vecGtoL(this.__debug__, v, p);
    }
}
exports.vecClass = vecClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS92ZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1QztBQUV2Qyx1Q0FBMkM7QUFDM0MsMkNBQXlEO0FBQ3pELDhEQUFxRDtBQUNyRCxrREFBMkQ7QUFFM0Qsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQyxvQ0FBb0M7QUFDcEMsd0NBQXdDO0FBQ3hDLG9DQUFvQztBQUNwQywwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0QyxvQ0FBb0M7QUFFcEMsOEJBQThCO0FBQzlCLG1HQUFtRztBQUNuRzs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLE1BQU0sQ0FBQyxLQUFjLEVBQUUsR0FBRyxDQUFTO0lBQy9DLE1BQU0sTUFBTSxHQUFXLElBQUEsa0JBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDWixhQUFhO1FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO1NBQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RGO0lBQ0QsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLHdCQUFTLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxxQkFBTSxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUNELGlCQUFpQjtJQUNqQixPQUFPLEdBQUcsQ0FBQyxN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QztJQUVELE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRztRQUNULE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUc7UUFDVixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHO1FBQ1osT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRTtRQUNULE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFDWCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQ1QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSTtRQUNoQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRztRQUNoQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDZCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUc7UUFDZCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ0osT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLENBQUM7UUFDTCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNKLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNSLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFyRkQsNEJBcUZDIn0=