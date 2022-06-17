import * as mathjs from 'mathjs';
import { _randShuffleWithSeed, _randWithSeed } from './common';

/**
 * Returns a random set of items from the list.
 * If `seed` is set: Returns a random set of items from the list, based on the numeric seed.
 * 
 * @param list A list. The set of items that can be returned. 
 * @param num  An integer. The number of items to return from the list. 
 * @param seed (Optional) A number. If a seed is given, the result will be the same for the same seed. 
 * @returns A list, or a value (if num is set to 1).
 */
 export function randPick(list: any[], num: number, seed?: number): number|number[] {
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