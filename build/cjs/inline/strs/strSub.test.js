"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strSub_1 = require("./strSub");
const str1 = '012testing';
const str2 = '012check';
test('Check strSub without length', () => {
    expect((0, strSub_1.strSub)(str1, 3)).toStrictEqual('testing');
});
test('Check strSub overloaded with length', () => {
    expect((0, strSub_1.strSub)([str1, str2], 3, 4)).toStrictEqual(['test', 'chec']);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyU3ViLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3N0cnMvc3RyU3ViLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0M7QUFFbEMsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFBO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQTtBQUV2QixJQUFJLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQyxJQUFBLGVBQU0sRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO0lBQzdDLE1BQU0sQ0FBQyxJQUFBLGVBQU0sRUFBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQyJ9