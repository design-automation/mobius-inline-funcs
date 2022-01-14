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
exports.geometryClass = exports.distanceMS = exports.distanceM = exports.distance = exports.project = exports.intersect = void 0;
const isect = __importStar(require("../libs/intersect"));
const dist = __importStar(require("../libs/distance"));
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * Returns the intersection xyz between two rays, where...
    ['intersect(r1, r2)', 'Returns the intersection xyz between two infinite rays'],
    ['intersect(r1, r2, m)', 'Returns the intersection xyz between two rays, where ' +
        'if m=2, rays are infinite in both directions, ' +
        'if m=1 rays are infinite in one direction, ' +
        'and if m=0, rays are not infinite.'],
    ['intersect(r, p)', 'Returns the intersection xyz between an infinite ray r and an infinite plane p'],
    ['intersect(r, p, m)', 'Returns the intersection xyz between a ray r and an infinite plane p, where ' +
        'if m=2, the ray is infinite in both directions, ' +
        'if m=1 the ray is infinite in one direction, ' +
        'and if m=0, the ray is not infinite.'],
 * @param r1
 * @param r2
 * @param met
 */
function intersect(debug, r1, r2, met = 2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('intersect', arguments, 3, 2);
    }
    return isect.intersect(r1, r2, met);
}
exports.intersect = intersect;
/**
 * Returns the xyz from projecting an xyz c onto an infinite ray r...
    ['project(c, r)', 'Returns the xyz from projecting an xyz c onto an infinite ray r'],
    ['project(c, r, m)', 'Returns the xyz from projecting an xyz c onto an infinite ray r, where ' +
        'if m=2, the ray is infinite in both directions, ' +
        'if m=1 the ray is infinite in one direction, ' +
        'and if m=0, the ray is not infinite.'],
    ['project(c, p)', 'Returns the xyz from projecting an xyz c onto an infinite plane p']
 * @param c
 * @param r
 * @param met
 */
function project(debug, c, r, met = 2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('project', arguments, 3, 2);
    }
    return isect.project(c, r, met);
}
exports.project = project;
/**
 * Returns the Euclidean distance between two xyzs, c1 and c2'
 * Returns the Euclidean distance between an xyz c and an infinite ray r'
 * Returns the Euclidean distance between an xyz c and an infinite plane p'
 * @param c1
 * @param c2
 */
function distance(debug, c1, c2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('distance', arguments, 2);
    }
    return dist.distance(c1, c2);
}
exports.distance = distance;
/**
 * Returns the Manhattan distance between two xyzs, c1 and c2
 * Returns the Manhattan distance between an xyz c and an infinite ray r'
 * Returns the Manhattan distance between an xyz c and an infinite plane p'
 * @param c1
 * @param c2
 */
function distanceM(debug, c1, c2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('distanceM', arguments, 2);
    }
    return dist.distanceManhattan(c1, c2);
}
exports.distanceM = distanceM;
/**
 * Returns the Manhattan squared distance between two xyzs, c1 and c2
 * Returns the Manhattan squared distance between an xyz c and an infinite ray r'
 * Returns the Manhattan squared distance between an xyz c and an infinite plane p'
 * @param c1
 * @param c2
 */
function distanceMS(debug, c1, c2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('distanceMS', arguments, 2);
    }
    return dist.distanceManhattanSq(c1, c2);
}
exports.distanceMS = distanceMS;
class geometryClass {
    constructor(debug) {
        this.__debug__ = debug;
    }
    intersect(r1, r2, met) {
        return intersect(this.__debug__, r1, r2, met);
    }
    project(c, r, met) {
        return project(this.__debug__, c, r, met);
    }
    distance(c1, c2) {
        return distance(this.__debug__, c1, c2);
    }
    distanceM(c1, c2) {
        return distanceM(this.__debug__, c1, c2);
    }
    distanceMS(c1, c2) {
        return distanceMS(this.__debug__, c1, c2);
    }
}
exports.geometryClass = geometryClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5saW5lL2dlb21ldHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBMkM7QUFDM0MsdURBQXlDO0FBQ3pDLDhEQUFxRDtBQUtyRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxTQUFnQixTQUFTLENBQUMsS0FBYyxFQUFFLEVBQVEsRUFBRSxFQUFlLEVBQUUsTUFBYyxDQUFDO0lBQ2hGLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUxELDhCQUtDO0FBQ0Q7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxTQUFnQixPQUFPLENBQUMsS0FBYyxFQUFFLENBQU8sRUFBRSxDQUFjLEVBQUUsTUFBYyxDQUFDO0lBQzVFLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBQSxpQ0FBWSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBQ0QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUxELDBCQUtDO0FBQ0Q7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEtBQWMsRUFBRSxFQUFRLEVBQUUsRUFBb0I7SUFDbkUsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQztJQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUxELDRCQUtDO0FBQ0Q7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLEtBQWMsRUFBRSxFQUFRLEVBQUUsRUFBb0I7SUFDcEUsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMzQztJQUNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBTEQsOEJBS0M7QUFDRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixVQUFVLENBQUMsS0FBYyxFQUFFLEVBQVEsRUFBRSxFQUFvQjtJQUNyRSxJQUFJLEtBQUssRUFBRTtRQUNQLElBQUEsaUNBQVksRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBQ0QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFMRCxnQ0FLQztBQUlELE1BQWEsYUFBYTtJQUV0QixZQUFZLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7SUFDMUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUc7UUFDakIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO1FBQ2IsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFDWCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQ1osT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtRQUNiLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDSjtBQXpCRCxzQ0F5QkMifQ==