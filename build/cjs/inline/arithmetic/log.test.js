"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("./log");
test('Check log of a list of 2 numbers', () => {
    expect((0, log_1.log)([1, 10])).toStrictEqual([0, 2.302585092994046]);
});
test('Check log of 0', () => {
    expect((0, log_1.log)(0)).toStrictEqual(-Infinity);
});
test('Check log of -1', () => {
    expect((0, log_1.log)(-1)).toStrictEqual(NaN);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL2FyaXRobWV0aWMvbG9nLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFFNUIsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtJQUMxQyxNQUFNLENBQUMsSUFBQSxTQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO0lBQ3hCLE1BQU0sQ0FBQyxJQUFBLFNBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUN6QixNQUFNLENBQUMsSUFBQSxTQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQyJ9