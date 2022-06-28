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
exports.intersect = void 0;
const isect = __importStar(require("../../libs/intersect"));
/**
 * Returns the intersection xyz between two rays or a ray and a plane, where...
 * \n
 * - `intersect(r1, r2)`, Returns the intersection xyz between two infinite rays.
 * - `intersect(r1, r2, m)`, Returns the intersection xyz between two rays, where:
 *      - if `m=2`, rays are infinite in both directions
 *      - if `m=1` rays are infinite in one direction
 *      - if `m=0`, rays are not infinite.
 * \n
 * - `intersect(r, p)`, Returns the intersection xyz between an infinite ray r and an infinite plane p,
 * - `intersect(r, p, m)`, Returns the intersection xyz between a ray r and an infinite plane p, where:
 *      - if `m=2`, the ray is infinite in both directions,
 *      - if `m=1` the ray is infinite in one direction,
 *      - and if `m=0`, the ray is not infinite.
 *
 * @param r1 The first ray.
 * @param r2 The second ray or plane.
 * @param met (Optional) Creates certain conditions, as seen above.
 * @returns The xyz coordinates of the intersection between two rays.
 */
function intersect(r1, r2, met = 2) {
    return isect.intersect(r1, r2, met);
}
exports.intersect = intersect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9nZW9tZXRyeS9pbnRlcnNlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUE4QztBQUs5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNGLFNBQWdCLFNBQVMsQ0FBQyxFQUFRLEVBQUUsRUFBZSxFQUFFLE1BQWMsQ0FBQztJQUNqRSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRkEsOEJBRUEifQ==