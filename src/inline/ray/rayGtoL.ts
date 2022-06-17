import { TRay, TPlane } from '../../libs/common';
import { _rayXForm } from './common';

/**
 * Transforms a ray from the global coordinate system to a local coordinate system defined by plane "p".
 * \n
 * Overloaded with 4 cases. 
 * \n 
 * - r can be one ray, and p can be one plane.
 * - r can be a list of rays, and p can be one plane.
 * - r can be one ray, and p can be a list of planes. 
 * - r can be a list of rays, and p can be a list of planes. These lists should have the **same size**.
 * 
 * 
 * @param r The ray to be transformed. 
 * @param p The target plane. 
 * @returns A new ray. 
 */
 export function rayGtoL(r: TRay|TRay[], p: TPlane|TPlane[]): TRay|TRay[] {
    return _rayXForm(r, p, false);
}