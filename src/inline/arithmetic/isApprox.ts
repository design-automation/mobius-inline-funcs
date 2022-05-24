/**
 * Returns true if the absolute difference between the two numbers is less than the tolerance, t.
 * @param n1 The first number.
 * @param n2 The second number.
 * @param t The tolerance, a number.
 * @returns True or False.
 */
 export function isApprox(n1: number, n2: number, t: number) {
    return Math.abs(n1 - n2) < t;
}