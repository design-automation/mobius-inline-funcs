"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
/**
 * Generates a list of integers, from 0 to `end` (exclusive), with a step size of 1.
 * If `start` has been set: Generates a list of integers, from start (inclusive) to `end` (exclusive), with a step size of 1.
 * If `start` and `step` has been set: Generates a list of integers, from start to end, with a specified step size.
 * ```
 * range(3)           // [0, 1, 2]
 * range(2, 6)        // [2, 3, 4, 5]
 * range(1, 9, 2)     // [1, 3, 5, 7]
 *```
 * @param start (Optional) An integer. The start of the range, inclusive.
 * @param end An integer. The end of the range, exclusive.
 * @param step (Optional) An integer. The step size.
 * @returns A list.
 */
function range(start, end, step) {
    if (start === undefined) {
        throw new Error('Invalid inline arg: min must be defined.');
    }
    if (end === undefined) {
        end = start;
        start = 0;
    }
    if (step === 0) {
        throw new Error('Invalid inline arg: step must not be 0.');
    }
    const len = end - start;
    if (step === undefined) {
        step = len > 0 ? 1 : -1;
    }
    const negStep = step < 0;
    if (len > 0 !== step > 0) {
        return [];
    }
    const list = [];
    let current = start;
    while (current !== end && (current < end) !== negStep) {
        list.push(current);
        current += step;
    }
    return list;
}
exports.range = range;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2xpc3QvcmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLFNBQWdCLEtBQUssQ0FBQyxLQUFhLEVBQUUsR0FBWSxFQUFFLElBQWE7SUFDN0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0tBQUU7SUFDekYsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7S0FBRTtJQUNsRCxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7S0FBRTtJQUMvRSxNQUFNLEdBQUcsR0FBVyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjtJQUNELE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7SUFDekIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEVBQUUsQ0FBQztLQUFFO0lBQ3hDLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztJQUMxQixJQUFJLE9BQU8sR0FBVyxLQUFLLENBQUM7SUFDNUIsT0FBTyxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLE9BQU8sRUFBRTtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUM7S0FDbkI7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBakJBLHNCQWlCQSJ9