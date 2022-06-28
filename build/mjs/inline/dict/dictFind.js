/**
 * Returns the first key in the dictionary that has the given value.
 * \n
 * If the value does not exist, returns null.
 *
 * @param dict The dictionary.
 * @param val The value, can be any type.
 * @returns The first key, or null.
 */
export function dictFind(dict, val) {
    for (const key of Object.keys(dict)) {
        if (dict[key] === val) {
            return key;
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdEZpbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2RpY3QvZGljdEZpbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFDRixNQUFNLFVBQVUsUUFBUSxDQUFDLElBQVksRUFBRSxHQUFjO0lBQ2xELEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFBRSxPQUFPLEdBQUcsQ0FBQztTQUFFO0tBQ3pDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyJ9