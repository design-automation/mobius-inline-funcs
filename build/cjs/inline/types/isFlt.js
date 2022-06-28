"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFlt = void 0;
/**
 * Returns true if the value is a floating point number, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
function isFlt(v) {
    // return !Number.isNaN(v) && v % 1 > 0;
    return !Number.isInteger(v) && !Number.isNaN(v);
}
exports.isFlt = isFlt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNGbHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3R5cGVzL2lzRmx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7O0dBSUc7QUFDRixTQUFnQixLQUFLLENBQUMsQ0FBTTtJQUN6Qix3Q0FBd0M7SUFDeEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFIQSxzQkFHQSJ9