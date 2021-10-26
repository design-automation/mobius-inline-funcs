/**
 * Functions to check types.
 */
import { checkNumArgs } from '../_check_inline_args';
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
export function isNum(debug, v) {
    if (debug) {
        checkNumArgs('isNum', arguments, 1);
    }
    return typeof v === 'number';
}
/**
 * Returns true if the value is a integer, false otherwise.
 * @param v
 */
export function isInt(debug, v) {
    if (debug) {
        checkNumArgs('isInt', arguments, 1);
    }
    return Number.isInteger(v);
}
/**
 * Returns true if the value is a floating point number, false otherwise.
 * @param v
 */
export function isFlt(debug, v) {
    if (debug) {
        checkNumArgs('isFlt', arguments, 1);
    }
    // return !Number.isNaN(v) && v % 1 > 0;
    return typeof v === 'number';
}
/**
 * Returns true if the value is a boolean, false otherwise.
 * @param v
 */
export function isBool(debug, v) {
    if (debug) {
        checkNumArgs('isBool', arguments, 1);
    }
    return typeof v === 'boolean';
}
/**
 * Returns true if the value is a string, false otherwise.
 * @param v
 */
export function isStr(debug, v) {
    if (debug) {
        checkNumArgs('isStr', arguments, 1);
    }
    return typeof v === 'string';
}
/**
 * Returns true if the value is a list, false otherwise.
 * @param v
 */
export function isList(debug, v) {
    if (debug) {
        checkNumArgs('isList', arguments, 1);
    }
    return Array.isArray(v);
}
/**
 * Returns true if the value is a dictionary, false otherwise.
 * @param v
 */
export function isDict(debug, v) {
    if (debug) {
        checkNumArgs('isDict', arguments, 1);
    }
    // return typeof v === 'object' && !Array.isArray(v);
    return v.constructor === Object;
}
/**
 * Returns true if the value is a list of two numbers, false otherwise.
 * @param v
 */
export function isVec2(debug, v) {
    if (debug) {
        checkNumArgs('isVec2', arguments, 1);
    }
    return Array.isArray(v) && v.length === 2 &&
        typeof v[0] === 'number' && typeof v[1] === 'number';
}
/**
 * Returns true if the value is a list of three numbers, false otherwise.
 * @param v
 */
export function isVec3(debug, v) {
    if (debug) {
        checkNumArgs('isVec3', arguments, 1);
    }
    return Array.isArray(v) && v.length === 3 &&
        typeof v[0] === 'number' && typeof v[1] === 'number' && typeof v[2] === 'number';
}
/**
 * Returns true if the value is a list of three numbers in the range [0, 1], false otherwise.
 * @param v
 */
export function isCol(debug, v) {
    if (debug) {
        checkNumArgs('isCol', arguments, 1);
    }
    return isVec3(debug, v) && _isWithin(0, v[0], 1) && _isWithin(0, v[1], 1) && _isWithin(0, v[2], 1);
}
/**
 * Returns true if the value is a ray, false otherwise.
 * @param v
 */
export function isRay(debug, v) {
    if (debug) {
        checkNumArgs('isRay', arguments, 1);
    }
    return Array.isArray(v) && v.length === 2 && isVec3(debug, v[0]) && isVec3(debug, v[1]);
}
/**
 * Returns true if the value is a plane, false otherwise.
 * @param v
 */
export function isPln(debug, v) {
    if (debug) {
        checkNumArgs('isPln', arguments, 1);
    }
    return Array.isArray(v) && v.length === 3 && isVec3(debug, v[0]) && isVec3(debug, v[1]) && isVec3(debug, v[2]);
}
/**
 * Returns true is the value is not a number (NaN), false otherwise.
 * @param v
 */
export function isNaN(debug, v) {
    if (debug) {
        checkNumArgs('isNaN', arguments, 1);
    }
    return Number.isNaN(v);
}
/**
 * Returns true is the value is null, false otherwise.
 * @param v
 */
export function isNull(debug, v) {
    if (debug) {
        checkNumArgs('isNull', arguments, 1);
    }
    return v === null;
}
/**
 * Returns true is the value is undefined, false otherwise.
 * @param v
 */
export function isUndef(debug, v) {
    if (debug) {
        checkNumArgs('isUndef', arguments, 1);
    }
    return v === undefined;
}
/**
 * To be completed...
 * @param v1
 * @param v2
 * @param v3
 */
export function _isIn(v1, v2, v3) {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 < v2 && v2 < v3;
}
/**
 * To be completed...
 * @param v1
 * @param v2
 * @param v3
 */
export function _isWithin(v1, v2, v3) {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 <= v2 && v2 <= v3;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3R5cGVzMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvX3R5cGVzMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCwyRUFBMkU7QUFDM0UsNEVBQTRFO0FBQzVFLDBGQUEwRjtBQUMxRiw2RUFBNkU7QUFDN0UsMkVBQTJFO0FBQzNFLDBFQUEwRTtBQUMxRSxnRkFBZ0Y7QUFDaEYseUZBQXlGO0FBQ3pGLDJGQUEyRjtBQUMzRiw4R0FBOEc7QUFDOUcsd0VBQXdFO0FBQ3hFLDBFQUEwRTtBQUMxRSxxRkFBcUY7QUFDckYsd0VBQXdFO0FBQ3hFLDhFQUE4RTtBQUU5RTs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQWMsRUFBRSxDQUFNO0lBQ3hDLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBQ0Q7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFjLEVBQUUsQ0FBTTtJQUN4QyxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0QsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFDRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQWMsRUFBRSxDQUFNO0lBQ3hDLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCx3Q0FBd0M7SUFDeEMsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7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