import { isVec3 } from "./isVec3";

/**
 * Returns true if the value is a plane, false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
 export function isPln(v: any): boolean {
    return Array.isArray(v) && v.length === 3 && isVec3(v[0]) && isVec3(v[1]) && isVec3(v[2]);
}