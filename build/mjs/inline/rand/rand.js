import * as mathjs from 'mathjs';
import { _randWithSeed } from './common';
/**
 * Returns a random number in the specified range.
 * If `seed` is set: Returns a random number (with decimals) in the specified range, given a numeric seed.
 * @param min The minimum number (inclusive).
 * @param max The maximum number (exclusive).
 * @param seed (Optional) If a seed is given, the result will be the same for the same seed.
 * @returns A number (with decimals).
 */
export function rand(min, max, seed) {
    if (seed !== undefined) {
        return min + (_randWithSeed(seed) * (max - min));
    }
    else {
        return mathjs.random(min, max);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmFuZC9yYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFekM7Ozs7Ozs7R0FPRztBQUNGLE1BQU0sVUFBVSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQ3pELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQixPQUFPLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BEO1NBQU07UUFDSCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDO0FBQ0wsQ0FBQyJ9