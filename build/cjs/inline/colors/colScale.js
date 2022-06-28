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
exports.colScale = void 0;
const ch = __importStar(require("chroma-js"));
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
function colScale(vals, min, max, scale) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sU2NhbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2NvbG9ycy9jb2xTY2FsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWdDO0FBR2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBQ0YsU0FBZ0IsUUFBUSxDQUFDLElBQXFCLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxLQUFVO0lBQ2pGLE1BQU0sU0FBUyxHQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsTUFBTSxVQUFVLEdBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQztTQUFNO1FBQ0gsTUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO1FBQzFCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3BCLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUM7QUFkQSw0QkFjQSJ9