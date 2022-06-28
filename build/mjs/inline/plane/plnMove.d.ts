import { TPlane, Txyz } from '../../libs/common';
/**
 * Move the plane "p" relative to the global X, Y, and Z axes, by vector "v".
 * \n
 * Overloaded with 3 cases.
 * \n
 * - pln can be one plane, and vec can be one vector.
 * - pln can be a list of planes, and vec can be one vector.
 * - pln can be a list of planes, and vec can be a list of vectors. These lists should have the **same size**.
 *
 * @param pln The plane to be moved.
 * @param vec The vector to move the plane by.
 * @returns A new plane that has been moved.
 */
export declare function plnMove(pln: TPlane | TPlane[], vec: Txyz | Txyz[]): TPlane | TPlane[];
