"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numToCurr = exports.numToStr = exports.degToRad = exports.radToDeg = void 0;
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * Converts radians to degrees.
 *
 * @param rad
 */
function radToDeg(debug, rad) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('radToDeg', arguments, 1);
    }
    if (Array.isArray(rad)) {
        return rad.map(a_rad => radToDeg(debug, a_rad));
    }
    return rad * (180 / Math.PI);
}
exports.radToDeg = radToDeg;
/**
 * Converts degrees to radians.
 *
 * @param deg
 */
function degToRad(debug, deg) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('degToRad', arguments, 1);
    }
    if (Array.isArray(deg)) {
        return deg.map(a_deg => degToRad(debug, a_deg));
    }
    return deg * (Math.PI / 180);
}
exports.degToRad = degToRad;
/**
 * Converts the number to a string, with commas, e.g. 1,234,567
 * Converts the number to a string, with commas, where "d" specifies the number of fraction digits, e.g. 1,234.00.
 * Converts the number to a string, where "d" specifies the number of fraction digits, and "l" specifies the locale, e.g. "en-GB", "fi-FI", "in-IN", "pt-BR", etc'
 *
 * @param num
 * @param frac_digits
 * @param locale
 */
function numToStr(debug, num, frac_digits, locale) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('numToStr', arguments, 3, 1);
    }
    if (Array.isArray(num)) {
        for (let i = 0; i < num.length; i++) {
            num[i] = typeof num === 'number' ? num : Number(num);
        }
    }
    else {
        num = typeof num === 'number' ? num : Number(num);
    }
    const options = {};
    if (frac_digits !== undefined) {
        options['maximumFractionDigits'] = frac_digits;
        options['minimumFractionDigits'] = frac_digits;
    }
    locale = locale === undefined ? 'en-GB' : locale;
    if (Array.isArray(num)) {
        return num.map(a_num => a_num.toLocaleString(locale, options));
    }
    return num.toLocaleString(locale, options);
}
exports.numToStr = numToStr;
/**
 * Converts the number to a string representing currency.
 *
 * @param num
 * @param currency
 * @param locale
 */
function numToCurr(debug, num, currency, locale) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('numToCurr', arguments, 3, 2);
    }
    if (Array.isArray(num)) {
        for (let i = 0; i < num.length; i++) {
            num[i] = typeof num === 'number' ? num : Number(num);
        }
    }
    else {
        num = typeof num === 'number' ? num : Number(num);
    }
    const options = {};
    options['style'] = 'currency';
    options['currency'] = currency;
    locale = locale === undefined ? 'en-GB' : locale;
    if (Array.isArray(num)) {
        return num.map(a_num => a_num.toLocaleString(locale, options));
    }
    return num.toLocaleString(locale, options);
}
exports.numToCurr = numToCurr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvY29udmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBcUQ7QUFFckQ7Ozs7R0FJRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxLQUFjLEVBQUUsR0FBb0I7SUFDekQsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQztJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQWEsQ0FBQztLQUFFO0lBQ3hGLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBTkQsNEJBTUM7QUFDRDs7OztHQUlHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEtBQWMsRUFBRSxHQUFvQjtJQUN6RCxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBYSxDQUFDO0tBQUU7SUFDeEYsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFORCw0QkFNQztBQUNEOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEtBQWMsRUFBRSxHQUFv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