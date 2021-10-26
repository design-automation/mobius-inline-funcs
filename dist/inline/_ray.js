import { vecCross, vecMult, vecSetLen, vecNorm, vecAdd, vecRot, vecFromTo } from '@design-automation/mobius-sim/dist/geom/vectors';
import { getArrDepth } from '@design-automation/mobius-sim/dist/util/arrs';
import { multMatrix, xformMatrix } from '@design-automation/mobius-sim/dist/geom/matrix';
import { checkNumArgs } from '../_check_inline_args';
/**
 * Creates a ray from an origin "o" and a direction vector "d".
 * Creates a ray from an origin "o", a direction vector "d", and length "l".
 * @param origin
 * @param dir
 * @param len
 */
export function rayMake(debug, origin, dir, len) {
    if (debug) {
        checkNumArgs('rayMake', arguments, 3, 2);
    }
    // overloaded case
    const origin_dep = getArrDepth(origin);
    const dir_dep = getArrDepth(dir);
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
    const ray_vec = len ? vecSetLen(dir, len) : dir;
    return [origin.slice(), ray_vec];
}
/**
 * Creates a ray between to points.
 * @param xyz1
 * @param xyz2
 */
export function rayFromTo(debug, xyz1, xyz2) {
    if (debug) {
        checkNumArgs('rayFromTo', arguments, 2);
    }
    // overloaded case
    const depth1 = getArrDepth(xyz1);
    const depth2 = getArrDepth(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only xyz1 is Txyz[]
            return xyz1.map(a_xyz1 => [a_xyz1, vecFromTo(a_xyz1, xyz2)]);
        }
        else if (depth1 === 1) {
            // only xyz2 is Txyz[]
            return xyz2.map(a_xyz2 => [xyz1, vecFromTo(xyz1, a_xyz2)]);
        }
        else {
            // both xyz1 and xyz2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const rays = [];
                for (let i = 0; i < xyz1.length; i++) {
                    rays.push([xyz1[i], vecFromTo(xyz1[i], xyz2[i])]);
                }
                return rays;
            }
            else {
                throw new Error('Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both xyz1 and xyz2 are Txyz
    return [xyz1, vecFromTo(xyz1, xyz2)];
}
/**
 * Make a copy of the ray "r"
 * @param ray
 */
export function rayCopy(debug, ray) {
    if (debug) {
        checkNumArgs('rayCopy', arguments, 1);
    }
    // overloaded case
    const ray_dep = getArrDepth(ray);
    if (ray_dep === 3) {
        return ray.map(ray_one => rayCopy(debug, ray_one));
    }
    // normal case
    return [ray[0].slice(), ray[1].slice()];
}
/**
 * Move the ray "r" relative to the global X, Y, and Z axes, by vector "v".
 * @param ray
 * @param vec
 */
export function rayMove(debug, ray, vec) {
    if (debug) {
        checkNumArgs('rayMove', arguments, 2);
    }
    // overloaded case
    const ray_dep = getArrDepth(ray);
    const vec_dep = getArrDepth(vec);
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
    return [vecAdd(ray[0], vec), ray[1].slice()];
}
/**
 * Rotate the ray "r1" around the ray "r2", by angle "a" (in radians).
 * @param ray1
 * @param ray2
 * @param ang
 */
export function rayRot(debug, ray1, ray2, ang) {
    if (debug) {
        checkNumArgs('rayRot', arguments, 3);
    }
    // overloaded case
    const ray1_dep = getArrDepth(ray1);
    const ray2_dep = getArrDepth(ray2);
    const ang_dep = getArrDepth(ang);
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
    const from_ray2_o_to_ray1_o = vecFromTo(ray2[0], ray1[0]);
    const rot_ray1_origin = vecAdd(ray2[0], vecRot(from_ray2_o_to_ray1_o, ray2[1], ang));
    return [rot_ray1_origin, vecRot(ray1[1], ray2[1], ang)];
}
/**
 * Move the ray "r" relative to the ray direction vector, by distance "d".
 * @param ray
 * @param dist
 */
export function rayLMove(debug, ray, dist) {
    if (debug) {
        checkNumArgs('rayLMove', arguments, 2);
    }
    // overloaded case
    const ray_dep = getArrDepth(ray);
    const dist_dep = getArrDepth(dist);
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
    const vec = vecMult(vecNorm(ray[1]), dist);
    return [vecAdd(ray[0], vec), ray[1].slice()];
}
/**
 * Create a ray from a plane "p", with the same origin and with a direction along the plane z axis.
 * @param pln
 */
export function rayFromPln(debug, pln) {
    if (debug) {
        checkNumArgs('rayFromPln', arguments, 1);
    }
    // overloaded case
    const pln_dep = getArrDepth(pln);
    if (pln_dep === 3) {
        return pln.map(pln_one => rayFromPln(debug, pln_one));
    }
    // normal case
    pln = pln;
    return [pln[0].slice(), vecCross(pln[1], pln[2])];
}
/**
 * Transforms a ray from a local coordinate system define by plane "p" to the global coordinate system.
 * @param r
 * @param p
 */
export function rayLtoG(debug, r, p) {
    if (debug) {
        checkNumArgs('rayLtoG', arguments, 2);
    }
    return _rayXForm(debug, r, p, true);
}
/**
 * Transforms a ray from the global coordinate system to a local coordinate system define by plane "p".
 * @param r
 * @param p
 */
export function rayGtoL(debug, r, p) {
    if (debug) {
        checkNumArgs('rayGtoL', arguments, 2);
    }
    return _rayXForm(debug, r, p, false);
}
function _rayXForm(debug, r, p, to_global) {
    // overloaded case
    const depth1 = getArrDepth(r);
    const depth2 = getArrDepth(p);
    if (depth1 === 2 && depth2 === 2) {
        // r is TRay and p is TPlane
        r = r;
        p = p;
        const p2 = [[0, 0, 0], p[1], p[2]];
        const origin = multMatrix(r[0], xformMatrix(p, to_global));
        const dir = multMatrix(r[1], xformMatrix(p2, to_global));
        return [origin, dir];
    }
    else if (depth1 === 3 && depth2 === 2) {
        // r is TRay[] and p is TPlane
        r = r;
        p = p;
        const p2 = [[0, 0, 0], p[1], p[2]];
        const m = xformMatrix(p, to_global);
        const m2 = xformMatrix(p2, to_global);
        const result = [];
        for (const a_r of r) {
            const origin = multMatrix(a_r[0], m);
            const dir = multMatrix(a_r[1], m2);
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
            const origin = multMatrix(r[0], xformMatrix(a_p, to_global));
            const dir = multMatrix(r[1], xformMatrix(p2, to_global));
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
            const origin = multMatrix(r[i][0], xformMatrix(p[i], to_global));
            const dir = multMatrix(r[i][1], xformMatrix(p2, to_global));
            result.push([origin, dir]);
        }
        return result;
    }
    throw new Error('Error transforming rays: Cannot process the input lists.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3JheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvX3JheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBVyxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFVLE1BQU0saURBQWlELENBQUM7QUFDcEosT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYyxFQUFFLE1BQW1CLEVBQUUsR0FBZ0IsRUFBRSxHQUFZO0lBQ3ZGLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBQ0Qsa0JBQWtCO0lBQ2xCLE1BQU0sVUFBVSxHQUFXLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxVQUFVLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7UUFDbkMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ2Ysd0JBQXdCO1lBQ3hCLE9BQVEsTUFBaUIsQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQWtCLEVBQUUsR0FBVyxFQUFFLEdBQUcsQ0FBUyxDQUFDLENBQUM7U0FDOUc7YUFBTSxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDekIscUJBQXFCO1lBQ3JCLE9BQVEsR0FBYyxDQUFDLEdBQUcsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBYyxFQUFFLE9BQWUsRUFBRSxHQUFHLENBQVMsQ0FBQyxDQUFDO1NBQ3hHO2FBQU07WUFDSCw0REFBNEQ7WUFDNUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSSxHQUFXLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBUyxFQUFFLEdBQUcsQ0FBUyxDQUFFLENBQUM7aUJBQy9FO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO2FBQ3RHO1NBQ0o7S0FDSjtJQUNELDRDQUE0QztJQUM1QyxNQUFNLE9BQU8sR0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQVcsQ0FBQztJQUN0RSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFjLEVBQUUsSUFBaUIsRUFBRSxJQUFpQjtJQUMxRSxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzNDO0lBQ0Qsa0JBQWtCO0lBQ2xCLE1BQU0sTUFBTSxHQUFXLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDOUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2Qsc0JBQXNCO1lBQ3RCLE9BQVEsSUFBZSxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBWSxDQUFDLENBQVMsQ0FBRSxDQUFDO1NBQ3RHO2FBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLHNCQUFzQjtZQUN0QixPQUFRLElBQWUsQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBWSxFQUFFLE1BQWMsQ0FBQyxDQUFTLENBQUUsQ0FBQztTQUNwRzthQUFNO1lBQ0gsMkRBQTJEO1lBQzNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUM3QixNQUFNLElBQUksR0FBVyxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBUyxDQUFDLENBQVMsQ0FBRSxDQUFDO2lCQUMvRTtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQ1gsNEdBQTRHLENBQUMsQ0FBQzthQUNySDtTQUNKO0tBQ0o7SUFDRCwyQ0FBMkM7SUFDM0MsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBWSxFQUFFLElBQVksQ0FBQyxDQUFTLENBQUM7QUFDakUsQ0FBQztBQUNEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYyxFQUFFLEdBQWdCO0lBQ3BELElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekM7SUFDRCxrQkFBa0I7SUFDbEIsTUFBTSxPQUFPLEdBQVcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUFFLE9BQVEsR0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQVcsQ0FBQztLQUFFO0lBQ2hHLGNBQWM7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFjLEVBQUUsR0FBZ0IsRUFBRSxHQUFnQjtJQUN0RSxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0Qsa0JBQWtCO0lBQ2xCLE1BQU0sT0FBTyxHQUFXLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQ2YsR0FBRyxHQUFHLEdBQWEsQ0FBQztRQUNwQixJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDZixHQUFHLEdBQUcsR0FBVyxDQUFDO1lBQ2xCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFXLENBQUM7U0FDckU7YUFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ25ELEdBQUcsR0FBRyxHQUFhLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBUyxDQUFFLENBQUM7YUFDdkQ7U0FDSjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO1NBQzlHO0tBQ0o7SUFDRCxjQUFjO0lBQ2QsR0FBRyxHQUFHLEdBQVcsQ0FBQztJQUNsQixHQUFHLEdBQUcsR0FBVyxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFDRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBYyxFQUFFLElBQWlCLEVBQUUsSUFBaUIsRUFBRSxHQUFvQjtJQUM3RixJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0Qsa0JBQWtCO0lBQ2xCLE1BQU0sUUFBUSxHQUFXLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxNQUFNLFFBQVEsR0FBVyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsTUFBTSxPQUFPLEdBQVcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtRQUNoQixJQUFJLEdBQUcsSUFBYyxDQUFDO1FBQ3RCLElBQUksUUFBUSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksR0FBRyxJQUFZLENBQUM7WUFDcEIsR0FBRyxHQUFHLEdBQWEsQ0FBQztZQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQVcsQ0FBQztTQUM3RTthQUFNLElBQUksUUFBUSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFNLEdBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ25ILElBQUksR0FBRyxJQUFjLENBQUM7WUFDdEIsR0FBRyxHQUFHLEdBQWUsQ0FBQztZQUN0QixNQUFNLElBQUksR0FBVyxFQUFFLENBQUM7WUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBUyxDQUFFLENBQUM7YUFDaEU7WUFDRCxPQUFPLElBQWMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyx3R0FBd0csQ0FBQyxDQUFDO1NBQzdIO0tBQ0o7SUFDRCxjQUFjO0lBQ2QsSUFBSSxHQUFHLElBQVksQ0FBQztJQUNwQixJQUFJLEdBQUcsSUFBWSxDQUFDO0lBQ3BCLEdBQUcsR0FBRyxHQUFhLENBQUM7SUFDcEIsTUFBTSxxQkFBcUIsR0FBUyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sZUFBZSxHQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE9BQU8sQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBQ0Q7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYyxFQUFFLEdBQWdCLEVBQUUsSUFBcUI7SUFDNUUsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQztJQUNELGtCQUFrQjtJQUNsQixNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsTUFBTSxRQUFRLEdBQVcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtRQUNmLEdBQUcsR0FBRyxHQUFhLENBQUM7UUFDcEIsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLElBQUksR0FBRyxJQUFjLENBQUM7WUFDdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQVcsQ0FBQztTQUN2RTthQUFNLElBQUksUUFBUSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFNLElBQWlCLENBQUMsTUFBTSxFQUFFO1lBQ25FLElBQUksR0FBRyxJQUFnQixDQUFDO1lBQ3hCLE1BQU0sSUFBSSxHQUFXLEVBQUUsQ0FBQztZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBRSxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQVMsQ0FBRSxDQUFDO2FBQ3pEO1NBQ0o7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsMkZBQTJGLENBQUMsQ0FBQztTQUNoSDtLQUNKO0lBQ0QsY0FBYztJQUNkLEdBQUcsR0FBRyxHQUFXLENBQUM7SUFDbEIsSUFBSSxHQUFHLElBQWMsQ0FBQztJQUN0QixNQUFNLEdBQUcsR0FBUyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFDRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQWMsRUFBRSxHQUFvQjtJQUMzRCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBQ0Qsa0JBQWtCO0lBQ2xCLE1BQU0sT0FBTyxHQUFXLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7UUFBRSxPQUFRLEdBQWdCLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBWSxDQUFDO0tBQUU7SUFDdkcsY0FBYztJQUNkLEdBQUcsR0FBRyxHQUFhLENBQUM7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUNEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWMsRUFBRSxDQUFjLEVBQUUsQ0FBa0I7SUFDdEUsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUNELE9BQU8sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFjLEVBQUUsQ0FBYyxFQUFFLENBQWtCO0lBQ3RFLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekM7SUFDRCxPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBQ0QsU0FBUyxTQUFTLENBQUMsS0FBYyxFQUFFLENBQWMsRUFBRSxDQUFrQixFQUFFLFNBQWtCO0lBQ3JGLGtCQUFrQjtJQUNsQixNQUFNLE1BQU0sR0FBVyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsTUFBTSxNQUFNLEdBQVcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlCLDRCQUE0QjtRQUM1QixDQUFDLEdBQUcsQ0FBUyxDQUFDO1FBQ2QsQ0FBQyxHQUFHLENBQVcsQ0FBQztRQUNoQixNQUFNLEVBQUUsR0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsTUFBTSxNQUFNLEdBQVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxHQUFHLEdBQVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQVMsQ0FBQztLQUNoQztTQUFNLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JDLDhCQUE4QjtRQUM5QixDQUFDLEdBQUcsQ0FBVyxDQUFDO1FBQ2hCLENBQUMsR0FBRyxDQUFXLENBQUM7UUFDaEIsTUFBTSxFQUFFLEdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUMsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEVBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoRCxNQUFNLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDMUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDakIsTUFBTSxNQUFNLEdBQVMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLEdBQUcsR0FBUyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sTUFBTSxDQUFDO0tBQ2pCO1NBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckMsOEJBQThCO1FBQzlCLENBQUMsR0FBRyxDQUFTLENBQUM7UUFDZCxDQUFDLEdBQUcsQ0FBYSxDQUFDO1FBQ2xCLE1BQU0sTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLEVBQUUsR0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxNQUFNLEdBQVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsTUFBTSxHQUFHLEdBQVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDakI7U0FBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQyx1REFBdUQ7UUFDdkQsQ0FBQyxHQUFHLENBQVcsQ0FBQztRQUNoQixDQUFDLEdBQUcsQ0FBYSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQ1gsdUZBQXVGLENBQUMsQ0FBQztTQUNoRztRQUNELE1BQU0sTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixNQUFNLEVBQUUsR0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxNQUFNLEdBQVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsTUFBTSxHQUFHLEdBQVMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFDRCxNQUFNLElBQUksS0FBSyxDQUNYLDBEQUEwRCxDQUFDLENBQUM7QUFDcEUsQ0FBQyJ9