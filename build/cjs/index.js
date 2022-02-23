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
exports.InlineClass = exports.arithmetic = exports.util = exports.constants = exports.conversion = exports.colors = exports.set = exports.dict = exports.common = exports.list = exports.geometry = exports.plane = exports.ray = exports.vec = exports.rand = exports.strs = exports.types = exports.mathjs = exports.math = exports.inline_func = exports.inlineVarString = void 0;
const arithmetic = __importStar(require("./inline/arithmetic"));
exports.arithmetic = arithmetic;
const colors = __importStar(require("./inline/colors"));
exports.colors = colors;
const common = __importStar(require("./inline/common"));
exports.common = common;
const constants = __importStar(require("./inline/constants"));
exports.constants = constants;
const conversion = __importStar(require("./inline/conversion"));
exports.conversion = conversion;
const dict = __importStar(require("./inline/dict"));
exports.dict = dict;
const geometry = __importStar(require("./inline/geometry"));
exports.geometry = geometry;
const inline_1 = require("./inline/inline");
Object.defineProperty(exports, "inline_func", { enumerable: true, get: function () { return inline_1.inline_func; } });
Object.defineProperty(exports, "inlineVarString", { enumerable: true, get: function () { return inline_1.inlineVarString; } });
const list = __importStar(require("./inline/list"));
exports.list = list;
const math = __importStar(require("./inline/math"));
exports.math = math;
const mathjs = __importStar(require("./inline/mathjs"));
exports.mathjs = mathjs;
const plane = __importStar(require("./inline/plane"));
exports.plane = plane;
const rand = __importStar(require("./inline/rand"));
exports.rand = rand;
const ray = __importStar(require("./inline/ray"));
exports.ray = ray;
const set = __importStar(require("./inline/set"));
exports.set = set;
const strs = __importStar(require("./inline/strs"));
exports.strs = strs;
const types = __importStar(require("./inline/types"));
exports.types = types;
const util = __importStar(require("./inline/util"));
exports.util = util;
const vec = __importStar(require("./inline/vec"));
exports.vec = vec;
class InlineClass {
    constructor(debug) {
        this.constants = Object.assign({}, constants);
        this.__debug__ = (debug !== false) ? true : debug;
        this.arithmetic = new arithmetic.arithmeticClass(debug);
        this.colors = new colors.colorsClass(debug);
        this.common = new common.commonClass(debug);
        this.conversion = new conversion.conversionClass(debug);
        this.dict = new dict.dictClass(debug);
        this.geometry = new geometry.geometryClass(debug);
        this.list = new list.listClass(debug);
        this.math = new math.mathClass(debug);
        this.mathjs = new mathjs.mathjsClass(debug);
        this.plane = new plane.planeClass(debug);
        this.rand = new rand.randClass(debug);
        this.ray = new ray.rayClass(debug);
        this.set = new set.setClass(debug);
        this.strs = new strs.strsClass(debug);
        this.types = new types.typesClass(debug);
        this.util = new util.utilClass(debug);
        this.vec = new vec.vecClass(debug);
    }
}
exports.InlineClass = InlineClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUFrRDtBQXdEMUMsZ0NBQVU7QUF2RGxCLHdEQUEwQztBQStDbEMsd0JBQU07QUE5Q2Qsd0RBQTBDO0FBd0NsQyx3QkFBTTtBQXZDZCw4REFBZ0Q7QUFpRHhDLDhCQUFTO0FBaERqQixnRUFBa0Q7QUE4QzFDLGdDQUFVO0FBN0NsQixvREFBc0M7QUF1QzlCLG9CQUFJO0FBdENaLDREQUE4QztBQWdDdEMsNEJBQVE7QUEvQmhCLDRDQUErRDtBQWF0Qyw0RkFiaEIsb0JBQVcsT0FhZ0I7QUFBNUIsZ0dBYmMsd0JBQWUsT0FhZDtBQVp2QixvREFBc0M7QUFnQzlCLG9CQUFJO0FBL0JaLG9EQUFzQztBQWE5QixvQkFBSTtBQVpaLHdEQUEwQztBQWNsQyx3QkFBTTtBQWJkLHNEQUF3QztBQXlCaEMsc0JBQUs7QUF4QmIsb0RBQXNDO0FBa0I5QixvQkFBSTtBQWpCWixrREFBb0M7QUFxQjVCLGtCQUFHO0FBcEJYLGtEQUFvQztBQWdDNUIsa0JBQUc7QUEvQlgsb0RBQXNDO0FBYTlCLG9CQUFJO0FBWlosc0RBQXdDO0FBVWhDLHNCQUFLO0FBVGIsb0RBQXNDO0FBcUM5QixvQkFBSTtBQXBDWixrREFBb0M7QUFjNUIsa0JBQUc7QUEwQlgsTUFBYSxXQUFXO0lBd0JwQixZQUFZLEtBQWU7UUFKM0IsY0FBUyxxQkFDRCxTQUFTLEVBQ2hCO1FBR0csSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFFL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQztDQUNKO0FBN0NELGtDQTZDQyJ9