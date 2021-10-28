import lodash from 'lodash';
/**
 * Remove an item from an array
 * Return teh index where the item was removed.
 * Returns -1 if teh item was not found.
 * @param arr
 * @param item
 */
export function arrRem(arr, item) {
    const index = arr.indexOf(item);
    if (index === -1) {
        return -1;
    }
    arr.splice(index, 1);
    return index;
}
/**
 * Remove an item from an array
 * Treats array as set of unique items
 * @param arr
 * @param item
 */
export function arrAddToSet(arr, item) {
    const index = arr.indexOf(item);
    if (index !== -1) {
        return index;
    }
    return arr.push(item) - 1;
}
/**
 * Add an item to an array in an array
 * @param arr
 * @param item
 */
export function arrIdxAdd(arr, idx, item) {
    if (arr[idx] === undefined || arr[idx] === null) {
        arr[idx] = [];
    }
    arr[idx].push(item);
}
/**
 * Remove an item from an array in an array
 * @param arr
 * @param item
 */
export function arrIdxRem(arr, idx, item, del_empty) {
    if (arr[idx] === undefined || arr[idx] === null) {
        return;
    }
    const rem_index = arr[idx].indexOf(item);
    if (rem_index === -1) {
        return;
    }
    arr[idx].splice(rem_index, 1);
    if (del_empty && arr[idx].length === 0) {
        delete arr[idx];
    }
}
/**
 * Make flat array (depth = 1) from anything.
 * \n
 * If it is not an array, then make it an array
 * \n
 * If it is an array, then make it flat
 * \n
 * @param data
 */
export function arrMakeFlat(data) {
    if (!Array.isArray(data)) {
        return [data];
    }
    return lodash.flattenDeep(data);
    // const depth = arrMaxDepth(data);
    // // @ts-ignore
    // const new_array = data.flat(depth - 1);
    // return new_array;
    // const flattend = [];
    // function flat(data2: any) {
    //     data2.forEach(function(el: any) {
    //         if (Array.isArray(el)) {
    //             flat(el);
    //         } else {
    //             flattend.push(el);
    //         }
    //     });
    // }
    // flat(data);
    // return flattend;
}
/**
 * Maximum depth of an array
 * @param data
 */
export function arrMaxDepth(data) {
    let d1 = 0;
    if (Array.isArray(data)) {
        d1 = 1;
        let max = 0;
        for (const item of data) {
            if (Array.isArray(data)) {
                const d2 = arrMaxDepth(item);
                if (d2 > max) {
                    max = d2;
                }
            }
        }
        d1 += max;
    }
    return d1;
}
/**
 * Converts a value to an array of specified length.
 * \n
 * @param data
 */
export function arrFill(data, length) {
    if (!Array.isArray(data)) {
        data = [data];
    }
    data = data;
    const last = data[data.length - 1];
    for (let i = data.length; i < length; i++) {
        data[i] = last;
    }
    if (data.length > length) {
        data = data.slice(0, length);
    }
    return data;
}
export function getArrDepth(arr) {
    if (Array.isArray(arr)) {
        return 1 + getArrDepth(arr[0]);
    }
    return 0;
}
export function isEmptyArr(arr) {
    if (Array.isArray(arr) && !arr.length) {
        return true;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL2FycnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxNQUFNLENBQUMsR0FBVSxFQUFFLElBQVM7SUFDeEMsTUFBTSxLQUFLLEdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBQ0Q7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLEdBQVUsRUFBRSxJQUFTO0lBQzdDLE1BQU0sS0FBSyxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFBRSxPQUFPLEtBQUssQ0FBQztLQUFFO0lBQ25DLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFDLEdBQVUsRUFBRSxHQUFXLEVBQUUsSUFBUztJQUN4RCxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ2pCO0lBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBQ0Q7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBVSxFQUFFLEdBQVcsRUFBRSxJQUFTLEVBQUUsU0FBa0I7SUFDNUUsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDN0MsT0FBTztLQUNWO0lBQ0QsTUFBTSxTQUFTLEdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUFFLE9BQU87S0FBRTtJQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFJLFNBQVMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQjtBQUNMLENBQUM7QUFDRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBUztJQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakI7SUFDRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsd0NBQXdDO0lBQ3hDLG1DQUFtQztJQUNuQyx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osVUFBVTtJQUNWLElBQUk7SUFDSixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVc7SUFDbkMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRTtZQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFO29CQUNWLEdBQUcsR0FBRyxFQUFFLENBQUM7aUJBQ1o7YUFDSjtTQUNKO1FBQ0QsRUFBRSxJQUFJLEdBQUcsQ0FBQztLQUNiO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBUyxFQUFFLE1BQWM7SUFDN0MsSUFBSSxDQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakI7SUFDRCxJQUFJLEdBQUcsSUFBYSxDQUFDO0lBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFHO1FBQ3hDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDbEI7SUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFJO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNoQztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEdBQVE7SUFDaEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQztJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsR0FBUTtJQUMvQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDIn0=