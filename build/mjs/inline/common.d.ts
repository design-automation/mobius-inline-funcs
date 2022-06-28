/**
 * Functions shared by lists, dicts, strings.
 */
/**
 * Returns the number of items in a list, a dictionary, or a string.
 * @param data The list, dictionary, or string.
 * @returns An integer.
 */
export declare function len(debug: boolean, data: any): number;
/**
 * Makes a deep copy of a list or a dictionary.
 * @param data A list or dictionary.
 * @returns The deep copy.
 */
export declare function copy(debug: boolean, data: any): any;
/**
 * Returns true of the two lists or dictionaries are equal.
 * Performs a deep comparison between values to determine if they are equivalent.
 * @param data The list or dictionary.
 * @returns True or False.
 */
export declare function equal(debug: boolean, data1: any, data2: any): boolean;
export declare class commonClass {
    __debug__: boolean;
    constructor(debug: boolean);
    len(data: any): number;
    copy(data: any): any;
    equal(data1: any, data2: any): boolean;
}
