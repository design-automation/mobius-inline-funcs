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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dictEq = exports.dictCopy = exports.dictFind = exports.dictHasVal = exports.dictHasKey = exports.dictVals = exports.dictKeys = exports.dictGet = void 0;
/**
 * Functions for working with dictionaries. The functions do not modify input dictionaries.
 */
const lodash_1 = __importDefault(require("lodash"));
const chk = __importStar(require("../_check_types"));
const _check_types_1 = require("../_check_types");
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * Returns the item in the dictionary specified by key.
 * If the key does nto exist, undefined is returned.
 *
 * If a list of keys is provided, then a list of values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a single string or a list of strings.
 */
function dictGet(debug, dict, key) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('dictGet', arguments, 2);
        chk.checkArgs('dictGet', 'dict', dict, [_check_types_1.isDict]);
        chk.checkArgs('dictGet', 'key', key, [_check_types_1.isStr, _check_types_1.isStrL]);
    }
    if (Array.isArray(key)) {
        return key.map(a_key => dict[a_key]);
    }
    return dict[key];
}
exports.dictGet = dictGet;
/**
 * Returns an array of all the keys in a dictionary.
 *
 * @param dict The dictionary.
 */
function dictKeys(debug, dict) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('dictKeys', arguments, 1);
        chk.checkArgs('dictKeys', 'dict', dict, [_check_types_1.isDict]);
    }
    return Object.keys(dict);
}
exports.dictKeys = dictKeys;
/**
 * Returns an array of all the values in a dictionary.
 *
 * @param dict The dictionary.
 */
function dictVals(debug, dict) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('dictVals', arguments, 1);
        chk.checkArgs('dictVals', 'dict', dict, [_check_types_1.isDict]);
    }
    return Object.values(dict);
}
exports.dictVals = dictVals;
/**
 * Returns true if the dictionary contains the given key, false otherwsie.
 *
 * If a list of keys is given, a list of true/false values will be returned.
 *
 * @param dict The dictionary.
 * @param key The key, either a string or a list of strings.
 */
function dictHasKey(debug, dict, key) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('dictHasKey', arguments, 2);
        chk.checkArgs('dictHasKey', 'dict', dict, [_check_types_1.isDict]);
        chk.checkArgs('dictHasKey', 'key', key, [_check_types_1.isStr, _check_types_1.isStrL]);
    }
    if (Array.isArray(key)) {
        return key.map(a_key => dict.hasOwnProperty(a_key));
    }
    return dict.hasOwnProperty(key);
}
exports.dictHasKey = dictHasKey;
/**
 * Returns true if the dictionary contains the given value, false otherwsie.
 *
 * @param dict The dictionary.
 * @param val The value to seach for, can be any type.
 */
function dictHasVal(debug, dict, val) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('dictHasVal', arguments, 2);
        chk.checkArgs('dictHasVal', 'dict', dict, [_check_types_1.isDict]);
    }
    return Object.values(dict).indexOf(val) !== -1;
}
exports.dictHasVal = dictHasVal;
/**
 * Returns the first key in the dictionary that has the given value.
 *
 * If the value does not exist, returns null.
 *
 * @param dict The dictionary.
 * @param val The value, can be any type.
 */
function dictFind(debug, dict, val) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('dictFind', arguments, 2);
        chk.checkArgs('dictFind', 'dict', dict, [_check_types_1.isDict]);
    }
    for (const key of Object.keys(dict)) {
        if (dict[key] === val) {
            return key;
        }
    }
    return null;
}
exports.dictFind = dictFind;
/**
 * Returns a deep copy of the dictionary.
 *
 * A deep copy means that changing values in the copied dictionary will not affect the original dictionary.
 *
 * @param dict The dictionary.
 */
function dictCopy(debug, dict) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('dictCopy', arguments, 1);
        chk.checkArgs('dictCopy', 'dict', dict, [_check_types_1.isDict]);
    }
    return lodash_1.default.cloneDeep(dict);
}
exports.dictCopy = dictCopy;
/**
 * Returns true if the values in the two dictionaries are equal.
 *
 * Performs a deep comparison between values to determine if they are equivalent.
 *
 * @param dict1 The first dictionary.
 * @param dict2 The second dictionary.
 */
function dictEq(debug, dict1, dict2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('dictEq', arguments, 2);
        chk.checkArgs('dictEq', 'dict1', dict1, [_check_types_1.isDict]);
        chk.checkArgs('dictEq', 'dict2', dict2, [_check_types_1.isDict]);
    }
    return lodash_1.default.isEqual(dict1, dict2);
}
exports.dictEq = dictEq;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvZGljdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxvREFBNEI7QUFDNUIscURBQXVDO0FBQ3ZDLGtEQUF3RDtBQUN4RCw4REFBcUQ7QUFFckQ7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixPQUFPLENBQUMsS0FBYyxFQUFFLElBQVksRUFBRSxHQUFvQjtJQUN0RSxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxxQkFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRCxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsb0JBQUssRUFBRSxxQkFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDtJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBVSxDQUFDO0tBQUU7SUFDM0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFRLENBQUM7QUFDNUIsQ0FBQztBQVJELDBCQVFDO0FBQ0Q7Ozs7R0FJRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxLQUFjLEVBQUUsSUFBWTtJQUNqRCxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxxQkFBTSxD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