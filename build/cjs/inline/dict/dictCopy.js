"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dictCopy = void 0;
const lodash_1 = __importDefault(require("lodash"));
/**
 * Returns a deep copy of the dictionary.
 * \n
 * A deep copy means that changing values in the copied dictionary will not affect the original dictionary.
 *
 * @param dict The dictionary.
 * @returns The copied dictionary.
 */
function dictCopy(dict) {
    return lodash_1.default.cloneDeep(dict);
}
exports.dictCopy = dictCopy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdENvcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2RpY3QvZGljdENvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCOzs7Ozs7O0dBT0c7QUFDRixTQUFnQixRQUFRLENBQUMsSUFBWTtJQUNsQyxPQUFPLGdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFGQSw0QkFFQSJ9