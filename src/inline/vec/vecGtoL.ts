import { _vecXForm } from './common'
import { Txyz, TPlane } from '../../libs/common';

/**
 * Transforms a vector from the global coordinate system to a local coordinate system defined by plane "p".
 * \n
 * Overloaded with 4 cases. 
 * \n 
 * - v can be one vector, and p can be one plane.
 * - v can be a list of vectors, and p can be one plane.
 * - v can be one vector, and p can be a list of planes. 
 * - v can be a list of vectors, and p can be a list of planes. These lists should have the **same size**.
 * 
 * @param v The vector or list of vectors to be transformed. 
 * @param p The target plane or list of planes.
 * @returns A new vector or list of new vectors.
 */
 export function vecGtoL(v: Txyz|Txyz[], p: TPlane|TPlane[]): Txyz|Txyz[] {
    return _vecXForm(v, p, false);
}