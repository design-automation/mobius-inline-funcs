"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isDict_1 = require("./isDict");
test('Check isDict T/F', () => {
    const dict1 = { 'key1': 1 };
    expect((0, isDict_1.isDict)(dict1)).toStrictEqual(true);
    expect((0, isDict_1.isDict)(1)).toStrictEqual(false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNEaWN0LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3R5cGVzL2lzRGljdC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWtDO0FBRWxDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDMUIsTUFBTSxLQUFLLEdBQUcsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUE7SUFDekIsTUFBTSxDQUFDLElBQUEsZUFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQyxJQUFBLGVBQU0sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQyJ9