"use strict";
/**
 * Set functions for working with sets, using lists as a data structure. Does not modify input list.
 */
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
exports.setDif = exports.setInt = exports.setUni = exports.setMake = void 0;
const Mathjs = __importStar(require("mathjs"));
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * Generates a list of unique items.
 * @param list
 */
function setMake(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('setMake', arguments, 1);
    }
    return Array.from(new Set(list));
}
exports.setMake = setMake;
/**
 * Generates a list of unique items from the union of the two input lists.
 * @param list1
 * @param list2
 */
function setUni(debug, list1, list2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('setUni', arguments, 2);
    }
    return Mathjs.setUnion(list1, list2);
}
exports.setUni = setUni;
/**
 * Generates a list of unique items from the intersection of the two input lists.
 * @param list1
 * @param list2
 */
function setInt(debug, list1, list2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('setInt', arguments, 2);
    }
    return Mathjs.setIntersect(list1, list2);
}
exports.setInt = setInt;
/**
 * Generates a list of unique items from the difference of the two input lists.
 * @param list1
 * @param list2
 */
function setDif(debug, list1, list2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('setDif', arguments, 2);
    }
    return Mathjs.setDifference(list1, list2);
}
exports.setDif = setDif;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lubGluZS9zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsK0NBQWlDO0FBQ2pDLDhEQUFxRDtBQUNyRDs7O0dBR0c7QUFDSCxTQUFnQixPQUFPLENBQUMsS0FBYyxFQUFFLElBQVc7SUFDL0MsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFMRCwwQkFLQztBQUNEOzs7O0dBSUc7QUFDSCxTQUFnQixNQUFNLENBQUMsS0FBYyxFQUFFLEtBQVksRUFBRSxLQUFZO0lBQzdELElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFMRCx3QkFLQztBQUNEOzs7O0dBSUc7QUFDSCxTQUFnQixNQUFNLENBQUMsS0FBYyxFQUFFLEtBQVksRUFBRSxLQUFZO0lBQzdELElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFMRCx3QkFLQztBQUNEOzs7O0dBSUc7QUFDSCxTQUFnQixNQUFNLENBQUMsS0FBYyxFQUFFLEtBQVksRUFBRSxLQUFZO0lBQzdELElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFMRCx3QkFLQyJ9