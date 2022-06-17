import { _vecXForm } from './common'
import { Txyz, TPlane } from '../../libs/common';

// ================================================================================================
/**
 * Transforms a vector from a local coordinate system defined by plane "p" to the global coordinate system.
 * \n
 * Overloaded with 4 cases. 
 * \n 
 * - v can be one vector, and p can be one plane.
 * - v can be a list of vectors, and p can be one plane.
 * - v can be one vector, and p can be a list of planes. 
 * - v can be a list of vectors, and p can be a list of planes. These lists should have the **same size**.
 * 
 * @param v The vector to be transformed. 
 * @param p The source plane.
 * @returns A new vector or list of new vectors.
 */
 export function vecLtoG(v: Txyz|Txyz[], p: TPlane|TPlane[]): Txyz|Txyz[] {
    return _vecXForm(v, p, true);
}