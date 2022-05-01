"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RZ = exports.RY = exports.RX = exports.VO = exports.VZ = exports.VY = exports.VX = exports.XZ = exports.ZY = exports.YX = exports.ZX = exports.YZ = exports.XY = exports.PI = void 0;
const common_1 = require("../libs/common");
/**
 * The mathematical constant PI, `3.141...`.
 */
exports.PI = Math.PI;
/**
 * A plane at the origin, aligned with the XY plane, i.e. `[[0, 0, 0],[1, 0, 0],[0, 1, 0]]`.
 */
exports.XY = common_1.XYPLANE;
/**
 * A plane at the origin, aligned with the YZ plane, i.e. `[[0, 0, 0],[0, 1, 0],[0, 0, 1]]`.
 */
exports.YZ = common_1.YZPLANE;
/**
 * A plane at the origin, aligned with the ZX plane, i.e. `[[0, 0, 0],[0, 0, 1],[1, 0, 0]]`.
 */
exports.ZX = common_1.ZXPLANE;
/**
 * A plane at the origin, aligned with the YX plane, i.e. `[[0, 0, 0],[0, 1, 0],[1, 0, 0]]`.
 */
exports.YX = common_1.YXPLANE;
/**
 * A plane at the origin, aligned with the ZY plane, i.e. `[[0, 0, 0],[0, 0, 1],[0, 1, 0]]`.
 */
exports.ZY = common_1.ZYPLANE;
/**
 * A plane at the origin, aligned with the XZ plane, i.e. `[[0, 0, 0],[1, 0, 0],[0, 0, 1]]`.
 */
exports.XZ = common_1.XZPLANE;
/**
 * A vector `[1, 0, 0]`.
 */
exports.VX = common_1.XVEC;
/**
 * A vector `[0, 1, 0]`.
 */
exports.VY = common_1.YVEC;
/**
* A vector `[0, 0, 1]`.
*/
exports.VZ = common_1.ZVEC;
/**
* An origin `[0, 0, 0]`.
*/
exports.VO = common_1.OVEC;
/**
* A ray with an origin `[0, 0, 0]` and a direction `[1, 0, 0]`.
*/
exports.RX = common_1.XRAY;
/**
 * A ray with an origin `[0, 0, 0]` and a direction `[0, 1, 0]`.
 */
exports.RY = common_1.YRAY;
/**
 * A ray with an origin `[0, 0, 0]` and a direction `[0, 0, 1]`.
 */
exports.RZ = common_1.ZRAY;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2lubGluZS9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThIO0FBQzlIOztHQUVHO0FBQ1UsUUFBQSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMxQjs7R0FFRztBQUNVLFFBQUEsRUFBRSxHQUFHLGdCQUFPLENBQUM7QUFDMUI7O0dBRUc7QUFDVSxRQUFBLEVBQUUsR0FBRyxnQkFBTyxDQUFDO0FBQzFCOztHQUVHO0FBQ1UsUUFBQSxFQUFFLEdBQUcsZ0JBQU8sQ0FBQztBQUMxQjs7R0FFRztBQUNVLFFBQUEsRUFBRSxHQUFHLGdCQUFPLENBQUM7QUFDMUI7O0dBRUc7QUFDVSxRQUFBLEVBQUUsR0FBRyxnQkFBTyxDQUFDO0FBQzFCOztHQUVHO0FBQ1UsUUFBQSxFQUFFLEdBQUcsZ0JBQU8sQ0FBQztBQUMxQjs7R0FFRztBQUNXLFFBQUEsRUFBRSxHQUFHLGFBQUksQ0FBQztBQUN4Qjs7R0FFRztBQUNXLFFBQUEsRUFBRSxHQUFHLGFBQUksQ0FBQztBQUN2Qjs7RUFFRTtBQUNZLFFBQUEsRUFBRSxHQUFHLGFBQUksQ0FBQztBQUN2Qjs7RUFFQztBQUNXLFFBQUEsRUFBRSxHQUFHLGFBQUksQ0FBQztBQUN2Qjs7RUFFRTtBQUNVLFFBQUEsRUFBRSxHQUFHLGFBQUksQ0FBQztBQUN2Qjs7R0FFRztBQUNVLFFBQUEsRUFBRSxHQUFHLGFBQUksQ0FBQztBQUN2Qjs7R0FFRztBQUNVLFFBQUEsRUFBRSxHQUFHLGFBQUksQ0FBQyJ9