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
export function round(num, dec_pla = 0) {
    if (Array.isArray(num)) {
        return num.map(a_num => round(a_num, dec_pla));
    }
    num = num;
    if (dec_pla === 0) {
        return Math.round(num);
    }
    if (dec_pla > 0) {
        const dec = Math.pow(10, dec_pla);
        return Math.round(num * dec) / dec;
    }
    else {
        const dec = Math.pow(10, Math.abs(dec_pla));
        return Math.round(num / dec) * dec;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2FyaXRobWV0aWMvcm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLE1BQU0sVUFBVSxLQUFLLENBQUMsR0FBb0IsRUFBRSxPQUFPLEdBQUcsQ0FBQztJQUNwRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBYyxDQUFDO0tBQ2hFO0lBQ0QsR0FBRyxHQUFHLEdBQWEsQ0FBQztJQUNwQixJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FBRTtJQUM5QyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7UUFDYixNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUN0QztTQUFNO1FBQ0gsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ3RDO0FBQ0wsQ0FBQyJ9