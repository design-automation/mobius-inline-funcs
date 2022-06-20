import { isVec3, _isWithin } from "../../index";

/**
 * Returns true if the value is a list of three numbers in the range [0, 1], false otherwise.
 * @param v Value to be checked.
 * @returns True or False.
 */
 export function isCol(v: any): boolean {
    return isVec3(v) && _isWithin(0, v[0], 1) && _isWithin(0, v[1], 1) && _isWithin(0, v[2], 1);
}