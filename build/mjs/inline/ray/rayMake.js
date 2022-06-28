import { getArrDepth } from '../../libs/arrs';
import { vecSetLen } from '../../libs/vectors';
/**
 * Creates a ray from an origin "o" and a direction vector "d".
 * If `len` is set: Creates a ray from an origin "o", a direction vector "d", and length "l".
 * \n
 * Overloaded with 4 cases.
 * \n
 * - origin can be one coordinate, dir can be one plane, and len can be one integer.
 * - origin can be a list of coordinates, dir can be one plane, and len can be one integer.
 * - origin can be one coordinate, dir can be a list of planes, and len can be one integer.
 * - origin can be a list of coordinates, dir can be a list of planes, and len can be one integer. These lists should have the **same size**.
 *
 * @param origin Coordinates or a list of coordinates in the form of [x, y, z].
 * @param dir A vector or list of vectors that provides the direction.
 * @param len (Optional) An integer for the length.
 * @returns A new ray.
 */
export function rayMake(origin, dir, len) {
    // overloaded case
    const origin_dep = getArrDepth(origin);
    const dir_dep = getArrDepth(dir);
    if (origin_dep === 2 || dir_dep === 2) {
        if (dir_dep === 1) {
            // only origin is Txyz[]
            return origin.map(origin_val => rayMake(origin_val, dir, len));
        }
        else if (origin_dep === 1) {
            // only dir is Txyz[]
            return dir.map(dir_val => rayMake(origin, dir_val, len));
        }
        else {
            // both origin and dir are Txyz[], they must be equal length
            if (origin.length === dir.length) {
                const vecs = [];
                for (let i = 0; i < origin.length; i++) {
                    vecs.push(rayMake(origin[i], dir[i], len));
                }
                return vecs;
            }
            else {
                throw new Error('Error making rays with lists of vectors: The two lists must be of equal length.');
            }
        }
    }
    // normal case, both origin and dir are Txyz
    const ray_vec = len ? vecSetLen(dir, len) : dir;
    return [origin.slice(), ray_vec];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5TWFrZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheU1ha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQzs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDRixNQUFNLFVBQVUsT0FBTyxDQUFDLE1BQW1CLEVBQUUsR0FBZ0IsRUFBRSxHQUFZO0lBQ3hFLGtCQUFrQjtJQUNsQixNQUFNLFVBQVUsR0FBVyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsTUFBTSxPQUFPLEdBQVcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksVUFBVSxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1FBQ25DLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtZQUNmLHdCQUF3QjtZQUN4QixPQUFRLE1BQWlCLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLEdBQUcsQ0FBUyxDQUFDLENBQUM7U0FDdkc7YUFBTSxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDekIscUJBQXFCO1lBQ3JCLE9BQVEsR0FBYyxDQUFDLEdBQUcsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFjLEVBQUUsT0FBZSxFQUFFLEdBQUcsQ0FBUyxDQUFDLENBQUM7U0FDakc7YUFBTTtZQUNILDREQUE0RDtZQUM1RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO2dCQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQVMsRUFBRSxHQUFHLENBQVMsQ0FBRSxDQUFDO2lCQUN4RTtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQzthQUN0RztTQUNKO0tBQ0o7SUFDRCw0Q0FBNEM7SUFDNUMsTUFBTSxPQUFPLEdBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFXLENBQUM7SUFDdEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3QyxDQUFDIn0=