"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIn = void 0;
/**
 * Returns v1 < v2 < v3 (True/False).
 * @param v1 The first value.
 * @param v2 The second value.
 * @param v3 The third value.
 * @returns True or False.
 */
function isIn(v1, v2, v3) {
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 < v2 && v2 < v3;
}
exports.isIn = isIn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNJbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvYXJpdGhtZXRpYy9pc0luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7R0FNRztBQUNGLFNBQWdCLElBQUksQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7SUFDcEQsT0FBTyxPQUFPLEVBQUUsS0FBSyxRQUFRLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVE7UUFDakYsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFIQSxvQkFHQSJ9