"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sigFig = void 0;
const round_1 = require("./round");
/**
 * Returns the value of the given number converted to the specified number of significant figures.
 *
 * @param num A number or list of numbers.
 * @param sig_figs An integer. The number of significant figures.
 * @returns A number.
 */
function sigFig(num, sig_figs) {
    if (Array.isArray(num)) {
        return num.map(a_num => sigFig(a_num, sig_figs));
    }
    if (num === 0) {
        return 0;
    }
    num = num;
    const round_val = sig_figs - 1 - Math.floor(Math.log10(Math.abs(num)));
    return (0, round_1.round)(num, round_val);
    // return parseFloat(num.toPrecision(sig_figs));
}
exports.sigFig = sigFig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnRmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9hcml0aG1ldGljL3NpZ0ZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBZ0M7QUFFaEM7Ozs7OztHQU1HO0FBQ0YsU0FBZ0IsTUFBTSxDQUFDLEdBQW9CLEVBQUUsUUFBZ0I7SUFDMUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQWMsQ0FBQztLQUNsRTtJQUNELElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQUU7SUFDNUIsR0FBRyxHQUFHLEdBQWEsQ0FBQztJQUNwQixNQUFNLFNBQVMsR0FBVyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxPQUFPLElBQUEsYUFBSyxFQUFDLEdBQUcsRUFBRSxTQUFTLENBQVcsQ0FBQztJQUN2QyxnREFBZ0Q7QUFDcEQsQ0FBQztBQVRBLHdCQVNBIn0=