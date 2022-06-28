"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numToStr = void 0;
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
function numToStr(num, frac_digits, locale) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtVG9TdHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2NvbnZlcnNpb24vbnVtVG9TdHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDRixTQUFnQixRQUFRLENBQUMsR0FBb0IsRUFBRSxXQUFvQixFQUFFLE1BQWU7SUFDakYsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hEO0tBQ0o7U0FBTTtRQUNILEdBQUcsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JEO0lBQ0QsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtRQUFFLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLFdBQVcsQ0FBQztRQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLFdBQVcsQ0FBQztLQUFFO0lBQ2xJLE1BQU0sR0FBRyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBYSxDQUFDO0tBQUU7SUFDdkcsT0FBTyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQVcsQ0FBQztBQUN6RCxDQUFDO0FBYkEsNEJBYUEifQ==