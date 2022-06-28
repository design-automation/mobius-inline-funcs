declare type Txyz = [number, number, number];
declare type TRay = [Txyz, Txyz];
declare type TPlane = [Txyz, Txyz, Txyz];
/**
 * Returns the intersection xyz between two rays or a ray and a plane, where...
 * \n
 * - `intersect(r1, r2)`, Returns the intersection xyz between two infinite rays.
 * - `intersect(r1, r2, m)`, Returns the intersection xyz between two rays, where:
 *      - if `m=2`, rays are infinite in both directions
 *      - if `m=1` rays are infinite in one direction
 *      - if `m=0`, rays are not infinite.
 * \n
 * - `intersect(r, p)`, Returns the intersection xyz between an infinite ray r and an infinite plane p,
 * - `intersect(r, p, m)`, Returns the intersection xyz between a ray r and an infinite plane p, where:
 *      - if `m=2`, the ray is infinite in both directions,
 *      - if `m=1` the ray is infinite in one direction,
 *      - and if `m=0`, the ray is not infinite.
 *
 * @param r1 The first ray.
 * @param r2 The second ray or plane.
 * @param met (Optional) Creates certain conditions, as seen above.
 * @returns The xyz coordinates of the intersection between two rays.
 */
export declare function intersect(r1: TRay, r2: TRay | TPlane, met?: number): [number, number, number];
export {};
