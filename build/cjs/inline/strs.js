"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strsClass = exports.strEnds = exports.strStarts = exports.strSub = exports.strPadR = exports.strPadL = exports.strTrimL = exports.strTrimR = exports.strTrim = exports.strLow = exports.strUpp = exports.strRepl = void 0;
/**
 * Functions to work with strings.
 */
const _check_inline_args_1 = require("../_check_inline_args");
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
function strRepl(debug, str, search_str, new_str) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strRepl', arguments, 3);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.replace(search_str, new_str));
    }
    return str.replace(search_str, new_str);
}
exports.strRepl = strRepl;
/**
 * Converts all the alphabetic characters in a string to uppercase.
 * @param str
 */
function strUpp(debug, str) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strUpp', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.toUpperCase());
    }
    return str.toUpperCase();
}
exports.strUpp = strUpp;
/**
 * Converts all the alphabetic characters in a string to lowercase.
 * @param str
 */
function strLow(debug, str) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strLow', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.toLowerCase());
    }
    return str.toLowerCase();
}
exports.strLow = strLow;
/**
 * Removes the leading and trailing white space and line terminator characters from a string.
 * @param str
 */
function strTrim(debug, str) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strTrim', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.trim());
    }
    return str.trim();
}
exports.strTrim = strTrim;
/**
 * Removes whitespace from the right end of a string.
 * @param str
 */
function strTrimR(debug, str) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strTrimR', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.trimRight());
    }
    return str.trimRight();
}
exports.strTrimR = strTrimR;
/**
 * Removes whitespace from the left end of a string.
 * @param str
 */
function strTrimL(debug, str) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strTrimL', arguments, 1);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.trimLeft());
    }
    return str.trimLeft();
}
exports.strTrimL = strTrimL;
/**
 * Pads the start of the s1 string with white spaces so that the resulting string reaches a given length.
 * Pads the start of the s1 string with the s2 string so that the resulting string reaches a given length.
 * @param str
 * @param max
 * @param fill
 */
function strPadL(debug, str, max, fill) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strPadL', arguments, 3, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.padStart(max, fill));
    }
    return str.padStart(max, fill);
}
exports.strPadL = strPadL;
/**
 * Pads the end of the s1 string with white spaces so that the resulting string reaches a given length.
 * Pads the end of the s1 string with the s2 string so that the resulting string reaches a given length.
 * @param str
 * @param max
 * @param fill
 */
function strPadR(debug, str, max, fill) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strPadR', arguments, 3, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.padEnd(max, fill));
    }
    return str.padEnd(max, fill);
}
exports.strPadR = strPadR;
/**
 * Gets a substring beginning at the specified location.
 * Gets a substring beginning at the specified location and having the specified length.
 * @param str
 * @param from
 * @param length
 */
function strSub(debug, str, from, length) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strSub', arguments, 3, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.substr(from, length));
    }
    return str.substr(from, length);
}
exports.strSub = strSub;
/**
 * Returns true if the string s1 starts with s2, false otherwise.
 * @param str
 * @param starts
 */
function strStarts(debug, str, starts) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strStarts', arguments, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.startsWith(starts));
    }
    return str.startsWith(starts);
}
exports.strStarts = strStarts;
/**
 * Returns true if the string s1 ends with s2, false otherwise.
 * @param str
 * @param ends
 */
function strEnds(debug, str, ends) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('strEnds', arguments, 2);
    }
    if (Array.isArray(str)) {
        return str.map(a_str => a_str.endsWith(ends));
    }
    return str.endsWith(ends);
}
exports.strEnds = strEnds;
class strsClass {
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
exports.strsClass = strsClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmxpbmUvc3Rycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7R0FFRztBQUNILDhEQUFxRDtBQUlyRCxvR0FBb0c7QUFDcEcsbUZBQW1GO0FBQ25GLG1GQUFtRjtBQUNuRiw0R0FBNEc7QUFDNUcsb0VBQW9FO0FBQ3BFLHFFQUFxRTtBQUNyRSw0SEFBNEg7QUFDNUgsaUlBQWlJO0FBQ2pJLDBIQUEwSDtBQUMxSCwrSEFBK0g7QUFDL0gsNEVBQTRFO0FBQzVFLG9IQUFvSDtBQUNwSCx1RkFBdUY7QUFDdkYsbUZBQW1GO0FBRW5GOzs7OztHQUtHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFDLEtBQWMsRUFBRSxHQUFvQixFQUFFLFVBQWtCLEVBQUUsT0FBZTtJQUM3RixJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUFFO0lBQ3hGLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQU5ELDBCQU1DO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEtBQWMsRUFBRSxHQUFvQjtJQUN2RCxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMs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