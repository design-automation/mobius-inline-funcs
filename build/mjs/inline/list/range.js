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
export function range(start, end, step) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2xpc3QvcmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNGLE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYSxFQUFFLEdBQVksRUFBRSxJQUFhO0lBQzdELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztLQUFFO0lBQ3pGLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUFFLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQUU7SUFDbEQsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0tBQUU7SUFDL0UsTUFBTSxHQUFHLEdBQVcsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNoQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDcEIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0I7SUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxFQUFFLENBQUM7S0FBRTtJQUN4QyxNQUFNLElBQUksR0FBYSxFQUFFLENBQUM7SUFDMUIsSUFBSSxPQUFPLEdBQVcsS0FBSyxDQUFDO0lBQzVCLE9BQU8sT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxPQUFPLEVBQUU7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQixPQUFPLElBQUksSUFBSSxDQUFDO0tBQ25CO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyJ9