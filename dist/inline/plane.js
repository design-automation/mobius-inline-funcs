"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plnFromRay = exports.plnLRotZ = exports.plnLRotY = exports.plnLRotX = exports.plnLMove = exports.plnRot = exports.plnMove = exports.plnCopy = exports.plnMake = void 0;
const vectors_1 = require("../libs/vectors");
const arrs_1 = require("../libs/arrs");
const _check_inline_args_1 = require("../_check_inline_args");
/**
 * Creates a plane from an origin "o", an "x" axis vector, and any other vector in the "xy" plane.
 * @param origin
 * @param x_vec
 * @param xy_vec
 */
function plnMake(debug, origin, x_vec, xy_vec) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('plnMake', arguments, 3);
    }
    // overloaded case
    const origin_dep = (0, arrs_1.getArrDepth)(origin);
    const x_vec_dep = (0, arrs_1.getArrDepth)(x_vec);
    const xy_vec_dep = (0, arrs_1.getArrDepth)(xy_vec);
    if (origin_dep === 2 || x_vec_dep === 2) {
        if (x_vec_dep === 1) {
            // only origin is Txyz[]
            return origin.map(origin_val => plnMake(debug, origin_val, x_vec, xy_vec));
        }
        else if (origin_dep === 1) {
            // only x_vec and xy_vec are Txyz[], they must be equal length
            if (xy_vec_dep === 2 && x_vec.length === xy_vec.length) {
                const vecs = [];
                for (let i = 0; i < origin.length; i++) {
                    vecs.push(plnMake(debug, origin, x_vec[i], xy_vec[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error making planes with lists of vectors: The x_vec and xy_vec lists must be of equal length.');
            }
        }
        else {
            // all origin, x_vec and xy_vec are Txyz[], they must be equal length
            if (origin.length === x_vec.length && origin.length === xy_vec.length) {
                const vecs = [];
                for (let i = 0; i < origin.length; i++) {
                    vecs.push(plnMake(debug, origin[i], x_vec[i], xy_vec[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error making planes with lists of vectors: The three lists must be of equal length.');
            }
        }
    }
    // normal case, both origin and x_vec and xy_vec are Txyz
    const x_axis = (0, vectors_1.vecNorm)(x_vec);
    const y_axis = (0, vectors_1.vecNorm)((0, vectors_1.vecMakeOrtho)(xy_vec, x_vec));
    return [origin.slice(), x_axis, y_axis];
}
exports.plnMake = plnMake;
/**
 * Make a copy of the plane "p"
 * @param pln
 */
function plnCopy(debug, pln) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('plnCopy', arguments, 1);
    }
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    if (pln_dep === 3) {
        return pln.map(pln_one => plnCopy(debug, pln_one));
    }
    // normal case
    pln = pln;
    return [pln[0].slice(), pln[1].slice(), pln[2].slice()];
}
exports.plnCopy = plnCopy;
/**
 * Move the plane "p" relative to the global X, Y, and Z axes, by vector "v".
 * @param pln
 * @param vec
 */
function plnMove(debug, pln, vec) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('plnMove', arguments, 2);
    }
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const vec_dep = (0, arrs_1.getArrDepth)(vec);
    if (pln_dep === 3) {
        pln = pln;
        if (vec_dep === 1) {
            vec = vec;
            return pln.map(pln_one => plnMove(debug, pln_one, vec));
        }
        else if (vec_dep === 2 && pln.length === vec.length) {
            vec = vec;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnMove(debug, pln[i], vec[i]));
            }
        }
        else {
            throw new Error('Error moving a list planes with a list of vectors: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln;
    vec = vec;
    return [(0, vectors_1.vecAdd)(pln[0], vec), pln[1].slice(), pln[2].slice()];
}
exports.plnMove = plnMove;
/**
 * Rotate the plane "p" around the ray "r", by angle "a" (in radians).
 * @param pln
 * @param ray
 * @param ang
 */
function plnRot(debug, pln, ray, ang) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('plnRot', arguments, 3);
    }
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (pln_dep === 3) {
        pln = pln;
        if (ray_dep === 2 && ang_dep === 0) {
            ray = ray;
            ang = ang;
            return pln.map(pln_one => plnRot(debug, pln_one, ray, ang));
        }
        else if (ray_dep === 3 && ang_dep === 1 && pln.length === ray.length && pln.length === ang.length) {
            ray = ray;
            ang = ang;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnRot(debug, pln[i], ray[i], ang[i]));
            }
            return planes;
        }
        else {
            throw new Error('Error rotating a list planes with a list of rays and angles: The three lists must be of equal length.');
        }
    }
    // normal case
    pln = pln;
    ray = ray;
    ang = ang;
    const from_ray_o_to_pln_o = (0, vectors_1.vecFromTo)(ray[0], pln[0]);
    const rot_pln_origin = (0, vectors_1.vecAdd)(ray[0], (0, vectors_1.vecRot)(from_ray_o_to_pln_o, ray[1], ang));
    return [rot_pln_origin, (0, vectors_1.vecRot)(pln[1], ray[1], ang), (0, vectors_1.vecRot)(pln[2], ray[1], ang)];
}
exports.plnRot = plnRot;
/**
 * Move the plane "p" relative to the local X, Y, and Z axes, by vector "v".
 * @param pln
 * @param vec
 */
function plnLMove(debug, pln, vec) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('plnLMake', arguments, 2);
    }
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const vec_dep = (0, arrs_1.getArrDepth)(vec);
    if (pln_dep === 3) {
        pln = pln;
        if (vec_dep === 1) {
            vec = vec;
            return pln.map(pln_one => plnMove(debug, pln_one, vec));
        }
        else if (vec_dep === 2 && pln.length === vec.length) {
            vec = vec;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnMove(debug, pln[i], vec[i]));
            }
        }
        else {
            throw new Error('Error moving a list planes with a list of vectors: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln;
    vec = vec;
    const z_vec = (0, vectors_1.vecCross)(pln[1], pln[2]);
    const x_move_vec = (0, vectors_1.vecMult)(pln[1], vec[0]);
    const y_move_vec = (0, vectors_1.vecMult)(pln[2], vec[1]);
    const z_move_vec = (0, vectors_1.vecMult)(z_vec, vec[2]);
    const origin = (0, vectors_1.vecsAdd)([pln[0], x_move_vec, y_move_vec, z_move_vec], false);
    return [origin, pln[1].slice(), pln[2].slice()];
}
exports.plnLMove = plnLMove;
/**
 * Rotate the plane "p" around the local X axis, by angle "a" (in radians).
 * @param pln
 * @param ang
 */
function plnLRotX(debug, pln, ang) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('plnLRotX', arguments, 2);
    }
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (pln_dep === 3) {
        pln = pln;
        if (ang_dep === 0) {
            // many pln, one ang
            ang = ang;
            return pln.map(pln_one => plnLRotX(debug, pln_one, ang));
        }
        else if (ang_dep === 12 && pln.length === ang.length) {
            // many pln, many ang
            ang = ang;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnLRotX(debug, pln[i], ang[i]));
            }
            return planes;
        }
        else {
            throw new Error('Error rotating a list planes with a list of angles: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln;
    ang = ang;
    const y_axis = (0, vectors_1.vecRot)(pln[2], pln[1], ang);
    return [pln[0].slice(), pln[1].slice(), y_axis];
}
exports.plnLRotX = plnLRotX;
/**
 * Rotate the plane "p" around the local Y axis, by angle "a" (in radians).
 * @param pln
 * @param ang
 */
function plnLRotY(debug, pln, ang) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('plnLRotY', arguments, 2);
    }
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (pln_dep === 3) {
        pln = pln;
        if (ang_dep === 0) {
            // many pln, one ang
            ang = ang;
            return pln.map(pln_one => plnLRotY(debug, pln_one, ang));
        }
        else if (ang_dep === 1 && pln.length === ang.length) {
            // many pln, many ang
            ang = ang;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnLRotY(debug, pln[i], ang[i]));
            }
            return planes;
        }
        else {
            throw new Error('Error rotating a list planes with a list of angles: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln;
    ang = ang;
    const x_axis = (0, vectors_1.vecRot)(pln[1], pln[2], ang);
    return [pln[0].slice(), x_axis, pln[2].slice()];
}
exports.plnLRotY = plnLRotY;
/**
 * Rotate the plane "p" around the local Z axis, by angle "a" (in radians).
 * @param pln
 * @param ang
 */
function plnLRotZ(debug, pln, ang) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('plnLRotZ', arguments, 2);
    }
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (pln_dep === 3) {
        pln = pln;
        if (ang_dep === 0) {
            // many pln, one ang
            ang = ang;
            return pln.map(pln_one => plnLRotZ(debug, pln_one, ang));
        }
        else if (ang_dep === 1 && pln.length === ang.length) {
            // many pln, many ang
            ang = ang;
            const planes = [];
            for (let i = 0; i < pln.length; i++) {
                planes.push(plnLRotZ(debug, pln[i], ang[i]));
            }
            return planes;
        }
        else {
            throw new Error('Error rotating a list planes with a list of angles: The two lists must be of equal length.');
        }
    }
    // normal case
    pln = pln;
    ang = ang;
    const z_vec = (0, vectors_1.vecCross)(pln[1], pln[2]);
    const x_axis = (0, vectors_1.vecRot)(pln[1], z_vec, ang);
    const y_axis = (0, vectors_1.vecRot)(pln[2], z_vec, ang);
    return [pln[0].slice(), x_axis, y_axis];
}
exports.plnLRotZ = plnLRotZ;
/**
 * Generate a plane from a ray...
 * @param ray
 */
function plnFromRay(debug, ray) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('plnFromRay', arguments, 1);
    }
    // overloaded case
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    if (ray_dep === 3) {
        return ray.map(ray_one => plnFromRay(debug, ray_one));
    }
    // normal case
    ray = ray;
    const z_vec = (0, vectors_1.vecNorm)(ray[1]);
    let vec = [0, 0, 1];
    if ((0, vectors_1.vecDot)(vec, z_vec) === 1) {
        vec = [1, 0, 0];
    }
    const x_axis = (0, vectors_1.vecCross)(vec, z_vec);
    const y_axis = (0, vectors_1.vecCross)(x_axis, z_vec);
    return [ray[0].slice(), x_axis, y_axis];
}
exports.plnFromRay = plnFromRay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5saW5lL3BsYW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVNBLDZDQUF1SDtBQUN2SCx1Q0FBMkM7QUFDM0MsOERBQXFEO0FBR3JEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFDLEtBQWMsRUFBRSxNQUFtQixFQUFFLEtBQWtCLEVBQUUsTUFBbUI7SUFDaEcsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUNELGtCQUFrQjtJQUNsQixNQUFNLFVBQVUsR0FBVyxJQUFBLGtCQUFXLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsTUFBTSxTQUFTLEdBQVcsSUFBQSxrQkFBVyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLE1BQU0sVUFBVSxHQUFXLElBQUEsa0JBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxJQUFJLFVBQVUsS0FBSyxDQUFDLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtRQUNyQyxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDakIsd0JBQXdCO1lBQ3hCLE9BQVEsTUFBaUIsQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQWtCLEVBQUUsS0FBYSxFQUFFLE1BQWMsQ0FBVyxDQUFDLENBQUM7U0FDN0g7YUFBTSxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDekIsOERBQThEO1lBQzlELElBQUksVUFBVSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BELE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztnQkFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVB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