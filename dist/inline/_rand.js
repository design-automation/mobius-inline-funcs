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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3JhbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5saW5lL19yYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsSUFBSSxDQUFDLEtBQWMsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLElBQWE7SUFDeEUsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekM7SUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDcEIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwRDtTQUFNO1FBQ0gsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNsQztBQUNMLENBQUM7QUFDRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWMsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLElBQWE7SUFDM0UsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDNUM7SUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEU7U0FBTTtRQUNILE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDckM7QUFDTCxDQUFDO0FBQ0Q7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFjLEVBQUUsSUFBVyxFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQzVFLElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzdDO0lBQ0QsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1FBQ1gsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDakQ7S0FDSjtJQUNELE1BQU0sU0FBUyxHQUFVLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBQ0Qsb0RBQW9EO0FBQ3BELFNBQVMsYUFBYSxDQUFDLENBQVM7SUFDNUIsa0dBQWtHO0lBQ2xHLDRCQUE0QjtJQUU1QixrRUFBa0U7SUFDbEUsK0ZBQStGO0lBQy9GLG9CQUFvQjtJQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsZ0RBQWdEO0lBQ2hELG1CQUFtQjtBQUN2QixDQUFDO0FBQ0QsU0FBUyxvQkFBb0IsQ0FBQyxHQUFVLEVBQUUsSUFBYTtJQUNuRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3JCLE9BQU8sR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNaLE1BQU0sQ0FBQyxHQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbkYsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUMsR0FBRyxFQUFFLENBQUM7UUFDTixNQUFNLElBQUksR0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ3JCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDIn0=