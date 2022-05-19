import { checkNumArgs } from '../_check_inline_args';
import * as Mathjs from 'mathjs';

/**
 * Returns the absolute value of the given number.
 * \n
 * ```
 * abs('-1');     // 1
 * abs(-2);       // 2
 * abs(null);     // 0
 * abs('');       // 0
 * abs([]);       // 0
 * abs([2]);      // [2]
 * abs([1,2]);    // [1,2]
 * abs({});       // NaN
 * abs('string'); // NaN
 * abs();         // NaN
 * ```
 *
 * @param num A number or list of numbers.
 * @returns A number, list of numbers or NaN if invalid. 
 * 
 */
 export function abs(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('abs', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.abs(a_num) ) as number[];
    }
    return Math.abs(num as number);
}

/**
 * Returns the square of the number.
 * \n
 * If the input is a list, the result will also be a list. 
 * \n
 * ```
 * square([1, 2, 3, 4])    // [1, 4, 9, 16]
 * square(5)               // 25
 * ```
 * 
 * @param list A number or a list containing numbers.
 * @returns A number or a list containing numbers.  
 * 
 */
 export function square(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('square', arguments, 1);
    }
    return Mathjs.square(list);
}
/**
 * Returns the cube of the number.
 * \n
 * If the input is a list, the result will also be a list. 
 * \n
 * ```
 * cube([1, 2, 3, 4])   // [1, 8, 27, 64]
 * cube(5)              // 125
 * ```
 * 
 * @param list A number or a list containing numbers.
 * @returns A number or a list containing numbers.  
 */
export function cube(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('cube', arguments, 1);
    }
    return Mathjs.cube(list);
}

/**
 * Returns a number representing the given base taken to the power of the given exponent.
 *
 * @param base A number or list of numbers.
 * @param xp The exponent used to raise the base.
 * @returns A number or a list of numbers.
 */
 export function pow(debug: boolean, base: number|number[], xp: number): number|number[] {
    if (debug) {
        checkNumArgs('pow', arguments, 2);
    }
    if (Array.isArray(base)) {
        return base.map( a_num => Math.pow(a_num, xp) ) as number[];
    }
    return Math.pow(base as number, xp);
}
/**
 * Returns the square root of the given number. If the number is negative, NaN is returned.
 *
 * @param num A number or list of numbers.
 * @returns A number or a list of numbers.
 */
export function sqrt(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('sqrt', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.sqrt(a_num) ) as number[];
    }
    return Math.sqrt(num as number);
}
/**
 * Returns a number representing e raised to the power of x, where e is Euler's number and x is the argument.
 *
 * @param num A number or list of numbers.
 * @returns A number or a list of numbers.
 */
export function exp(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('exp', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.exp(a_num) ) as number[];
    }
    return Math.exp(num as number);
}
/**
 * Returns the natural logarithm (base e) of the given number. If the number is negative, NaN is returned.
 *
 * @param base A number or list of numbers.
 * @returns A number, list of numbers or NaN. 
 */
export function log(debug: boolean, base: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('log', arguments, 1);
    }
    if (Array.isArray(base)) {
        return base.map( a_num => Math.log(a_num) ) as number[];
    }
    return Math.log(base as number);
}
/**
 * Returns the base 10 logarithm (base e) of the given number. If the number is negative, NaN is returned.
 *
 * @param base A number or list of numbers.
 * @returns A number, list of numbers or NaN. 
 */
export function log10(debug: boolean, base: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('log10', arguments, 1);
    }
    if (Array.isArray(base)) {
        return base.map( a_num => Math.log10(a_num) ) as number[];
    }
    return Math.log10(base as number);
}
/**
 * The value of the given number rounded to the nearest integer.
 *
 * @param num A number or list of numbers.
 * @param dec_pla The number of decimal places.
 * @returns An integer or list of integers. 
 */
export function round(debug: boolean, num: number|number[], dec_pla = 0): number|number[] {
    if (debug) {
        checkNumArgs('round', arguments, 2, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => round(debug, a_num, dec_pla) ) as number[];
    }
    num = num as number;
    if (dec_pla === 0) { return Math.round(num); }
    if (dec_pla > 0) {
        const dec: number = Math.pow(10, dec_pla);
        return Math.round(num * dec) / dec;
    } else {
        const dec: number = Math.pow(10, Math.abs(dec_pla));
        return Math.round(num / dec) * dec;
    }
}
/**
 * Returns the value of the given number converted to the specified number of significant figures.
 *
 * @param num A number or list of numbers.
 * @param sig_figs The number of significant figures.
 * @returns A number. 
 */
export function sigFig(debug: boolean, num: number|number[], sig_figs: number): number|number[] {
    if (debug) {
        checkNumArgs('sigFig', arguments, 2);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => sigFig(debug, a_num, sig_figs) ) as number[];
    }
    if (num === 0) { return 0; }
    num = num as number;
    const round_val: number = sig_figs - 1 - Math.floor(Math.log10(Math.abs(num)));
    return round(debug, num, round_val) as number;
    // return parseFloat(num.toPrecision(sig_figs));
}
/**
 * Returns the smallest integer greater than or equal to the given number.
 *```
 * ceil(.95);    // 1
 * ceil(4);      // 4
 * ceil(7.004);  // 8
 * ceil(-0.95);  // -0
 * ceil(-4);     // -4
 * ceil(-7.004); // -7
 * ```
 *
 * @param num A number or list of numbers.
 * @returns An integer or list of integers. 
 */
export function ceil(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('ceil', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.ceil(a_num) ) as number[];
    }
    return Math.ceil(num as number);
}
/**
 * Returns the largest integer less than or equal to the specified number.
 *```
 * floor( 45.95); //  45
 * floor( 45.05); //  45
 * floor(  4   ); //   4
 * floor(-45.05); // -46
 * floor(-45.95); // -46
 * ```
 *
 * @param num A number or list of numbers.
 * @returns An integer or list of integers. 
 */
export function floor(debug: boolean, num: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('floor', arguments, 1);
    }
    if (Array.isArray(num)) {
        return num.map( a_num => Math.floor(a_num) ) as number[];
    }
    return Math.floor(num as number);
}
/**
 * Returns the sum of all values in a list.
 * 
 * @param list A list containing numbers.
 * @returns A number (The sum).
 */
 export function sum(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('sum', arguments, 1);
    }
    return Mathjs.sum(list);
}
/**
 * Returns the product of all values in a list.
 * @param list A list containing numbers.
 * @returns A number (The total product).
 */
 export function prod(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('prod', arguments, 1);
    }
    return Mathjs.prod(list);
}
/**
 * Returns the hypotenuse of all values in a list.
 * @param list A list containing numbers.
 * @returns A number (The hypotenuse).
 */
export function hypot(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('hypot', arguments, 1);
    }
    return Mathjs.hypot(list);
}
/**
 * Returns the norm of a list.
 * @param list A list containing numbers.
 * @returns A number (The norm).
 */
export function norm(debug: boolean, list: number) {
    if (debug) {
        checkNumArgs('norm', arguments, 1);
    }
    return Mathjs.norm(list);
}
/**
 * Returns true if the absolute difference between the two numbers is less than the tolerance, t.
 * @param n1 The first number.
 * @param n2 The second number.
 * @param t The tolerance.
 * @returns True or False.
 */
 export function isApprox(debug: boolean, n1: number, n2: number, t: number) {
    if (debug) {
        checkNumArgs('isApprox', arguments, 3);
    }
    return Math.abs(n1 - n2) < t;
}
/**
 * Returns v1 < v2 < v3 (True/False).
 * @param v1 The first value. 
 * @param v2 The second value. 
 * @param v3 The third value. 
 * @returns True or False.
 */
export function isIn(debug: boolean, v1: any, v2: any, v3: any): boolean {
    if (debug) {
        checkNumArgs('isIn', arguments, 3);
    }
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
    v1 < v2 && v2 < v3;
}
/**
 * Returns v1 <= v2 <= v3 (True/False).
 * @param v1 The first value. 
 * @param v2 The second value. 
 * @param v3 The third value. 
 * @returns True or False.
 */
export function isWithin(debug: boolean, v1: any, v2: any, v3: any): boolean {
    if (debug) {
        checkNumArgs('isWithin', arguments, 3);
    }
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
    v1 <= v2 && v2 <= v3;
}

/**
 * Maps a number from the d1 domain to the d2 domain. 
 * \n
 * This can be thought of as a percentage. 
 * The percentage of num in d1's range is calculated, 
 * then used to find the equivalent value for num in d2. 
 * \n
 * ```
 * remap(10, [0, 100], [100,200]) // 10 is 10% of 0-100. Hence, 10% of 100-200 is 110.
 * remap(40, [20, 80], [0, 30])   // 40 is 33.3% of 20-80. Hence, 33.3% of 0-30 is 10.
 * ```
 * @param num The number/integer to be remapped. 
 * @param d1 A list of two numbers, representing the first domain.
 * @param d2 A list of two numbers, representing the second domain.
 * @returns The remapped number.
 */
export function remap(debug: boolean, num: number|number[], d1: number[], d2: number[]): number|number[] {
    if (debug) {
        checkNumArgs('remap', arguments, 3);
    }
    if (Array.isArray(num)) { return num.map(num_val => remap(debug, num_val, d1, d2)) as number[]; }
    return ( d2[0] +
        (
            ((num - d1[0]) / (d1[1] - d1[0])) * (d2[1] - d2[0])
        )
    );
}

export class arithmeticClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    abs(num) {
        return abs(this.__debug__, num);
    }

    square(list) {
        return square(this.__debug__, list);
    }

    cube(list) {
        return cube(this.__debug__, list);
    }
    
    pow(base, xp) {
        return pow(this.__debug__, base, xp);
    }

    sqrt(num) {
        return sqrt(this.__debug__, num);
    }

    exp(num) {
        return exp(this.__debug__, num);
    }

    log(base) {
        return log(this.__debug__, base);
    }

    log10(base) {
        return log10(this.__debug__, base);
    }

    round(num, dec_pla = 0) {
        return round(this.__debug__, num, dec_pla = 0);
    }

    sigFig(num, sig_figs) {
        return sigFig(this.__debug__, num, sig_figs);
    }

    ceil(num) {
        return ceil(this.__debug__, num);
    }

    floor(num) {
        return floor(this.__debug__, num);
    }

    sum(list) {
        return sum(this.__debug__, list);
    }

    prod(list) {
        return prod(this.__debug__, list);
    }

    hypot(list) {
        return hypot(this.__debug__, list);
    }

    norm(list) {
        return norm(this.__debug__, list);
    }

    isApprox(n1, n2, t) {
        return isApprox(this.__debug__, n1, n2, t);
    }

    isIn(v1, v2, v3) {
        return isIn(this.__debug__, v1, v2, v3);
    }

    isWithin(v1, v2, v3) {
        return isWithin(this.__debug__, v1, v2, v3);
    }
    remap(num, d1, d2) {
        return remap(this.__debug__, num, d1, d2);
    }
}

