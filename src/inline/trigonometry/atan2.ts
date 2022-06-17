/**
 * Returns the angle in radians (in [-π,π]) between the positive x-axis and the ray from (0,0) to
 * the point.
 * \n
 *```
 * atan2([15, 90]]); // 1.4056476493802699
 * atan2([90, 15]]); // 0.16514867741462683
 *```
 * @param xy A list of two numbers [x,y] or a list of lists [[x,y], [x,y], [x,y]...].
 * @returns A number (in radians).
 */
 export function atan2(xy: [number, number]|[number, number][]): number|number[] {
    if (Array.isArray(xy[0])) {
        return (xy as [number, number][]).map( a_xy => Math.atan2(a_xy[1], a_xy[0]) ) as number[];
    }
    xy = xy as [number, number];
    return Math.atan2(xy[1], xy[0]);
}