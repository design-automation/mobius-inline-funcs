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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmUvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWMsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLENBQVM7SUFDdEUsSUFBSSxLQUFLLEVBQUU7UUFDUCxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQztJQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFDRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBYyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTztJQUMxRCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsT0FBTyxPQUFPLEVBQUUsS0FBSyxRQUFRLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVE7UUFDakYsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFDRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTztJQUM5RCxJQUFJLEtBQUssRUFBRTtRQUNQLFlBQVksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxPQUFPLEVBQUUsS0FBSyxRQUFRLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVE7UUFDakYsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ3pCLENBQUMifQ==