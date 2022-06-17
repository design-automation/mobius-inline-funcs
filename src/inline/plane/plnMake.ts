import { TPlane, Txyz } from '../../libs/common';
import { vecNorm, vecMakeOrtho } from '../../libs/vectors';
import { getArrDepth } from '../../libs/arrs';

/**
 * Creates a plane from an origin "o", an "x" axis vector, and any other vector in the "xy" plane.
 * \n
 * Overloaded with 4 cases. 
 * \n 
 * - origin can be one coordinate, x_vec can be one vector, and xy_vec can be one vector.
 * - origin can be a list of coordinates, x_vec can be one vector, and xy_vec can be one vector.
 * - origin can be a list of coordinates, x_vec can be a list of vectors, and xy_vec can be one vector. These lists should have the **same size**.
 * - origin can be a list of coordinates, and v2 can be a list of vectors. These lists should have the **same size**.
 * 
 * @param origin A point/position or list of points/positions. 
 * @param x_vec A vector or a list of vectors.
 * @param xy_vec Another vector or list of vectors.
 * @returns A plane. 
 */
 export function plnMake(origin: Txyz|Txyz[], x_vec: Txyz|Txyz[], xy_vec: Txyz|Txyz[]): TPlane|TPlane[] {
    // overloaded case
    const origin_dep: number = getArrDepth(origin);
    const x_vec_dep: number = getArrDepth(x_vec);
    const xy_vec_dep: number = getArrDepth(xy_vec);
    if (origin_dep === 2 || x_vec_dep === 2) {
        if (x_vec_dep === 1) {
            // only origin is Txyz[]
            return (origin as Txyz[]).map( origin_val => plnMake(origin_val as Txyz, x_vec as Txyz, xy_vec as Txyz) as TPlane);
        } else if (origin_dep === 1) {
            // only x_vec and xy_vec are Txyz[], they must be equal length
            if (xy_vec_dep === 2 && x_vec.length === xy_vec.length) {
                const vecs: TPlane[] = [];
                for (let i = 0; i < origin.length; i++) {
                    vecs.push( plnMake(origin as Txyz, x_vec[i] as Txyz, xy_vec[i] as Txyz) as TPlane );
                }
                return vecs;
            } else {
                throw new Error('Error making planes with lists of vectors: The x_vec and xy_vec lists must be of equal length.');
            }
        } else {
            // all origin, x_vec and xy_vec are Txyz[], they must be equal length
            if (origin.length === x_vec.length && origin.length === xy_vec.length) {
                const vecs: TPlane[] = [];
                for (let i = 0; i < origin.length; i++) {
                    vecs.push( plnMake(origin[i] as Txyz, x_vec[i] as Txyz, xy_vec[i] as Txyz) as TPlane );
                }
                return vecs;
            } else {
                throw new Error('Error making planes with lists of vectors: The three lists must be of equal length.');
            }
        }
    }
    // normal case, both origin and x_vec and xy_vec are Txyz
    const x_axis: Txyz = vecNorm(x_vec as Txyz);
    const y_axis: Txyz = vecNorm(vecMakeOrtho(xy_vec as Txyz, x_vec as Txyz));
    return [origin.slice() as Txyz, x_axis, y_axis] as TPlane;
}