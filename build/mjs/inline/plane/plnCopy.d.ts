import { TPlane } from '../../libs/common';
/**
 * Make a copy of the plane "pln".
 *
 * Overloaded. pln can be one plane or a list of planes.
 *
 * @param pln The plane to be copied.
 * @returns The copied plane.
 */
export declare function plnCopy(pln: TPlane | TPlane[]): TPlane | TPlane[];
