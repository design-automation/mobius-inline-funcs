import * as arithmetic from './inline/arithmetic';
import * as colors from './inline/colors';
import * as common from './inline/common';
import * as constants from './inline/constants';
import * as conversion from './inline/conversion';
import * as dict from './inline/dict';
import * as geometry from './inline/geometry';
import { inline_func } from './inline/inline';
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

export { inline_func};

export {math};

export {mathjs};

export {types};

export {strs};

export {rand};

export {vec};

export {ray};

export {plane};

export {geometry};

export {list};

export {common};

export {dict};

export {set};

export {colors};

export {conversion};

export {constants};

export {util};

export {arithmetic};

export class InlineClass {
    __debug__: boolean

    arithmetic: arithmetic.arithmeticClass
    colors: colors.colorsClass
    common: common.commonClass
    conversion: conversion.conversionClass
    dict: dict.dictClass
    geometry: geometry.geometryClass
    list: list.listClass
    math: math.mathClass
    mathjs: mathjs.mathjsClass
    plane: plane.planeClass
    rand: rand.randClass
    ray: ray.rayClass
    set: set.setClass
    strs: strs.strsClass
    types: types.typesClass
    util: util.utilClass
    vec: vec.vecClass
    constants = {
        ... constants
    }

    constructor(debug?: boolean) {
        this.__debug__ = (debug !== false)? true: debug

        this.arithmetic = new arithmetic.arithmeticClass(debug)
        this.colors = new colors.colorsClass(debug)
        this.common = new common.commonClass(debug)
        this.conversion = new conversion.conversionClass(debug)
        this.dict = new dict.dictClass(debug)
        this.geometry = new geometry.geometryClass(debug)
        this.list = new list.listClass(debug)
        this.math = new math.mathClass(debug)
        this.mathjs = new mathjs.mathjsClass(debug)
        this.plane = new plane.planeClass(debug)
        this.rand = new rand.randClass(debug)
        this.ray = new ray.rayClass(debug)
        this.set = new set.setClass(debug)
        this.strs = new strs.strsClass(debug)
        this.types = new types.typesClass(debug)
        this.util = new util.utilClass(debug)
        this.vec = new vec.vecClass(debug)
    }
}