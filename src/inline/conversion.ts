import * as Mathjs from 'mathjs';
import { checkNumArgs } from '../_check_inline_args';

/**
 * Create a boolean or convert a string or number to a boolean.
 * \n 
 * In case of a number, true is returned for non-zero numbers, and false in case of zero. 
 * Strings can be 'true' or 'false', or can contain a number. 
 * When value is a matrix, all elements will be converted to boolean.
 * @param val A value of any type.
 * @returns True or False. 
 */
 export function boolean(debug: boolean, val: number) {
    if (debug) {
        checkNumArgs('boolean', arguments, 1);
    }
    return Mathjs.boolean(val);
}
/**
 * Create a number or convert a string, boolean, or unit to a number. 
 * When value is a matrix, all elements will be converted to numbers.
 * @param val A value of any type.
 * @returns A number/numbers.
 */
export function number(debug: boolean, val: number) {
    if (debug) {
        checkNumArgs('number', arguments, 1);
    }
    return Mathjs.number(val);
}
/**
 * Create a string or convert any object into a string. 
 * Elements of Arrays and Matrices are processed element wise.
 * @param val A value of any type.
 * @returns A string/strings.
 */
export function string(debug: boolean, val: number) {
    if (debug) {
        checkNumArgs('string', arguments, 1);
    }
    return Mathjs.string(val);
}

/**
 * Converts radians to degrees.
 * ```
 * degToRad(45)   // 0.7853981633974483 (PI/4)
 * degToRad(180)  // 3.141592653589793 (PI)
 *```
 * @param rad A number (representing radians).
 * @returns A number (representing degrees).
 */
export function radToDeg(debug: boolean, rad: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('radToDeg', arguments, 1);
    }
    if (Array.isArray(rad)) { return rad.map(a_rad => radToDeg(debug, a_rad)) as number[]; }
    return rad * (180 / Math.PI);
}
/**
 * Converts degrees to radians.
 *```
 * radToDeg(PI)         // 180
 * radToDeg(PI / 2)     // 90
 * ```
 * @param deg A number (representing degrees).
 * @returns A number (representing radians).
 */
export function degToRad(debug: boolean, deg: number|number[]): number|number[] {
    if (debug) {
        checkNumArgs('degToRad', arguments, 1);
    }
    if (Array.isArray(deg)) { return deg.map(a_deg => degToRad(debug, a_deg)) as number[]; }
    return deg * (Math.PI / 180);
}
/**
 * Converts the number to a string, with commas, e.g. 1,234,567
 * 
 * If frac_digits is set: Converts the number to a string, with commas, where "d" specifies the
 * number of fraction digits, e.g. 1,234.00.
 * If locale is set: Converts the number to a string, where "d" specifies the number of fraction
 * digits, and "l" specifies the locale, e.g. "en-GB", "fi-FI", "in-IN", "pt-BR", etc.
 * See <a href="https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp" target="_blank">
 * w3schools' full list of locales.</a>
 *
 * @param num A number (with decimals) or an integer.
 * @param frac_digits (Optional) An integer specifying the number of fraction digits.
 * @param locale (Optional) A locale in the form of a string.
 * @returns A string.
 */
export function numToStr(debug: boolean, num: number|number[], frac_digits?: number, locale?: string): string|string[] {
    if (debug) {
        checkNumArgs('numToStr', arguments, 3, 1);
    }
    if (Array.isArray(num)) {
        for (let i = 0; i < num.length; i++) {
            num[i] = typeof num === 'number' ? num : Number(num);
        }
    } else {
        num = typeof num === 'number' ? num : Number(num);
    }
    const options = {};
    if (frac_digits !== undefined) { options['maximumFractionDigits'] = frac_digits; options['minimumFractionDigits'] = frac_digits; }
    locale = locale === undefined ? 'en-GB' : locale;
    if (Array.isArray(num)) { return num.map(a_num => a_num.toLocaleString(locale, options)) as string[]; }
    return num.toLocaleString(locale, options) as string;
}
/**
 * Converts the number to a string representing currency, with numbers formatted based on locale.
 * ```
 * numToCurr(232.4, "Usd", "en-AU")       // USD 234.40
 * numToCurr(1000000000, "sgd", "en-GB")  // SGD 1,000,000,000.00
 * numToCurr(10, "EUR")                   // €10.00
 * ```
 * See <a href="https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp" target="_blank">
 * w3schools' full list of locales.</a>
 *
 * @param num A number (with decimals) or an integer.
 * @param currency A string of 3 letters to indicate the desired currency. The letters will be converted to uppercase.
 * @param locale (Optional) A locale in the form of a string.
 * @returns A string.
 */
export function numToCurr(debug: boolean, num: number|number[], currency: string, locale?: string): string|string[] {
    if (debug) {
        checkNumArgs('numToCurr', arguments, 3, 2);
    }
    if (Array.isArray(num)) {
        for (let i = 0; i < num.length; i++) {
            num[i] = typeof num === 'number' ? num : Number(num);
        }
    } else {
        num = typeof num === 'number' ? num : Number(num);
    }
    const options = {};
    options['style'] = 'currency';
    options['currency'] = currency;
    locale = locale === undefined ? 'en-GB' : locale;
    if (Array.isArray(num)) { return num.map(a_num => a_num.toLocaleString(locale, options)) as string[]; }
    return num.toLocaleString(locale, options) as string;
}

export class conversionClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    boolean(val) {
        return boolean(this.__debug__, val);
    }

    number(val) {
        return number(this.__debug__, val);
    }

    string(val) {
        return string(this.__debug__, val);
    }

    radToDeg(rad) {
        return radToDeg(this.__debug__, rad);
    }

    degToRad(deg) {
        return degToRad(this.__debug__, deg);
    }

    numToStr(num, frac_digits?, locale?) {
        return numToStr(this.__debug__, num, frac_digits, locale);
    }

    numToCurr(num, currency, locale?) {
        return numToCurr(this.__debug__, num, currency, locale);
    }
}

