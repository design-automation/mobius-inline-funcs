"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCol = void 0;
const index_1 = require("../../index");
/**
 * Returns true if the value is a list of three numbers in the range [0, 1], false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
function isCol(v) {
    return (0, index_1.isVec3)(v) && (0, index_1._isWithin)(0, v[0], 1) && (0, index_1._isWithin)(0, v[1], 1) && (0, index_1._isWithin)(0, v[2], 1);
}
exports.isCol = isCol;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNDb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3R5cGVzL2lzQ29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFnRDtBQUVoRDs7OztHQUlHO0FBQ0YsU0FBZ0IsS0FBSyxDQUFDLENBQU07SUFDekIsT0FBTyxJQUFBLGNBQU0sRUFBQyxDQUFDLENBQUMsSUFBSSxJQUFBLGlCQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFBLGlCQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFBLGlCQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRyxDQUFDO0FBRkEsc0JBRUEifQ==