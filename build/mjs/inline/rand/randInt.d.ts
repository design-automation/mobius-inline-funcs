/**
 * Returns a random integer in the specified range.
 * If `seed` is set: Returns a random integer in the specified range, given a numeric seed.
 * @param min The minimum integer (inclusive).
 * @param max The maximum integer (exclusive).
 * @param seed (Optional) A number. If a seed is given, the result will be the same for the same seed.
 * @returns An integer.
 */
export declare function randInt(min: number, max: number, seed?: number): number;
