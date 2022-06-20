/**
 * Returns v1 < v2 < v3 (True/False).
 * @param v1 The first value. 
 * @param v2 The second value. 
 * @param v3 The third value. 
 * @returns True or False.
 */
 export function isIn(v1: number, v2: number, v3: number): boolean {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
    v1 < v2 && v2 < v3;
}