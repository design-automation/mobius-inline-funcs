/**
 * Set functions for working with sets, using lists as a data structure. Does not modify input list.
 */

import { checkNumArgs_noDebug } from '../_check_inline_args';
import * as chk from '../_check_types';

import { setMake } from './set/setMake';
import { setUni } from './set/setUni';
import { setInt } from './set/setInt';
import { setDif } from './set/setDif';

export { setMake }
export { setUni }
export { setInt }
export { setDif }
export class setClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    setMake(list: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setMake', arguments, 1);
            chk.checkArgs('setMake', 'list', list, [chk.isList]);
        }
        return setMake(list);
    }

    setUni(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setUni', arguments, 2);
            chk.checkArgs('setUni', 'list1', list1, [chk.isList]);
            chk.checkArgs('setUni', 'list2', list2, [chk.isList]);
        }
        return setUni(list1, list2);
    }

    setInt(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setInt', arguments, 2);
            chk.checkArgs('setInt', 'list1', list1, [chk.isList]);
            chk.checkArgs('setInt', 'list2', list2, [chk.isList]);
        }
        return setInt(list1, list2);
    }

    setDif(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('setDif', arguments, 2);
            chk.checkArgs('setDif', 'list1', list1, [chk.isList]);
            chk.checkArgs('setDif', 'list2', list2, [chk.isList]);
        }
        return setDif(list1, list2);
    }
}

