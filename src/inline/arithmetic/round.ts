/**
 * The value of the given number rounded to the nearest integer.
 * ```
 * round( 20.49); //  20
 * round( 20.5 ); //  21
 * round( 42   ); //  42
 * round(-20.5 ); // -20
 * round(-20.51); // -21
 * ```
 * 
 * @param num A number or list of numbers.
 * @param dec_pla An integer. Set as 0 by default. 
 * @returns An integer or list of integers. 
 */
 export function round(num: number|number[], dec_pla = 0): number|number[] {
    if (Array.isArray(num)) {
        return num.map( a_num => round(a_num, dec_pla) ) as number[];
    }
    num = num as number;
    if (dec_pla === 0) { return Math.round(num); }
    if (dec_pla > 0) {
        const dec: number = Math.pow(10, dec_pla);
        return Math.round(num * dec) / dec;
    } else {
        const dec: number = Math.pow(10, Math.abs(dec_pla));
        return Math.round(num / dec) * dec;
    }
}