import { checkNumArgs } from '../_check_inline_args';
/**
 * Returns true if the absolute difference between the two numbers is less than the tolerance, t
 * @param n1
 * @param n2
 * @param t
 */
export function isApprox(debug, n1, n2, t) {
    if (debug) {
        checkNumArgs('isApprox', arguments, 3);
    }
    return Math.abs(n1 - n2) < t;
}
/**
 * Returns v1 < v2 < v3.
 * @param v1
 * @param v2
 * @param v3
 */
export function isIn(debug, v1, v2, v3) {
    if (debug) {
        checkNumArgs('isIn', arguments, 3);
    }
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 < v2 && v2 < v3;
}
/**
 * Returns v1 <= v2 <= v3.
 * @param v1
 * @param v2
 * @param v3
 */
export function isWithin(debug, v1, v2, v3) {
    if (debug) {
        checkNumArgs('isWithin', arguments, 3);
    }
    return typeof v1 === 'number' && typeof v2 === 'number' && typeof v3 === 'number' &&
        v1 <= v2 && v2 <= v3;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3V0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5saW5lL191dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYyxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsQ0FBUztJQUN0RSxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUNEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLElBQUksQ0FBQyxLQUFjLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPO0lBQzFELElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLE9BQU8sRUFBRSxLQUFLLFFBQVEsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUTtRQUNqRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDdkIsQ0FBQztBQUNEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFjLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPO0lBQzlELElBQUksS0FBSyxFQUFFO1FBQ1AsWUFBWSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDMUM7SUFDRCxPQUFPLE9BQU8sRUFBRSxLQUFLLFFBQVEsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUTtRQUNqRixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDekIsQ0FBQyJ9