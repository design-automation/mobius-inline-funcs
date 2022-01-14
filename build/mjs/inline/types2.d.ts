/**
 * Functions to check types.
 */
/**
 * Returns true if the value is a number, false otherwise.
 * @param v
 */
export declare function isNum(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a integer, false otherwise.
 * @param v
 */
export declare function isInt(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a floating point number, false otherwise.
 * @param v
 */
export declare function isFlt(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a boolean, false otherwise.
 * @param v
 */
export declare function isBool(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a string, false otherwise.
 * @param v
 */
export declare function isStr(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a list, false otherwise.
 * @param v
 */
export declare function isList(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a dictionary, false otherwise.
 * @param v
 */
export declare function isDict(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a list of two numbers, false otherwise.
 * @param v
 */
export declare function isVec2(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a list of three numbers, false otherwise.
 * @param v
 */
export declare function isVec3(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a list of three numbers in the range [0, 1], false otherwise.
 * @param v
 */
export declare function isCol(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a ray, false otherwise.
 * @param v
 */
export declare function isRay(debug: boolean, v: any): boolean;
/**
 * Returns true if the value is a plane, false otherwise.
 * @param v
 */
export declare function isPln(debug: boolean, v: any): boolean;
/**
 * Returns true is the value is not a number (NaN), false otherwise.
 * @param v
 */
export declare function isNaN(debug: boolean, v: any): boolean;
/**
 * Returns true is the value is null, false otherwise.
 * @param v
 */
export declare function isNull(debug: boolean, v: any): boolean;
/**
 * Returns true is the value is undefined, false otherwise.
 * @param v
 */
export declare function isUndef(debug: boolean, v: any): boolean;
/**
 * To be completed...
 * @param v1
 * @param v2
 * @param v3
 */
export declare function _isIn(v1: any, v2: any, v3: any): boolean;
/**
 * To be completed...
 * @param v1
 * @param v2
 * @param v3
 */
export declare function _isWithin(v1: any, v2: any, v3: any): boolean;
export declare class types2Class {
    __debug__: boolean;
    constructor(debug: boolean);
    isNum(v: any): boolean;
    isInt(v: any): boolean;
    isFlt(v: any): boolean;
    isBool(v: any): boolean;
    isStr(v: any): boolean;
    isList(v: any): boolean;
    isDict(v: any): boolean;
    isVec2(v: any): boolean;
    isVec3(v: any): boolean;
    isCol(v: any): boolean;
    isRay(v: any): boolean;
    isPln(v: any): boolean;
    isNaN(v: any): boolean;
    isNull(v: any): boolean;
    isUndef(v: any): boolean;
    _isIn(v1: any, v2: any, v3: any): boolean;
    _isWithin(v1: any, v2: any, v3: any): boolean;
}
