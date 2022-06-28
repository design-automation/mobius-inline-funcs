import * as mathjs from 'mathjs';
import { _randWithSeed } from './common';
/**
 * Returns a random integer in the specified range.
 * If `seed` is set: Returns a random integer in the specified range, given a numeric seed.
 * @param min The minimum integer (inclusive).
 * @param max The maximum integer (exclusive).
 * @param seed (Optional) A number. If a seed is given, the result will be the same for the same seed.
 * @returns An integer.
 */
export function randInt(min, max, seed) {
    if (seed !== undefined) {
        return Math.floor(min + (_randWithSeed(seed) * (max - min)));
    }
    else {
        return mathjs.randomInt(min, max);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZEludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvcmFuZC9yYW5kSW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFekM7Ozs7Ozs7R0FPRztBQUNGLE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxJQUFhO0lBQzVELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoRTtTQUFNO1FBQ0gsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNyQztBQUNMLENBQUMifQ==