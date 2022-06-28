"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plnMake = void 0;
const vectors_1 = require("../../libs/vectors");
const arrs_1 = require("../../libs/arrs");
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
function plnMake(origin, x_vec, xy_vec) {
    // overloaded case
    const origin_dep = (0, arrs_1.getArrDepth)(origin);
    const x_vec_dep = (0, arrs_1.getArrDepth)(x_vec);
    const xy_vec_dep = (0, arrs_1.getArrDepth)(xy_vec);
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
    const x_axis = (0, vectors_1.vecNorm)(x_vec);
    const y_axis = (0, vectors_1.vecNorm)((0, vectors_1.vecMakeOrtho)(xy_vec, x_vec));
    return [origin.slice(), x_axis, y_axis];
}
exports.plnMake = plnMake;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxuTWFrZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcGxhbmUvcGxuTWFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxnREFBMkQ7QUFDM0QsMENBQThDO0FBRTlDOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0YsU0FBZ0IsT0FBTyxDQUFDLE1BQW1CLEVBQUUsS0FBa0IsRUFBRSxNQUFtQjtJQUNqRixrQkFBa0I7SUFDbEIsTUFBTSxVQUFVLEdBQVcsSUFBQSxrQkFBVyxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLE1BQU0sU0FBUyxHQUFXLElBQUEsa0JBQVcsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxNQUFNLFVBQVUsR0FBVyxJQUFBLGtCQUFXLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsSUFBSSxVQUFVLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7UUFDckMsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLHdCQUF3QjtZQUN4QixPQUFRLE1BQWlCLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQWtCLEVBQUUsS0FBYSxFQUFFLE1BQWMsQ0FBVyxDQUFDLENBQUM7U0FDdEg7YUFBTSxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDekIsOERBQThEO1lBQzlELElBQUksVUFBVSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BELE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztnQkFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLE1BQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBUyxDQUFXLENBQUUsQ0FBQztpQkFDdkY7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGdHQUFnRyxDQUFDLENBQUM7YUFDckg7U0FDSjthQUFNO1lBQ0gscUVBQXFFO1lBQ3JFLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDbkUsTUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO2dCQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFTLENBQVcsQ0FBRSxDQUFDO2lCQUMxRjtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMscUZBQXFGLENBQUMsQ0FBQzthQUMxRztTQUNKO0tBQ0o7SUFDRCx5REFBeUQ7SUFDekQsTUFBTSxNQUFNLEdBQVMsSUFBQSxpQkFBTyxFQUFDLEtBQWEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sTUFBTSxHQUFTLElBQUEsaUJBQU8sRUFBQyxJQUFBLHNCQUFZLEVBQUMsTUFBYyxFQUFFLEtBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFXLENBQUM7QUFDOUQsQ0FBQztBQXJDQSwwQkFxQ0EifQ==