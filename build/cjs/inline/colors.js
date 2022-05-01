"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorsClass = exports.colFromStr = exports.colScale = exports.colFalse = void 0;
const THREE = __importStar(require("three"));
const ch = __importStar(require("chroma-js"));
const _check_inline_args_1 = require("../_check_inline_args");
const _check_types_1 = require("../_check_types");
const false_col = ch.scale(['blue', 'cyan', 'green', 'yellow', 'red']);
/**
 * Creates a colour from a value in the range between min and max.
 *
 * @param vals
 * @param min
 * @param max
 */
function colFalse(debug, vals, min, max) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('colFalse', arguments, 3);
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
exports.colFalse = colFalse;
/**
 * Creates a colour from a value in the range between min and max, given a Brewer color scale.
 *
 * @param vals
 * @param min
 * @param max
 * @param scale
 */
function colScale(debug, vals, min, max, scale) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('colScale', arguments, 4);
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
exports.colScale = colScale;
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
function colFromStr(debug, col_str) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('colFromStr', arguments, 1);
        (0, _check_types_1.checkArgs)('colFromStr', 'col_str', col_str, [_check_types_1.isStr, _check_types_1.isStrL]);
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
exports.colFromStr = colFromStr;
class colorsClass {
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
exports.colorsClass = colorsClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS9jb2xvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw4Q0FBZ0M7QUFFaEMsOERBQXFEO0FBQ3JELGtEQUEyRDtBQUUzRCxNQUFNLFNBQVMsR0FBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFeEU7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEtBQWMsRUFBRSxJQUFxQixFQUFFLEdBQVcsRUFBRSxHQUFXO0lBQ3BGLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDMUM7SUFDRCxNQUFNLFVBQVUsR0FBSSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdEIsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25DO1NBQU07UUFDSCxNQUFNLElBQUksR0FBYSxFQUFFLENBQUM7UUFDMUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDcEIsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FB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