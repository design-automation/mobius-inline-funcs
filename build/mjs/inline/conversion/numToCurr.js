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
export function numToCurr(num, currency, locale) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtVG9DdXJyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9jb252ZXJzaW9uL251bVRvQ3Vyci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNGLE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBb0IsRUFBRSxRQUFnQixFQUFFLE1BQWU7SUFDOUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hEO0tBQ0o7U0FBTTtRQUNILEdBQUcsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JEO0lBQ0QsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxVQUFVLENBQUM7SUFDOUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUMvQixNQUFNLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDakQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQWEsQ0FBQztLQUFFO0lBQ3ZHLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFXLENBQUM7QUFDekQsQ0FBQyJ9