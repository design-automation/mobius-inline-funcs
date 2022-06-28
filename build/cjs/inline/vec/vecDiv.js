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
exports.vecDiv = void 0;
const vectors = __importStar(require("../../libs/vectors"));
const arrs_1 = require("../../libs/arrs");
// ================================================================================================
/**
 * Divides a vector by a number.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v can be one vector, and num can be one number.
 * - v can be a list of vectors, and num can be one number.
 * - v can be one vector, and num can be a list of numbers.
 * - v can be a list of vectors, and num can be a list of numbers. These lists should have the **same size**.
 *
 * @param v The input vector or list of vectors.
 * @param num A number or list of numbers (to divide the vector by).
 * @returns The result vector.
 *
 */
function vecDiv(v, num) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    const depth2 = (0, arrs_1.getArrDepth)(num);
    if (depth1 === 2 || depth2 === 1) {
        if (depth2 === 0) {
            // only vec is Txyz[]
            return v.map(v_val => vectors.vecDiv(v_val, num));
        }
        else if (depth1 === 1) {
            // only num is number[]
            return num.map(num_val => vectors.vecDiv(v, num_val));
        }
        else {
            // vec is Txyz and num is number[], they must be equal length
            num = num;
            if (v.length === num.length) {
                const vecs = [];
                for (let i = 0; i < v.length; i++) {
                    vecs.push(vectors.vecDiv(v[i], num[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error dividing a lists of vectors: The list of divisors must be the same length as the list of vectors.');
            }
        }
    }
    // normal case, vec is Txyz and num is number
    return vectors.vecDiv(v, num);
}
exports.vecDiv = vecDiv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjRGl2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjRGl2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEM7QUFFOUMsMENBQThDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNGLFNBQWdCLE1BQU0sQ0FBQyxDQUFjLEVBQUUsR0FBb0I7SUFDeEQsa0JBQWtCO0lBQ2xCLE1BQU0sTUFBTSxHQUFXLElBQUEsa0JBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxNQUFNLE1BQU0sR0FBVyxJQUFBLGtCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDOUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2QscUJBQXFCO1lBQ3JCLE9BQVEsQ0FBWSxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBYSxFQUFFLEdBQWEsQ0FBUyxDQUFDLENBQUM7U0FDNUY7YUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsdUJBQXVCO1lBQ3ZCLE9BQVEsR0FBZ0IsQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQVMsRUFBRSxPQUFpQixDQUFTLENBQUMsQ0FBQztTQUNsRzthQUFNO1lBQ0gsNkRBQTZEO1lBQzdELEdBQUcsR0FBRyxHQUFlLENBQUM7WUFDdEIsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxHQUFXLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBVyxDQUFTLENBQUUsQ0FBQztpQkFDdkU7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUNYLHlHQUF5RyxDQUFDLENBQUM7YUFDbEg7U0FDSjtLQUNKO0lBQ0QsNkNBQTZDO0lBQzdDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFTLEVBQUUsR0FBYSxDQUFTLENBQUM7QUFDNUQsQ0FBQztBQTVCQSx3QkE0QkEifQ==