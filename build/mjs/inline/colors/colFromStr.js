import * as THREE from 'three';
/**
 * Creates a color from a string representation.
 *
 * \n
 *
 * Examples of color strings are as follows:
 *
 * - `colFromStr( "rgb(255, 0, 0)`" )`
 * - `colFromStr( "rgb(100%, 0%, 0%)`" )`
 * - `colFromStr( "hsl(0, 100%, 50%)`" )`
 * - `colFromStr( "#ff0000" )`
 * - `colFromStr( "#FFAABB" )`
 * - `colFromStr( "#f00" )`
 * - `colFromStr( "skyblue" )`
 * - `colFromStr( "Maroon" )`
 * - `colFromStr( "MediumSeaGreen" )`
 *
 * For colour names, all 140 names are supported. See <a
 * href="https://www.w3schools.com/colors/colors_names.asp" target="_blank">w3schools</a>.
 *
 * If the string cannot be interpreted as a color, then `[1, 1, 1]` is returned (i.e. white).
 *
 * The function is overloaded. If you pass in a list of strings, it will return a list of colors.
 *
 * @param col_str
 * @returns A list of three numbers, `[r, g, b]`, in the range 0 to 1.
 */
export function colFromStr(col_str) {
    if (!Array.isArray(col_str)) {
        const col_tjs = new THREE.Color(col_str);
        return [col_tjs.r, col_tjs.g, col_tjs.b];
    }
    else {
        const cols = [];
        for (const a_col_str of col_str) {
            const col_tjs = new THREE.Color(a_col_str);
            cols.push([col_tjs.r, col_tjs.g, col_tjs.b]);
        }
        return cols;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sRnJvbVN0ci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvY29sb3JzL2NvbEZyb21TdHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFHL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBQ0YsTUFBTSxVQUFVLFVBQVUsQ0FBQyxPQUF3QjtJQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN6QixNQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUM7U0FBTTtRQUNILE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUMxQixLQUFLLE1BQU0sU0FBUyxJQUFJLE9BQU8sRUFBRTtZQUM3QixNQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDIn0=