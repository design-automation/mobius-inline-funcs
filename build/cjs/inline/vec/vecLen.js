"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vecLen = void 0;
const vectors = __importStar(require("../../libs/vectors"));
const arrs_1 = require("../../libs/arrs");
// ================================================================================================
/**
 * Calculates the magnitude of a vector.
 * \n
 * Overloaded. v can be one vector or a list of vectors.
 *
 * @param v The input vector or list of vectors.
 * @returns A number or list of numbers.
 */
function vecLen(v) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    if (depth1 === 2) {
        return v.map(v_val => vectors.vecLen(v_val));
    }
    // normal case, vec is Txyz
    return vectors.vecLen(v);
}
exports.vecLen = vecLen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjTGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjTGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEM7QUFFOUMsMENBQThDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7OztHQU9HO0FBQ0YsU0FBZ0IsTUFBTSxDQUFDLENBQWM7SUFDbEMsa0JBQWtCO0lBQ2xCLE1BQU0sTUFBTSxHQUFXLElBQUEsa0JBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFRLENBQVksQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQWEsQ0FBVyxDQUFDLENBQUM7S0FDL0U7SUFDRCwyQkFBMkI7SUFDM0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQVMsQ0FBVyxDQUFDO0FBQy9DLENBQUM7QUFSQSx3QkFRQSJ9