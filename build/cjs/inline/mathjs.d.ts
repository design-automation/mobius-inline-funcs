/**
 * To be completed...
 * @param val
 */
export declare function boolean(debug: boolean, val: number): any;
/**
 * To be completed...
 * @param val
 */
export declare function number(debug: boolean, val: number): any;
/**
 * To be completed...
 * @param val
 */
export declare function string(debug: boolean, val: number): any;
/**
 * Returns the median absolute deviation of the list
 * @param list
 */
export declare function mad(debug: boolean, list: number[]): any;
/**
 * Returns the mean value of the list
 * @param list
 */
export declare function mean(debug: boolean, list: number): any;
/**
 * Returns the median of the list
 * @param list
 */
export declare function median(debug: boolean, list: number): any;
/**
 * Returns the mode of the list
 * @param list
 */
export declare function mode(debug: boolean, list: number): any;
/**
 * Returns the product of all values in a list
 * @param list
 */
export declare function prod(debug: boolean, list: number): any;
/**
 * Returns the standard deviation of the list
 * @param list
 */
export declare function std(debug: boolean, list: number[]): any;
/**
 * Returns the variance of the list
 * @param list
 */
export declare function vari(debug: boolean, list: number): any;
/**
 * Returns the sum of all values in a list
 * @param list
 */
export declare function sum(debug: boolean, list: number): any;
/**
 * Returns the hypotenuse of all values in a list
 * @param list
 */
export declare function hypot(debug: boolean, list: number): any;
/**
 * Returns the norm of a list
 * @param list
 */
export declare function norm(debug: boolean, list: number): any;
/**
 * Returns the square of the number
 * @param list
 */
export declare function square(debug: boolean, list: number): any;
/**
 * Returns the cube of the number
 * @param list
 */
export declare function cube(debug: boolean, list: number): any;
export declare class mathjsClass {
    __debug__: boolean;
    constructor(debug: boolean);
    boolean(val: any): any;
    number(val: any): any;
    string(val: any): any;
    mad(list: any): any;
    mean(list: any): any;
    median(list: any): any;
    mode(list: any): any;
    prod(list: any): any;
    std(list: any): any;
    vari(list: any): any;
    sum(list: any): any;
    hypot(list: any): any;
    norm(list: any): any;
    square(list: any): any;
    cube(list: any): any;
}