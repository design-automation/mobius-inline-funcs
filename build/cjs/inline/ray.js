"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayClass = exports.rayGtoL = exports.rayLtoG = exports.rayFromPln = exports.rayLMove = exports.rayRot = exports.rayMove = exports.rayCopy = exports.rayFromTo = exports.rayMake = void 0;
const _check_inline_args_1 = require("../_check_inline_args");
const arrs_1 = require("../libs/arrs");
const matrix_1 = require("../libs/matrix");
const vectors_1 = require("../libs/vectors");
/**
 * Creates a ray from an origin "o" and a direction vector "d".
 * Creates a ray from an origin "o", a direction vector "d", and length "l".
 * @param origin
 * @param dir
 * @param len
 */
function rayMake(debug, origin, dir, len) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('rayMake', arguments, 3, 2);
    }
    // overloaded case
    const origin_dep = (0, arrs_1.getArrDepth)(origin);
    const dir_dep = (0, arrs_1.getArrDepth)(dir);
    if (origin_dep === 2 || dir_dep === 2) {
        if (dir_dep === 1) {
            // only origin is Txyz[]
            return origin.map(origin_val => rayMake(debug, origin_val, dir, len));
        }
        else if (origin_dep === 1) {
            // only dir is Txyz[]
            return dir.map(dir_val => rayMake(debug, origin, dir_val, len));
        }
        else {
            // both origin and dir are Txyz[], they must be equal length
            if (origin.length === dir.length) {
                const vecs = [];
                for (let i = 0; i < origin.length; i++) {
                    vecs.push(rayMake(debug, origin[i], dir[i], len));
                }
                return vecs;
            }
            else {
                throw new Error('Error making rays with lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both origin and dir are Txyz
    const ray_vec = len ? (0, vectors_1.vecSetLen)(dir, len) : dir;
    return [origin.slice(), ray_vec];
}
exports.rayMake = rayMake;
/**
 * Creates a ray between to points.
 * @param xyz1
 * @param xyz2
 */
function rayFromTo(debug, xyz1, xyz2) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('rayFromTo', arguments, 2);
    }
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(xyz1);
    const depth2 = (0, arrs_1.getArrDepth)(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only xyz1 is Txyz[]
            return xyz1.map(a_xyz1 => [a_xyz1, (0, vectors_1.vecFromTo)(a_xyz1, xyz2)]);
        }
        else if (depth1 === 1) {
            // only xyz2 is Txyz[]
            return xyz2.map(a_xyz2 => [xyz1, (0, vectors_1.vecFromTo)(xyz1, a_xyz2)]);
        }
        else {
            // both xyz1 and xyz2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const rays = [];
                for (let i = 0; i < xyz1.length; i++) {
                    rays.push([xyz1[i], (0, vectors_1.vecFromTo)(xyz1[i], xyz2[i])]);
                }
                return rays;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both xyz1 and xyz2 are Txyz
    return [xyz1, (0, vectors_1.vecFromTo)(xyz1, xyz2)];
}
exports.rayFromTo = rayFromTo;
/**
 * Make a copy of the ray "r"
 * @param ray
 */
function rayCopy(debug, ray) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('rayCopy', arguments, 1);
    }
    // overloaded case
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    if (ray_dep === 3) {
        return ray.map(ray_one => rayCopy(debug, ray_one));
    }
    // normal case
    return [ray[0].slice(), ray[1].slice()];
}
exports.rayCopy = rayCopy;
/**
 * Move the ray "r" relative to the global X, Y, and Z axes, by vector "v".
 * @param ray
 * @param vec
 */
function rayMove(debug, ray, vec) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('rayMove', arguments, 2);
    }
    // overloaded case
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    const vec_dep = (0, arrs_1.getArrDepth)(vec);
    if (ray_dep === 3) {
        ray = ray;
        if (vec_dep === 1) {
            vec = vec;
            return ray.map(ray_one => rayMove(debug, ray_one, vec));
        }
        else if (vec_dep === 2 && ray.length === vec.length) {
            vec = vec;
            const rays = [];
            for (let i = 0; i < ray.length; i++) {
                rays.push(rayMove(debug, ray[i], vec[i]));
            }
        }
        else {
            throw new Error('Error moving a list rays with a list of vectors: The two lists must be of equal length.');
        }
    }
    // normal case
    ray = ray;
    vec = vec;
    return [(0, vectors_1.vecAdd)(ray[0], vec), ray[1].slice()];
}
exports.rayMove = rayMove;
/**
 * Rotate the ray "r1" around the ray "r2", by angle "a" (in radians).
 * @param ray1
 * @param ray2
 * @param ang
 */
