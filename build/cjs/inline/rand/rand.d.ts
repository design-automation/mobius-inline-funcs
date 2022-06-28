/**
 * Returns a random number in the specified range.
 * If `seed` is set: Returns a random number (with decimals) in the specified range, given a numeric seed.
 * @param min The minimum number (inclusive).
 * @param max The maximum number (exclusive).
 * @param seed (Optional) If a seed is given, the result will be the same for the same seed.
 * @returns A number (with decimals).
 */
export declare function rand(min: number, max: number, seed?: number): number;
