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
exports.vecFromTo = void 0;
const vectors = __importStar(require("../../libs/vectors"));
const arrs_1 = require("../../libs/arrs");
// ================================================================================================
/**
 * Creates a vector between two points.
 * \n
 * Overloaded with 4 cases.
 * \n
 * - xyz1 can be one coordinate, and xyz2 can be one coordinate.
 * - xyz1 can be a list of coordinates, and xyz2 can be one coordinate.
 * - xyz1 can be one coordinate, and xyz2 can be a list of coordinates.
 * - xyz1 can be a list of coordinates, and xyz2 can be a list of coordinates. These lists should have the **same size**.
 *
 * @param xyz1 The first point or list of points.
 * @param xyz2 The second point or list of points.
 * @returns The new vector.
 */
function vecFromTo(xyz1, xyz2) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(xyz1);
    const depth2 = (0, arrs_1.getArrDepth)(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only v1 is Txyz[]
            return xyz1.map(v1_val => vectors.vecFromTo(v1_val, xyz2));
        }
        else if (depth1 === 1) {
            // only v2 is Txyz[]
            return xyz2.map(v2_val => vectors.vecFromTo(xyz1, v2_val));
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const vecs = [];
                for (let i = 0; i < xyz1.length; i++) {
                    vecs.push(vectors.vecFromTo(xyz1[i], xyz2[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecFromTo(xyz1, xyz2);
}
exports.vecFromTo = vecFromTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjRnJvbVRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjRnJvbVRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEM7QUFFOUMsMENBQThDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0YsU0FBZ0IsU0FBUyxDQUFDLElBQWlCLEVBQUUsSUFBaUI7SUFDM0Qsa0JBQWtCO0lBQ2xCLE1BQU0sTUFBTSxHQUFXLElBQUEsa0JBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxNQUFNLE1BQU0sR0FBVyxJQUFBLGtCQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDOUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2Qsb0JBQW9CO1lBQ3BCLE9BQVEsSUFBZSxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBYyxFQUFFLElBQVksQ0FBUyxDQUFDLENBQUM7U0FDbkc7YUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsb0JBQW9CO1lBQ3BCLE9BQVEsSUFBZSxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBWSxFQUFFLE1BQWMsQ0FBUyxDQUFDLENBQUM7U0FDbkc7YUFBTTtZQUNILHVEQUF1RDtZQUN2RCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO2dCQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFTLENBQVMsQ0FBRSxDQUFDO2lCQUM1RTtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQ1gsNEdBQTRHLENBQUMsQ0FBQzthQUNySDtTQUNKO0tBQ0o7SUFDRCx1Q0FBdUM7SUFDdkMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQVksRUFBRSxJQUFZLENBQVMsQ0FBQztBQUNqRSxDQUFDO0FBM0JBLDhCQTJCQSJ9