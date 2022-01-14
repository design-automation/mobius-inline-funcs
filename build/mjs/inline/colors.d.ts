import { TColor } from '../libs/common';
/**
 * Creates a colour from a value in the range between min and max.
 *
 * @param vals
 * @param min
 * @param max
 */
export declare function colFalse(debug: boolean, vals: number | number[], min: number, max: number): TColor | TColor[];
/**
 * Creates a colour from a value in the range between min and max, given a Brewer color scale.
 *
 * @param vals
 * @param min
 * @param max
 * @param scale
 */
export declare function colScale(debug: boolean, vals: number | number[], min: number, max: number, scale: any): TColor | TColor[];
export declare class colorsClass {
    __debug__: boolean;
    constructor(debug: boolean);
    colFalse(vals: any, min: any, max: any): TColor | TColor[];
    colScale(vals: any, min: any, max: any, scale: any): TColor | TColor[];
}
