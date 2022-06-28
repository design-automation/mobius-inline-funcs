"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rayMake = void 0;
const arrs_1 = require("../../libs/arrs");
const vectors_1 = require("../../libs/vectors");
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
function rayMake(origin, dir, len) {
    // overloaded case
    const origin_dep = (0, arrs_1.getArrDepth)(origin);
    const dir_dep = (0, arrs_1.getArrDepth)(dir);
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
    const ray_vec = len ? (0, vectors_1.vecSetLen)(dir, len) : dir;
    return [origin.slice(), ray_vec];
}
exports.rayMake = rayMake;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5TWFrZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmF5L3JheU1ha2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQThDO0FBRTlDLGdEQUErQztBQUUvQzs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDRixTQUFnQixPQUFPLENBQUMsTUFBbUIsRUFBRSxHQUFnQixFQUFFLEdBQVk7SUFDeEUsa0JBQWtCO0lBQ2xCLE1BQU0sVUFBVSxHQUFXLElBQUEsa0JBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxNQUFNLE9BQU8sR0FBVyxJQUFBLGtCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxVQUFVLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7UUFDbkMsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ2Ysd0JBQXdCO1lBQ3hCLE9BQVEsTUFBaUIsQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBa0IsRUFBRSxHQUFXLEVBQUUsR0FBRyxDQUFTLENBQUMsQ0FBQztTQUN2RzthQUFNLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN6QixxQkFBcUI7WUFDckIsT0FBUSxHQUFjLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQWMsRUFBRSxPQUFlLEVBQUUsR0FBRyxDQUFTLENBQUMsQ0FBQztTQUNqRzthQUFNO1lBQ0gsNERBQTREO1lBQzVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUM5QixNQUFNLElBQUksR0FBVyxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBUyxFQUFFLEdBQUcsQ0FBUyxDQUFFLENBQUM7aUJBQ3hFO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO2FBQ3RHO1NBQ0o7S0FDSjtJQUNELDRDQUE0QztJQUM1QyxNQUFNLE9BQU8sR0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUEsbUJBQVMsRUFBQyxHQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQVcsQ0FBQztJQUN0RSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUEzQkEsMEJBMkJBIn0=