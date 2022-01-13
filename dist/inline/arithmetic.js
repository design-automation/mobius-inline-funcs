"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remap = void 0;
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * Maps a number from the d1 domain to the d2 domain.
 * @param num
 * @param d1
 * @param d2
 */
function remap(debug, num, d1, d2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('remap', arguments, 3);
    }
    if (Array.isArray(num)) {
        return num.map(num_val => remap(debug, num_val, d1, d2));
    }
    return (d2[0] +
        (((num - d1[0]) / (d1[1] - d1[0])) * (d2[1] - d2[0])));
}
exports.remap = remap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJpdGhtZXRpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBcUQ7QUFFckQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixLQUFLLENBQUMsS0FBYyxFQUFFLEdBQW9CLEVBQUUsRUFBWSxFQUFFLEVBQVk7SUFDbEYsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBYSxDQUFDO0tBQUU7SUFDakcsT0FBTyxDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVixDQUNJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDdEQsQ0FDSixDQUFDO0FBQ04sQ0FBQztBQVZELHNCQVVDIn0=