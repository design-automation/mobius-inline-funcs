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
exports.rand = void 0;
const mathjs = __importStar(require("mathjs"));
const common_1 = require("./common");
/**
 * Returns a random number in the specified range.
 * If `seed` is set: Returns a random number (with decimals) in the specified range, given a numeric seed.
 * @param min The minimum number (inclusive).
 * @param max The maximum number (exclusive).
 * @param seed (Optional) If a seed is given, the result will be the same for the same seed.
 * @returns A number (with decimals).
 */
function rand(min, max, seed) {
    if (seed !== undefined) {
        return min + ((0, common_1._randWithSeed)(seed) * (max - min));
    }
    else {
        return mathjs.random(min, max);
    }
}
exports.rand = rand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmFuZC9yYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBaUM7QUFDakMscUNBQXlDO0FBRXpDOzs7Ozs7O0dBT0c7QUFDRixTQUFnQixJQUFJLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQ3pELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQixPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUEsc0JBQWEsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BEO1NBQU07UUFDSCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDO0FBQ0wsQ0FBQztBQU5BLG9CQU1BIn0=