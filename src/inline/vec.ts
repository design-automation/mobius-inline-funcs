import * as vectors from '../libs/vectors';
import { Txyz, TPlane } from '../libs/common';
import { getArrDepth } from '../libs/arrs';
import { xformMatrix, multMatrix } from '../libs/matrix';
import { checkNumArgs } from '../_check_inline_args';
import { checkArgs, isXYZ, isXYZL } from '../_check_types';

// Overloaded vector functions
// ================================================================================================
/**
 * Add multiple vectors.
 * \n
 * The function can be called in two ways:
 * `vec = vecSum([vec1, vec2, vec3])`
 * `vec = vecSum(vec1, vec2, vec3)`
 * \n
 * @param v A list of vectors or just multiple vectors.
 * @returns The result vector.
 */
export function vecSum(debug: boolean, ...v: Txyz[]): Txyz {
    const depth1: number = getArrDepth(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    } else if (depth1 < 2) {
        throw new Error('Error summing vectors: The vectors are bad.' + JSON.stringify(v));
    }
    if (debug) {
        checkArgs('vecSum', 'v', v, [isXYZL]);
    }
    // return the sum
    return vectors.vecSum(v, false) as Txyz;
}
// ================================================================================================
/**
 * Calculates the average vector given a list of vectors.
 * \n
 * The input vectors and resulting average vector are all normalised.
 * \n
 * The function can be called in two ways:
 * `vec = vecAvg([vec1, vec2, vec3])`
 * `vec = vecAvg(vec1, vec2, vec3)`
 * \n 
 * @param v  A list of vectors or just multiple vectors.
 * @returns The average vector. 
 */
 export function vecAvg(debug: boolean, ...v: Txyz[]): Txyz {
    const depth1: number = getArrDepth(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    } else if (depth1 < 2) {
        throw new Error('Error averaging vectors: The vectors are bad.' + JSON.stringify(v));
    }
    if (debug) {
        checkArgs('vecAvg', 'v', v, [isXYZL]);
    }
    // return the average vector
    return vectors.vecAvg(v) as Txyz;
}
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
 * @param v A list of input vectors or just multiple vectors. 
 * @returns The result vector.
 */
 export function vecAvgDir(debug: boolean, ...v: Txyz[]): Txyz {
    const depth1: number = getArrDepth(v);
    if (depth1 > 2) {
        // @ts-ignore
        v = v.slice().flat(depth1 - 2);
    } else if (depth1 < 2) {
        throw new Error('Error averaging vectors: The vectors are bad.' + JSON.stringify(v));
    }
    if (debug) {
        checkArgs('vecAvgDir', 'v', v, [isXYZL]);
    }
    // return the average vector
    return vectors.vecAvgDir(v) as Txyz;
}
// ================================================================================================
/**
 * Adds two vectors.
 * 
 * If v1 is a single vector, v2 should be a single vector. 
 * If v1 is a list of vectors, v2 should be a list of vectors with an equal length to v. 
 * 
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors. 
 * @param norm True or False: Normalize the resulting vector.
 * @returns The result vector.
 * 
 */
export function vecAdd(debug: boolean, v1: Txyz|Txyz[], v2: Txyz|Txyz[], norm: boolean = false): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecAdd', arguments, 3, 2);
    }
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecAdd(v1_val as Txyz, v2 as Txyz, norm) as Txyz);
        } else if (depth1 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecAdd(v1 as Txyz, v2_val as Txyz, norm) as Txyz);
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecAdd(v1[i] as Txyz, v2[i] as Txyz, norm) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error adding lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecAdd(v1 as Txyz, v2 as Txyz, norm) as Txyz;
}
// ================================================================================================
/**
 * Subtracts v2 from v1.
 * 
 * If v1 is a single vector, v2 should be a single vector. 
 * If v1 is a list of vectors, v2 should be a list of vectors with an equal length to v. 
 * 
 * @param v1 The vector or list of vectors to be subtracted from.
 * @param v2 The vector or list of vectors to subtract by. (Is unmodified by the expression.)
 * @param norm True or False: Normalize the resulting vector.
 * @returns The result vector. 
 */
