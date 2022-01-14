/**
 * Functions to work with strings.
 */
import { checkNumArgs } from '../_check_inline_args';
// ['strRepl(s,search,new)', 'Replace all instances of specified search string with a new string.'],
// ['strUpp(s), 'Converts all the alphabetic characters in a string to uppercase.']
// ['strLow(s), 'Converts all the alphabetic characters in a string to lowercase.']
// ['strTrim(s), 'Removes the leading and trailing white space and line terminator characters from a string.
// ['strTrimL(s), 'Removes whitespace from the left end of a string.
// ['strTrimR(s), 'Removes whitespace from the right end of a string.
// ['strPadL(s1, m), 'Pads the start of the s1 string with white spaces so that the resulting string reaches a given length.
// ['strPadL(s1, m, s2), 'Pads the start of the s1 string with the s2 string so that the resulting string reaches a given length.
// ['strPadR(s1, m), 'Pads the end of the s1 string with white spaces so that the resulting string reaches a given length.
// ['strPadR(s1, m, s2), 'Pads the end of the s1 string with the s2 string so that the resulting string reaches a given length.
// ['strSub(s, from), 'Gets a substring beginning at the specified location.
// ['strSub(s, from, length), 'Gets a substring beginning at the specified location and having the specified length.
// ['strStarts(s1, s2), 'Returns true if the string s1 starts with s3, false otherwise.
// ['strEnds(s1, s2), 'Returns true if the string s1 ends with s3, false otherwise.
/**
 * Replace all instances of specified search string with a new string. The search string can be a regular expression.
 * @param str
 * @param search_str
 * @param new_str
 */
export function strRepl(debug, str, search_str, new_str) {
    if (debug) {
        checkNumArgs('strRepl', arguments, 3);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.replace(search_str, new_str));
    }
    return str.replace(search_str, new_str);
}
/**
 * Converts all the alphabetic characters in a string to uppercase.
 * @param str
 */
export function strUpp(debug, str) {
    if (debug) {
        checkNumArgs('strUpp', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.toUpperCase());
    }
    return str.toUpperCase();
}
/**
 * Converts all the alphabetic characters in a string to lowercase.
 * @param str
 */
export function strLow(debug, str) {
    if (debug) {
        checkNumArgs('strLow', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.toLowerCase());
    }
    return str.toLowerCase();
}
/**
 * Removes the leading and trailing white space and line terminator characters from a string.
 * @param str
 */
export function strTrim(debug, str) {
    if (debug) {
        checkNumArgs('strTrim', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.trim());
    }
    return str.trim();
}
/**
 * Removes whitespace from the right end of a string.
 * @param str
 */
export function strTrimR(debug, str) {
    if (debug) {
        checkNumArgs('strTrimR', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.trimRight());
    }
    return str.trimRight();
}
/**
 * Removes whitespace from the left end of a string.
 * @param str
 */
export function strTrimL(debug, str) {
    if (debug) {
        checkNumArgs('strTrimL', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.trimLeft());
    }
    return str.trimLeft();
}
/**
 * Pads the start of the s1 string with white spaces so that the resulting string reaches a given length.
 * Pads the start of the s1 string with the s2 string so that the resulting string reaches a given length.
 * @param str
 * @param max
 * @param fill
 */
export function strPadL(debug, str, max, fill) {
    if (debug) {
        checkNumArgs('strPadL', arguments, 3, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.padStart(max, fill));
    }
    return str.padStart(max, fill);
}
/**
 * Pads the end of the s1 string with white spaces so that the resulting string reaches a given length.
 * Pads the end of the s1 string with the s2 string so that the resulting string reaches a given length.
 * @param str
 * @param max
 * @param fill
 */
export function strPadR(debug, str, max, fill) {
    if (debug) {
        checkNumArgs('strPadR', arguments, 3, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.padEnd(max, fill));
    }
    return str.padEnd(max, fill);
}
/**
 * Gets a substring beginning at the specified location.
 * Gets a substring beginning at the specified location and having the specified length.
 * @param str
 * @param from
 * @param length
 */
export function strSub(debug, str, from, length) {
    if (debug) {
        checkNumArgs('strSub', arguments, 3, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.substr(from, length));
    }
    return str.substr(from, length);
}
/**
 * Returns true if the string s1 starts with s2, false otherwise.
 * @param str
 * @param starts
 */
export function strStarts(debug, str, starts) {
    if (debug) {
        checkNumArgs('strStarts', arguments, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.startsWith(starts));
    }
    return str.startsWith(starts);
}
/**
 * Returns true if the string s1 ends with s2, false otherwise.
 * @param str
 * @param ends
 */
export function strEnds(debug, str, ends) {
    if (debug) {
        checkNumArgs('strEnds', arguments, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.endsWith(ends));
    }
    return str.endsWith(ends);
}
export class strsClass {
    constructor(debug) {
        this.__debug__ = debug;
    }
    strRepl(str, search_str, new_str) {
        return strRepl(this.__debug__, str, search_str, new_str);
    }
    strUpp(str) {
        return strUpp(this.__debug__, str);
    }
    strLow(str) {
        return strLow(this.__debug__, str);
    }
    strTrim(str) {
        return strTrim(this.__debug__, str);
    }
    strTrimR(str) {
        return strTrimR(this.__debug__, str);
    }
    strTrimL(str) {
        return strTrimL(this.__debug__, str);
    }
    strPadL(str, max, fill) {
        return strPadL(this.__debug__, str, max, fill);
    }
    strPadR(str, max, fill) {
        return strPadR(this.__debug__, str, max, fill);
    }
    strSub(str, from, length) {
        return strSub(this.__debug__, str, from, length);
    }
    strStarts(str, starts) {
        return strStarts(this.__debug__, str, starts);
    }
    strEnds(str, ends) {
        return strEnds(this.__debug__, str, ends);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUlyRCxvR0FBb0c7QUFDcEcsbUZBQW1GO0FBQ25GLG1GQUFtRjtBQUNuRiw0R0FBNEc7QUFDNUcsb0VBQW9FO0FBQ3BFLHFFQUFxRTtBQUNyRSw0SEFBNEg7QUFDNUgsaUlBQWlJO0FBQ2pJLDBIQUEwSDtBQUMxSCwrSEFBK0g7QUFDL0gsNEVBQTRFO0FBQzVFLG9IQUFvSDtBQUNwSCx1RkFBdUY7QUFDdkYsbUZBQW1GO0FBRW5GOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFjLEVBQUUsR0FBb0IsRUFBRSxVQUFrQixFQUFFLE9BQWU7SUFDN0YsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUN4RixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFDRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWMsRUFBRSxHQUFvQjtJQUN2RCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FB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