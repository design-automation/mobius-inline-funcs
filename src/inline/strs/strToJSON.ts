/**
 * Returns a JSON object parsed from an input string.
 * \n
 * <a href ="https://www.w3schools.com/js/js_json_objects.asp" target="_blank">See w3schools for more info on JSON objects. </a>
 * \n
 * ```
 * strToJSON("{\"name\":\"John\",\"age\":\"30\"}")   
 * ```
 * \\ returns {"<b>name</b>": "John", "<b>age</b>": "30"}
 *
 * @param str Input string. 
 * @returns A JSON object. 
 */
 export function strToJSON(str: string): any {
    return JSON.parse(str);
}