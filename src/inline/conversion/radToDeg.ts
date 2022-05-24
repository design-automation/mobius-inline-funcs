/**
 * Converts radians to degrees.
 * ```
 * radToDeg(PI)         // 180
 * radToDeg(PI / 2)     // 90
 * ```
 * @param rad A number (representing radians).
 * @returns A number (representing degrees).
 */
 export function radToDeg(rad: number|number[]): number|number[] {
    if (Array.isArray(rad)) { return rad.map(a_rad => radToDeg(a_rad)) as number[]; }
    return rad * (180 / Math.PI);
}