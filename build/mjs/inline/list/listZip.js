import lodash from 'lodash';
/**
 * Converts a set of lists from rows into columns.
 *
 * If no second argument is provided, it assumes the first argument consists of a list of lists.
 *
 * If a second argument is provided, then it should be a list of the same length as the first argument.
 * In this case, the items in the first and second lists are reaarranged to generate a new set of lists.
 *
 * This function also accepts additional lists of arguments.
 *
 * @param lists  The list of lists, or first row list.
 * @returns A new list.
 */
export function listZip(...lists) {
    if (lists.length === 1) {
        // list 1 should be a list of lists
        return lodash.zip(...lists[0]);
    }
    // there are 2 or more args and list 1 is just a list 
    return lodash.zip(...lists);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdFppcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvbGlzdC9saXN0WmlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1Qjs7Ozs7Ozs7Ozs7O0dBWUc7QUFDRixNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQUcsS0FBWTtJQUNwQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3BCLG1DQUFtQztRQUNuQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQztJQUNELHNEQUFzRDtJQUN0RCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDIn0=