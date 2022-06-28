import { TRay, TPlane } from '../../libs/common';
/**
 * Create a ray from a plane "p", with the same origin and with a direction along the plane's z axis.
 * \n
 * Overloaded. pln can be one plane or a list of planes.
 *
 * @param pln The input plane to create a ray from.
 * @returns A ray.
 */
export declare function rayFromPln(pln: TPlane | TPlane[]): TRay | TRay[];
