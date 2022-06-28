"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listJoin = void 0;
/**
 * Joins two or more lists into a single list.
 *
 * If the arguments are not lists, then they will be converted into lists.
 *
 * This functions accepts any number of arguments. The values in the lists can have any datatype.
 *
 * @param lists Multiple lists.
 * @returns The combined list.
 * @example `list = listJoin([1, 2], [3, 4], [5, 6])`
 * @example_info Returns `[1, 2, 3, 4, 5, 6]`.
 *
 * @example `list = listJoin([1, 2, 3], 4)`
 * @example_info Returns `[1, 2, 3, 4]`.
 *
 * @example `list = listJoin(1, 2, 3)`
 * @example_info Returns `[1, 2, 3]`.
 *
 * @example `list = listJoin(1, [2, 3], [[4, 5, 6]])`
 * @example_info Returns `[1, 2, 3, [4, 5, 6]]`.
 */
function listJoin(...lists) {
    const new_list = [];
    for (let i = 0; i < arguments.length; i++) {
        const arg = arguments[i];
        if (Array.isArray(arg)) {
            for (const item of arg) {
                new_list.push(item);
            }
        }
        else {
            new_list.push(arg);
        }
    }
    return new_list;
}
exports.listJoin = listJoin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEpvaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2xpc3QvbGlzdEpvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ0YsU0FBZ0IsUUFBUSxDQUFDLEdBQUcsS0FBWTtJQUNyQyxNQUFNLFFBQVEsR0FBVSxFQUFFLENBQUM7SUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsTUFBTSxHQUFHLEdBQVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsRUFBRTtnQkFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtTQUNKO2FBQU07WUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0tBQ0o7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBYkEsNEJBYUEifQ==