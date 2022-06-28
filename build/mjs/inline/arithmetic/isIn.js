/**
 * Returns v1 < v2 < v3 (True/False).
 * @param v1 The first value.
 * @param v2 The second value.
 * @param v3 The third value.
 * @returns True or False.
 */
export function isIn(v1, v2, v3) {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 < v2 && v2 < v3;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNJbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy9pc0luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNGLE1BQU0sVUFBVSxJQUFJLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO0lBQ3BELE9BQU8sT0FBTyxFQUFFLEtBQUssUUFBUSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRO1FBQ2pGLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUN2QixDQUFDIn0=