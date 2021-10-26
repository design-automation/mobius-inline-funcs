import { vecCross, vecMult, vecsAdd, vecRot, vecNorm, vecMakeOrtho, vecAdd, vecFromTo, vecDot } from '@design-automation/mobius-sim/dist/geom/vectors';
import { getArrDepth } from '@design-automation/mobius-sim/dist/util/arrs';
import { checkNumArgs } from '../_check_inline_args';
/**
 * Creates a plane from an origin "o", an "x" axis vector, and any other vector in the "xy" plane.
 * @param origin
 * @param x_vec
 * @param xy_vec
 */
export function plnMake(debug, origin, x_vec, xy_vec) {
    if (debug) {
        checkNumArgs('plnMake', arguments, 3);
    }
    // overloaded case
    const origin_dep = getArrDepth(origin);
    const x_vec_dep = getArrDepth(x_vec);
    const xy_vec_dep = getArrDepth(xy_vec);
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
    const x_axis = vecNorm(x_vec);
    const y_axis = vecNorm(vecMakeOrtho(xy_vec, x_vec));
    return [origin.slice(), x_axis, y_axis];
}
/**
 * Make a copy of the plane "p"
 * @param pln
 */
export function plnCopy(debug, pln) {
    if (debug) {
        checkNumArgs('plnCopy', arguments, 1);
    }
    // overloaded case
    const pln_dep = getArrDepth(pln);
    if (pln_dep === 3) {
        return pln.map(pln_one => plnCopy(debug, pln_one));
    }
    // normal case
    pln = pln;
    return [pln[0].slice(), pln[1].slice(), pln[2].slice()];
}
/**
 * Move the plane "p" relative to the global X, Y, and Z axes, by vector "v".
 * @param pln
 * @param vec
 */
export function plnMove(debug, pln, vec) {
    if (debug) {
        checkNumArgs('plnMove', arguments, 2);
    }
    // overloaded case
    const pln_dep = getArrDepth(pln);
    const vec_dep = getArrDepth(vec);
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
    return [vecAdd(pln[0], vec), pln[1].slice(), pln[2].slice()];
}
/**
 * Rotate the plane "p" around the ray "r", by angle "a" (in radians).
 * @param pln
 * @param ray
 * @param ang
 */
export function plnRot(debug, pln, ray, ang) {
    if (debug) {
        checkNumArgs('plnRot', arguments, 3);
    }
    // overloaded case
    const pln_dep = getArrDepth(pln);
    const ray_dep = getArrDepth(ray);
    const ang_dep = getArrDepth(ang);
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
    const from_ray_o_to_pln_o = vecFromTo(ray[0], pln[0]);
    const rot_pln_origin = vecAdd(ray[0], vecRot(from_ray_o_to_pln_o, ray[1], ang));
    return [rot_pln_origin, vecRot(pln[1], ray[1], ang), vecRot(pln[2], ray[1], ang)];
}
/**
 * Move the plane "p" relative to the local X, Y, and Z axes, by vector "v".
 * @param pln
 * @param vec
 */
export function plnLMove(debug, pln, vec) {
    if (debug) {
        checkNumArgs('plnLMake', arguments, 2);
    }
    // overloaded case
    const pln_dep = getArrDepth(pln);
    const vec_dep = getArrDepth(vec);
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
    const z_vec = vecCross(pln[1], pln[2]);
    const x_move_vec = vecMult(pln[1], vec[0]);
    const y_move_vec = vecMult(pln[2], vec[1]);
    const z_move_vec = vecMult(z_vec, vec[2]);
    const origin = vecsAdd([pln[0], x_move_vec, y_move_vec, z_move_vec], false);
    return [origin, pln[1].slice(), pln[2].slice()];
}
/**
 * Rotate the plane "p" around the local X axis, by angle "a" (in radians).
 * @param pln
 * @param ang
 */
export function plnLRotX(debug, pln, ang) {
    if (debug) {
        checkNumArgs('plnLRotX', arguments, 2);
    }
    // overloaded case
    const pln_dep = getArrDepth(pln);
    const ang_dep = getArrDepth(ang);
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
    const y_axis = vecRot(pln[2], pln[1], ang);
    return [pln[0].slice(), pln[1].slice(), y_axis];
}
/**
 * Rotate the plane "p" around the local Y axis, by angle "a" (in radians).
 * @param pln
 * @param ang
 */
export function plnLRotY(debug, pln, ang) {
    if (debug) {
        checkNumArgs('plnLRotY', arguments, 2);
    }
    // overloaded case
    const pln_dep = getArrDepth(pln);
    const ang_dep = getArrDepth(ang);
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
    const x_axis = vecRot(pln[1], pln[2], ang);
    return [pln[0].slice(), x_axis, pln[2].slice()];
}
/**
 * Rotate the plane "p" around the local Z axis, by angle "a" (in radians).
 * @param pln
 * @param ang
 */
export function plnLRotZ(debug, pln, ang) {
    if (debug) {
        checkNumArgs('plnLRotZ', arguments, 2);
    }
    // overloaded case
    const pln_dep = getArrDepth(pln);
    const ang_dep = getArrDepth(ang);
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
    const z_vec = vecCross(pln[1], pln[2]);
    const x_axis = vecRot(pln[1], z_vec, ang);
    const y_axis = vecRot(pln[2], z_vec, ang);
    return [pln[0].slice(), x_axis, y_axis];
}
/**
 * Generate a plane from a ray...
 * @param ray
 */
export function plnFromRay(debug, ray) {
    if (debug) {
        checkNumArgs('plnFromRay', arguments, 1);
    }
    // overloaded case
    const ray_dep = getArrDepth(ray);
    if (ray_dep === 3) {
        return ray.map(ray_one => plnFromRay(debug, ray_one));
    }
    // normal case
    ray = ray;
    const z_vec = vecNorm(ray[1]);
    let vec = [0, 0, 1];
    if (vecDot(vec, z_vec) === 1) {
        vec = [1, 0, 0];
    }
    const x_axis = vecCross(vec, z_vec);
    const y_axis = vecCross(x_axis, z_vec);
    return [ray[0].slice(), x_axis, y_axis];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3BsYW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2lubGluZS9fcGxhbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkosT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdyRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYyxFQUFFLE1BQW1CLEVBQUUsS0FBa0IsRUFBRSxNQUFtQjtJQUNoRyxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0Qsa0JBQWtCO0lBQ2xCLE1BQU0sVUFBVSxHQUFXLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxNQUFNLFNBQVMsR0FBVyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsTUFBTSxVQUFVLEdBQVcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLElBQUksVUFBVSxLQUFLLENBQUMsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO1FBQ3JDLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtZQUNqQix3QkFBd0I7WUFDeEIsT0FBUSxNQUFpQixDQUFDLEdBQUcsQ0FBRSxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBa0IsRUFBRSxLQUFhLEVBQUUsTUFBYyxDQUFXLENBQUMsQ0FBQztTQUM3SDthQUFNLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN6Qiw4REFBOEQ7WUFDOUQsSUFBSSxVQUFVLEtB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