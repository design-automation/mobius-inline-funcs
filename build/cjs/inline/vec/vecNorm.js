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
exports.vecNorm = void 0;
const vectors = __importStar(require("../../libs/vectors"));
const arrs_1 = require("../../libs/arrs");
// ================================================================================================
/**
 * Sets the magnitude of a vector to 1.
 * \n
 * Overloaded. v can be one vector or a list of vectors.
 * @param v The input vector or list of vectors.
 * @returns A new vector or list of new vectors(with a magnitude of 1).
 */
function vecNorm(v) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(v);
    if (depth1 === 2) {
        return v.map(v_val => vectors.vecNorm(v_val));
    }
    // normal case, vec is Txyz
    return vectors.vecNorm(v);
}
exports.vecNorm = vecNorm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjTm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvdmVjL3ZlY05vcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUE4QztBQUU5QywwQ0FBOEM7QUFFOUMsbUdBQW1HO0FBQ25HOzs7Ozs7R0FNRztBQUNGLFNBQWdCLE9BQU8sQ0FBQyxDQUFjO0lBQ25DLGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxJQUFBLGtCQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsT0FBUSxDQUFZLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFhLENBQVMsQ0FBQyxDQUFDO0tBQzlFO0lBQ0QsMkJBQTJCO0lBQzNCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFTLENBQVMsQ0FBQztBQUM5QyxDQUFDO0FBUkEsMEJBUUEifQ==