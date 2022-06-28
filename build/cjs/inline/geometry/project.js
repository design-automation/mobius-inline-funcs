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
exports.project = void 0;
const isect = __importStar(require("../../libs/intersect"));
/**
 * Returns the xyz from projecting an xyz c onto an infinite ray r or infinite plane p where...
 * \n
 * - `project(c, r)`, Returns the xyz from projecting an xyz c onto an infinite ray r,
 * - `project(c, r, m)`, Returns the xyz from projecting an xyz c onto an infinite ray r, where:
 *      - if `m=2`, the ray is infinite in both directions,
 *      - if `m=1`, the ray is infinite in one direction,
 *      - and if `m=0`, the ray is not infinite.
 * - `project(c, p)`, Returns the xyz from projecting an xyz c onto an infinite plane p.
 * @param c An xyz coordinate.
 * @param r A ray or a plane.
 * @param met (Optional) Creates certain conditions, as seen above.
 * @returns An xyz coordinate.
 */
function project(c, r, met = 2) {
    return isect.project(c, r, met);
}
exports.project = project;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvZ2VvbWV0cnkvcHJvamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQThDO0FBSzlDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDRixTQUFnQixPQUFPLENBQUMsQ0FBTyxFQUFFLENBQWMsRUFBRSxNQUFjLENBQUM7SUFDN0QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUZBLDBCQUVBIn0=