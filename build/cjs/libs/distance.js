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
exports.distanceManhattanSq = exports.distanceManhattan = exports.distance = void 0;
const three = __importStar(require("three"));
const vectors_1 = require("./vectors");
const EPS = 1e-6;
function _distEuclidean(c1, c2) {
    const v = [
        c1[0] - c2[0],
        c1[1] - c2[1],
        c1[2] - c2[2]
    ];
    return Math.hypot(v[0], v[1], v[2]);
}
function _distManhattan(c1, c2) {
    const v = [
        Math.abs(c1[0] - c2[0]),
        Math.abs(c1[1] - c2[1]),
        Math.abs(c1[2] - c2[2])
    ];
    return v[0] + v[1] + v[2];
}
function _distManhattanSq(c1, c2) {
    const v = [
        Math.abs(c1[0] - c2[0]),
        Math.abs(c1[1] - c2[1]),
        Math.abs(c1[2] - c2[2])
    ];
    return (v[0] * v[0]) + (v[1] * v[1]) + (v[2] * v[2]);
}
function _dist(c1, c2, func) {
    if (!Array.isArray(c2[0])) {
        c2 = c2;
        return func(c1, c2);
    }
    else if (c2.length === 2) {
        c2 = c2;
        const tjs_point_proj = new three.Vector3(c1[0], c1[1], c1[2]);
        const tjs_origin = new three.Vector3(c2[0][0], c2[0][1], c2[0][2]);
        const p2 = (0, vectors_1.vecAdd)(c2[0], c2[1]);
        const tjs_point2 = new three.Vector3(p2[0], p2[1], p2[2]);
        const tjs_new_point = new three.Vector3();
        const tjs_line = new three.Line3(tjs_origin, tjs_point2);
        // project
        tjs_line.closestPointToPoint(tjs_point_proj, false, tjs_new_point);
        return distance(c1, [tjs_new_point.x, tjs_new_point.y, tjs_new_point.z]);
    }
    else if (c2.length === 3) {
        c2 = c2;
        const tjs_point_proj = new three.Vector3(c1[0], c1[1], c1[2]);
        const tjs_new_point = new three.Vector3();
        const normal = (0, vectors_1.vecCross)(c2[1], c2[2]);
        const tjs_normal = new three.Vector3(normal[0], normal[1], normal[2]);
        const tjs_origin = new three.Vector3(c2[0][0], c2[0][1], c2[0][2]);
        const tjs_plane = new three.Plane();
        // project
        tjs_plane.setFromNormalAndCoplanarPoint(tjs_normal, tjs_origin);
        tjs_plane.projectPoint(tjs_point_proj, tjs_new_point);
        return distance(c1, [tjs_new_point.x, tjs_new_point.y, tjs_new_point.z]);
    }
    else {
        throw new Error('Error calculating distance. Distance must to either an xyz, a ray, or a plane.');
    }
}
function distance(c1, c2) {
    return _dist(c1, c2, _distEuclidean);
}
exports.distance = distance;
function distanceManhattan(c1, c2) {
    return _dist(c1, c2, _distManhattan);
}
exports.distanceManhattan = distanceManhattan;
function distanceManhattanSq(c1, c2) {
    return _dist(c1, c2, _distManhattanSq);
}
exports.distanceManhattanSq = distanceManhattanSq;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicy9kaXN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHVDQUE2QztBQUM3QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFPakIsU0FBUyxjQUFjLENBQUMsRUFBUSxFQUFFLEVBQVE7SUFDdEMsTUFBTSxDQUFDLEdBQVM7UUFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNiLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEIsQ0FBQztJQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFDRCxTQUFTLGNBQWMsQ0FBQyxFQUFRLEVBQUUsRUFBUTtJQUN0QyxNQUFNLENBQUMsR0FBUztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCLENBQUM7SUFDRixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENB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