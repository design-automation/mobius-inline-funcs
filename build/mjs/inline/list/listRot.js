/**
 * Return a list that is rotated, i.e. items from the end of the list are moved to the start of the list.
 * For a positive rotation, items are moved from the end to the start of the list.
 * For a negative rotation, items are moved from the start to the end of the list.
 *
 * @param list The list.
 * @param rot The number of items to rotate, an integer.
 * @returns The rotated list.
 */
export function listRot(list, rot) {
    const len = list.length;
    const split = (len - rot) % len;
    const start = list.slice(split, len);
    const end = list.slice(0, split);
    return start.concat(end);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdFJvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvbGlzdC9saXN0Um90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7OztHQVFHO0FBQ0YsTUFBTSxVQUFVLE9BQU8sQ0FBQyxJQUFXLEVBQUUsR0FBVztJQUM3QyxNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hDLE1BQU0sS0FBSyxHQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN4QyxNQUFNLEtBQUssR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1QyxNQUFNLEdBQUcsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsQ0FBQyJ9