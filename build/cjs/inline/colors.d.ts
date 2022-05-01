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
/**
 * Creates a color from a string representation.
 *
 * \n
 *
 * Examples of color strings are as follows:
 *
 * - `colFromStr( "rgb(255, 0, 0)`" )`
 * - `colFromStr( "rgb(100%, 0%, 0%)`" )`
 * - `colFromStr( "hsl(0, 100%, 50%)`" )`
 * - `colFromStr( "#ff0000" )`
 * - `colFromStr( "#FFAABB" )`
 * - `colFromStr( "#f00" )`
 * - `colFromStr( "skyblue" )`
 * - `colFromStr( "Maroon" )`
 * - `colFromStr( "MediumSeaGreen" )`
 *
 * For colour names, all 140 names are supported. See <a
 * href="https://www.w3schools.com/colors/colors_names.asp" target="_blank">w3schools</a>.
 *
 * If the string cannot be interpreted as a color, then `[1, 1, 1]` is returned (i.e. white).
 *
 * The function is overloaded. If you pass in a list of strings, it will return a list of colors.
 *
 * @param col_str
 * @returns A list of three numbers, `[r, g, b]`, in the range 0 to 1.
 */
export declare function colFromStr(debug: boolean, col_str: string | string[]): TColor | TColor[];
export declare class colorsClass {
    __debug__: boolean;
    constructor(debug: boolean);
    colFalse(vals: any, min: any, max: any): TColor | TColor[];
    colScale(vals: any, min: any, max: any, scale: any): TColor | TColor[];
    colFromStr(col_str: any): TColor | TColor[];
}
