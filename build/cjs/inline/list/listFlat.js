"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listFlat = void 0;
const lodash_1 = __importDefault(require("lodash"));
/**
 * Returns a flattened copy of the list. If the input list has lists nested within it, the values of
 * the nested lists will be unnested.
 *
 * If no depth is specified, then it is flattened by the maximum amount.
 * ```
 * listFlat([1,2,3,[4,[5],6],7])           // [1, 2, 3, 4, 5, 6, 7]
 * listFlat([1,2,3,[4,[5, [6] ], 7] ], 1)  // [1,2,3,4, [5, [6]], 7]
 *```
 * @param list The list.
 * @param depth (Optional) The depth to flatten to, an integer.
 * @returns The flattened list.
 */
function listFlat(list, depth) {
    if (depth !== undefined) {
        return lodash_1.default.flattenDepth(list, depth);
    }
    return lodash_1.default.flattenDeep(list);
}
exports.listFlat = listFlat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEZsYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2xpc3QvbGlzdEZsYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCOzs7Ozs7Ozs7Ozs7R0FZRztBQUNGLFNBQWdCLFFBQVEsQ0FBQyxJQUFXLEVBQUUsS0FBYztJQUNqRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDckIsT0FBTyxnQkFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0M7SUFDRCxPQUFPLGdCQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFMQSw0QkFLQSJ9