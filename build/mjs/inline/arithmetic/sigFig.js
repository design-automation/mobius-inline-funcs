import { round } from "./round";
/**
 * Returns the value of the given number converted to the specified number of significant figures.
 *
 * @param num A number or list of numbers.
 * @param sig_figs An integer. The number of significant figures.
 * @returns A number.
 */
export function sigFig(num, sig_figs) {
    if (Array.isArray(num)) {
        return num.map(a_num => sigFig(a_num, sig_figs));
    }
    if (num === 0) {
        return 0;
    }
    num = num;
    const round_val = sig_figs - 1 - Math.floor(Math.log10(Math.abs(num)));
    return round(num, round_val);
    // return parseFloat(num.toPrecision(sig_figs));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnRmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9hcml0aG1ldGljL3NpZ0ZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRWhDOzs7Ozs7R0FNRztBQUNGLE1BQU0sVUFBVSxNQUFNLENBQUMsR0FBb0IsRUFBRSxRQUFnQjtJQUMxRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBYyxDQUFDO0tBQ2xFO0lBQ0QsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1FBQUUsT0FBTyxDQUFDLENBQUM7S0FBRTtJQUM1QixHQUFHLEdBQUcsR0FBYSxDQUFDO0lBQ3BCLE1BQU0sU0FBUyxHQUFXLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQVcsQ0FBQztJQUN2QyxnREFBZ0Q7QUFDcEQsQ0FBQyJ9