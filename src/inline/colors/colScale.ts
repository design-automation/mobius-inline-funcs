import * as ch from 'chroma-js';
import { TColor } from '../../libs/common'

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
 export function colScale(vals: number|number[], min: number, max: number, scale: any): TColor|TColor[] {
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