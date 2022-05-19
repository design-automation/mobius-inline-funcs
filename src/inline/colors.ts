import * as THREE from 'three';
import * as ch from 'chroma-js';
import { TColor } from '../libs/common';
import { checkNumArgs } from '../_check_inline_args';
import { checkArgs, isStr, isStrL } from '../_check_types';

const false_col  = ch.scale(['blue', 'cyan', 'green', 'yellow', 'red']);

/**
 * Creates a colour from a value in the range between min and max.
 * 
 * Based on a "false" color scale, 
 * which is a gradient of colors with the following order:
 * 1. Red
 * 2. Orange
 * 3. Yellow
 * 4. Green
 * 5. Cyan
 * 6. Blue
 * 
 * The input number is measured as a percentage of the min/max scale, 
 * then a color is returned depending on where the percentage lies on the color gradient.
 * 
 * <a href="/editor?file=/assets/examples/Inline_Color_False.mob&node=1" target="_blank">See here for an example model.</a>
 *
 * @param vals The input number. 
 * @param min The smallest number of the scale.
 * @param max The largest number of the scale.
 * @returns A list of three numbers, `[r, g, b]`, in the range 0 to 1.
 */
export function colFalse(debug: boolean, vals: number|number[], min: number, max: number): TColor|TColor[] {
    if (debug) {
        checkNumArgs('colFalse', arguments, 3);
    }
    const col_domain  = false_col.domain([min, max]);
    if (!Array.isArray(vals)) {
        const col = col_domain(vals).gl();
        return [col[0], col[1], col[2]];
    } else {
        const cols: TColor[] = [];
        for (const val of vals) {
            const col = col_domain(val).gl();
            cols.push( [col[0], col[1], col[2]] );
        }
        return cols;
    }
}
/**
 * Creates a colour from a value in the range between min and max, given a Brewer scale or custom color scale.
 *
 * 
 * The input number is measured as a percentage of the min/max scale, then a color is returned depending on where the percentage lies on the color gradient.
 *
 * Using a Brewer scale would be similar to using `visualize.Gradient`, which comes preloaded with those scales. 
 * See that function's drop-down menu for a list of valid Brewer scales.
 * 
 * Accepted custom color inputs include:
 * - Hex, as a string. <a href="https://www.w3schools.com/colors/colors_hexadecimal.asp" target="_blank">(w3schools hex builder)</a>
 * - RGB255, as a list. <a href="https://www.w3schools.com/colors/colors_hexadecimal.asp" target="_blank">(w3schools RGB builder)</a>
 * - Colors from X11 with no numbers, as a string. <a href="https://www.w3schools.com/colors/colors_x11.asp" target="_blank">(w3schools X11 list)</a>
 * 
 * <a href="/editor?file=/assets/examples/Inline_Color_Scale.mob&node=1" target="_blank">See here for an example model.</a>
 * 
 * @param vals The input number. 
 * @param min The smallest number of the scale.
 * @param max The largest number of the scale.
 * @param scale A string representing a Brewer scale, or a list of strings representing a custom colour scale/gradient. 
 * The order of colors in the gradient will follow the order of the list from left to right. 
 * @returns A list of three numbers, `[r, g, b]`, in the range 0 to 1.
 */
export function colScale(debug: boolean, vals: number|number[], min: number, max: number, scale: any): TColor|TColor[] {
    if (debug) {
        checkNumArgs('colScale', arguments, 4);
    }
    const col_scale  = ch.scale(scale);
    const col_domain  = col_scale.domain([min, max]);
    if (!Array.isArray(vals)) {
        const col = col_domain(vals).gl();
        return [col[0], col[1], col[2]];
    } else {
        const cols: TColor[] = [];
        for (const val of vals) {
            const col = col_domain(val).gl();
            cols.push( [col[0], col[1], col[2]] );
        }
        return cols;
    }
}

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
 export function colFromStr(debug: boolean, col_str: string|string[]): TColor | TColor[] {
    if (debug) {
        checkNumArgs('colFromStr', arguments, 1);
        checkArgs('colFromStr', 'col_str', col_str, [isStr, isStrL]);
    }
    if (!Array.isArray(col_str)) {
        const col_tjs = new THREE.Color(col_str);
        return [col_tjs.r, col_tjs.g, col_tjs.b];
    } else {
        const cols: TColor[] = [];
        for (const a_col_str of col_str) {
            const col_tjs = new THREE.Color(a_col_str);
            cols.push([col_tjs.r, col_tjs.g, col_tjs.b]);
        }
        return cols;
    }
}

export class colorsClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    colFalse(vals, min, max) {
        return colFalse(this.__debug__, vals, min, max);
    }

    colScale(vals, min, max, scale) {
        return colScale(this.__debug__, vals, min, max, scale);
    }

    colFromStr(col_str) {
        return colFromStr(this.__debug__, col_str);
    }
}

