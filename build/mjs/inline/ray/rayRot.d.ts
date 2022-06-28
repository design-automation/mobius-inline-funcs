import { TRay } from '../../libs/common';
/**
 * Rotate the ray "r1" around the ray "r2", by angle "a" (in radians).
 * \n
 * Overloaded with 3 cases.
 * \n
 * - ray1 can be one ray, ray2 can be one ray, and ang can be one number.
 * - ray1 can be a list of rays, ray2 can be one ray, and ang can be one number.
 * - ray1 can be a list of rays, ray2 can be a list of rays, and ang can be a list of numbers. These lists should have the **same size**.
 *
 * @param ray1 The ray to be rotated.
 * @param ray2 The ray to be used as the axis of rotation.
 * @param ang The angle (in radians) to rotate r1 by.
 * @returns The new, rotated ray.
 */
export declare function rayRot(ray1: TRay | TRay[], ray2: TRay | TRay[], ang: number | number[]): TRay | TRay[];
