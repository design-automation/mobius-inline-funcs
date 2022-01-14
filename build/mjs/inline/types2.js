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
export class types2Class {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS90eXBlczIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQsMkVBQTJFO0FBQzNFLDRFQUE0RTtBQUM1RSwwRkFBMEY7QUFDMUYsNkVBQTZFO0FBQzdFLDJFQUEyRTtBQUMzRSwwRUFBMEU7QUFDMUUsZ0ZBQWdGO0FBQ2hGLHlGQUF5RjtBQUN6RiwyRkFBMkY7QUFDM0YsOEdBQThHO0FBQzlHLHdFQUF3RTtBQUN4RSwwRUFBMEU7QUFDMUUscUZBQXFGO0FBQ3JGLHdFQUF3RTtBQUN4RSw4RUFBOEU7QUFFOUU7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFjLEVBQUUsQ0FBTTtJQUN4QyxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQUNEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYyxFQUFFLENBQU07SUFDeEMsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBQ0Q7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFjLEVBQUUsQ0FBTTtJQUN4QyxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0Qsd0NBQXdDO0lBQ3hDLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFD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O0lBRUQsS0FBSyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNKLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDSixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNKLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ0osT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDSixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ0osT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLENBQUM7UUFDTCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQ1osT0FBTyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNoQixPQUFPLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDSiJ9