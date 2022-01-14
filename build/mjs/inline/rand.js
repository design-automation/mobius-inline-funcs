import * as mathjs from 'mathjs';
import { checkNumArgs } from '../_check_inline_args';
/**
 * Returns a random number in the specified range
 * Returns a random number in the specified range, given a numeric seed
 * @param min
 * @param max
 * @param seed
 */
export function rand(debug, min, max, seed) {
    if (debug) {
        checkNumArgs('rand', arguments, 3, 2);
    }
    if (seed !== undefined) {
        return min + (_randWithSeed(seed) * (max - min));
    }
    else {
        return mathjs.random(min, max);
    }
}
/**
 * Returns a random integer in the specified range
 * Returns a random integer in the specified range, given a numeric seed
 * @param min
 * @param max
 * @param seed
 */
export function randInt(debug, min, max, seed) {
    if (debug) {
        checkNumArgs('randInt', arguments, 3, 2);
    }
    if (seed !== undefined) {
        return Math.floor(min + (_randWithSeed(seed) * (max - min)));
    }
    else {
        return mathjs.randomInt(min, max);
    }
}
/**
 * Returns a random set of items from the list
 * Returns a random set of items from the list, given a numeric seed
 * @param list
 * @param num
 * @param seed
 */
export function randPick(debug, list, num, seed) {
    if (debug) {
        checkNumArgs('randPick', arguments, 3, 2);
    }
    if (num === 1) {
        const length = list.length;
        if (seed !== undefined) {
            return list[Math.floor(_randWithSeed(seed) * length)];
        }
        else {
            return list[mathjs.randomInt(0, list.length)];
        }
    }
    const list_copy = list.slice();
    _randShuffleWithSeed(list_copy, seed);
    return list_copy.slice(0, num);
}
// TODO is there a better random function than this?
function _randWithSeed(s) {
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
function _randShuffleWithSeed(arr, seed) {
    let ctr = arr.length;
    while (ctr > 0) {
        const r = (seed === undefined) ? Math.random() : _randWithSeed(ctr + seed);
        const index = Math.floor(r * ctr);
        ctr--;
        const temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
export class randClass {
    constructor(debug) {
        this.__debug__ = debug;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmxpbmUvcmFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLElBQUksQ0FBQyxLQUFjLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQ3hFLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3BCLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEQ7U0FBTTtRQUNILE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDbEM7QUFDTCxDQUFDO0FBQ0Q7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFjLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQzNFLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBQ0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hFO1NBQU07UUFDSCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxF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