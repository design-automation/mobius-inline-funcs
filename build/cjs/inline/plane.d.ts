/**
 * Plane functions that modify planes. These functions do not modify input plane.
 *
 * Overloaded:
 * - origin[], x_vec,   xy_vec
 * - origin,   x_vec[], xy_vec[]
 * - origin[], x_vec[], xy_vec[]
 */
import { TPlane, TRay, Txyz } from '../libs/common';
/**
 * Creates a plane from an origin "o", an "x" axis vector, and any other vector in the "xy" plane.
 * @param origin
 * @param x_vec
 * @param xy_vec
 */
export declare function plnMake(debug: boolean, origin: Txyz | Txyz[], x_vec: Txyz | Txyz[], xy_vec: Txyz | Txyz[]): TPlane | TPlane[];
/**
 * Make a copy of the plane "p"
 * @param pln
 */
export declare function plnCopy(debug: boolean, pln: TPlane | TPlane[]): TPlane | TPlane[];
/**
 * Move the plane "p" relative to the global X, Y, and Z axes, by vector "v".
 * @param pln
 * @param vec
 */
export declare function plnMove(debug: boolean, pln: TPlane | TPlane[], vec: Txyz | Txyz[]): TPlane | TPlane[];
/**
 * Rotate the plane "p" around the ray "r", by angle "a" (in radians).
 * @param pln
 * @param ray
 * @param ang
 */
export declare function plnRot(debug: boolean, pln: TPlane | TPlane[], ray: TRay | TRay[], ang: number | number[]): TPlane | TPlane[];
/**
 * Move the plane "p" relative to the local X, Y, and Z axes, by vector "v".
 * @param pln
 * @param vec
 */
export declare function plnLMove(debug: boolean, pln: TPlane | TPlane[], vec: Txyz | Txyz[]): TPlane | TPlane[];
/**
 * Rotate the plane "p" around the local X axis, by angle "a" (in radians).
 * @param pln
 * @param ang
 */
export declare function plnLRotX(debug: boolean, pln: TPlane | TPlane[], ang: number | number[]): TPlane | TPlane[];
/**
 * Rotate the plane "p" around the local Y axis, by angle "a" (in radians).
 * @param pln
 * @param ang
 */
export declare function plnLRotY(debug: boolean, pln: TPlane | TPlane[], ang: number | number[]): TPlane | TPlane[];
/**
 * Rotate the plane "p" around the local Z axis, by angle "a" (in radians).
 * @param pln
 * @param ang
 */
export declare function plnLRotZ(debug: boolean, pln: TPlane | TPlane[], ang: number | number[]): TPlane | TPlane[];
/**
 * Generate a plane from a ray...
 * @param ray
 */
export declare function plnFromRay(debug: boolean, ray: TRay | TRay[]): TPlane | TPlane[];
export declare class planeClass {
    __debug__: boolean;
    constructor(debug: boolean);
    plnMake(origin: any, x_vec: any, xy_vec: any): TPlane | TPlane[];
    plnCopy(pln: any): TPlane | TPlane[];
    plnMove(pln: any, vec: any): TPlane | TPlane[];
    plnRot(pln: any, ray: any, ang: any): TPlane | TPlane[];
    plnLMove(pln: any, vec: any): TPlane | TPlane[];
    plnLRotX(pln: any, ang: any): TPlane | TPlane[];
    plnLRotY(pln: any, ang: any): TPlane | TPlane[];
    plnLRotZ(pln: any, ang: any): TPlane | TPlane[];
    plnFromRay(ray: any): TPlane | TPlane[];
}
