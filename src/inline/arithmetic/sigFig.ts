import { round } from "./round";

/**
 * Returns the value of the given number converted to the specified number of significant figures.
 *
 * @param num A number or list of numbers.
 * @param sig_figs An integer. The number of significant figures.
 * @returns A number. 
 */
 export function sigFig(num: number|number[], sig_figs: number): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => sigFig(a_num, sig_figs) ) as number[];
    }
    if (num === 0) { return 0; }
    num = num as number;
    const round_val: number = sig_figs - 1 - Math.floor(Math.log10(Math.abs(num)));
    return round(num, round_val) as number;
    // return parseFloat(num.toPrecision(sig_figs));
}