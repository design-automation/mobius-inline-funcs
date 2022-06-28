"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEq = void 0;
const lodash_1 = __importDefault(require("lodash"));
/**
 * Returns true if the values in the two lists are equal.
 *
 * @param list1 The first list.
 * @param list2 The second list.
 * @returns True or False.
 */
function listEq(list1, list2) {
    return lodash_1.default.isEqual(list1, list2);
}
exports.listEq = listEq;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEVxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9saXN0L2xpc3RFcS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBNEI7QUFDNUI7Ozs7OztHQU1HO0FBQ0YsU0FBZ0IsTUFBTSxDQUFDLEtBQVksRUFBRSxLQUFZO0lBQzlDLE9BQU8sZ0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFGQSx3QkFFQSJ9