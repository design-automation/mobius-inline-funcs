declare type Txyz = [number, number, number];
declare type TRay = [Txyz, Txyz];
declare type TPlane = [Txyz, Txyz, Txyz];
/**
 * Returns the xyz from projecting an xyz c onto an infinite ray r or infinite plane p where...
 * \n
 * - `project(c, r)`, Returns the xyz from projecting an xyz c onto an infinite ray r,
 * - `project(c, r, m)`, Returns the xyz from projecting an xyz c onto an infinite ray r, where:
 *      - if `m=2`, the ray is infinite in both directions,
 *      - if `m=1`, the ray is infinite in one direction,
 *      - and if `m=0`, the ray is not infinite.
 * - `project(c, p)`, Returns the xyz from projecting an xyz c onto an infinite plane p.
 * @param c An xyz coordinate.
 * @param r A ray or a plane.
 * @param met (Optional) Creates certain conditions, as seen above.
 * @returns An xyz coordinate.
 */
export declare function project(c: Txyz, r: TRay | TPlane, met?: number): [number, number, number];
export {};
