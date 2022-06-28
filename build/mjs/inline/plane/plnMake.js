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
export function plnMake(origin, x_vec, xy_vec) {
    // overloaded case
    const origin_dep = getArrDepth(origin);
    const x_vec_dep = getArrDepth(x_vec);
    const xy_vec_dep = getArrDepth(xy_vec);
    if (origin_dep === 2 || x_vec_dep === 2) {
        if (x_vec_dep === 1) {
            // only origin is Txyz[]
            return origin.map(origin_val => plnMake(origin_val, x_vec, xy_vec));
        }
        else if (origin_dep === 1) {
            // only x_vec and xy_vec are Txyz[], they must be equal length
            if (xy_vec_dep === 2 && x_vec.length === xy_vec.length) {
                const vecs = [];
                for (let i = 0; i < origin.length; i++) {
                    vecs.push(plnMake(origin, x_vec[i], xy_vec[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error making planes with lists of vectors: The x_vec and xy_vec lists must be of equal length.');
            }
        }
        else {
            // all origin, x_vec and xy_vec are Txyz[], they must be equal length
            if (origin.length === x_vec.length && origin.length === xy_vec.length) {
                const vecs = [];
                for (let i = 0; i < origin.length; i++) {
                    vecs.push(plnMake(origin[i], x_vec[i], xy_vec[i]));
                }
                return vecs;
            }
            else {
                throw new Error('Error making planes with lists of vectors: The three lists must be of equal length.');
            }
        }
    }
    // normal case, both origin and x_vec and xy_vec are Txyz
    const x_axis = vecNorm(x_vec);
    const y_axis = vecNorm(vecMakeOrtho(xy_vec, x_vec));
    return [origin.slice(), x_axis, y_axis];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuTWFrZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcGxhbmUvcGxuTWFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5Qzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNGLE1BQU0sVUFBVSxPQUFPLENBQUMsTUFBbUIsRUFBRSxLQUFrQixFQUFFLE1BQW1CO0lBQ2pGLGtCQUFrQjtJQUNsQixNQUFNLFVBQVUsR0FBVyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsTUFBTSxTQUFTLEdBQVcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLE1BQU0sVUFBVSxHQUFXLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxJQUFJLFVBQVUsS0FBSyxDQUFDLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtRQUNyQyxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDakIsd0JBQXdCO1lBQ3hCLE9BQVEsTUFBaUIsQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBa0IsRUFBRSxLQUFhLEVBQUUsTUFBYyxDQUFXLENBQUMsQ0FBQztTQUN0SDthQUFNLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN6Qiw4REFBOEQ7WUFDOUQsSUFBSSxVQUFVLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDcEQsTUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO2dCQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsTUFBYyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFTLENBQVcsQ0FBRSxDQUFDO2lCQUN2RjtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsZ0dBQWdHLENBQUMsQ0FBQzthQUNySDtTQUNKO2FBQU07WUFDSCxxRUFBcUU7WUFDckUsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNuRSxNQUFNLElBQUksR0FBYSxFQUFFLENBQUM7Z0JBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQVMsQ0FBVyxDQUFFLENBQUM7aUJBQzFGO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxxRkFBcUYsQ0FBQyxDQUFDO2FBQzFHO1NBQ0o7S0FDSjtJQUNELHlEQUF5RDtJQUN6RCxNQUFNLE1BQU0sR0FBUyxPQUFPLENBQUMsS0FBYSxDQUFDLENBQUM7SUFDNUMsTUFBTSxNQUFNLEdBQVMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFjLEVBQUUsS0FBYSxDQUFDLENBQUMsQ0FBQztJQUMxRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQVcsQ0FBQztBQUM5RCxDQUFDIn0=