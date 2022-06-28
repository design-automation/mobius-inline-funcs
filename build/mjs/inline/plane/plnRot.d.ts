import { TPlane, TRay } from '../../libs/common';
/**
 * Rotate the plane "p" around the ray "r", by angle "a" (in radians).
 * \n
 * Overloaded with 3 cases.
 * \n
 * - pln can be one plane, ray can be one ray, and ang can be one number.
 * - pln can be a list of planes, ray can be one ray, and ang can be one number.
 * - pln can be a list of planes, ray can be a list of rays, and ang can be a list of numbers. These lists should have the **same size**.
 *
 * @param pln The plane to be rotated.
 * @param ray The ray to rotate the plane around.
 * @param ang The angle to rotate the plane, in radians.
 * @returns A new, rotated plane.
 */
export declare function plnRot(pln: TPlane | TPlane[], ray: TRay | TRay[], ang: number | number[]): TPlane | TPlane[];
