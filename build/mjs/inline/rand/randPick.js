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
export function randPick(list, num, seed) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZFBpY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3JhbmQvcmFuZFBpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUvRDs7Ozs7Ozs7R0FRRztBQUNGLE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBVyxFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQzdELElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNYLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO0tBQ0o7SUFDRCxNQUFNLFNBQVMsR0FBVSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQyJ9