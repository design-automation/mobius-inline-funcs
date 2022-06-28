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
exports.vecEqual = void 0;
const vectors = __importStar(require("../../libs/vectors"));
const arrs_1 = require("../../libs/arrs");
// ================================================================================================
/**
 * Returns true if the difference between two vectors is smaller than a specified tolerance.
 * \n
 * Overloaded with 2 cases.
 * \n
 * - v1 can be one vector, and v2 can be one vector.
 * - v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.
 *
 * @param v1 The first vector or list of vectors.
 * @param v2 The second vector or list of vectors.
 * @param tol A number to specify the tolerance.
 * @returns True or False.
 */
function vecEqual(v1, v2, tol) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth1 === 1 || depth2 === 1) {
            throw new Error('Error calculating vector equality between multiple vectors: The two lists must be of equal length.');
        }
        else {
            // both v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const eq = [];
                for (let i = 0; i < v1.length; i++) {
                    eq.push(vectors.vecEqual(v1[i], v2[i], tol));
                }
                return eq;
            }
            else {
                throw new Error('Error calculating vector equality between multiple vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both v1 and v2 are Txyz
    return vectors.vecEqual(v1, v2, tol);
}
exports.vecEqual = vecEqual;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjRXF1YWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3ZlYy92ZWNFcXVhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQThDO0FBRTlDLDBDQUE4QztBQUU5QyxtR0FBbUc7QUFDbkc7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0YsU0FBZ0IsUUFBUSxDQUFDLEVBQWUsRUFBRSxFQUFlLEVBQUUsR0FBVztJQUNuRSxrQkFBa0I7SUFDbEIsTUFBTSxNQUFNLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sTUFBTSxHQUFXLElBQUEsa0JBQVcsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5QixJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUNYLG9HQUFvRyxDQUFDLENBQUM7U0FDN0c7YUFBTTtZQUNILHVEQUF1RDtZQUN2RCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDekIsTUFBTSxFQUFFLEdBQWMsRUFBRSxDQUFDO2dCQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDaEMsRUFBRSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFTLEVBQUUsR0FBRyxDQUFZLENBQUUsQ0FBQztpQkFDN0U7Z0JBQ0QsT0FBTyxFQUFFLENBQUM7YUFDYjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUNYLG9HQUFvRyxDQUFDLENBQUM7YUFDN0c7U0FDSjtLQUNKO0lBQ0QsdUNBQXVDO0lBQ3ZDLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEdBQUcsQ0FBWSxDQUFDO0FBQ3BFLENBQUM7QUF4QkEsNEJBd0JBIn0=