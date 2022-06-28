import * as Mathjs from 'mathjs';
/**
 * Returns the variance of the list.
 * By default, the sum of squared errors is divided by (n - 1).
 * \n
 * ```
 * vari([2, 4, 6])     \\ 4
 * vari([2, 4, 6, 8])  \\ 6.666666666666667
 * ```
 * @param list A list containing numbers.
 * @returns A number (The variance).
 */
export function vari(list) {
    return Mathjs.var(list);
}
//TODO: Change to variance instead of mathjs.var when mathjs is updated 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmxpbmUvc3RhdGlzdGljcy92YXJpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDOzs7Ozs7Ozs7O0dBVUc7QUFDRixNQUFNLFVBQVUsSUFBSSxDQUFDLElBQWM7SUFDaEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFDRCx3RUFBd0UifQ==