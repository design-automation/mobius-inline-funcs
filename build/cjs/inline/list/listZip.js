"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listZip = void 0;
const lodash_1 = __importDefault(require("lodash"));
/**
 * Converts a set of lists from rows into columns.
 *
 * If no second argument is provided, it assumes the first argument consists of a list of lists.
 *
 * If a second argument is provided, then it should be a list of the same length as the first argument.
 * In this case, the items in the first and second lists are reaarranged to generate a new set of lists.
 *
 * This function also accepts additional lists of arguments.
 *
 * @param lists  The list of lists, or first row list.
 * @returns A new list.
 */
function listZip(...lists) {
    if (lists.length === 1) {
        // list 1 should be a list of lists
        return lodash_1.default.zip(...lists[0]);
    }
    // there are 2 or more args and list 1 is just a list 
    return lodash_1.default.zip(...lists);
}
exports.listZip = listZip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdFppcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvbGlzdC9saXN0WmlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUE0QjtBQUU1Qjs7Ozs7Ozs7Ozs7O0dBWUc7QUFDRixTQUFnQixPQUFPLENBQUMsR0FBRyxLQUFZO0lBQ3BDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDcEIsbUNBQW1DO1FBQ25DLE9BQU8sZ0JBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQztJQUNELHNEQUFzRDtJQUN0RCxPQUFPLGdCQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQVBBLDBCQU9BIn0=