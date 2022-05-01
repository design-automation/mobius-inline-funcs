import * as THREE from 'three';
import * as ch from 'chroma-js';
import { checkNumArgs } from '../_check_inline_args';
import { checkArgs, isStr, isStrL } from '../_check_types';
const false_col = ch.scale(['blue', 'cyan', 'green', 'yellow', 'red']);
/**
 * Creates a colour from a value in the range between min and max.
 *
 * @param vals
 * @param min
 * @param max
 */
export function colFalse(debug, vals, min, max) {
    if (debug) {
        checkNumArgs('colFalse', arguments, 3);
    }
    const col_domain = false_col.domain([min, max]);
    if (!Array.isArray(vals)) {
        const col = col_domain(vals).gl();
        return [col[0], col[1], col[2]];
    }
    else {
        const cols = [];
        for (const val of vals) {
            const col = col_domain(val).gl();
            cols.push([col[0], col[1], col[2]]);
        }
        return cols;
    }
}
/**
 * Creates a colour from a value in the range between min and max, given a Brewer color scale.
 *
 * @param vals
 * @param min
 * @param max
 * @param scale
 */
export function colScale(debug, vals, min, max, scale) {
    if (debug) {
        checkNumArgs('colScale', arguments, 4);
    }
    const col_scale = ch.scale(scale);
    const col_domain = col_scale.domain([min, max]);
    if (!Array.isArray(vals)) {
        const col = col_domain(vals).gl();
        return [col[0], col[1], col[2]];
    }
    else {
        const cols = [];
        for (const val of vals) {
            const col = col_domain(val).gl();
            cols.push([col[0], col[1], col[2]]);
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
export function colFromStr(debug, col_str) {
    if (debug) {
        checkNumArgs('colFromStr', arguments, 1);
        checkArgs('colFromStr', 'col_str', col_str, [isStr, isStrL]);
    }
    if (!Array.isArray(col_str)) {
        const col_tjs = new THREE.Color(col_str);
        return [col_tjs.r, col_tjs.g, col_tjs.b];
    }
    else {
        const cols = [];
        for (const a_col_str of col_str) {
            const col_tjs = new THREE.Color(a_col_str);
            cols.push([col_tjs.r, col_tjs.g, col_tjs.b]);
        }
        return cols;
    }
}
export class colorsClass {
    constructor(debug) {
        this.__debug__ = debug;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS9jb2xvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFaEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNELE1BQU0sU0FBUyxHQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUV4RTs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWMsRUFBRSxJQUFxQixFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQ3BGLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDMUM7SUFDRCxNQUFNLFVBQVUsR0FBSSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdEIsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25DO1NBQU07UUFDSCxNQUFNLElBQUksR0FBYSxFQUFFLENBQUM7UUFDMUIsS0FBSyxNQUFNLEdBQUcsSUFB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