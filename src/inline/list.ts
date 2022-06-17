import { listCopy } from './list/listCopy';
import { listCount } from './list/listCount';
import { listCull } from './list/listCull';
import { listEq } from './list/listEq';
import { listFind } from './list/listFind';
import { listFlat } from './list/listFlat';
import { listGet } from './list/listGet';
import { listHas } from './list/listHas';
import { listJoin } from './list/listJoin';
import { listRep } from './list/listRep';
import { listRev } from './list/listRev';
import { listRot } from './list/listRot';
import { listSlice } from './list/listSlice';
import { listSort } from './list/listSort';
import { listZip } from './list/listZip';
import { range } from './list/range';

export { listCopy };
export { listCount };
export { listCull };
export { listEq };
export { listFind };
export { listFlat };
export { listGet };
export { listHas };
export { listJoin };
export { listRep };
export { listRev };
export { listRot };
export { listSlice };
export { listSort };
export { listZip };
export { range };

import { checkListsSameLen, checkNumArgs_noDebug } from '../_check_inline_args';
import * as chk from '../_check_types';

/**
 * list functions that obtain and return information from an input list. Does not modify input list.
 */
export class listClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }
    listCopy(list: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCopy', arguments, 1);
            chk.checkArgs('listCopy', 'list', list, [chk.isList]);
        }
        return listCopy(list);
    }
    listCount(list: any[], val: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCount', arguments, 2);
            chk.checkArgs('listCount', 'list', list, [chk.isList]);
        }
        return listCount(list, val);
    }
    listCull(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listCull', arguments, 2, 1);
            chk.checkArgs('listCull', 'list1', list1, [chk.isList]);
            if (list2 !== undefined) { chk.checkArgs('listCull', 'list2', list2, [chk.isList]); }
        }
        return listCull(list1, list2);
    }
    listEq(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listEq', arguments, 2);
            chk.checkArgs('listEq', 'list1', list1, [chk.isList]);
            chk.checkArgs('listEq', 'list2', list2, [chk.isList]);
        }
        return listEq(list1, list2);
    }
    listFind(list: any[], val: string) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listFind', arguments, 2);
            chk.checkArgs('listFind', 'list', list, [chk.isList]);
        }
        return listFind(list, val);
    }
    listFlat(list: any[], depth: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listFlat', arguments, 2, 1);
            chk.checkArgs('listFlat', 'list', list, [chk.isList]);
            if (depth !== undefined) { chk.checkArgs('listFlat', 'depth', depth, [chk.isInt]); }
        }
        return listFlat(list, depth);
    }
    listGet(list: any[], idx: number | number[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listGet', arguments, 2);
            chk.checkArgs('listGet', 'list', list, [chk.isList]);
            chk.checkArgs('listGet', 'index', idx, [chk.isInt, chk.isIntL]);
        }
        return listGet(list, idx);
    }
    listHas(list: any[], val: undefined) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listHas', arguments, 2);
            chk.checkArgs('listHas', 'list', list, [chk.isList]);
        }
        return listHas(list, val);
    }
    listJoin(...lists: any[]) {
        if (this.__debug__) {
            // nothing to check
        }
        return listJoin(...lists);
    }
    listRep(list: number[], n: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRep', arguments, 2);
            chk.checkArgs('listRep', 'n', n, [chk.isInt]);
        }
        return listRep(list, n);
    }
    listRev(list: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRev', arguments, 1);
            chk.checkArgs('listRev', 'list', list, [chk.isList]);
        }
        return listRev(list);
    }
    listRot(list: any[], rot: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listRot', arguments, 2);
            chk.checkArgs('listRot', 'list', list, [chk.isList]);
            chk.checkArgs('listRot', 'rot', rot, [chk.isInt]);
        }
        return listRot(list, rot);
    }
    listSlice(list: any[], start: number, end: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listSlice', arguments, 3, 2);
            chk.checkArgs('listSlice', 'list', list, [chk.isList]);
            chk.checkArgs('listSlice', 'start', start, [chk.isInt]);
            if (end !== undefined) { chk.checkArgs('listSlice', 'end', end, [chk.isInt]); }
        }
        return listSlice(list, start, end);
    }
    listSort(list1: any[], list2: any[]) {
        if (this.__debug__) {
            checkNumArgs_noDebug('listSort', arguments, 2, 1);
            chk.checkArgs('listSort', 'list1', list1, [chk.isList]);
            if (list2 !== undefined) {
                chk.checkArgs('listSort', 'list2', list1, [chk.isList]);
                checkListsSameLen('listSort', arguments);
            }
        }
        return listSort(list1, list2);
    }
    listZip(list1: any[], list2: any[]) {
        if (this.__debug__) {
            if (list2 === undefined) {
                chk.checkArgs('listZip', 'list1', list1, [chk.isLList]);
            } else {
                chk.checkArgs('listZip', 'list1', list1, [chk.isList]);
                chk.checkArgs('listZip', 'list2', list2, [chk.isList]);
                checkListsSameLen('listZip', arguments);
            }
        }
        return listZip(list1, list2);
    }
    range(start: number, end: number, step: number) {
        if (this.__debug__) {
            checkNumArgs_noDebug('range', arguments, 3, 1);
            chk.checkArgs('range', 'start', start, [chk.isNum]);
            if (end !== undefined) { chk.checkArgs('range', 'end', end, [chk.isNum]); }
            if (step !== undefined) { chk.checkArgs('range', 'step', step, [chk.isNum]);    }
        }
        return range(start, end, step);
    }
}

