"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWithin = exports.isIn = exports.isApprox = void 0;
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * Returns true if the absolute difference between the two numbers is less than the tolerance, t
 * @param n1
 * @param n2
 * @param t
 */
function isApprox(debug, n1, n2, t) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isApprox', arguments, 3);
    }
    return Math.abs(n1 - n2) < t;
}
exports.isApprox = isApprox;
/**
 * Returns v1 < v2 < v3.
 * @param v1
 * @param v2
 * @param v3
 */
function isIn(debug, v1, v2, v3) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isIn', arguments, 3);
    }
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 < v2 && v2 < v3;
}
exports.isIn = isIn;
/**
 * Returns v1 <= v2 <= v3.
 * @param v1
 * @param v2
 * @param v3
 */
function isWithin(debug, v1, v2, v3) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('isWithin', arguments, 3);
    }
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 <= v2 && v2 <= v3;
}
exports.isWithin = isWithin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBcUQ7QUFFckQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixRQUFRLENBQUMsS0FBYyxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsQ0FBUztJQUN0RSxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUxELDRCQUtDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxTQUFnQixJQUFJLENBQUMsS0FBYyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTztJQUMxRCxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsT0FBTyxPQUFPLEVBQUUsS0FBSyxRQUFRLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVE7UUFDakYsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFORCxvQkFNQztBQUNEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEtBQWMsRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU87SUFDOUQsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQztJQUNELE9BQU8sT0FBTyxFQUFFLEtBQUssUUFBUSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRO1FBQ2pGLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBTkQsNEJBTUMifQ==