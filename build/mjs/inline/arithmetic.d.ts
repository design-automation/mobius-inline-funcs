/**
 * Maps a number from the d1 domain to the d2 domain.
 * @param num
 * @param d1
 * @param d2
 */
export declare function remap(debug: boolean, num: number | number[], d1: number[], d2: number[]): number | number[];
export declare class arithmeticClass {
    __debug__: boolean;
    constructor(debug: boolean);
    remap(num: any, d1: any, d2: any): number | number[];
}
