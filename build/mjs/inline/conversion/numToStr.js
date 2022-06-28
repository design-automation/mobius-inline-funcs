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
export function numToStr(num, frac_digits, locale) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtVG9TdHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2NvbnZlcnNpb24vbnVtVG9TdHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDRixNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQW9CLEVBQUUsV0FBb0IsRUFBRSxNQUFlO0lBQ2pGLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4RDtLQUNKO1NBQU07UUFDSCxHQUFHLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyRDtJQUNELE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNuQixJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7UUFBRSxPQUFPLENBQUMsdUJBQXVCLENBQUMsR0FBRyxXQUFXLENBQUM7UUFBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsR0FBRyxXQUFXLENBQUM7S0FBRTtJQUNsSSxNQUFNLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDakQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQWEsQ0FBQztLQUFFO0lBQ3ZHLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFXLENBQUM7QUFDekQsQ0FBQyJ9