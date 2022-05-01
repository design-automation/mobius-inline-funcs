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
exports.InlineClass = exports.arithmetic = exports.util = exports.constants = exports.conversion = exports.colors = exports.set = exports.dict = exports.common = exports.list = exports.geometry = exports.plane = exports.ray = exports.vec = exports.rand = exports.strs = exports.types = exports.mathjs = exports.math = exports.inline_func = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUFrRDtBQXdEMUMsZ0NBQVU7QUF2RGxCLHdEQUEwQztBQStDbEMsd0JBQU07QUE5Q2Qsd0RBQTBDO0FBd0NsQyx3QkFBTTtBQXZDZCw4REFBZ0Q7QUFpRHhDLDhCQUFTO0FBaERqQixnRUFBa0Q7QUE4QzFDLGdDQUFVO0FBN0NsQixvREFBc0M7QUF1QzlCLG9CQUFJO0FBdENaLDREQUE4QztBQWdDdEMsNEJBQVE7QUEvQmhCLDRDQUE4QztBQWFyQyw0RkFiQSxvQkFBVyxPQWFBO0FBWnBCLG9EQUFzQztBQWdDOUIsb0JBQUk7QUEvQlosb0RBQXNDO0FBYTlCLG9CQUFJO0FBWlosd0RBQTBDO0FBY2xDLHdCQUFNO0FBYmQsc0RBQXdDO0FBeUJoQyxzQkFBSztBQXhCYixvREFBc0M7QUFrQjlCLG9CQUFJO0FBakJaLGtEQUFvQztBQXFCNUIsa0JBQUc7QUFwQlgsa0RBQW9DO0FBZ0M1QixrQkFBRztBQS9CWCxvREFBc0M7QUFhOUIsb0JBQUk7QUFaWixzREFBd0M7QUFVaEMsc0JBQUs7QUFUYixvREFBc0M7QUFxQzlCLG9CQUFJO0FBcENaLGtEQUFvQztBQWM1QixrQkFBRztBQTBCWCxNQUFhLFdBQVc7SUF3QnBCLFlBQVksS0FBZTtRQUozQixjQUFTLHFCQUNELFNBQVMsRUFDaEI7UUFHRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUUvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0NBQ0o7QUE3Q0Qsa0NBNkNDIn0=