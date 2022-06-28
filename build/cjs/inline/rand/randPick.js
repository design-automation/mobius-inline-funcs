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
exports.randPick = void 0;
const mathjs = __importStar(require("mathjs"));
const common_1 = require("./common");
/**
 * Returns a random set of items from the list.
 * If `seed` is set: Returns a random set of items from the list, based on the numeric seed.
 *
 * @param list A list. The set of items that can be returned.
 * @param num  An integer. The number of items to return from the list.
 * @param seed (Optional) A number. If a seed is given, the result will be the same for the same seed.
 * @returns A list, or a value (if num is set to 1).
 */
function randPick(list, num, seed) {
    if (num === 1) {
        const length = list.length;
        if (seed !== undefined) {
            return list[Math.floor((0, common_1._randWithSeed)(seed) * length)];
        }
        else {
            return list[mathjs.randomInt(0, list.length)];
        }
    }
    const list_copy = list.slice();
    (0, common_1._randShuffleWithSeed)(list_copy, seed);
    return list_copy.slice(0, num);
}
exports.randPick = randPick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZFBpY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3JhbmQvcmFuZFBpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFpQztBQUNqQyxxQ0FBK0Q7QUFFL0Q7Ozs7Ozs7O0dBUUc7QUFDRixTQUFnQixRQUFRLENBQUMsSUFBVyxFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQzdELElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNYLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBQSxzQkFBYSxFQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO0tBQ0o7SUFDRCxNQUFNLFNBQVMsR0FBVSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsSUFBQSw2QkFBb0IsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBWkEsNEJBWUEifQ==