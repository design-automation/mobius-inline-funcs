/**
 * Maps a number from the d1 domain to the d2 domain.
 * \n
 * This can be thought of as a percentage.
 * The percentage of num in d1's range is calculated,
 * then used to find the equivalent value for num in d2.
 * \n
 * ```
 * remap(10, [0, 100], [100,200]) // 10 is 10% of 0-100. Hence, 10% of 100-200 is 110.
 * remap(40, [20, 80], [0, 30])   // 40 is 33.3% of 20-80. Hence, 33.3% of 0-30 is 10.
 * ```
 * @param num The number/integer to be remapped.
 * @param d1 A list of two numbers, representing the first domain.
 * @param d2 A list of two numbers, representing the second domain.
 * @returns The remapped number.
 */
export function remap(num, d1, d2) {
    if (Array.isArray(num)) {
        return num.map(num_val => remap(num_val, d1, d2));
    }
    return (d2[0] +
        (((num - d1[0]) / (d1[1] - d1[0])) * (d2[1] - d2[0])));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2FyaXRobWV0aWMvcmVtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0YsTUFBTSxVQUFVLEtBQUssQ0FBQyxHQUFvQixFQUFFLEVBQVksRUFBRSxFQUFZO0lBQ25FLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFhLENBQUM7S0FBRTtJQUMxRixPQUFPLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNWLENBQ0ksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN0RCxDQUNKLENBQUM7QUFDTixDQUFDIn0=