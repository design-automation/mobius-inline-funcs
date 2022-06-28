"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkListsSameLen = exports.checkNumArgs_noDebug = exports.checkNumArgs = void 0;
/**
 *
 * @param fn_name
 * @param args
 * @param expected
 */
function checkNumArgs(fn_name, args, max, min) {
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
exports.checkNumArgs = checkNumArgs;
/**
 *
 * @param fn_names
 * @param args
 * @param expected
 */
function checkNumArgs_noDebug(fn_name, args, max, min) {
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
exports.checkNumArgs_noDebug = checkNumArgs_noDebug;
/**
 *
 * @param fn_name
 * @param args
 */
function checkListsSameLen(fn_name, args) {
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
exports.checkListsSameLen = checkListsSameLen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2NoZWNrX2lubGluZV9hcmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL19jaGVja19pbmxpbmVfYXJncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQTs7Ozs7R0FLRztBQUNILFNBQWdCLFlBQVksQ0FBQyxPQUFlLEVBQUUsSUFBZ0IsRUFBRSxHQUFXLEVBQUUsR0FBWTtJQUNyRixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUc7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxLQUFLLENBQ1gsbUJBQW1CLEdBQUcsT0FBTyxHQUFHLGtDQUFrQztnQkFDbEUsc0NBQXNDLEdBQUcsR0FBRyxHQUFHLElBQUk7Z0JBQ25ELE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsd0JBQXdCO2dCQUNyRCwwQ0FBMEMsR0FBRyxPQUFPLEdBQUcsZUFBZSxDQUN6RSxDQUFDO1NBQ0w7S0FDSjtTQUFNO1FBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FDWCxtQkFBbUIsR0FBRyxPQUFPLEdBQUcsMkJBQTJCO2dCQUMzRCxxQ0FBcUMsR0FBRyxHQUFHLEdBQUcsSUFBSTtnQkFDbEQsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyx3QkFBd0I7Z0JBQ3JELDBDQUEwQyxHQUFHLE9BQU8sR0FBRyxlQUFlLENBQ3pFLENBQUM7U0FDTDtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQ1gsbUJBQW1CLEdBQUcsT0FBTyxHQUFHLDBCQUEwQjtnQkFDMUQscUNBQXFDLEdBQUcsR0FBRyxHQUFHLElBQUk7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