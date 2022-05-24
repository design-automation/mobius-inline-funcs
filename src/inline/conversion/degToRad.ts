/**
 * Converts degrees to radians.
 * ```
 * degToRad(45)   // 0.7853981633974483 (PI/4)
 * degToRad(180)  // 3.141592653589793 (PI)
 * ```
 * @param deg A number (representing degrees).
 * @returns A number (representing radians).
 */
 export function degToRad(deg: number|number[]): number|number[] {
    if (Array.isArray(deg)) { return deg.map(a_deg => degToRad(a_deg)) as number[]; }
    return deg * (Math.PI / 180);
}