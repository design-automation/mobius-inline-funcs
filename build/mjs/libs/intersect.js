import { vecAdd, vecCross, vecLen, vecFromTo, vecDot, vecNorm, vecMult, vecSetLen } from './vectors';
export function intersect(r1, r2, met = 2) {
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
export function intersectRayRay(r1, r2, met) {
    const dc = vecFromTo(r1[0], r2[0]);
    const da = r1[1];
    const db = r2[1];
    if (vecDot(dc, vecCross(da, db)) !== 0) {
        return null;
    }
    const da_x_db = vecCross(da, db);
    const da_x_db_norm2 = (da_x_db[0] * da_x_db[0]) + (da_x_db[1] * da_x_db[1]) + (da_x_db[2] * da_x_db[2]);
    if (da_x_db_norm2 === 0) {
        return null;
    }
    const s = vecDot(vecCross(dc, db), da_x_db) / da_x_db_norm2;
    const t = vecDot(vecCross(dc, da), da_x_db) / da_x_db_norm2;
    switch (met) {
        case 2:
            return vecAdd(r1[0], vecMult(da, s));
        case 1:
            if ((s >= 0) && (t >= 0)) {
                return vecAdd(r1[0], vecMult(da, s));
            }
            return null;
        case 0:
            if ((s >= 0 && s <= 1) && (t >= 0 && t <= 1)) {
                return vecAdd(r1[0], vecMult(da, s));
            }
            return null;
        default:
            return null;
    }
}
export function intersectRayPlane(r, p, met) {
    const normal = vecCross(p[1], p[2]);
    const normal_dot_r = vecDot(normal, r[1]);
    if (normal_dot_r === 0) {
        return null;
    }
    const u = vecDot(normal, vecFromTo(r[0], p[0])) / normal_dot_r;
    switch (met) {
        case 2:
            return vecAdd(r[0], vecMult(r[1], u));
        case 1:
            if (u >= 0) {
                return vecAdd(r[0], vecMult(r[1], u));
            }
            return null;
        case 0:
            if (u >= 0 && u <= 1) {
                return vecAdd(r[0], vecMult(r[1], u));
            }
            return null;
        default:
            return null;
    }
}
export function project(c, r, met = 2) {
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
export function projectCoordOntoRay(c, r, met) {
    const vec = vecFromTo(r[0], c);
    const dot = vecDot(vec, vecNorm(r[1]));
    switch (met) {
        case 2:
            return vecAdd(r[0], vecSetLen(r[1], dot));
        case 1:
            if (dot <= 0) {
                return r[0].slice();
            }
            return vecAdd(r[0], vecSetLen(r[1], dot));
        case 0:
            const length = vecLen(r[1]);
            if (dot <= 0) {
                return r[0].slice();
            }
            else if (dot >= length) {
                return vecAdd(r[0], r[1]);
            }
            return vecAdd(r[0], vecSetLen(r[1], dot));
        default:
            return null;
    }
}
export function projectCoordOntoPlane(c, p) {
    const vec_to_c = vecFromTo(p[0], c);
    const pln_z_vec = vecCross(p[1], p[2]);
    const vec_a = vecCross(vec_to_c, pln_z_vec);
    if (vecLen(vec_a) === 0) {
        return p[0].slice();
    }
    const vec_b = vecCross(vec_a, pln_z_vec);
    const dot = vecDot(vec_to_c, vecNorm(vec_b));
    return vecAdd(p[0], vecSetLen(vec_b, dot));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYnMvaW50ZXJzZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBTXJHLE1BQU0sVUFBVSxTQUFTLENBQUMsRUFBUSxFQUFFLEVBQWUsRUFBRSxNQUFjLENBQUM7SUFDaEUsNkRBQTZEO0lBQzdELDJGQUEyRjtJQUMzRixvRUFBb0U7SUFDcEUsbUJBQW1CO0lBQ25CLElBQUk7SUFDSixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQywyRUFBMkU7SUFDM0UsNERBQTREO0lBQzVELDJEQUEyRDtJQUMzRCw0REFBNEQ7SUFDNUQsMkRBQTJEO0lBQzNELDREQUE0RDtJQUM1RCwyREFBMkQ7SUFDM0QsbUJBQW1CO0lBQ25CLElBQUk7SUFDSixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQyxtRUFBbUU7SUFDbkUsMERBQTBEO0lBQzFELDRGQUE0RjtJQUM1RiwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELDRGQUE0RjtJQUM1RiwyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELDRGQUE0RjtJQUM1RiwyREFBMkQ7SUFDM0QsbUJBQW1CO0lBQ25CLElBQUk7SUFDSixJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsMEJBQTBCO1FBQzFCLHlDQUF5QztRQUN6QywwQkFBMEI7UUFDMUIseUNBQXlDO1FBQ3pDLHlEQUF5RDtRQUN6RCxlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsa0ZBQWtGO1FBQ2xGLDhCQUE4QjtRQUM5QixrR0FBa0c7UUFDbEcsZUFBZTtRQUNmLGlIQUFpSDtRQUNqSCxRQUFRO1FBQ1IsSUFBSTtRQUNKLGVBQWU7S0FDbEI7U0FBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8saUJBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QywwQkFBMEI7UUFDMUIseUNBQXlDO1FBQ3pDLGtEQUFrRDtRQUNsRCxvQ0FBb0M7UUFDcEMsOENBQThDO1FBQzlDLG9GQUFvRjtRQUNwRixlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsd0RBQXdEO1FBQ3hELDhCQUE4QjtRQUM5QixnRUFBZ0U7UUFDaEUsZUFBZTtRQUNmLGlIQUFpSDtRQUNqSCxRQUFRO1FBQ1IsSUFBSTtRQUNKLGVBQWU7S0FDbEI7U0FBTTtRQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsc0ZBQXNGLENBQUMsQ0FBQztLQUMzRztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEVBQVEsRUFBRSxFQUFRLEVBQUUsR0FBVztJQUMzRCxNQUFNLEVBQUUsR0FBUyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sRUFBRSxHQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixNQUFNLEVBQUUsR0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQztLQUFFO0lBQ3hELE1BQU0sT0FBTyxHQUFTLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxhQUFhLEdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEgsSUFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUM7S0FBRTtJQUN6QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxhQUFhLENBQUM7SUFDNUQsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsYUFBYSxDQUFDO0lBQzVELFFBQVEsR0FBRyxFQUFFO1FBQ1QsS0FBSyxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxLQUFLLENBQUM7WUFDRixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUN0QixPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsS0FBSyxDQUFDO1lBQ0YsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNoQjtZQUNJLE9BQU8sSUFBSSxDQUFDO0tBQ25CO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxDQUFPLEVBQUUsQ0FBUyxFQUFFLEdBQVc7SUFDN0QsTUFBTSxNQUFNLEdBQVMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxNQUFNLFlBQVksR0FBVyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDO0tBQUU7SUFDeEMsTUFBTSxDQUFDLEdBQVcsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO0lBQ3ZFLFFBQVEsR0FBRyxFQUFFO1FBQ1QsS0FBSyxDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxLQUFLLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLEtBQUssQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEI7WUFDSSxPQUFPLElBQUksQ0FBQztLQUNuQjtBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLENBQU8sRUFBRSxDQUFjLEVBQUUsTUFBYyxDQUFDO0lBQzVELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEIsT0FBTyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLDZFQUE2RTtRQUM3RSxtRkFBbUY7UUFDbkYsdUNBQXVDO1FBQ3ZDLDZFQUE2RTtRQUM3RSw0REFBNEQ7UUFDNUQseUVBQXlFO1FBQ3pFLGFBQWE7UUFDYix3RUFBd0U7UUFDeEUsOERBQThEO0tBQ2pFO1NBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyw2RUFBNkU7UUFDN0UsNERBQTREO1FBQzVELDZDQUE2QztRQUM3Qyx3RkFBd0Y7UUFDeEYsa0ZBQWtGO1FBQ2xGLG9EQUFvRDtRQUNwRCxhQUFhO1FBQ2IscUVBQXFFO1FBQ3JFLHlEQUF5RDtRQUN6RCw4REFBOEQ7S0FDakU7U0FBTTtRQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsOEVBQThFLENBQUMsQ0FBQztLQUNuRztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsQ0FBTyxFQUFFLENBQU8sRUFBRSxHQUFXO0lBQzdELE1BQU0sR0FBRyxHQUFTLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsTUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxRQUFRLEdBQUcsRUFBRTtRQUNULEtBQUssQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDO1lBQ0YsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxDQUFDO2FBQy9CO1lBQ0QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBVSxDQUFDO2FBQy9CO2lCQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtnQkFDdEIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QztZQUNJLE9BQU8sSUFBSSxDQUFDO0tBQ25CO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxDQUFPLEVBQUUsQ0FBUztJQUNwRCxNQUFNLFFBQVEsR0FBUyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sU0FBUyxHQUFTLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQVMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVUsQ0FBQztLQUFFO0lBQ3pELE1BQU0sS0FBSyxHQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0MsTUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMifQ==