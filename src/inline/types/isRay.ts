import { isVec3 } from "../types";

/**
 * Returns true if the value is a ray, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
 export function isRay(v: any): boolean {
    return Array.isArray(v) && v.length === 2 && isVec3(v[0]) && isVec3(v[1]);
}