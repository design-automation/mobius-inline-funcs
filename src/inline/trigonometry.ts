import { checkNumArgs } from '../_check_inline_args';

/**
 * Returns the sine of the given number.
 *```
 * sin(0);           // 0
 * sin(1);           // 0.8414709848078965
 * ```
 *
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers. 
 */
 export function sin(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('sin', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.sin(a_num) ) as number[];
    }
    return Math.sin(num as number);
}
/**
 * Returns the arcsine (in radians) of the given number if it's between -1 and 1; otherwise, NaN.
 *```
 * asin(-2);  // NaN
 * asin(-1);  // -1.5707963267948966 (-pi/2)
 * asin(0);   // 0
 * asin(0.5); // 0.5235987755982989
 * asin(1);   // 1.5707963267948966 (pi/2)
 * asin(2);   // NaN
 *```
 * @param num A number or list of numbers between -1 and 1.
 * @returns A number or list of numbers (in radians).
 */
export function asin(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('cos', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.asin(a_num) ) as number[];
    }
    return Math.asin(num as number);
}
/**
 * Returns the hyperbolic sine (in radians) of the given number.
 *```
 * sinh(0); // 0
 * sinh(1); // 1.1752011936438014
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers (in radians).
 */
export function sinh(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('sinh', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.sinh(a_num) ) as number[];
    }
    return Math.sinh(num as number);
}
/**
 * Returns the hyperbolic arcsine of the given number.
 *```
 * asinh(1);  // 0.881373587019543
 * asinh(0);  // 0
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers.
 */
export function asinh(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('asinh', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.asinh(a_num) ) as number[];
    }
    return Math.asinh(num as number);
}
/**
 * Returns the cosine of the given number.
 *```
 * cos(0);           // 1
 * cos(1);           // 0.5403023058681398
 * cos(Math.PI);     // -1
 * cos(2 * PI);      // 1
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers. 
 */
export function cos(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('cos', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.cos(a_num) ) as number[];
    }
    return Math.cos(num as number);
}
/**
 * Returns the arc-cosine (in radians) of the given number between -1 and 1; otherwise, NaN.
 *```
 * acos(-2);  // NaN
 * acos(-1);  // 3.141592653589793
 * acos(0);   // 1.5707963267948966
 * acos(0.5); // 1.0471975511965979
 * acos(1);   // 0
 * acos(2);   // NaN
 *```
 * @param num A number or list of numbers between -1 and 1.
 * @returns A number, list of numbers or NaN. 
 */
export function acos(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('acos', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.acos(a_num) ) as number[];
    }
    return Math.acos(num as number);
}
/**
 * Returns the hyperbolic cosine (in radians) of the given number.
 *```
 * cosh(0); // 1
 * cosh(1); // 1.5430806348152437
 * ```
 *
 * @param num A number or list of numbers (in radians).
 * @returns A number. 
 */
export function cosh(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('cosh', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.cosh(a_num) ) as number[];
    }
    return Math.cosh(num as number);
}
/**
 * Returns the hyperbolic arc-cosine of the given number. If the number is less than 1, NaN.
 * \n
 * ```
 * acosh(-1);  // NaN
 * acosh(0);   // NaN
 * acosh(0.5); // NaN
 * acosh(1);   // 0
 * acosh(2);   // 1.3169578969248166
 *```
 * @param num A number or list of numbers.
 * @returns A number, or NaN. 
 */
export function acosh(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('acosh', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.acosh(a_num) ) as number[];
    }
    return Math.acosh(num as number);
}
/**
 * Returns the tangent of the given number.
 * \n
 * ```
 * tan(1); // 1.5574077246549023
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number. 
 */
export function tan(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('tan', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.tan(a_num) ) as number[];
    }
    return Math.tan(num as number);
}
/**
 * Returns the arc-tangent (in radians) of the given number.
 * \n
 * ```
 * atan(1);   // 0.7853981633974483
 * atan(0);   // 0
 * atan(-0);  // -0
 * atan(Infinity);   //  1.5707963267948966
 * atan(-Infinity);  // -1.5707963267948966
 * ```
 *
 * // The angle that the line [(0,0);(x,y)] forms with the x-axis in a Cartesian coordinate system
 * atan(y / x);
 *
 * @param num A number or list of numbers between -1 and 1.
 */
export function atan(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('atan', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.atan(a_num) ) as number[];
    }
    return Math.atan(num as number);
}
/**
 * Returns the angle in radians (in [-π,π]) between the positive x-axis and the ray from (0,0) to the point
 *```
 * atan2([15, 90]]); // 1.4056476493802699
 * atan2([90, 15]]); // 0.16514867741462683
 *```
 * @param xy A list of two numbers [x,y] or a list of lists [[x,y], [x,y], [x,y]...].
 * @returns A number (in radians).
 */
export function atan2(debug: boolean, xy: [number, number]|[number, number][]): number|number[] {
    if (debug) {
        checkNumArgs('atan2', arguments, 1);
    }
    if (Array.isArray(xy[0])) {
        return (xy as [number, number][]).map( a_xy => Math.atan2(a_xy[1], a_xy[0]) ) as number[];
    }
    xy = xy as [number, number];
    return Math.atan2(xy[1], xy[0]);
}
/**
 * Returns the hyperbolic tangent of the given number.
 *```
 * tanh(0);        // 0
 * tanh(Infinity); // 1
 * tanh(1);        // 0.7615941559557649
 *```
 * @param num A number or list of numbers (in radians).
 * @returns A number or list of numbers. 
 */
export function tanh(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('tanh', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.tanh(a_num) ) as number[];
    }
    return Math.tanh(num as number);
}
/**
 * Returns the hyperbolic arc-tangent of the given number.
 *```
 * atanh(-2);  // NaN
 * atanh(-1);  // -Infinity
 * atanh(0);   // 0
 * atanh(0.5); // 0.5493061443340548
 * atanh(1);   // Infinity
 * atanh(2);   // NaN
 *```
 * @param num A number or list of numbers.
 * @returns A number or list of numbers. 
 */
export function atanh(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('atanh', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.atanh(a_num) ) as number[];
    }
    return Math.atanh(num as number);
}

export class trigonometryClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    sin(num) {
        return sin(this.__debug__, num);
    }

    asin(num) {
        return asin(this.__debug__, num);
    }

    sinh(num) {
        return sinh(this.__debug__, num);
    }

    asinh(num) {
        return asinh(this.__debug__, num);
    }

    cos(num) {
        return cos(this.__debug__, num);
    }

    acos(num) {
        return acos(this.__debug__, num);
    }

    cosh(num) {
        return cosh(this.__debug__, num);
    }

    acosh(num) {
        return acosh(this.__debug__, num);
    }

    tan(num) {
        return tan(this.__debug__, num);
    }

    atan(num) {
        return atan(this.__debug__, num);
    }

    atan2(xy) {
        return atan2(this.__debug__, xy);
    }

    tanh(num) {
        return tanh(this.__debug__, num);
    }

    atanh(num) {
        return atanh(this.__debug__, num);
    }
}

