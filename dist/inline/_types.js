/**
 * Functions to check types.
 * @module
 */
// ['isNum(v)', 'Returns true if the value is a number, false otherwise.'],
// ['isInt(v)', 'Returns true if the value is a integer, false otherwise.'],
// ['isFlt(v)', 'Returns true if the value is a floating point number, false otherwise.'],
// ['isBool(v)', 'Returns true if the value is a boolean, false otherwise.'],
// ['isStr(v)', 'Returns true if the value is a string, false otherwise.'],
// ['isList(v)', 'Returns true if the value is a list, false otherwise.'],
// ['isDict(v)', 'Returns true if the value is a dictionary, false otherwise.'],
// ['isVec2(v)', 'Returns true if the value is a list of two numbers, false otherwise.'],
// ['isVec3(v)', 'Returns true if the value is a list of three numbers, false otherwise.'],
// ['isCol(v)', 'Returns true if the value is a list of three numbers in the range [0, 1], false otherwise.'],
// ['isRay(v)', 'Returns true if the value is a ray, false otherwise.'],
// ['isPln(v)', 'Returns true if the value is a plane, false otherwise.'],
// ['isNaN(v)', 'Returns true is the value is not a number (NaN), false otherwise.'],
// ['isNull(v)', 'Returns true is the value is null, false otherwise.'],
// ['isUndef(v)', 'Returns true is the value is undefined, false otherwise.'],
/**
 * Returns true if the value is a number, false otherwise.
 * @param v
 */
export function isNum(debug, v) {
    return typeof v === 'number';
}
/**
 * Returns true if the value is a integer, false otherwise.
 * @param v
 */
export function isInt(debug, v) {
    return Number.isInteger(v);
}
/**
 * Returns true if the value is a floating point number, false otherwise.
 * @param v
 */
export function isFlt(debug, v) {
    // return !Number.isNaN(v) && v % 1 > 0;
    return typeof v === 'number';
}
/**
 * Returns true if the value is a boolean, false otherwise.
 * @param v
 */
export function isBool(debug, v) {
    return typeof v === 'boolean';
}
/**
 * Returns true if the value is a string, false otherwise.
 * @param v
 */
export function isStr(debug, v) {
    return typeof v === 'string';
}
/**
 * Returns true if the value is a list, false otherwise.
 * @param v
 */
export function isList(debug, v) {
    return Array.isArray(v);
}
/**
 * Returns true if the value is a dictionary, false otherwise.
 * @param v
 */
export function isDict(debug, v) {
    // return typeof v === 'object' && !Array.isArray(v);
    return v.constructor === Object;
}
/**
 * Returns true if the value is a list of two numbers, false otherwise.
 * @param v
 */
export function isVec2(debug, v) {
    return Array.isArray(v) && v.length === 2 &&
        typeof v[0] === 'number' && typeof v[1] === 'number';
}
/**
 * Returns true if the value is a list of three numbers, false otherwise.
 * @param v
 */
export function isVec3(debug, v) {
    return Array.isArray(v) && v.length === 3 &&
        typeof v[0] === 'number' && typeof v[1] === 'number' && typeof v[2] === 'number';
}
/**
 * Returns true if the value is a list of three numbers in the range [0, 1], false otherwise.
 * @param v
 */
export function isCol(debug, v) {
    return isVec3(debug, v) && _isWithin(0, v[0], 1) && _isWithin(0, v[1], 1) && _isWithin(0, v[2], 1);
}
/**
 * Returns true if the value is a ray, false otherwise.
 * @param v
 */
export function isRay(debug, v) {
    return Array.isArray(v) && v.length === 2 && isVec3(debug, v[0]) && isVec3(debug, v[1]);
}
/**
 * Returns true if the value is a plane, false otherwise.
 * @param v
 */
export function isPln(debug, v) {
    return Array.isArray(v) && v.length === 3 && isVec3(debug, v[0]) && isVec3(debug, v[1]) && isVec3(debug, v[2]);
}
/**
 * Returns true is the value is not a number (NaN), false otherwise.
 * @param v
 */
export function isNaN(debug, v) {
    return Number.isNaN(v);
}
/**
 * Returns true is the value is null, false otherwise.
 * @param v
 */
export function isNull(debug, v) {
    return v === null;
}
/**
 * Returns true is the value is undefined, false otherwise.
 * @param v
 */
export function isUndef(debug, v) {
    return v === undefined;
}
/**
 * To be completed...
 * @param v1
 * @param v2
 * @param v3
 */
export function _isIn(v1, v2, v3) {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 < v2 && v2 < v3;
}
/**
 * To be completed...
 * @param v1
 * @param v2
 * @param v3
 */
export function _isWithin(v1, v2, v3) {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 <= v2 && v2 <= v3;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3R5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lubGluZS9fdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsMkVBQTJFO0FBQzNFLDRFQUE0RTtBQUM1RSwwRkFBMEY7QUFDMUYsNkVBQTZFO0FBQzdFLDJFQUEyRTtBQUMzRSwwRUFBMEU7QUFDMUUsZ0ZBQWdGO0FBQ2hGLHlGQUF5RjtBQUN6RiwyRkFBMkY7QUFDM0YsOEdBQThHO0FBQzlHLHdFQUF3RTtBQUN4RSwwRUFBMEU7QUFDMUUscUZBQXFGO0FBQ3JGLHdFQUF3RTtBQUN4RSw4RUFBOEU7QUFFOUU7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFjLEVBQUUsQ0FBTTtJQUN4QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBQ0Q7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFjLEVBQUUsQ0FBTTtJQUN4QyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUNEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYyxFQUFFLENBQU07SUFDeEMsd0NBQXdDO0lBQ3hDLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0FBQ2pDLENBQUM7QUFDRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWMsRUFBRSxDQUFNO0lBQ3pDLE9BQU8sT0FBTyxDQUFDLEtBQUssU0FBUyxDQUFDO0FBQ2xDLENBQUM7QUFDRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBQWMsRUFBRSxDQUFNO0lBQ3hDLE9BQU8sT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDO0FBQ2pDLENBQUM7QUFDRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWMsRUFBRSxDQUFNO0lBQ3pDLE9BQU8s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