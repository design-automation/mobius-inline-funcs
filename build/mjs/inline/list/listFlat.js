import lodash from 'lodash';
/**
 * Returns a flattened copy of the list. If the input list has lists nested within it, the values of
 * the nested lists will be unnested.
 *
 * If no depth is specified, then it is flattened by the maximum amount.
 * ```
 * listFlat([1,2,3,[4,[5],6],7])           // [1, 2, 3, 4, 5, 6, 7]
 * listFlat([1,2,3,[4,[5, [6] ], 7] ], 1)  // [1,2,3,4, [5, [6]], 7]
 *```
 * @param list The list.
 * @param depth (Optional) The depth to flatten to, an integer.
 * @returns The flattened list.
 */
export function listFlat(list, depth) {
    if (depth !== undefined) {
        return lodash.flattenDepth(list, depth);
    }
    return lodash.flattenDeep(list);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdEZsYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2xpc3QvbGlzdEZsYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCOzs7Ozs7Ozs7Ozs7R0FZRztBQUNGLE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBVyxFQUFFLEtBQWM7SUFDakQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0M7SUFDRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQyJ9