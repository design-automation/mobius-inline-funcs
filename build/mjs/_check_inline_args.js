/**
 *
 * @param fn_name
 * @param args
 * @param expected
 */
export function checkNumArgs(fn_name, args, max, min) {
    if (min === undefined) {
        if (args.length !== (max + 1)) {
            throw new Error('Inline function "' + fn_name + '()": wrong number of arguments. ' +
                'The required number of arguments is ' + max + ', ' +
                'but ' + (args.length - 1) + ' arguments were given.' +
                'Please check the documentation for the "' + fn_name + '()" function.');
        }
    }
    else {
        if (args.length > max + 1) {
            throw new Error('Inline function "' + fn_name + '()": too many arguments. ' +
                'The maximum number of arguments is ' + max + ', ' +
                'but ' + (args.length - 1) + ' arguments were given.' +
                'Please check the documentation for the "' + fn_name + '()" function.');
        }
        if (args.length < min + 1) {
            throw new Error('Inline function "' + fn_name + '()": too few arguments. ' +
                'The minimum number of arguments is ' + max + ', ' +
                'but ' + (args.length - 1) + ' arguments were given. ' +
                'Please check the documentation for the "' + fn_name + '()" function.');
        }
    }
}
/**
 *
 * @param fn_names
 * @param args
 * @param expected
 */
export function checkNumArgs_noDebug(fn_name, args, max, min) {
    if (min === undefined) {
        if (args.length !== (max)) {
            throw new Error('Inline function "' + fn_name + '()": wrong number of arguments. ' +
                'The required number of arguments is ' + max + ', ' +
                'but ' + (args.length) + ' arguments were given. ' +
                'Please check the documentation for the "' + fn_name + '()" function.');
        }
    }
    else {
        if (args.length > max) {
            console.log("Throw error...");
            throw new Error('Inline function "' + fn_name + '()": too many arguments. ' +
                'The maximum number of arguments is ' + max + ', ' +
                'but ' + (args.length) + ' arguments were given. ' +
                'Please check the documentation for the "' + fn_name + '()" function.');
        }
        if (args.length < min) {
            throw new Error('Inline function "' + fn_name + '()": too few arguments. ' +
                'The minimum number of arguments is ' + max + ', ' +
                'but ' + (args.length) + ' arguments were given. ' +
                'Please check the documentation for the "' + fn_name + '()" function.');
        }
    }
}
/**
 *
 * @param fn_name
 * @param args
 */
export function checkListsSameLen(fn_name, args) {
    for (let i = 1; i < args.length; i++) {
        if (!Array.isArray(args[i])) {
            throw new Error('Inline function "' + fn_name + '()": invalid arguments. ' +
                'The arguments must all be lists. ' +
                'The following argument is not a list: ' + JSON.stringify(args[i]) +
                'Please check the documentation for the "' + fn_name + '()" function.');
        }
        if (i > 1) {
            if (args[1].length !== args[i].length) {
                throw new Error('Inline function "' + fn_name + '()": invalid arguments. ' +
                    'The arguments must all be lists of the same length. ' +
                    'The following argument has a length that does not match the first list: ' + JSON.stringify(args[i]) +
                    'Please check the documentation for the "' + fn_name + '()" function.');
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2NoZWNrX2lubGluZV9hcmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL19jaGVja19pbmxpbmVfYXJncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsT0FBZSxFQUFFLElBQWdCLEVBQUUsR0FBVyxFQUFFLEdBQVk7SUFDckYsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFHO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMzQixNQUFNLElBQUksS0FBSyxDQUNYLG1CQUFtQixHQUFHLE9BQU8sR0FBRyxrQ0FBa0M7Z0JBQ2xFLHNDQUFzQyxHQUFHLEdBQUcsR0FBRyxJQUFJO2dCQUNuRCxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLHdCQUF3QjtnQkFDckQsMENBQTBDLEdBQUcsT0FBTyxHQUFHLGVBQWUsQ0FDekUsQ0FBQztTQUNMO0tBQ0o7U0FBTTtRQUNILElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQ1gsbUJBQW1CLEdBQUcsT0FBTyxHQUFHLDJCQUEyQjtnQkFDM0QscUNBQXFDLEdBQUcsR0FBRyxHQUFHLElBQUk7Z0JBQ2xELE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsd0JBQXdCO2dCQUNyRCwwQ0FBMEMsR0FBRyxPQUFPLEdBQUcsZUFBZSxDQUN6RSxDQUFDO1NBQ0w7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUNYLG1CQUFtQixHQUFHLE9BQU8sR0FBRywwQkFBMEI7Z0JBQzFELHFDQUFxQyxHQUFHLEdBQUcsR0FBRyxJQUFJ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