import { getArrDepth } from '../../libs/arrs';
import { TRay, Txyz } from '../../libs/common';
import { vecFromTo } from '../../libs/vectors';

/**
 * Creates a ray between two points.
 * \n
 * Overloaded with 4 cases. 
 * \n 
 * - xyz1 can be one coordinate, and xyz2 can be one coordinate.
 * - xyz1 can be a list of coordinates, and xyz2 can be one coordinate.
 * - xyz1 can be one coordinate, and xyz2 can be a list of coordinates. 
 * - xyz1 can be a list of coordinates, and xyz2 can be a list of coordinates. These lists should have the **same size**.
 * 
 * @param xyz1 Coordinate 1.
 * @param xyz2 Coordinate 2. 
 * @returns The created ray or list of rays that has xyz1 as an origin and xyz2 as an endpoint. 
 */
 export function rayFromTo(xyz1: Txyz|Txyz[], xyz2: Txyz|Txyz[]): TRay|TRay[] {
    // overloaded case
    const depth1: number = getArrDepth(xyz1);
    const depth2: number = getArrDepth(xyz2);
    if (depth1 === 2 || depth2 === 2) {
        if (depth2 === 1) {
            // only xyz1 is Txyz[]
            return (xyz1 as Txyz[]).map( a_xyz1 => [a_xyz1, vecFromTo(a_xyz1 as Txyz, xyz2 as Txyz)] as TRay );
        } else if (depth1 === 1) {
            // only xyz2 is Txyz[]
            return (xyz2 as Txyz[]).map( a_xyz2 => [xyz1, vecFromTo(xyz1 as Txyz, a_xyz2 as Txyz)] as TRay );
        } else {
            // both xyz1 and xyz2 are Txyz[], they must be equal length
            if (xyz1.length === xyz2.length) {
                const rays: TRay[] = [];
                for (let i = 0; i < xyz1.length; i++) {
                    rays.push( [xyz1[i], vecFromTo(xyz1[i] as Txyz, xyz2[i] as Txyz)] as TRay );
                }
                return rays;
            } else {
                throw new Error(
                    'Error calculating vectors between two between lists of coordinates: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both xyz1 and xyz2 are Txyz
    return [xyz1, vecFromTo(xyz1 as Txyz, xyz2 as Txyz)] as TRay;
}