import { TPlane } from '../../libs/common';
/**
 * Rotate the plane "p" around the local X axis, by angle "a" (in radians).
 * \n
 * Can be overloaded.
 *
 * @param pln Plane to be rotated (around the X axis).
 * @param ang Angle to rotate plane by, in radians.
 * @returns The new, rotated plane.
 */
export declare function plnLRotX(pln: TPlane | TPlane[], ang: number | number[]): TPlane | TPlane[];
