"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDict = void 0;
/**
 * Returns true if the value is a dictionary, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
function isDict(v) {
    // return typeof v === 'object' && !Array.isArray(v);
    return v.constructor === Object;
}
exports.isDict = isDict;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNEaWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS90eXBlcy9pc0RpY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7R0FJRztBQUNGLFNBQWdCLE1BQU0sQ0FBQyxDQUFNO0lBQzFCLHFEQUFxRDtJQUNyRCxPQUFPLENBQUMsQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFDO0FBQ3BDLENBQUM7QUFIQSx3QkFHQSJ9