import {XYPLANE, YZPLANE, ZXPLANE, YXPLANE, ZYPLANE, XZPLANE, XVEC, YVEC, ZVEC, OVEC, XRAY, YRAY, ZRAY} from '../libs/common';
// ================================================================================================
/**
 * The mathematical constant PI, `3.141...`.
 */
export const PI = Math.PI;
// ================================================================================================
/**
 * A plane at the origin, aligned with the XY plane, i.e. `[[0, 0, 0],[1, 0, 0],[0, 1, 0]]`.
 */
export const XY = XYPLANE;
// ================================================================================================
/**
 * A plane at the origin, aligned with the YZ plane, i.e. `[[0, 0, 0],[0, 1, 0],[0, 0, 1]]`.
 */
export const YZ = YZPLANE;
// ================================================================================================
/**
 * A plane at the origin, aligned with the ZX plane, i.e. `[[0, 0, 0],[0, 0, 1],[1, 0, 0]]`.
 */
export const ZX = ZXPLANE;
// ================================================================================================
/**
 * A plane at the origin, aligned with the YX plane, i.e. `[[0, 0, 0],[0, 1, 0],[1, 0, 0]]`.
 */
export const YX = YXPLANE;
// ================================================================================================
/**
 * A plane at the origin, aligned with the ZY plane, i.e. `[[0, 0, 0],[0, 0, 1],[0, 1, 0]]`.
 */
export const ZY = ZYPLANE;
// ================================================================================================
/**
 * A plane at the origin, aligned with the XZ plane, i.e. `[[0, 0, 0],[1, 0, 0],[0, 0, 1]]`.
 */
export const XZ = XZPLANE;
// ================================================================================================
/**
 * A vector `[1,0,0]`.
 */
 export const VX = XVEC;
/**
 * A vector `[0,1,0]`.
 */
 export const VY = YVEC;
 /**
 * A vector `[0,0,1]`.
 */
  export const VZ = ZVEC;
  /**
 * An origin `[0,0,0]`.
 */
 export const VO = OVEC;
 /**
 * A ray with an origin `[0, 0, 0]` and a direction `[1, 0, 0]`.
 */
export const RX = XRAY;
/**
 * A ray with an origin `[0, 0, 0]` and a direction `[0, 1, 0]`.
 */
export const RY = YRAY;
/**
 * A ray with an origin `[0, 0, 0]` and a direction `[0, 0, 1]`.
 */
export const RZ = ZRAY;