function rayRot(debug, ray1, ray2, ang) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('rayRot', arguments, 3);
    }
    // overloaded case
    const ray1_dep = (0, arrs_1.getArrDepth)(ray1);
    const ray2_dep = (0, arrs_1.getArrDepth)(ray2);
    const ang_dep = (0, arrs_1.getArrDepth)(ang);
    if (ray1_dep === 3) {
        ray1 = ray1;
        if (ray2_dep === 2 && ang_dep === 0) {
            ray2 = ray2;
            ang = ang;
            return ray1.map(ray1_one => rayRot(debug, ray1_one, ray2, ang));
        }
        else if (ray2_dep === 3 && ang_dep === 1 && ray1.length === ray2.length && ray1.length === ang.length) {
            ray2 = ray2;
            ang = ang;
            const rays = [];
            for (let i = 0; i < ray1.length; i++) {
                rays.push(rayRot(debug, ray1[i], ray2[i], ang[i]));
            }
            return rays;
        }
        else {
            throw new Error('Error rotating a list planes with a list of ray2s and angles: The three lists must be of equal length.');
        }
    }
    // normal case
    ray1 = ray1;
    ray2 = ray2;
    ang = ang;
    const from_ray2_o_to_ray1_o = (0, vectors_1.vecFromTo)(ray2[0], ray1[0]);
    const rot_ray1_origin = (0, vectors_1.vecAdd)(ray2[0], (0, vectors_1.vecRot)(from_ray2_o_to_ray1_o, ray2[1], ang));
    return [rot_ray1_origin, (0, vectors_1.vecRot)(ray1[1], ray2[1], ang)];
}
exports.rayRot = rayRot;
/**
 * Move the ray "r" relative to the ray direction vector, by distance "d".
 * @param ray
 * @param dist
 */
function rayLMove(debug, ray, dist) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('rayLMove', arguments, 2);
    }
    // overloaded case
    const ray_dep = (0, arrs_1.getArrDepth)(ray);
    const dist_dep = (0, arrs_1.getArrDepth)(dist);
    if (ray_dep === 3) {
        ray = ray;
        if (dist_dep === 0) {
            dist = dist;
            return ray.map(ray_one => rayLMove(debug, ray_one, dist));
        }
        else if (dist_dep === 1 && ray.length === dist.length) {
            dist = dist;
            const rays = [];
            for (let i = 0; i < ray.length; i++) {
                rays.push(rayLMove(debug, ray[i], dist[i]));
            }
        }
        else {
            throw new Error('Error moving a list rays with a list of distances: The two lists must be of equal length.');
        }
    }
    // normal case
    ray = ray;
    dist = dist;
    const vec = (0, vectors_1.vecMult)((0, vectors_1.vecNorm)(ray[1]), dist);
    return [(0, vectors_1.vecAdd)(ray[0], vec), ray[1].slice()];
}
exports.rayLMove = rayLMove;
/**
 * Create a ray from a plane "p", with the same origin and with a direction along the plane z axis.
 * @param pln
 */
function rayFromPln(debug, pln) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('rayFromPln', arguments, 1);
    }
    // overloaded case
    const pln_dep = (0, arrs_1.getArrDepth)(pln);
    if (pln_dep === 3) {
        return pln.map(pln_one => rayFromPln(debug, pln_one));
    }
    // normal case
    pln = pln;
    return [pln[0].slice(), (0, vectors_1.vecCross)(pln[1], pln[2])];
}
exports.rayFromPln = rayFromPln;
/**
 * Transforms a ray from a local coordinate system define by plane "p" to the global coordinate system.
 * @param r
 * @param p
 */
function rayLtoG(debug, r, p) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('rayLtoG', arguments, 2);
    }
    return _rayXForm(debug, r, p, true);
}
exports.rayLtoG = rayLtoG;
/**
 * Transforms a ray from the global coordinate system to a local coordinate system define by plane "p".
 * @param r
 * @param p
 */
function rayGtoL(debug, r, p) {
    if (debug) {
        (0, _check_inline_args_1.checkNumArgs)('rayGtoL', arguments, 2);
    }
    return _rayXForm(debug, r, p, false);
}
exports.rayGtoL = rayGtoL;
function _rayXForm(debug, r, p, to_global) {
    // overloaded case
    const depth1 = (0, arrs_1.getArrDepth)(r);
    const depth2 = (0, arrs_1.getArrDepth)(p);
    if (depth1 === 2 && depth2 === 2) {
        // r is TRay and p is TPlane
        r = r;
        p = p;
        const p2 = [[0, 0, 0], p[1], p[2]];
        const origin = (0, matrix_1.multMatrix)(r[0], (0, matrix_1.xformMatrix)(p, to_global));
        const dir = (0, matrix_1.multMatrix)(r[1], (0, matrix_1.xformMatrix)(p2, to_global));
        return [origin, dir];
    }
    else if (depth1 === 3 && depth2 === 2) {
        // r is TRay[] and p is TPlane
        r = r;
        p = p;
        const p2 = [[0, 0, 0], p[1], p[2]];
        const m = (0, matrix_1.xformMatrix)(p, to_global);
        const m2 = (0, matrix_1.xformMatrix)(p2, to_global);
        const result = [];
        for (const a_r of r) {
            const origin = (0, matrix_1.multMatrix)(a_r[0], m);
            const dir = (0, matrix_1.multMatrix)(a_r[1], m2);
            result.push([origin, dir]);
        }
        return result;
    }
    else if (depth1 === 2 && depth2 === 3) {
        // r is TRay and p is TPlane[]
        r = r;
        p = p;
        const result = [];
        for (const a_p of p) {
            const p2 = [[0, 0, 0], a_p[1], a_p[2]];
            const origin = (0, matrix_1.multMatrix)(r[0], (0, matrix_1.xformMatrix)(a_p, to_global));
            const dir = (0, matrix_1.multMatrix)(r[1], (0, matrix_1.xformMatrix)(p2, to_global));
            result.push([origin, dir]);
        }
        return result;
    }
    else if (depth1 === 3 && depth2 === 3) {
        // r is TRay[] p is TPlane[], they must be equal length
        r = r;
        p = p;
        if (r.length !== p.length) {
            throw new Error('Error transforming rays: The list of rays and list of planes must be of equal length.');
        }
        const result = [];
        for (let i = 0; i < r.length; i++) {
            const p2 = [[0, 0, 0], p[i][1], p[i][2]];
            const origin = (0, matrix_1.multMatrix)(r[i][0], (0, matrix_1.xformMatrix)(p[i], to_global));
            const dir = (0, matrix_1.multMatrix)(r[i][1], (0, matrix_1.xformMatrix)(p2, to_global));
            result.push([origin, dir]);
        }
        return result;
    }
    throw new Error('Error transforming rays: Cannot process the input lists.');
}
class rayClass {
    constructor(debug) {
        this.__debug__ = debug;
    }
    rayMake(origin, dir, len) {
        return rayMake(this.__debug__, origin, dir, len);
    }
    rayFromTo(xyz1, xyz2) {
        return rayFromTo(this.__debug__, xyz1, xyz2);
    }
    rayCopy(ray) {
        return rayCopy(this.__debug__, ray);
    }
    rayMove(ray, vec) {
        return rayMove(this.__debug__, ray, vec);
    }
    rayRot(ray1, ray2, ang) {
        return rayRot(this.__debug__, ray1, ray2, ang);
    }
    rayLMove(ray, dist) {
        return rayLMove(this.__debug__, ray, dist);
    }
    rayFromPln(pln) {
        return rayFromPln(this.__debug__, pln);
    }
    rayLtoG(r, p) {
        return rayLtoG(this.__debug__, r, p);
    }
    rayGtoL(r, p) {
        return rayGtoL(this.__debug__, r, p);
    }
}
exports.rayClass = rayClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS9yYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQXFEO0FBQ3JELHVDQUEyQztBQUUzQywyQ0FBeUQ7QUFDekQsNkNBQW1HO0FBRW5HOzs7Ozs7R0FNRztBQUNILFNBQWdCLE9BQU8sQ0FBQyxLQUFjLEVBQUUsTUFBbUIsRUFBRSxHQUFnQixFQUFFLEdBQVk7SUFDdkYsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFBLGlDQUFZLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDNUM7SUFDRCxrQkFBa0I7SUFDbEIsTUFBTSxVQUFVLEdBQVcsSUFBQSxrQkFBVyxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLE1BQU0sT0FBTyxHQUFXLElBQUEsa0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxJQUFJLFVBQVUsS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUNuQyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDZix3QkFBd0I7WUFDeEIsT0FBUSxNQUFpQixDQUFDLEdBQUcsQ0FBRSxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBa0IsRUFBRSxHQUFXLEVBQUUsR0FBRyxDQUFTLENBQUMsQ0FBQztTQUM5RzthQUFNLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN6QixxQkFBcUI7WUFDckIsT0FBUSxHQUFjLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFjLEVBQUUsT0FBZSxFQUFFLEdBQUcsQ0FBUyxDQUFDLENBQUM7U0FDeEc7YUFBTTtZQUNILDREQUE0RDtZQUM1RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsTUFBTSxJ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