"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xformMatrix = exports.xfromSourceTargetMatrix = exports.scaleMatrix = exports.rotateMatrix = exports.mirrorMatrix = exports.multMatrix = void 0;
const three = __importStar(require("three"));
const vectors_1 = require("./vectors");
function multMatrix(xyz, m) {
    const v2 = new three.Vector3(...xyz);
    v2.applyMatrix4(m);
    return v2.toArray();
}
exports.multMatrix = multMatrix;
function mirrorMatrix(plane) {
    const origin = plane[0];
    const normal = (0, vectors_1.vecCross)(plane[1], plane[2]);
    // plane normal
    const [a, b, c] = (0, vectors_1.vecNorm)(normal);
    // rotation matrix
    const matrix_mirror = new three.Matrix4();
    matrix_mirror.set(1 - (2 * a * a), -2 * a * b, -2 * a * c, 0, -2 * a * b, 1 - (2 * b * b), -2 * b * c, 0, -2 * a * c, -2 * b * c, 1 - (2 * c * c), 0, 0, 0, 0, 1);
    // translation matrix
    const matrix_trn1 = new three.Matrix4();
    matrix_trn1.makeTranslation(-origin[0], -origin[1], -origin[2]);
    const matrix_trn2 = new three.Matrix4();
    matrix_trn2.makeTranslation(origin[0], origin[1], origin[2]);
    // final matrix
    const move_mirror_move = matrix_trn2.multiply(matrix_mirror.multiply(matrix_trn1));
    // do the xform
    return move_mirror_move;
}
exports.mirrorMatrix = mirrorMatrix;
function rotateMatrix(ray, angle) {
    const origin = ray[0];
    const axis = (0, vectors_1.vecNorm)(ray[1]);
    // rotation matrix
    const matrix_rot = new three.Matrix4();
    matrix_rot.makeRotationAxis(new three.Vector3(...axis), angle);
    // translation matrix
    const matrix_trn1 = new three.Matrix4();
    matrix_trn1.makeTranslation(-origin[0], -origin[1], -origin[2]);
    const matrix_trn2 = new three.Matrix4();
    matrix_trn2.makeTranslation(origin[0], origin[1], origin[2]);
    // final matrix
    const move_rot_move = matrix_trn2.multiply(matrix_rot.multiply(matrix_trn1));
    // do the xform
    return move_rot_move;
}
exports.rotateMatrix = rotateMatrix;
function scaleMatrix(plane, factor) {
    // scale matrix
    const matrix_scale = new three.Matrix4();
    matrix_scale.makeScale(factor[0], factor[1], factor[2]);
    // xform matrix
    const matrix_xform1 = xformMatrix(plane, true);
    const matrix_xform2 = xformMatrix(plane, false);
    // final matrix
    const xform_scale_xform = matrix_xform2.multiply(matrix_scale.multiply(matrix_xform1));
    // do the xform
    return xform_scale_xform;
}
exports.scaleMatrix = scaleMatrix;
function xfromSourceTargetMatrix(source_plane, target_plane) {
    // matrix to xform from source to gcs, then from gcs to target
    const matrix_source_to_gcs = xformMatrix(source_plane, true);
    const matrix_gcs_to_target = xformMatrix(target_plane, false);
    // final matrix
    const xform = matrix_gcs_to_target.multiply(matrix_source_to_gcs);
    // return the matrix
    return xform;
}
exports.xfromSourceTargetMatrix = xfromSourceTargetMatrix;
// ================================================================================================
// Helper functions
// ================================================================================================
function xformMatrix(plane, neg) {
    const o = new three.Vector3(...plane[0]);
    const x = new three.Vector3(...plane[1]);
    const y = new three.Vector3(...plane[2]);
    const z = new three.Vector3(...(0, vectors_1.vecCross)(plane[1], plane[2]));
    if (neg) {
        o.negate();
    }
    // origin translate matrix
    const m1 = new three.Matrix4();
    m1.setPosition(o);
    // xfrom matrix
    const m2 = new three.Matrix4();
    m2.makeBasis(x, y, z);
    // combine two matrices
    const m3 = new three.Matrix4();
    if (neg) {
        const m2x = (new three.Matrix4()).copy(m2).invert();
        // first translate to origin, then xform, so m2 x m1
        m3.multiplyMatrices(m2x, m1);
    }
    else {
        // first xform, then translate to origin, so m1 x m2
        m3.multiplyMatrices(m1, m2);
    }
    // return the combined matrix
    return m3;
}
exports.xformMatrix = xformMatrix;
// ---------------------------------------------------------------------------------
// function _matrixFromXYZ(pts: Txyz[],
//     from_origin: Txyz, from_vectors: Txyz[],
//     to_origin: Txyz, to_vectors: Txyz[]): number[][] {
//     const e1: three.Vector3 = new three.Vector3(from_vectors[0][0]).normalize();
//     const e2: three.Vector3 = new three.Vector3(from_vectors[0][1]).normalize();
//     const e3: three.Vector3 = new three.Vector3(from_vectors[0][2]).normalize();
//     const b1: three.Vector3 = new three.Vector3(to_vectors[0][0]).normalize();
//     const b2: three.Vector3 = new three.Vector3(to_vectors[0][1]).normalize();
//     const b3: three.Vector3 = new three.Vector3(to_vectors[0][2]).normalize();
//     if (e1.dot(e2) === 0) { throw new Error('Orthonormal initial basis required'); }
//     if (e1.dot(e3) === 0) { throw new Error('Orthonormal initial basis required'); }
//     if (e2.dot(e3) === 0) { throw new Error('Orthonormal initial basis required'); }
//     if (b1.dot(b2) === 0) { throw new Error('Orthonormal initial basis required'); }
//     if (b1.dot(b3) === 0) { throw new Error('Orthonormal initial basis required'); }
//     if (b2.dot(b3) === 0) { throw new Error('Orthonormal initial basis required'); }
//     const matrix: three.Matrix3 = new three.Matrix3();
//     matrix.set(e1.dot(b1), e1.dot(b2), e1.dot(b3),
//     e2.dot(b1), e2.dot(b2), e2.dot(b3),
//     e3.dot(b1), e3.dot(b2), e3.dot(b3));
//     const t_x: number = to_origin[0] - from_origin[0];
//     const t_y: number = to_origin[1] - from_origin[1];
//     const t_z: number = to_origin[2] - from_origin[2];
//     return [[e1.dot(b1), e1.dot(b2), e1.dot(b3), t_x],
//     [e2.dot(b1), e2.dot(b2), e2.dot(b3), t_y],
//     [e3.dot(b1), e3.dot(b2), e3.dot(b3), t_z],
//     [0, 0, 0, 1]];
// }
// export function scaleMatrix(plane: TPlane, factor: Txyz): three.Matrix4 {
//     // scale matrix
//     const matrix_scale: three.Matrix4 = new three.Matrix4();
//     matrix_scale.makeScale(factor[0], factor[1], factor[2]);
//     // xform matrix
//     const matrix_xform1: three.Matrix4 = _xformMatrixFromXYZVectors(
//         plane[0], plane[1], plane[2], true);
//     const matrix_xform2: three.Matrix4 = _xformMatrixFromXYZVectors(
//         plane[0], plane[1], plane[2], false);
//     // final matrix
//     const xform_scale_xform: three.Matrix4 = matrix_xform2.multiply(matrix_scale.multiply(matrix_xform1));
//     // do the xform
//     return xform_scale_xform;
// }
// function _dotVectors(v1: three.Vector3, v2: three.Vector3): number {
//     return v1.dot(v2);
// }
// function _xformMatrixNeg(o: three.Vector3, x: three.Vector3, y: three.Vector3): three.Matrix4 {
//     const m1: three.Matrix4 = new three.Matrix4();
//     const o_neg: three.Vector3 = o.clone().negate();
//     m1.setPosition(o_neg);
//     const m2: three.Matrix4 = new three.Matrix4();
//     m2.makeBasis(x.normalize(), y.normalize(), _crossVectors(x, y, true));
//     m2.invert();
//     const m3: three.Matrix4 = new three.Matrix4();
//     // first translate to (0,0,0), then xform, so m1 x m2
//     m3.multiplyMatrices(m2, m1);
//     return m3;
// }
// function xformMatrixPos(o: three.Vector3, x: three.Vector3, y: three.Vector3): three.Matrix4 {
//     const m1: three.Matrix4 = new three.Matrix4();
//     m1.setPosition(o);
//     const m2: three.Matrix4 = new three.Matrix4();
//     m2.makeBasis(x.normalize(), y.normalize(), _crossVectors(x, y, true));
//     const m3: three.Matrix4 = new three.Matrix4();
//     // first xform, then translate to origin, so m1 x m2
//     m3.multiplyMatrices(m1, m2);
//     return m3;
// }
// function _xformMatrixFromXYZVectors(o: Txyz, xaxis: Txyz, xyplane: Txyz, neg: boolean): three.Matrix4 {
//     const x_vec: three.Vector3 = new three.Vector3(...xaxis).normalize();
//     const xyplane_vec: three.Vector3 = new three.Vector3(...xyplane).normalize();
//     const z_vec: three.Vector3 = _crossVectors(x_vec, xyplane_vec);
//     const y_vec: three.Vector3 = _crossVectors(z_vec, x_vec);
//     if (neg) {
//         return _xformMatrixNeg(new three.Vector3(...o), x_vec, y_vec);
//     }
//     return xformMatrixPos(new three.Vector3(...o), x_vec, y_vec);
// }
// export function xfromSourceTargetMatrix(source_plane: TPlane, target_plane: TPlane): three.Matrix4 {
//     // matrix to xform from source to gcs, then from gcs to target
//     const matrix_source_to_gcs: three.Matrix4 = _xformMatrixFromXYZVectors(
//         source_plane[0], source_plane[1], source_plane[2], true);
//     const matrix_gcs_to_target: three.Matrix4 = _xformMatrixFromXYZVectors(
//         target_plane[0], target_plane[1], target_plane[2], false);
//     // final matrix
//     const xform: three.Matrix4 = matrix_gcs_to_target.multiply(matrix_source_to_gcs);
//     // return the matrix
//     return xform;
// }
// function _crossVectors(v1: three.Vector3, v2: three.Vector3, norm: boolean = false): three.Vector3 {
//     const v3: three.Vector3 = new three.Vector3();
//     v3.crossVectors(v1, v2);
//     if (norm) { v3.normalize(); }
//     return v3;
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvbWF0cml4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsdUNBQThDO0FBSzlDLFNBQWdCLFVBQVUsQ0FBQyxHQUFTLEVBQUUsQ0FBZ0I7SUFDbEQsTUFBTSxFQUFFLEdBQWtCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQVcsQ0FBQyxDQUFDO0lBQzVELEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFVLENBQUM7QUFDaEMsQ0FBQztBQUpELGdDQUlDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLEtBQWE7SUFDdEMsTUFBTSxNQUFNLEdBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sTUFBTSxHQUFTLElBQUEsa0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsZUFBZTtJQUNmLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFhLElBQUEsaUJBQU8sRUFBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxrQkFBa0I7SUFDbEIsTUFBTSxhQUFhLEdBQWtCLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pELGFBQWEsQ0FBQyxHQUFHLENBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUMxQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxD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