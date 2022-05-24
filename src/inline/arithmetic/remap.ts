/**
 * Maps a number from the d1 domain to the d2 domain. 
 * \n
 * This can be thought of as a percentage. 
 * The percentage of num in d1's range is calculated, 
 * then used to find the equivalent value for num in d2. 
 * \n
 * ```
 * remap(10, [0, 100], [100,200]) // 10 is 10% of 0-100. Hence, 10% of 100-200 is 110.
 * remap(40, [20, 80], [0, 30])   // 40 is 33.3% of 20-80. Hence, 33.3% of 0-30 is 10.
 * ```
 * @param num The number/integer to be remapped. 
 * @param d1 A list of two numbers, representing the first domain.
 * @param d2 A list of two numbers, representing the second domain.
 * @returns The remapped number.
 */
 export function remap(num: number|number[], d1: number[], d2: number[]): number|number[] {
    if (Array.isArray(num)) { return num.map(num_val => remap(num_val, d1, d2)) as number[]; }
    return ( d2[0] +
        (
            ((num - d1[0]) / (d1[1] - d1[0])) * (d2[1] - d2[0])
        )
    );
}