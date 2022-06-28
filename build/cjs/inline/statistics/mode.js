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
exports.mode = void 0;
const Mathjs = __importStar(require("mathjs"));
/**
 * Returns the mode of the list.
 * \n
 * ```
 * mode([2, 1, 4, 3, 1])               // returns [1]
 * mode([1, 2.7, 3.2, 4, 2.7])         // returns [2.7]
 * mode([1, 4, 6, 1, 6])               // returns [1, 6]
 * mode(['a','a','b','c'])             // returns ["a"]
 * mode([1, 1.5, 'abc'])               // returns [1, 1.5, "abc"]
 * ```
 * @param list A list containing any values.
 * @returns A list (The mode).
 */
function mode(list) {
    return Mathjs.mode(list);
}
exports.mode = mode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3RhdGlzdGljcy9tb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBaUM7QUFFakM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0YsU0FBZ0IsSUFBSSxDQUFDLElBQVc7SUFDN0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFGQSxvQkFFQSJ9