import * as arithmetic from './inline/arithmetic';
import * as colors from './inline/colors';
import * as common from './inline/common';
import * as constants from './inline/constants';
import * as conversion from './inline/conversion';
import * as dict from './inline/dict';
import * as geometry from './inline/geometry';
import { inline_func, inlineVarString } from './inline/inline';
import * as list from './inline/list';
import * as math from './inline/math';
import * as mathjs from './inline/mathjs';
import * as plane from './inline/plane';
import * as rand from './inline/rand';
import * as ray from './inline/ray';
import * as set from './inline/set';
import * as strs from './inline/strs';
import * as types from './inline/types';
import * as util from './inline/util';
import * as vec from './inline/vec';
export { inlineVarString, inline_func };
export { math };
export { mathjs };
export { types };
export { strs };
export { rand };
export { vec };
export { ray };
export { plane };
export { geometry };
export { list };
export { common };
export { dict };
export { set };
export { colors };
export { conversion };
export { constants };
export { util };
export { arithmetic };
export class InlineClass {
    constructor(debug) {
        this.constants = {
            ...constants
        };
        this.__debug__ = debug;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxLQUFLLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEtBQUssVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sS0FBSyxJQUFJLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxLQUFLLElBQUksTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxLQUFLLEdBQUcsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxLQUFLLEdBQUcsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxLQUFLLElBQUksTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxLQUFLLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssR0FBRyxNQUFNLGNBQWMsQ0FBQztBQUVwQyxPQUFPLEVBQUMsZUFBZSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBRXRDLE9BQU8sRUFBQyxJQUFJLEVBQUMsQ0FBQztBQUVkLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztBQUVoQixPQUFPLEVBQUMsS0FBSyxFQUFDLENBQUM7QUFFZixPQUFPLEVBQUMsSUFBSSxFQUFDLENBQUM7QUFFZCxPQUFPLEVBQUMsSUFBSSxFQUFDLENBQUM7QUFFZCxPQUFPLEVBQUMsR0FBRyxFQUFDLENBQUM7QUFFYixPQUFPLEVBQUMsR0FBRyxFQUFDLENBQUM7QUFFYixPQUFPLEVBQUMsS0FBSyxFQUFDLENBQUM7QUFFZixPQUFPLEVBQUMsUUFBUSxFQUFDLENBQUM7QUFFbEIsT0FBTyxFQUFDLElBQUksRUFBQyxDQUFDO0FBRWQsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO0FBRWhCLE9BQU8sRUFBQyxJQUFJLEVBQUMsQ0FBQztBQUVkLE9BQU8sRUFBQyxHQUFHLEVBQUMsQ0FBQztBQUViLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQztBQUVoQixPQUFPLEVBQUMsVUFBVSxFQUFDLENBQUM7QUFFcEIsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFDO0FBRW5CLE9BQU8sRUFBQyxJQUFJLEVBQUMsQ0FBQztBQUVkLE9BQU8sRUFBQyxVQUFVLEVBQUMsQ0FBQztBQUVwQixNQUFNLE9BQU8sV0FBVztJQXdCcEIsWUFBWSxLQUFjO1FBSjFCLGNBQVMsR0FBRztZQUNSLEdBQUksU0FBUztTQUNoQixDQUFBO1FBR0csSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQztDQUNKIn0=