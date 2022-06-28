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
exports.vecSub = void 0;
const vectors = __importStar(require("../../libs/vectors"));
const arrs_1 = require("../../libs/arrs");
// ================================================================================================
/**
 * Subtracts v2 from v1.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be one vector.
 * - v1 can be one vector, and v2 can be a list of vectors.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 *
 * @param v1 The vector or list of vectors to be subtracted from.
 * @param v2 The vector or list of vectors to subtract by. (Is unmodified by the expression.)
 * @param norm True or False: Normalize the resulting vector.
 * @returns The result vector.
 */
function vecSub(v1, v2, norm = false) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vectors.vecSub(v1_val, v2, norm));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vectors.vecSub(v1, v2_val, norm));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vectors.vecSub(v1[i], v2[i], norm));
                }
                return vecs;
            }
            else {
                throw new Error('Error adding lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecSub(v1, v2, norm);
}
exports.vecSub = vecSub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjU3ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjU3ViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEM7QUFFOUMsMENBQThDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNGLFNBQWdCLE1BQU0sQ0FBQyxFQUFlLEVBQUUsRUFBZSxFQUFFLE9BQWdCLEtBQUs7SUFDM0Usa0JBQWtCO0lBQ2xCLE1BQU0sTUFBTSxHQUFXLElBQUEsa0JBQVcsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxNQUFNLE1BQU0sR0FBVyxJQUFBLGtCQUFXLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDOUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2Qsb0JBQW9CO1lBQ3BCLE9BQVEsRUFBYSxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBYyxFQUFFLEVBQVUsRUFBRSxJQUFJLENBQVMsQ0FBQyxDQUFDO1NBQ2xHO2FBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLG9CQUFvQjtZQUNwQixPQUFRLEVBQWEsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQVUsRUFBRSxNQUFjLEVBQUUsSUFBSSxDQUFTLENBQUMsQ0FBQztTQUNsRzthQUFNO1lBQ0gsdURBQXVEO1lBQ3ZELElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFO2dCQUN6QixNQUFNLElBQUksR0FBVyxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQVMsRUFBRSxJQUFJLENBQVMsQ0FBRSxDQUFDO2lCQUMzRTtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQ1gsdUVBQXVFLENBQUMsQ0FBQzthQUNoRjtTQUNKO0tBQ0o7SUFDRCx1Q0FBdUM7SUFDdkMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQVUsRUFBRSxFQUFVLEVBQUUsSUFBSSxDQUFTLENBQUM7QUFDaEUsQ0FBQztBQTNCQSx3QkEyQkEifQ==