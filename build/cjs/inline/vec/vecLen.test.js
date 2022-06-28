"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vecLen_1 = require("./vecLen");
const constants_1 = require("../constants");
test('Check vecLen', () => {
    const vec1 = (0, vecLen_1.vecLen)([1, 0, 1]);
    expect(vec1).toStrictEqual(1.4142135623730951);
});
test('Check vecLen overloaded', () => {
    const vec2 = (0, vecLen_1.vecLen)([constants_1.VZ, [1, 2, 3], constants_1.VY]);
    expect(vec2).toStrictEqual([1, 3.741657386773941, 1]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjTGVuLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3ZlYy92ZWNMZW4udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrQztBQUNsQyw0Q0FBc0Q7QUFFdEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7SUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBQSxlQUFNLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtJQUNqQyxNQUFNLElBQUksR0FBRyxJQUFBLGVBQU0sRUFBQyxDQUFDLGNBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBRSxDQUFDLENBQUMsQ0FBQTtJQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDLENBQUMifQ==