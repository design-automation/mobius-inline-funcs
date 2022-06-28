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
exports.prod = void 0;
const Mathjs = __importStar(require("mathjs"));
/**
 * Returns the product of all values in a list.
 * \n
 * ```
 * prod([2, 3])             // 6
 * prod([2, 3, 4])          // 24
 * prod([[2, 5], [4, 3]])   // 120
 * ```
 * @param list A list containing numbers.
 * @returns A number (The total product).
 */
function prod(list) {
    // if (Array.isArray(list)) {
    //     return list.map( a_num => Mathjs.prod(a_num) ) as number[];
    // };
    return Mathjs.prod(list);
}
exports.prod = prod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy9wcm9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBaUM7QUFFakM7Ozs7Ozs7Ozs7R0FVRztBQUNGLFNBQWdCLElBQUksQ0FBQyxJQUFxQjtJQUN2Qyw2QkFBNkI7SUFDN0Isa0VBQWtFO0lBQ2xFLEtBQUs7SUFDTCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUxBLG9CQUtBIn0=