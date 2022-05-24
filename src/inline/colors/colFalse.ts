import * as ch from 'chroma-js';
import { TColor } from '../../libs/common'

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
 export function colFalse(vals: number|number[], min: number, max: number): TColor|TColor[] {
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