export function vecSub(debug: boolean, v1: Txyz|Txyz[], v2: Txyz|Txyz[], norm: boolean = false): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecSub', arguments, 3, 2);
    }
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecSub(v1_val as Txyz, v2 as Txyz, norm) as Txyz);
        } else if (depth1 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecSub(v1 as Txyz, v2_val as Txyz, norm) as Txyz);
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecSub(v1[i] as Txyz, v2[i] as Txyz, norm) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error adding lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecSub(v1 as Txyz, v2 as Txyz, norm) as Txyz;
}
// ================================================================================================
/**
 * Divides a vector by a number.
 * \n
 * If v is a single vector, num should be a single number. 
 * If v is a list of vectors, num should be a list of numbers with an equal length to v. 
 * 
 * @param v The input vector or list of vectors.
 * @param num A number or list of numbers (to divide the vector by).
 * @returns The result vector.
 * 
 */
export function vecDiv(debug: boolean, v: Txyz|Txyz[], num: number|number[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecDiv', arguments, 2);
    }
    // overloaded case
    const depth1: number = getArrDepth(v);
    const depth2: number = getArrDepth(num);
    if (depth1 === 2 || depth2 === 1) {
        if (depth2 === 0) {
            // only vec is Txyz[]
            return (v as Txyz[]).map( v_val => vectors.vecDiv(v_val as Txyz, num as number) as Txyz);
        } else if (depth1 === 1) {
            // only num is number[]
            return (num as number[]).map( num_val => vectors.vecDiv(v as Txyz, num_val as number) as Txyz);
        } else {
            // vec is Txyz and num is number[], they must be equal length
            num = num as number[];
            if (v.length === num.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v.length; i++) {
                    vecs.push( vectors.vecDiv(vectors[i] as Txyz, num[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error dividing a lists of vectors: The list of divisors must be the same length as the list of vectors.');
            }
        }
    }
    // normal case, vec is Txyz and num is number
    return vectors.vecDiv(v as Txyz, num as number) as Txyz;
}
// ================================================================================================
/**
 * Multiplies a vector by a number.
 * \n
 * If v is a single vector, num should be a single number. 
 * If v is a list of vectors, num should be a list of numbers with an equal length to v. 
 * @param v The input vector or list of vectors.
 * @param num A number or list of numbers (to multiply the vector by).
 * @returns The result vector. 
 */
export function vecMult(debug: boolean, v: Txyz|Txyz[], num: number|number[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecMult', arguments, 2);
    }
    // overloaded case
    const depth1: number = getArrDepth(v);
    const depth2: number = getArrDepth(num);
    if (depth1 === 2 || depth2 === 1) {
        if (depth2 === 0) {
            // only vec is Txyz[]
            return (v as Txyz[]).map( v_val => vectors.vecMult(v_val as Txyz, num as number) as Txyz);
        } else if (depth1 === 1) {
            // only num is number[]
            return (num as number[]).map( num_val => vectors.vecMult(v as Txyz, num_val as number) as Txyz);
        } else {
            // vec is Txyz and num is number[], they must be equal length
            num = num as number[];
            if (v.length === num.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v.length; i++) {
                    vecs.push( vectors.vecMult(v[i] as Txyz, num[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error dividing a lists of vectors: The list of multipliers must be the same length as the list of vectors.');
            }
        }
    }
    // normal case, vec is Txyz and num is number
    return vectors.vecMult(v as Txyz, num as number) as Txyz;
}
// ================================================================================================
/**
 * Sets the magnitude of a vector.
 * \n
 * If v is a single vector, num should be a single number.
 * If v is a list of vectors, num should be a list of numbers with an equal length to v. 
 * @param v The input vector or list of vectors. (It can have no set magnitude or have its current one be overwritten).
 * @param num A number or list of numbers for the new magnitude of v.
 * @returns The result vector. 
 */
export function vecSetLen(debug: boolean, v: Txyz|Txyz[], num: number|number[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecSetLen', arguments, 2);
    }
    // overloaded case
    const depth1: number = getArrDepth(v);
    const depth2: number = getArrDepth(num);
    if (depth1 === 2 || depth2 === 1) {
        if (depth2 === 0) {
            // only vec is Txyz[]
            return (v as Txyz[]).map( v_val => vectors.vecSetLen(v_val as Txyz, num as number) as Txyz);
        } else if (depth1 === 1) {
            // only num is number[]
            return (num as number[]).map( num_val => vectors.vecSetLen(v as Txyz, num_val as number) as Txyz);
        } else {
            // vec is Txyz and num is number[], they must be equal length
            num = num as number[];
            if (v.length === num.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v.length; i++) {
                    vecs.push( vectors.vecSetLen(v[i] as Txyz, num[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error setting lengths for a lists of vectors: The list of vector lengths must be the same length as the list of vectors.');
            }
        }
    }
    // normal case, vec is Txyz and num is number
    return vectors.vecSetLen(v as Txyz, num as number) as Txyz;
}
// ================================================================================================
/**
 * Calculates the dot product of two vectors.
 * \n
 * If v1 is a single vector, v2 should be a single vector. 
 * If v1 is a list of vectors, v2 should be a list of vectors with an equal length to v1.

 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors. 
 * @returns The number, the result dot product. 
 */
export function vecDot(debug: boolean, v1: Txyz|Txyz[], v2: Txyz|Txyz[]): number|number[] {
    if (debug) {
        checkNumArgs('vecDot', arguments, 2);
    }
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecDot(v1_val as Txyz, v2 as Txyz) as number);
        } else if (depth1 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecDot(v1 as Txyz, v2_val as Txyz) as number);
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vals: number[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vals.push( vectors.vecDot(v1[i] as Txyz, v2[i] as Txyz) as number );
                }
                return vals;
            } else {
                throw new Error(
                    'Error calculating dot product of two lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecDot(v1 as Txyz, v2 as Txyz) as number;
}
// ================================================================================================
/**
 * Calculates the cross product of two vectors.
 * \n
 * If v1 is a single vector, v2 should be a single vector. 
 * If v1 is a list of vectors, v2 should be a list of vectors with an equal length to v1.
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors. 
 * @returns The resultant cross product, a list of 3 numbers. 
 */
export function vecCross(debug: boolean, v1: Txyz|Txyz[], v2: Txyz|Txyz[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecCross', arguments, 2);
    }
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecCross(v1_val as Txyz, v2 as Txyz) as Txyz);
        } else if (depth1 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecCross(v1 as Txyz, v2_val as Txyz) as Txyz);
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecCross(v1[i] as Txyz, v2[i] as Txyz) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating cross product of two lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecCross(v1 as Txyz, v2 as Txyz) as Txyz;
}
// ================================================================================================
/**
 * Calculate the angle (0 to PI) between two vectors.
 * \n
 * The inner (smaller) angle is always returned, which will always be smaller than or equal to PI.
 * \n
 * If v1 is a single vector, v2 should be a single vector. 
 * If v1 is a list of vectors, v2 should be a list of vectors with an equal length to v1.
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors. 
 * @returns An angle in radians. 
 */
export function vecAng(debug: boolean, v1: Txyz|Txyz[], v2: Txyz|Txyz[]): number|number[] {
    if (debug) {
        checkNumArgs('vecAng', arguments, 2);
    }
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecAng(v1_val as Txyz, v2 as Txyz) as number);
        } else if (depth1 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecAng(v1 as Txyz, v2_val as Txyz) as number);
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const angs: number[] = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push( vectors.vecAng(v1[i] as Txyz, v2[i] as Txyz) as number );
                }
                return angs;
            } else {
                throw new Error(
                    'Error calculating angle between two lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecAng(v1 as Txyz, v2 as Txyz) as number;
}
// ================================================================================================
/**
 * Creates a vector between two points.
 * \n
 * If xyz1 is a single point, xyz2 should be a single point. 
 * If xyz1 is a list of points, xyz2 should be a list of points with an equal length to v1.
 * 
 * @param xyz1 The first point or list of points.
 * @param xyz2 The second point or list of points.
 * @returns The new vector. 
 */
export function vecFromTo(debug: boolean, xyz1: Txyz|Txyz[], xyz2: Txyz|Txyz[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecFromTo', arguments, 2);
    }
    // overloaded case
    const depth1: number = getArrDepth(xyz1);
    const depth2: number = getArrDepth(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return (xyz1 as Txyz[]).map( v1_val => vectors.vecFromTo(v1_val as Txyz, xyz2 as Txyz) as Txyz);
        } else if (depth1 === 1) {
            // only v2 is Txyz[]
            return (xyz2 as Txyz[]).map( v2_val => vectors.vecFromTo(xyz1 as Txyz, v2_val as Txyz) as Txyz);
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < xyz1.length; i++) {
                    vecs.push( vectors.vecFromTo(xyz1[i] as Txyz, xyz2[i] as Txyz) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecFromTo(xyz1 as Txyz, xyz2 as Txyz) as Txyz;
}
// ================================================================================================
/**
 * Returns true if the difference between two vectors is smaller than a specified tolerance.
 * 
 * @param v1 The first vector or list of vectors. 
 * @param v2 The second vector or list of vectors.
 * @param tol A number or list of numbers to specify the tolerance.
 * @returns True or False. 
 */
export function vecEqual(debug: boolean, v1: Txyz|Txyz[], v2: Txyz|Txyz[], tol: number): boolean|boolean[] {
    if (debug) {
        checkNumArgs('vecEqual', arguments, 3);
    }
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1 || depth2 === 1) {
            throw new Error(
                'Error calculating vector equality between multiple vectors: The two lists must be of equal length.');
        } else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const eq: boolean[] = [];
                for (let i = 0; i < v1.length; i++) {
                    eq.push( vectors.vecEqual(v1[i] as Txyz, v2[i] as Txyz, tol) as boolean );
                }
                return eq;
            } else {
                throw new Error(
                    'Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecEqual(v1 as Txyz, v2 as Txyz, tol) as boolean;
}
// ================================================================================================
/**
 * Calculate the angle (0 to 2PI) between two vectors, relative to the plane normal.
 * \n
 * Unlike the vecAng() function, this funtion may return an angle larger than PI.
 * \n
 * The function calculates the angle from the first vector to the second vector
 * in a counter-clockwise direction, assuming the normal is pointing up towards the viewer.
 * \n
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors. 
 * @param v3 A normal vector or a list of normal vectors.
 * @returns The angle, in radians. 
 */
export function vecAng2(debug: boolean, v1: Txyz|Txyz[], v2: Txyz|Txyz[], v3: Txyz|Txyz[]): number|number[] {
    if (debug) {
        checkNumArgs('vecAng2', arguments, 3);
    }
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    const depth3: number = getArrDepth(v3);
    if (depth1 === 2 || depth2 === 2 || depth3 === 2) {
        if (depth2 === 1 && depth3 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecAng2(v1_val as Txyz, v2 as Txyz, v3 as Txyz) as number);
        } else if (depth1 === 1 && depth3 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecAng2(v1 as Txyz, v2_val as Txyz, v3 as Txyz) as number);
        } else if (depth1 === 1 && depth2 === 1) {
            // only v3 is Txyz[]
            return (v3 as Txyz[]).map( v3_val => vectors.vecAng2(v1 as Txyz, v2 as Txyz, v3_val as Txyz) as number);
        } else if (depth1 === 1) {
            // v2 and v3 are Txyz[], they must be equal length
            if (v2.length === v3.length) {
                const angs: number[] = [];
                for (let i = 0; i < v2.length; i++) {
                    angs.push( vectors.vecAng2(v1 as Txyz, v2[i] as Txyz, v3[i] as Txyz) as number );
                }
                return angs;
            } else {
                throw new Error(
                    'Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        } else if (depth2 === 1) {
            // v1 and v3 are Txyz[], they must be equal length
            if (v1.length === v3.length) {
                const angs: number[] = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push( vectors.vecAng2(v1[i] as Txyz, v2 as Txyz, v3[i] as Txyz) as number );
                }
                return angs;
            } else {
                throw new Error(
                    'Error calculating angles between between lists of vectors: The two lists must be of equal length.');
            }
        } else if (depth3 === 1) {
            // v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const angs: number[] = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push( vectors.vecAng2(v1[i] as Txyz, v2[i] as Txyz, v3 as Txyz) as number );
                }
                return angs;
            } else {
                throw new Error(
                    'Error calculating angles between two between lists of vectors and normals: The two lists must be of equal length.');
            }
        } else {
            // all three v1 and v2 and v3 are Txyz[], they must be all equal length
            if (v1.length === v2.length && v2.length === v3.length) {
                const angs: number[] = [];
                for (let i = 0; i < v1.length; i++) {
                    angs.push( vectors.vecAng2(v1[i] as Txyz, v2[i] as Txyz, v3[i] as Txyz) as number );
                }
                return angs;
            } else {
                throw new Error(
                    'Error calculating vectors between two between lists of vectors and normals: The two lists must be of equal length.');
            }
        }
    }
    // normal case, v1 and v2 and v3 are Txyz
    return vectors.vecAng2(v1 as Txyz, v2 as Txyz, v3 as Txyz) as number;
}

// ================================================================================================
/**
 * Rotates one vector around another vector by a specified angle (in radians).
 * 
 * @param v1 The first vector or list of vectors to be rotated.
 * @param v2 The second vector or list of vectors for v1 to rotate around.
 * @param ang The angle or list of angles to rotate v1 by (in radians).
 * @returns The new vector. 
 */
export function vecRot(debug: boolean, v1: Txyz|Txyz[], v2: Txyz|Txyz[], ang: number|number[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecRot', arguments, 3);
    }
    // overloaded case
    const depth1: number = getArrDepth(v1);
    const depth2: number = getArrDepth(v2);
    const depth3: number = getArrDepth(ang);
    if (depth1 === 2 || depth2 === 2 || depth3 === 2) {
        if (depth2 === 1 && depth3 === 1) {
            // only v1 is Txyz[]
            return (v1 as Txyz[]).map( v1_val => vectors.vecRot(v1_val as Txyz, v2 as Txyz, ang as number) as Txyz);
        } else if (depth1 === 1 && depth3 === 1) {
            // only v2 is Txyz[]
            return (v2 as Txyz[]).map( v2_val => vectors.vecRot(v1 as Txyz, v2_val as Txyz, ang as number) as Txyz);
        } else if (depth1 === 1 && depth2 === 1) {
            // only ang is number[]
            return (ang as number[]).map( ang_val => vectors.vecRot(v1 as Txyz, v2 as Txyz, ang_val as number) as Txyz);
        } else if (depth1 === 1) {
            // v2 is Txyz[] and ang is number[], they must be equal length
            ang = ang as number[];
            if (v2.length === ang.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v2.length; i++) {
                    vecs.push( vectors.vecRot(v1 as Txyz, v2[i] as Txyz, ang[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        } else if (depth2 === 1) {
            // v1 is Txyz[] and ang is number[], they must be equal length
            ang = ang as number[];
            if (v1.length === ang.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecRot(v1[i] as Txyz, v2 as Txyz, ang[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating angles between lists of vectors: The two lists must be of equal length.');
            }
        } else if (depth3 === 1) {
            // v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecRot(v1[i] as Txyz, v2[i] as Txyz, ang as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        } else {
            // all three v1 and v2 are Txyz[] and ang is number[], they must be all equal length
            ang = ang as number[];
            if (v1.length === v2.length && v2.length === ang.length) {
                const vecs: Txyz[] = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push( vectors.vecRot(v1[i] as Txyz, v2[i] as Txyz, ang[i] as number) as Txyz );
                }
                return vecs;
            } else {
                throw new Error(
                    'Error calculating vectors between lists of vectors and angles: The lists must be of equal length.');
            }
        }
    }
    // normal case, v1 and v2 and ang are Txyz
    return vectors.vecRot(v1 as Txyz, v2 as Txyz, ang as number) as Txyz;
}
// ================================================================================================
/**
 * Calculates the magnitude of a vector.
 * 
 * @param v The input vector or list of vectors. 
 * @returns A number or list of numbers. 
 */
export function vecLen(debug: boolean, v: Txyz|Txyz[]): number|number[] {
    if (debug) {
        checkNumArgs('vecLen', arguments, 1);
        checkArgs('vecLen', 'v', v, [isXYZ, isXYZL]);
    }
    // overloaded case
    const depth1: number = getArrDepth(v);
    if (depth1 === 2) {
        return (v as Txyz[]).map( v_val => vectors.vecLen(v_val as Txyz) as number);
    }
    // normal case, vec is Txyz
    return vectors.vecLen(v as Txyz) as number;
}
// ================================================================================================
/**
 * Sets the magnitude of a vector to 1.
 * @param v The input vector or list of vectors. 
 * @returns A new vector or list of new vectors(with a magnitude of 1).
 */
export function vecNorm(debug: boolean, v: Txyz|Txyz[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecNorm', arguments, 1);
    }
    // overloaded case
    const depth1: number = getArrDepth(v);
    if (depth1 === 2) {
        return (v as Txyz[]).map( v_val => vectors.vecNorm(v_val as Txyz) as Txyz);
    }
    // normal case, vec is Txyz
    return vectors.vecNorm(v as Txyz) as Txyz;
}
// ================================================================================================
/**
 * Reverses the direction of a vector.
 * 
 * @param v The input vector or list of vectors.
 * @returns A new vector or list of new vectors.
 */
export function vecRev(debug: boolean, v: Txyz|Txyz[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecRev', arguments, 1);
    }
    // overloaded case
    const depth1: number = getArrDepth(v);
    if (depth1 === 2) {
        return (v as Txyz[]).map( v_val => vectors.vecRev(v_val as Txyz) as Txyz);
    }
    // normal case, vec is Txyz
    return vectors.vecRev(v as Txyz) as Txyz;
}
// ================================================================================================
/**
 * Transforms a vector from a local coordinate system defined by plane "p" to the global coordinate system.
 * 
 * If v is a single vector, p should be a single plane. 
 * If v is a list of vectors, p should be a list of planes with an equal length to v1.
 * 
 * @param v The vector to be transformed. 
 * @param p The source plane.
 * @returns A new vector or list of new vectors.
 */
export function vecLtoG(debug: boolean, v: Txyz|Txyz[], p: TPlane|TPlane[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecLtoG', arguments, 2);
    }
    return _vecXForm(v, p, true);
}
/**
 * Transforms a vector from the global coordinate system to a local coordinate system defined by plane "p".
 * \n
 * If v is a single vector, p should be a single plane. 
 * If v is a list of vectors, p should be a list of planes with an equal length to v1.
 * 
 * @param v The vector or list of vectors to be transformed. 
 * @param p The target plane or list of planes.
 * @returns A new vector or list of new vectors.
 */
export function vecGtoL(debug: boolean, v: Txyz|Txyz[], p: TPlane|TPlane[]): Txyz|Txyz[] {
    if (debug) {
        checkNumArgs('vecGtoL', arguments, 2);
    }
    return _vecXForm(v, p, false);
}
// ================================================================================================
function _vecXForm(v: Txyz|Txyz[], p: TPlane|TPlane[], to_global: boolean): Txyz|Txyz[] {
    // overloaded case
    const depth1: number = getArrDepth(v);
    const depth2: number = getArrDepth(p);
    if (depth1 === 1 && depth2 === 2) {
        // v is Txyz and p is TPlane
        return multMatrix(v as Txyz, xformMatrix(p as TPlane, to_global));
    } else if (depth1 === 2 && depth2 === 2) {
         // v is Txyz[] and p is TPlane
        const matrix = xformMatrix(p as TPlane, to_global);
        return (v as Txyz[]).map( a_v => multMatrix(a_v, matrix));
    } else if (depth1 === 1 && depth2 === 3) {
        // v is Txyz and p is TPlane[]
        const result: Txyz[] = [];
        for (const a_p of p) {
            const matrix = xformMatrix(a_p as TPlane, to_global);
            result.push(multMatrix(v as Txyz, matrix));
        }
        return result;
    } else if (depth1 === 2 && depth2 === 3) {
        // v is Txyz[] p is TPlane[], they must be equal length
        if (v.length === p.length) {
            const result: Txyz[] = [];
            for (let i = 0; i < v.length; i++) {
                const matrix = xformMatrix(p[i] as TPlane, to_global);
                result.push(multMatrix(v[i] as Txyz, matrix));
            }
            return result;
        } else {
            throw new Error(
                'Error transforming vectors: The list of vectors and list of planes must be of equal length.');
        }
    }
    throw new Error(
        'Error transforming vectors: Cannot process the input lists.');
}



export class vecClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
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

