"use strict";
/**
 * Functions shared by lists, dicts, strings.
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonClass = exports.equal = exports.copy = exports.len = void 0;
const lodash_1 = __importDefault(require("lodash"));
const chk = __importStar(require("../_check_types"));
const _check_types_1 = require("../_check_types");
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * Returns the number of items in a list, a dictionary, or a string.
 * @param data
 */
function len(debug, data) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('len', arguments, 1);
        chk.checkArgs('len', 'data', data, [_check_types_1.isStr, _check_types_1.isList, _check_types_1.isDict]);
    }
    return lodash_1.default.size(data);
}
exports.len = len;
/**
 * Makes a deep copy of a list or a dictionary.
 * @param data
 */
function copy(debug, data) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('copy', arguments, 1);
        chk.checkArgs('copy', 'data', data, [_check_types_1.isList, _check_types_1.isDict]);
    }
    return lodash_1.default.cloneDeep(data);
}
exports.copy = copy;
/**
 * Returns true of the two lists or dictionaries are equal.
 * Performs a deep comparison between values to determine if they are equivalent.
 * @param data
 */
function equal(debug, data1, data2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('copy', arguments, 1);
        chk.checkArgs('copy', 'data1', data1, [_check_types_1.isList, _check_types_1.isDict]);
        chk.checkArgs('copy', 'data2', data2, [_check_types_1.isList, _check_types_1.isDict]);
    }
    return lodash_1.default.isEqual(data1, data2);
}
exports.equal = equal;
class commonClass {
    constructor(debug) {
        this.__debug__ = debug;
    }
    len(data) {
        return len(this.__debug__, data);
    }
    copy(data) {
        return copy(this.__debug__, data);
    }
    equal(data1, data2) {
        return equal(this.__debug__, data1, data2);
    }
}
exports.commonClass = commonClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsb0RBQTRCO0FBQzVCLHFEQUF1QztBQUN2QyxrREFBd0Q7QUFDeEQsOERBQXFEO0FBRXJEOzs7R0FHRztBQUNILFNBQWdCLEdBQUcsQ0FBQyxLQUFjLEVBQUUsSUFBUztJQUN6QyxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxvQkFBSyxFQUFFLHFCQUFNLEVBQUUscUJBQU0sQ0FBQyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxPQUFPLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFORCxrQkFNQztBQUNEOzs7R0FHRztBQUNILFNBQWdCLElBQUksQ0FBQyxLQUFjLEVBQUUsSUFBUztJQUMxQyxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxxQkFBTSxFQUFFLHFCQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEO0lBQ0QsT0FBTyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBTkQsb0JBTUM7QUFDRDs7OztHQUlHO0FBQ0gsU0FBZ0IsS0FBSyxDQUFDLEtBQWMsRUFBRSxLQUFVLEVBQUUsS0FBVTtJQUN4RCxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxxQkFBTSxFQUFFLHFCQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hELEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxxQkFBTSxFQUFFLHFCQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQVBELHNCQU9DO0FBR0QsTUFBYSxXQUFXO0lBRXBCLFlBQVksS0FBYztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtJQUMxQixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQUk7UUFDSixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBSTtRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSztRQUNkLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDSjtBQWpCRCxrQ0FpQkMifQ==