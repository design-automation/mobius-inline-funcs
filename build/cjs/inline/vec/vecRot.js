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
exports.vecRot = void 0;
const vectors = __importStar(require("../../libs/vectors"));
const arrs_1 = require("../../libs/arrs");
// ================================================================================================
/**
 * Rotates one vector around another vector by a specified angle (in radians).
 * \n
 * Overloaded with 8 cases.
 * \n
 * - All single inputs
 *      - v1 can be one vector, v2 can be one vector, and ang can be one number.
 * - Two single inputs, one list
 *      - v1 can be a list of vectors, v2 can be one vector, and ang can be one number.
 *      - v1 can be one vector, v2 can be a list of vectors, and ang can be one number.
 *      - v1 can be one vector, v2 can be one vector, and ang can be a list of numbers.
 * - One single input, two lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and ang can be one number. These lists should have the **same length**.
 *      - v1 can be a list of vectors, v2 can be one vector, and ang be a list of numbers. These lists should have the **same length**.
 *      - v1 can be one vector, v2 can be a list of vectors, and ang can be a list of numbers. These lists should have the **same length**.
 * - All lists
 *      - v1 can be a list of vectors, v2 can be a list of vectors, and ang can be a list of numbers. All lists should have the **same length**.
 *
 * @param v1 The first vector or list of vectors to be rotated.
 * @param v2 The second vector or list of vectors for v1 to rotate around.
 * @param ang The angle or list of angles to rotate v1 by (in radians).
 * @returns The new vector.
 */
function vecRot(v1, v2, ang) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v1);
    const depth2 = (0, arrs_1.getArrDepth)(v2);
    const depth3 = (0, arrs_1.getArrDepth)(ang);
    if (depth1 === 2 || depth2 === 2 || depth3 === 1) {
        if (depth2 === 1 && depth3 === 0) {
            // only v1 is Txyz[]
            return v1.map(v1_val => vectors.vecRot(v1_val, v2, ang));
        }
        else if (depth1 === 1 && depth3 === 0) {
            // only v2 is Txyz[]
            return v2.map(v2_val => vectors.vecRot(v1, v2_val, ang));
        }
        else if (depth1 === 1 && depth2 === 1) {
            // only ang is number[]
            return ang.map(ang_val => vectors.vecRot(v1, v2, ang_val));
        }
        else if (depth1 === 1) {
            // v2 is Txyz[] and ang is number[], they must be equal length
            ang = ang;
            if (v2.length === ang.length) {
                const vecs = [];
                for (let i = 0; i < v2.length; i++) {
                    vecs.push(vectors.vecRot(v1, v2[i], ang[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth2 === 1) {
            // v1 is Txyz[] and ang is number[], they must be equal length
            ang = ang;
            if (v1.length === ang.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vectors.vecRot(v1[i], v2, ang[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating angles between lists of vectors: The two lists must be of equal length.');
            }
        }
        else if (depth3 === 0) {
            // v1 and v2 are Txyz[], they must be equal length
            if (v1.length === v2.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vectors.vecRot(v1[i], v2[i], ang));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating angles between two between lists of vectors: The two lists must be of equal length.');
            }
        }
        else {
            // all three v1 and v2 are Txyz[] and ang is number[], they must be all equal length
            ang = ang;
            if (v1.length === v2.length && v2.length === ang.length) {
                const vecs = [];
                for (let i = 0; i < v1.length; i++) {
                    vecs.push(vectors.vecRot(v1[i], v2[i], ang[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error calculating vectors between lists of vectors and angles: The lists must be of equal length.');
            }
        }
    }
    // normal case, v1 and v2 and ang are Txyz
    return vectors.vecRot(v1, v2, ang);
}
exports.vecRot = vecRot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjUm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS92ZWMvdmVjUm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBOEM7QUFFOUMsMENBQThDO0FBRTlDLG1HQUFtRztBQUNuRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUNGLFNBQWdCLE1BQU0sQ0FBQyxFQUFlLEVBQUUsRUFBZSxFQUFFLEdBQW9CO0lBQzFFLGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxJQUFBLGtCQUFXLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxNQUFNLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sTUFBTSxHQUFXLElBQUEsa0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLG9CQUFvQjtZQUNwQixPQUFRLEVBQWEsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQWMsRUFBRSxFQUFVLEVBQUUsR0FBYSxDQUFTLENBQUMsQ0FBQztTQUMzRzthQUFNLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JDLG9CQUFvQjtZQUNwQixPQUFRLEVBQWEsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQVUsRUFBRSxNQUFjLEVBQUUsR0FBYSxDQUFTLENBQUMsQ0FBQztTQUMzRzthQUFNLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtB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