/**
 * Returns the item in the list specified by index, either a positive or negative integer.
 * If the index is larger than the size of the list, `undefined` is returned.
 *
 * ```
 * listGet([5,6,7,8,9], [1,2,3])            // [6, 7, 8]
 * listGet([0,1,2,3,4], -2)                 // 3
 * listGet(listGet([0, [1, 2, 3] ], 1), 2)  // 2
 * ```
 *
 * @param list The list.
 * @param idx The index, an integer or a list of integers.
 * @returns The specified item, or list of items.
 */
export function listGet(list, idx) {
    if (Array.isArray(idx)) {
        return idx.map(a_idx => listGet(list, a_idx));
    }
    if (idx < 0) {
        idx = list.length + idx;
    }
    return list[idx];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvbGlzdC9saXN0R2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDRixNQUFNLFVBQVUsT0FBTyxDQUFDLElBQVcsRUFBRSxHQUFvQjtJQUN0RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFVLENBQUM7S0FBRTtJQUNwRixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7S0FBRTtJQUN6QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQVEsQ0FBQztBQUM1QixDQUFDIn0=