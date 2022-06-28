declare type Txyz = [number, number, number];
declare type TRay = [Txyz, Txyz];
declare type TPlane = [Txyz, Txyz, Txyz];
/**
 * `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following:
 * \n
 * - Returns the Manhattan distance between two xyzs, a and b.
 * - Returns the Manhattan distance between an xyz a and an infinite ray b.
 * - Returns the Manhattan distance between an xyz a and an infinite plane b.
 * \n
 * <a href="https://www.omnicalculator.com/math/manhattan-distance#what-is-the-manhattan-distance" target="_blank"> See here for an explanation on the Manhattan distance. </a>
 *
 * @param a The first xyz.
 * @param b The second xyz, an infinite ray, or an infinite plane.
 * @returns A number, the Manhattan distance between the points.
 */
export declare function distanceM(a: Txyz, b: Txyz | TRay | TPlane): number;
export {};
