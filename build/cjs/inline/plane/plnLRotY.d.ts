import { TPlane } from '../../libs/common';
/**
 * Rotate the plane "p" around the local Y axis, by angle "a" (in radians).
 * \n
 * Overloaded with 3 cases.
 * \n
 * - pln can be one plane, and ang can be one number.
 * - pln can be a list of planes, and ang can be one number.
 * - pln can be a list of planes, and ang can be a list of numbers. These lists should have the **same size**.
 *
 * @param pln Plane to be rotated (around the Y axis).
 * @param ang Angle to rotate plane by, in radians.
 * @returns The new, rotated plane.
 *
 */
export declare function plnLRotY(pln: TPlane | TPlane[], ang: number | number[]): TPlane | TPlane[];
