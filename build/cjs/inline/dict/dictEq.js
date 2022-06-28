"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dictEq = void 0;
const lodash_1 = __importDefault(require("lodash"));
/**
 * Returns true if the values in the two dictionaries are equal.
 * \n
 * Performs a deep comparison between values to determine if they are equivalent.
 *
 * @param dict1 The first dictionary.
 * @param dict2 The second dictionary.
 * @returns True or False.
 */
function dictEq(dict1, dict2) {
    return lodash_1.default.isEqual(dict1, dict2);
}
exports.dictEq = dictEq;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEVxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9kaWN0L2RpY3RFcS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBNEI7QUFFNUI7Ozs7Ozs7O0dBUUc7QUFDRixTQUFnQixNQUFNLENBQUMsS0FBWSxFQUFFLEtBQVk7SUFDOUMsT0FBTyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUZBLHdCQUVBIn0=