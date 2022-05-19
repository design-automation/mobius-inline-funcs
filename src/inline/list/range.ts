
/**
 * Generates a list of integers, from start to end, with a step size of 1.
 * If `step` has been set: Generates a list of integers, from start to end, with a specified step size.
 * ```
 * range(1, 6)        // [1, 2, 3, 4, 5]
 *```
 * @param start The start of the range, inclusive.
 * @param end (Optional) The end of the range, exclusive.
 * @param step (Optional) The step size.
 * @returns A list. 
 */
 export function range(start: number, end?: number, step?: number): number[] {
    if (start === undefined) { throw new Error('Invalid inline arg: min must be defined.'); }
    if (end === undefined) { end = start; start = 0; }
    if (step === 0) { throw new Error('Invalid inline arg: step must not be 0.'); }
    const len: number = end - start;
    if (step === undefined) {
        step = len > 0 ? 1 : -1;
    }
    const negStep = step < 0;
    if (len > 0 !== step > 0) { return []; }
    const list: number[] = [];
    let current: number = start;
    while (current !== end && (current < end) !== negStep) {
        list.push(current);
        current += step;
    }
    return list;
}