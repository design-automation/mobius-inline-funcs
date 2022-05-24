/**
 * Converts the number to a string representing currency, with numbers formatted based on locale.
 * ```
 * numToCurr(232.4, "Usd", "en-AU")       // USD 232.40
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
 export function numToCurr(num: number|number[], currency: string, locale?: string): string|string[] {
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