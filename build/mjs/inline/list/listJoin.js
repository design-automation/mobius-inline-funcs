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
export function listJoin(...lists) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEpvaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2xpc3QvbGlzdEpvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ0YsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFHLEtBQVk7SUFDckMsTUFBTSxRQUFRLEdBQVUsRUFBRSxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZDLE1BQU0sR0FBRyxHQUFRLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7U0FDSjthQUFNO1lBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtLQUNKO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyJ9