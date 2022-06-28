"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strStarts_1 = require("./strStarts");
const str1 = 'testing123';
const str2 = 'no';
test('Check strStarts true', () => {
    expect((0, strStarts_1.strStarts)(str1, 'test')).toStrictEqual(true);
});
test('Check strStarts overloaded true and false', () => {
    expect((0, strStarts_1.strStarts)([str1, str2], 'test')).toStrictEqual([true, false]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyU3RhcnRzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3N0cnMvc3RyU3RhcnRzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0M7QUFFeEMsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFBO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtBQUVqQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO0lBQzlCLE1BQU0sQ0FBQyxJQUFBLHFCQUFTLEVBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsRUFBRTtJQUNuRCxNQUFNLENBQUMsSUFBQSxxQkFBUyxFQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFDLENBQUMifQ==