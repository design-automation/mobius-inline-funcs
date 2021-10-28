import { checkNumArgs } from '../_check_inline_args';
/**
 * Converts radians to degrees.
 *
 * @param rad
 */
export function radToDeg(debug, rad) {
    if (debug) {
        checkNumArgs('radToDeg', arguments, 1);
    }
    if (Array.isArray(rad)) {
        return rad.map(a_rad => radToDeg(debug, a_rad));
    }
    return rad * (180 / Math.PI);
}
/**
 * Converts degrees to radians.
 *
 * @param deg
 */
export function degToRad(debug, deg) {
    if (debug) {
        checkNumArgs('degToRad', arguments, 1);
    }
    if (Array.isArray(deg)) {
        return deg.map(a_deg => degToRad(debug, a_deg));
    }
    return deg * (Math.PI / 180);
}
/**
 * Converts the number to a string, with commas, e.g. 1,234,567
 * Converts the number to a string, with commas, where "d" specifies the number of fraction digits, e.g. 1,234.00.
 * Converts the number to a string, where "d" specifies the number of fraction digits, and "l" specifies the locale, e.g. "en-GB", "fi-FI", "in-IN", "pt-BR", etc'
 *
 * @param num
 * @param frac_digits
 * @param locale
 */
export function numToStr(debug, num, frac_digits, locale) {
    if (debug) {
        checkNumArgs('numToStr', arguments, 3, 1);
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
/**
 * Converts the number to a string representing currency.
 *
 * @param num
 * @param currency
 * @param locale
 */
export function numToCurr(debug, num, currency, locale) {
    if (debug) {
        checkNumArgs('numToCurr', arguments, 3, 2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvY29udmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYyxFQUFFLEdBQW9CO0lBQ3pELElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDMUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFhLENBQUM7S0FBRTtJQUN4RixPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUNEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWMsRUFBRSxHQUFvQjtJQUN6RCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBYSxDQUFDO0tBQUU7SUFDeEYsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFDRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYyxFQUFF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