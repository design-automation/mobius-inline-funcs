/**
 * Functions to check types.
 * @module
 */
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
    return typeof v === 'number';
}
/**
 * Returns true if the value is a integer, false otherwise.
 * @param v
 */
export function isInt(debug, v) {
    return Number.isInteger(v);
}
/**
 * Returns true if the value is a floating point number, false otherwise.
 * @param v
 */
export function isFlt(debug, v) {
    // return !Number.isNaN(v) && v % 1 > 0;
    return typeof v === 'number';
}
/**
 * Returns true if the value is a boolean, false otherwise.
 * @param v
 */
export function isBool(debug, v) {
    return typeof v === 'boolean';
}
/**
 * Returns true if the value is a string, false otherwise.
 * @param v
 */
export function isStr(debug, v) {
    return typeof v === 'string';
}
/**
 * Returns true if the value is a list, false otherwise.
 * @param v
 */
export function isList(debug, v) {
    return Array.isArray(v);
}
/**
 * Returns true if the value is a dictionary, false otherwise.
 * @param v
 */
export function isDict(debug, v) {
    // return typeof v === 'object' && !Array.isArray(v);
    return v.constructor === Object;
}
/**
 * Returns true if the value is a list of two numbers, false otherwise.
 * @param v
 */
export function isVec2(debug, v) {
    return Array.isArray(v) && v.length === 2 &&
        typeof v[0] === 'number' && typeof v[1] === 'number';
}
/**
 * Returns true if the value is a list of three numbers, false otherwise.
 * @param v
 */
export function isVec3(debug, v) {
    return Array.isArray(v) && v.length === 3 &&
        typeof v[0] === 'number' && typeof v[1] === 'number' && typeof v[2] === 'number';
}
/**
 * Returns true if the value is a list of three numbers in the range [0, 1], false otherwise.
 * @param v
 */
export function isCol(debug, v) {
    return isVec3(debug, v) && _isWithin(0, v[0], 1) && _isWithin(0, v[1], 1) && _isWithin(0, v[2], 1);
}
/**
 * Returns true if the value is a ray, false otherwise.
 * @param v
 */
export function isRay(debug, v) {
    return Array.isArray(v) && v.length === 2 && isVec3(debug, v[0]) && isVec3(debug, v[1]);
}
/**
 * Returns true if the value is a plane, false otherwise.
 * @param v
 */
export function isPln(debug, v) {
    return Array.isArray(v) && v.length === 3 && isVec3(debug, v[0]) && isVec3(debug, v[1]) && isVec3(debug, v[2]);
}
/**
 * Returns true is the value is not a number (NaN), false otherwise.
 * @param v
 */
export function isNaN(debug, v) {
    return Number.isNaN(v);
}
/**
 * Returns true is the value is null, false otherwise.
 * @param v
 */
export function isNull(debug, v) {
    return v === null;
}
/**
 * Returns true is the value is undefined, false otherwise.
 * @param v
 */
export function isUndef(debug, v) {
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
export class typesClass {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5saW5lL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILDJFQUEyRTtBQUMzRSw0RUFBNEU7QUFDNUUsMEZBQTBGO0FBQzFGLDZFQUE2RTtBQUM3RSwyRUFBMkU7QUFDM0UsMEVBQTBFO0FBQzFFLGdGQUFnRjtBQUNoRix5RkFBeUY7QUFDekYsMkZBQTJGO0FBQzNGLDhHQUE4RztBQUM5Ryx3RUFBd0U7QUFDeEUsMEVBQTBFO0FBQzFFLHFGQUFxRjtBQUNyRix3RUFBd0U7QUFDeEUsOEVBQThFO0FBRTlFOzs7R0FHRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYyxFQUFFLENBQU07SUFDeEMsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQUNEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYyxFQUFFLENBQU07SUFDeEMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFDRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQWMsRUFBRSxDQUFNO0lBQ3hDLHdDQUF3QztJQUN4QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBQ0Q7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFjLEVBQUUsQ0FBTTtJQUN6QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUNsQyxDQUFDO0FBQ0Q7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFjLEVBQUUsQ0FBTTtJQUN4QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBQ0Q7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFjLEVBQUUsQ0FBTTtJQUN6QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUNEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBYyxFQUFFLENBQU07SUFDekMscURBQXFEO0lBQ3JELE9BQU8sQ0FBQyxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUM7QUFDcEMsQ0FBQztBQUNEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBYyxFQUFFLENBQU07SUFDekMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUNyQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDO0FBQzdELENBQUM7QUFDRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWMsRUFBRSxDQUFNO0lBQ3pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDckMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDekYsQ0FBQztBQUNEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYyxFQUFFLENBQU07SUFDeEMsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FB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