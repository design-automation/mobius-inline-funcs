"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPln = void 0;
const index_1 = require("../../index");
/**
 * Returns true if the value is a plane, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
function isPln(v) {
    return Array.isArray(v) && v.length === 3 && (0, index_1.isVec3)(v[0]) && (0, index_1.isVec3)(v[1]) && (0, index_1.isVec3)(v[2]);
}
exports.isPln = isPln;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNQbG4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3R5cGVzL2lzUGxuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFxQztBQUVyQzs7OztHQUlHO0FBQ0YsU0FBZ0IsS0FBSyxDQUFDLENBQU07SUFDekIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUEsY0FBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUEsY0FBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUEsY0FBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlGLENBQUM7QUFGQSxzQkFFQSJ9