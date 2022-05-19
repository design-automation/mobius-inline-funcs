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
 * 
 * @param str String to search through and modify.
 * @param search_str String to search for and replace.
 * @param new_str New string to replace search\_str.
 * @returns The modified string. 
 */
export function strRepl(debug: boolean, str: string|string[], search_str: string, new_str: string): string|string[] {
    if (debug) {
        checkNumArgs('strRepl', arguments, 3);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.replace(search_str, new_str)); }
    return str.replace(search_str, new_str);
}
/**
 * Converts all the alphabetic characters in a string to uppercase.
 * @param str Input string.
 * @returns The modified uppercase string. 
 */
export function strUpp(debug: boolean, str: string|string[]): string|string[] {
    if (debug) {
        checkNumArgs('strUpp', arguments, 1);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.toUpperCase()); }
    return str.toUpperCase();
}
/**
 * Converts all the alphabetic characters in a string to lowercase.
 * @param str Input string.
 * @returns The modified lowercase string. 
 */
export function strLow(debug: boolean, str: string|string[]): string|string[] {
    if (debug) {
        checkNumArgs('strLow', arguments, 1);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.toLowerCase()); }
    return str.toLowerCase();
}
/**
 * Removes the leading and trailing white space and line terminator characters from a string.
 * ```
 * strTrim("This\ is a \sentence")         
 * \\ "This is a sentence" (\ is considered a line terminator character.)
 * 
 * strTrim("           This used to have whitespace        ")    
 * \\ "This used to have whitespace"
 * ```
 * @param str Input string.
 * @returns The modified string. 
 */
export function strTrim(debug: boolean, str: string|string[]): string|string[] {
    if (debug) {
        checkNumArgs('strTrim', arguments, 1);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.trim()); }
    return str.trim();
}
/**
 * Removes whitespace from the right end of a string.
 * @param str Input string.
 * @returns The modified string.
 */
export function strTrimR(debug: boolean, str: string|string[]): string|string[] {
    if (debug) {
        checkNumArgs('strTrimR', arguments, 1);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.trimRight()); }
    return str.trimRight();
}
/**
 * Removes whitespace from the left end of a string.
 * @param str Input string.
 * @returns The modified string.
 */
export function strTrimL(debug: boolean, str: string|string[]): string|string[] {
    if (debug) {
        checkNumArgs('strTrimL', arguments, 1);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.trimLeft()); }
    return str.trimLeft();
}
/**
 * Pads the start of the s1 string with white spaces so that the resulting string reaches a given length.
 * Pads the start of the s1 string with the s2 string so that the resulting string reaches a given length.
 * @param str "s1", Input string.
 * @param max An integer (the desired length).
 * @param fill (Optional) "s2", The string to pad the input string with, starting from the left of s1. 
 * @returns The modified string.
 */
export function strPadL(debug: boolean, str: string|string[], max: number, fill?: string): string|string[] {
    if (debug) {
        checkNumArgs('strPadL', arguments, 3, 2);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.padStart(max, fill)); }
    return str.padStart(max, fill);
}
/**
 * Pads the end of the s1 string with white spaces so that the resulting string reaches a given length.
 * Pads the end of the s1 string with the s2 string so that the resulting string reaches a given length.
 * @param str "s1", Input string.
 * @param max An integer (the desired length).
 * @param fill (Optional) "s2", The string to pad the input string with, starting from the right of s1.
 * @returns The modified string.
 */
export function strPadR(debug: boolean, str: string|string[], max: number, fill?: string): string|string[] {
    if (debug) {
        checkNumArgs('strPadR', arguments, 3, 2);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.padEnd(max, fill)); }
    return str.padEnd(max, fill);
}
/**
 * Gets a substring beginning at the specified index and ending at the end of the string.
 * If `length` is set: Gets a substring beginning at the specified index and having the specified length.
 * @param str A string.
 * @param from An integer corresponding to the starting index. 
 * @param length (Optional) An integer for the specified length. 
 * @returns The modified string.
 */
export function strSub(debug: boolean, str: string|string[], from: number, length?: number): string|string[] {
    if (debug) {
        checkNumArgs('strSub', arguments, 3, 2);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.substr(from, length)); }
    return str.substr(from, length);
}
/**
 * Returns true if the string s1 starts with s2, false otherwise.
 * @param str A string, "s1".
 * @param starts A string, "s2".
 * @returns True or False.
 */
export function strStarts(debug: boolean, str: string|string[], starts: string): boolean|boolean[] {
    if (debug) {
        checkNumArgs('strStarts', arguments, 2);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.startsWith(starts)); }
    return str.startsWith(starts);
}
/**
 * Returns true if the string s1 ends with s2, false otherwise.
 * @param str A string, "s1".
 * @param ends A string, "s2".
 * @returns True or False.
 * 
 */
 export function strEnds(debug: boolean, str: string|string[], ends: string): boolean|boolean[] {
    if (debug) {
        checkNumArgs('strEnds', arguments, 2);
    }
    if (Array.isArray(str)) { return str.map(a_str => a_str.endsWith(ends)); }
    return str.endsWith(ends);
}
/**
 * Returns a JSON object parsed from an input string.
 * \n
 * <a href ="https://www.w3schools.com/js/js_json_objects.asp" target="_blank">See w3schools for more info on JSON objects. </a>
 * \n
 * ```
 * strToJSON("{\"name\":\"John\",\"age\":\"30\"}")  
 * ```
 * \n  
 * \\ {"<b>name</b>": "John", "<b>age</b>": "30"}
 *
 * 
 * @param str Input string. 
 * @returns A JSON object. 
 */
 export function strToJSON(debug: boolean, str: string): any {
    if (debug) {
        checkNumArgs('strToJSON', arguments, 1);
    }
    return JSON.parse(str);
}

export class strsClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
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
    strToJSON(str) {
        return strToJSON(this.__debug__, str);
    }
}

