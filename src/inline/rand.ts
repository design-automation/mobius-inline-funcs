import * as mathjs from 'mathjs';

import { checkNumArgs } from '../_check_inline_args';

/**
 * Returns a random number in the specified range.
 * If `seed` is set: Returns a random number (with decimals) in the specified range, given a numeric seed.
 * @param min The minimum number (inclusive).
 * @param max The maximum number (exclusive).
 * @param seed (Optional) If a seed is given, the result will be the same for the same seed. 
 * @returns A number (with decimals).
 */
export function rand(debug: boolean, min: number, max: number, seed?: number): number {
    if (debug) {
        checkNumArgs('rand', arguments, 3, 2);
    }
    if (seed !== undefined) {
        return min + (_randWithSeed(seed) * (max - min));
    } else {
        return mathjs.random(min, max);
    }
}
/**
 * Returns a random integer in the specified range.
 * If `seed` is set: Returns a random integer in the specified range, given a numeric seed.
 * @param min The minimum integer (inclusive).
 * @param max The maximum integer (exclusive).
 * @param seed (Optional) A number. If a seed is given, the result will be the same for the same seed. 
 * @returns An integer. 
 */
export function randInt(debug: boolean, min: number, max: number, seed?: number): number {
    if (debug) {
        checkNumArgs('randInt', arguments, 3, 2);
    }
    if (seed !== undefined) {
        return Math.floor(min + (_randWithSeed(seed) * (max - min)));
    } else {
        return mathjs.randomInt(min, max);
    }
}
/**
 * Returns a random set of items from the list.
 * If `seed` is set: Returns a random set of items from the list, based on the numeric seed.
 * 
 * @param list A list. The set of items that can be returned. 
 * @param num  An integer. The number of items to return from the list. 
 * @param seed (Optional) A number. If a seed is given, the result will be the same for the same seed. 
 * @returns A list, or a value (if num is set to 1).
 */
export function randPick(debug: boolean, list: any[], num: number, seed?: number): number|number[] {
    if (debug) {
        checkNumArgs('randPick', arguments, 3, 2);
    }
    if (num === 1) {
        const length: number = list.length;
        if (seed !== undefined) {
            return list[Math.floor(_randWithSeed(seed) * length)];
        } else {
            return list[mathjs.randomInt(0, list.length)];
        }
    }
    const list_copy: any[] = list.slice();
    _randShuffleWithSeed(list_copy, seed);
    return list_copy.slice(0, num);
}
// TODO is there a better random function than this?
function _randWithSeed(s: number): number {
    // const x = (Math.sin(s) + Math.sin(s * Math.E / 2) + Math.sin((s + 1) * (Math.PI / 3))) * 10000;
    // return x - Math.floor(x);

    // return (Math.sin(s / 2 + 1) + Math.cos(s + 2) * 5) * 10000 % 1;
    // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
    /* tslint:disable */
    var x = Math.sin(s++) * 10000;
    return x - Math.floor(x);
    //return (2**31-1&(s=Math.imul(48271,s)))/2**31;
    /* tslint:enable */
}
function _randShuffleWithSeed(arr: any[], seed?: number) {
    let ctr = arr.length;
    while (ctr > 0) {
        const r: number = (seed === undefined) ? Math.random() : _randWithSeed(ctr + seed);
        const index: number = Math.floor(r * ctr);
        ctr--;
        const temp: number = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}


export class randClass {
    __debug__: boolean
    constructor(debug: boolean) {
        this.__debug__ = debug
    }

    rand(min, max, seed) {
        return rand(this.__debug__, min, max, seed);
    }

    randInt(min, max, seed) {
        return randInt(this.__debug__, min, max, seed);
    }

    randPick(list, num, seed) {
        return randPick(this.__debug__, list, num, seed);
    }
}

