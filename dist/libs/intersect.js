"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectCoordOntoPlane = exports.projectCoordOntoRay = exports.project = exports.intersectRayPlane = exports.intersectRayRay = exports.intersect = void 0;
const vectors_1 = require("./vectors");
function intersect(r1, r2, met = 2) {
    // function isInRange(num: number, range: [number, number]) {
    //     const range2: [number, number] = range[0] < range[1] ? range : [range[1], range[0]];
    //     if ((num < range2[0]) || (num > range2[1])) { return false; }
    //     return true;
    // }
    // // TODO
    // // This has problems with rounding errors
    // // Especially when lines are orthogonal
    // function isOnLineSegment(coord: Txyz, start: Txyz, end: Txyz): boolean {
    //     const x_range: [number, number] = [start[0], end[0]];
    //     if (!isInRange(coord[0], x_range)) { return false; }
    //     const y_range: [number, number] = [start[1], end[1]];
    //     if (!isInRange(coord[1], y_range)) { return false; }
    //     const z_range: [number, number] = [start[2], end[2]];
    //     if (!isInRange(coord[2], z_range)) { return false; }
    //     return true;
    // }
    // // TODO
    // // This has problems with rounding errors
    // // Especially when lines are orthogonal
    // function isOnRay(coord: Txyz, start: Txyz, end: Txyz): boolean {
    //     const x_range: [number, number] = [start[0], null];
    //     x_range[1] = start[0] === end[0] ? end[0] : start[0] < end[0] ? Infinity : -Infinity;
    //     if (!isInRange(coord[0], x_range)) { return false; }
    //     const y_range: [number, number] = [start[1], null];
    //     y_range[1] = start[1] === end[1] ? end[1] : start[1] < end[1] ? Infinity : -Infinity;
    //     if (!isInRange(coord[1], y_range)) { return false; }
    //     const z_range: [number, number] = [start[2], null];
    //     z_range[1] = start[2] === end[2] ? end[2] : start[2] < end[2] ? Infinity : -Infinity;
    //     if (!isInRange(coord[2], z_range)) { return false; }
    //     return true;
    // }
    if (r2.length === 2) {
        return intersectRayRay(r1, r2, met);
        // const p0: Txyz = r1[0];
        // const p1: Txyz = vecAdd(r1[0], r1[1]);
        // const p2: Txyz = r2[0];
        // const p3: Txyz = vecAdd(r2[0], r2[1]);
        // const isect: Txyz = mathjs.intersect(p0, p1, p2, p3 );
        // if (isect) {
        //     if (met === 2)  {
        //         return isect;
        //     } else if (met === 1) {
        //         if (isOnRay(isect, p0, p1) && isOnRay(isect, p2, p3)) { return isect; }
        //     } else if (met === 0) {
        //         if (isOnLineSegment(isect, p0, p1) && isOnLineSegment(isect, p2, p3)) { return isect; }
        //     } else {
        //         throw new Error('Error calculating intersection. Intersection method not valid. Must be 0, 1, or 2.');
        //     }
        // }
        // return null;
    }
    else if (r2.length === 3) {
        return intersectRayPlane(r1, r2, met);
        // const p0: Txyz = r1[0];
        // const p1: Txyz = vecAdd(r1[0], r1[1]);
        // const [a, b, c]: Txyz = vecCross(r2[1], r2[2]);
        // const [x1, y1, z1]: Txyz = r2[0];
        // const d: number = a * x1 + b * y1 + c * z1;
        // const isect: Txyz = mathjs.intersect(r1[0], vecAdd(r1[0], r1[1]), [a, b, c, d] );
        // if (isect) {
        //     if (met === 2)  {
        //         return isect;
        //     } else if (met === 1) {
        //         if (isOnRay(isect, p0, p1)) { return isect; }
        //     } else if (met === 0) {
        //         if (isOnLineSegment(isect, p0, p1)) { return isect; }
        //     } else {
        //         throw new Error('Error calculating intersection. Intersection method not valid. Must be 0, 1, or 2.');
        //     }
        // }
        // return null;
    }
    else {
        throw new Error('Error calculating intersection. Elements to intersect must be either rays or planes.');
    }
}
exports.intersect = intersect;
function intersectRayRay(r1, r2, met) {
    const dc = (0, vectors_1.vecFromTo)(r1[0], r2[0]);
    const da = r1[1];
    const db = r2[1];
    if ((0, vectors_1.vecDot)(dc, (0, vectors_1.vecCross)(da, db)) !== 0) {
        return null;
    }
    const da_x_db = (0, vectors_1.vecCross)(da, db);
    const da_x_db_norm2 = (da_x_db[0] * da_x_db[0]) + (da_x_db[1] * da_x_db[1]) + (da_x_db[2] * da_x_db[2]);
    if (da_x_db_norm2 === 0) {
        return null;
    }
    const s = (0, vectors_1.vecDot)((0, vectors_1.vecCross)(dc, db), da_x_db) / da_x_db_norm2;
    const t = (0, vectors_1.vecDot)((0, vectors_1.vecCross)(dc, da), da_x_db) / da_x_db_norm2;
    switch (met) {
        case 2:
            return (0, vectors_1.vecAdd)(r1[0], (0, vectors_1.vecMult)(da, s));
        case 1:
            if ((s >= 0) && (t >= 0)) {
                return (0, vectors_1.vecAdd)(r1[0], (0, vectors_1.vecMult)(da, s));
            }
            return null;
        case 0:
            if ((s >= 0 && s <= 1) && (t >= 0 && t <= 1)) {
                return (0, vectors_1.vecAdd)(r1[0], (0, vectors_1.vecMult)(da, s));
            }
            return null;
        default:
            return null;
    }
}
exports.intersectRayRay = intersectRayRay;
function intersectRayPlane(r, p, met) {
    const normal = (0, vectors_1.vecCross)(p[1], p[2]);
    const normal_dot_r = (0, vectors_1.vecDot)(normal, r[1]);
    if (normal_dot_r === 0) {
        return null;
    }
    const u = (0, vectors_1.vecDot)(normal, (0, vectors_1.vecFromTo)(r[0], p[0])) / normal_dot_r;
    switch (met) {
        case 2:
            return (0, vectors_1.vecAdd)(r[0], (0, vectors_1.vecMult)(r[1], u));
        case 1:
            if (u >= 0) {
                return (0, vectors_1.vecAdd)(r[0], (0, vectors_1.vecMult)(r[1], u));
            }
            return null;
        case 0:
            if (u >= 0 && u <= 1) {
                return (0, vectors_1.vecAdd)(r[0], (0, vectors_1.vecMult)(r[1], u));
            }
            return null;
        default:
            return null;
    }
}
exports.intersectRayPlane = intersectRayPlane;
function project(c, r, met = 2) {
    if (r.length === 2) {
        return projectCoordOntoRay(c, r, met);
        // const tjs_point_proj: three.Vector3 = new three.Vector3(c[0], c[1], c[2]);
        // const tjs_origin: three.Vector3 =  new three.Vector3(r[0][0], r[0][1], r[0][2]);
        // const p2: Txyz = vecAdd(r[0], r[1]);
        // const tjs_point2: three.Vector3 =  new three.Vector3(p2[0], p2[1], p2[2]);
        // const tjs_new_point: three.Vector3 = new three.Vector3();
        // const tjs_line: three.Line3 = new three.Line3(tjs_origin, tjs_point2);
        // // project
        // tjs_line.closestPointToPoint( tjs_point_proj, false, tjs_new_point );
        // return [tjs_new_point.x, tjs_new_point.y, tjs_new_point.z];
    }
    else if (r.length === 3) {
        return projectCoordOntoPlane(c, r);
        // const tjs_point_proj: three.Vector3 = new three.Vector3(c[0], c[1], c[2]);
        // const tjs_new_point: three.Vector3 = new three.Vector3();
        // const normal: Txyz = vecCross(r[1], r[2]);
        // const tjs_normal: three.Vector3 = new three.Vector3(normal[0], normal[1], normal[2]);
        // const tjs_origin: three.Vector3 = new three.Vector3(r[0][0], r[0][1], r[0][2]);
        // const tjs_plane: three.Plane = new three.Plane();
        // // project
        // tjs_plane.setFromNormalAndCoplanarPoint( tjs_normal, tjs_origin );
        // tjs_plane.projectPoint(tjs_point_proj, tjs_new_point);
        // return [tjs_new_point.x, tjs_new_point.y, tjs_new_point.z];
    }
    else {
        throw new Error('Error calculating projection. Projection must be onto either rays or planes.');
    }
}
exports.project = project;
function projectCoordOntoRay(c, r, met) {
    const vec = (0, vectors_1.vecFromTo)(r[0], c);
    const dot = (0, vectors_1.vecDot)(vec, (0, vectors_1.vecNorm)(r[1]));
    switch (met) {
        case 2:
            return (0, vectors_1.vecAdd)(r[0], (0, vectors_1.vecSetLen)(r[1], dot));
        case 1:
            if (dot <= 0) {
                return r[0].slice();
            }
            return (0, vectors_1.vecAdd)(r[0], (0, vectors_1.vecSetLen)(r[1], dot));
        case 0:
            const length = (0, vectors_1.vecLen)(r[1]);
            if (dot <= 0) {
                return r[0].slice();
            }
            else if (dot >= length) {
                return (0, vectors_1.vecAdd)(r[0], r[1]);
            }
            return (0, vectors_1.vecAdd)(r[0], (0, vectors_1.vecSetLen)(r[1], dot));
        default:
            return null;
    }
}
exports.projectCoordOntoRay = projectCoordOntoRay;
function projectCoordOntoPlane(c, p) {
    const vec_to_c = (0, vectors_1.vecFromTo)(p[0], c);
    const pln_z_vec = (0, vectors_1.vecCross)(p[1], p[2]);
    const vec_a = (0, vectors_1.vecCross)(vec_to_c, pln_z_vec);
    if ((0, vectors_1.vecLen)(vec_a) === 0) {
        return p[0].slice();
    }
    const vec_b = (0, vectors_1.vecCross)(vec_a, pln_z_vec);
    const dot = (0, vectors_1.vecDot)(vec_to_c, (0, vectors_1.vecNorm)(vec_b));
    return (0, vectors_1.vecAdd)(p[0], (0, vectors_1.vecSetLen)(vec_b, dot));
}
exports.projectCoordOntoPlane = projectCoordOntoPlane;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvaW50ZXJzZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHVDQUFxRztBQU1yRyxTQUFnQixTQUFTLENBQUMsRUFBUSxFQUFFLEVBQWUsRUFBRSxNQUFjLENBQUM7SUFDaEUsNkRBQTZEO0lBQzdELDJGQUEyRjtJQUMzRixvRUFBb0U7SUFDcEUsbUJBQW1CO0lBQ25CLElBQUk7SUFDSixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQywyRUFBMkU7SUFDM0UsNERBQTREO0lBQzVELDJEQUEyRDtJQUMzRCw0REFBNEQ7SUFDNUQsMkRBQTJEO0lBQzNELDREQUE0RDtJQUM1RCwyREFBMkQ7SUFDM0QsbUJBQW1CO0lBQ25CLElBQUk7SUFDSixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQyxtRUFBbUU7SUFDbkUsMERBQTBEO0lBQzFELDRGQUE0RjtJQUM1RiwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELDRGQUE0RjtJQUM1RiwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELDRGQUE0RjtJQUM1RiwyREFBMkQ7SUFDM0QsbUJBQW1CO0lBQ25CLElBQUk7SUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsMEJBQTBCO1FBQzFCLHlDQUF5QztRQUN6QywwQkFBMEI7UUFDMUIseUNBQXlDO1FBQ3pDLHlEQUF5RDtRQUN6RCxlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsa0ZBQWtGO1FBQ2xGLDhCQUE4QjtRQUM5QixrR0FBa0c7UUFDbEcsZUFBZTtRQUNmLGlIQUFpSDtRQUNqSCxRQUFRO1FBQ1IsSUFBSTtRQUNKLGVBQWU7S0FDbEI7U0FBTSxJ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