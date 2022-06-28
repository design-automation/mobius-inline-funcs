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
exports.vari = void 0;
const Mathjs = __importStar(require("mathjs"));
/**
 * Returns the variance of the list.
 * By default, the sum of squared errors is divided by (n - 1).
 * \n
 * ```
 * vari([2, 4, 6])     \\ 4
 * vari([2, 4, 6, 8])  \\ 6.666666666666667
 * ```
 * @param list A list containing numbers.
 * @returns A number (The variance).
 */
function vari(list) {
    return Mathjs.var(list);
}
exports.vari = vari;
//TODO: Change to variance instead of mathjs.var when mathjs is updated 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3RhdGlzdGljcy92YXJpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBaUM7QUFFakM7Ozs7Ozs7Ozs7R0FVRztBQUNGLFNBQWdCLElBQUksQ0FBQyxJQUFjO0lBQ2hDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRkEsb0JBRUE7QUFDRCx3RUFBd0UifQ==