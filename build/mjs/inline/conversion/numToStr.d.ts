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
export declare function numToStr(num: number | number[], frac_digits?: number, locale?: string): string | string[];
