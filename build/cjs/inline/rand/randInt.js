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
exports.randInt = void 0;
const mathjs = __importStar(require("mathjs"));
const common_1 = require("./common");
/**
 * Returns a random integer in the specified range.
 * If `seed` is set: Returns a random integer in the specified range, given a numeric seed.
 * @param min The minimum integer (inclusive).
 * @param max The maximum integer (exclusive).
 * @param seed (Optional) A number. If a seed is given, the result will be the same for the same seed.
 * @returns An integer.
 */
function randInt(min, max, seed) {
    if (seed !== undefined) {
        return Math.floor(min + ((0, common_1._randWithSeed)(seed) * (max - min)));
    }
    else {
        return mathjs.randomInt(min, max);
    }
}
exports.randInt = randInt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZEludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmFuZC9yYW5kSW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBaUM7QUFDakMscUNBQXlDO0FBRXpDOzs7Ozs7O0dBT0c7QUFDRixTQUFnQixPQUFPLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQzVELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBQSxzQkFBYSxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoRTtTQUFNO1FBQ0gsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNyQztBQUNMLENBQUM7QUFOQSwwQkFNQSJ9