"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listGet = void 0;
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
function listGet(list, idx) {
    if (Array.isArray(idx)) {
        return idx.map(a_idx => listGet(list, a_idx));
    }
    if (idx < 0) {
        idx = list.length + idx;
    }
    return list[idx];
}
exports.listGet = listGet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvbGlzdC9saXN0R2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDRixTQUFnQixPQUFPLENBQUMsSUFBVyxFQUFFLEdBQW9CO0lBQ3RELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQVUsQ0FBQztLQUFFO0lBQ3BGLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztLQUFFO0lBQ3pDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBUSxDQUFDO0FBQzVCLENBQUM7QUFKQSwwQkFJQSJ9