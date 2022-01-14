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
exports.mathjsClass = exports.cube = exports.square = exports.norm = exports.hypot = exports.sum = exports.vari = exports.std = exports.prod = exports.mode = exports.median = exports.mean = exports.mad = exports.string = exports.number = exports.boolean = void 0;
const Mathjs = __importStar(require("mathjs"));
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * To be completed...
 * @param val
 */
function boolean(debug, val) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('boolean', arguments, 1);
    }
    return Mathjs.boolean(val);
}
exports.boolean = boolean;
/**
 * To be completed...
 * @param val
 */
function number(debug, val) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('number', arguments, 1);
    }
    return Mathjs.number(val);
}
exports.number = number;
/**
 * To be completed...
 * @param val
 */
function string(debug, val) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('string', arguments, 1);
    }
    return Mathjs.string(val);
}
exports.string = string;
/**
 * Returns the median absolute deviation of the list
 * @param list
 */
function mad(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('mad', arguments, 1);
    }
    return Mathjs.mad(list);
}
exports.mad = mad;
/**
 * Returns the mean value of the list
 * @param list
 */
function mean(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('mean', arguments, 1);
    }
    return Mathjs.mean(list);
}
exports.mean = mean;
/**
 * Returns the median of the list
 * @param list
 */
function median(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('median', arguments, 1);
    }
    return Mathjs.median(list);
}
exports.median = median;
/**
 * Returns the mode of the list
 * @param list
 */
function mode(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('mode', arguments, 1);
    }
    return Mathjs.mode(list);
}
exports.mode = mode;
/**
 * Returns the product of all values in a list
 * @param list
 */
function prod(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('prod', arguments, 1);
    }
    return Mathjs.prod(list);
}
exports.prod = prod;
/**
 * Returns the standard deviation of the list
 * @param list
 */
function std(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('std', arguments, 1);
    }
    return Mathjs.std(list);
}
exports.std = std;
/**
 * Returns the variance of the list
 * @param list
 */
function vari(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('vari', arguments, 1);
    }
    return Mathjs.variance(list);
}
exports.vari = vari;
/**
 * Returns the sum of all values in a list
 * @param list
 */
function sum(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('sum', arguments, 1);
    }
    return Mathjs.sum(list);
}
exports.sum = sum;
/**
 * Returns the hypotenuse of all values in a list
 * @param list
 */
function hypot(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('hypot', arguments, 1);
    }
    return Mathjs.hypot(list);
}
exports.hypot = hypot;
/**
 * Returns the norm of a list
 * @param list
 */
function norm(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('norm', arguments, 1);
    }
    return Mathjs.norm(list);
}
exports.norm = norm;
/**
 * Returns the square of the number
 * @param list
 */
function square(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('square', arguments, 1);
    }
    return Mathjs.square(list);
}
exports.square = square;
/**
 * Returns the cube of the number
 * @param list
 */
function cube(debug, list) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('cube', arguments, 1);
    }
    return Mathjs.cube(list);
}
exports.cube = cube;
class mathjsClass {
    constructor(debug) {
        this.__debug__ = debug;
    }
    boolean(val) {
        return boolean(this.__debug__, val);
    }
    number(val) {
        return number(this.__debug__, val);
    }
    string(val) {
        return string(this.__debug__, val);
    }
    mad(list) {
        return mad(this.__debug__, list);
    }
    mean(list) {
        return mean(this.__debug__, list);
    }
    median(list) {
        return median(this.__debug__, list);
    }
    mode(list) {
        return mode(this.__debug__, list);
    }
    prod(list) {
        return prod(this.__debug__, list);
    }
    std(list) {
        return std(this.__debug__, list);
    }
    vari(list) {
        return vari(this.__debug__, list);
    }
    sum(list) {
        return sum(this.__debug__, list);
    }
    hypot(list) {
        return hypot(this.__debug__, list);
    }
    norm(list) {
        return norm(this.__debug__, list);
    }
    square(list) {
        return square(this.__debug__, list);
    }
    cube(list) {
        return cube(this.__debug__, list);
    }
}
exports.mathjsClass = mathjsClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aGpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS9tYXRoanMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFpQztBQUNqQyw4REFBcUQ7QUFDckQ7OztHQUdHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFDLEtBQWMsRUFBRSxHQUFXO0lBQy9DLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUxELDBCQUtDO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEtBQWMsRUFBRSxHQUFXO0lBQzlDLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUxELHdCQUtDO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEtBQWMsRUFBRSxHQUFXO0lBQzlDLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUxELHdCQUtDO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsR0FBRyxDQUFDLEtBQWMsRUFBRSxJQUFjO0lBQzlDLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDckM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUxELGtCQUtDO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLEtBQWMsRUFBRSxJQUFZO0lBQzdDLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUxELG9CQUtDO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEtBQWMsRUFBRSxJQUFZO0lBQy9DLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUxELHdCQUtDO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLEtBQWMsRUFBRSxJQUFZO0lBQzdDLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUxELG9CQUtDO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLEtBQWMsRUFBRSxJQUFZO0lBQzdDLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUxELG9CQUtDO0FBQ0Q7OztHQUdHO0FBQ0gsU0FBZ0IsR0FBRyxDQUFDLEtBQWMsRUFBRSxJQUFjO0lBQzlD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