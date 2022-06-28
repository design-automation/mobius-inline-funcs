declare type Txyz = [number, number, number];
declare type TRay = [Txyz, Txyz];
declare type TPlane = [Txyz, Txyz, Txyz];
/**
 * `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following:
 * \n
 * - Returns the Euclidean distance between two xyzs, a and b.
 * - Returns the Euclidean distance between an xyz a and an infinite ray b.
 * - Returns the Euclidean distance between an xyz a and an infinite plane b.
 * @param a The first xyz.
 * @param b The second xyz, an infinite ray, or an infinite plane.
 * @returns A number, the distance.
 */
export declare function distance(a: Txyz, b: Txyz | TRay | TPlane): number;
export {};
