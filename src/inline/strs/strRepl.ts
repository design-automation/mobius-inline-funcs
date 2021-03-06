/**
 * Replace all instances of specified search string with a new string. The search string can be a regular expression.
 * \n
 * Overloaded. str can be one string or a list of strings.
 * @param str String to search through and modify.
 * @param search_str String to search for and replace.
 * @param new_str New string to replace search\_str.
 * @returns The modified string. 
 */
 export function strRepl(str: string|string[], search_str: string, new_str: string): string|string[] {
    if (Array.isArray(str)) { return str.map(a_str => a_str.replace(search_str, new_str)); }
    return str.replace(search_str, new_str);
}