"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vecSetLen_1 = require("./vecSetLen");
const constants_1 = require("../constants");
test('Check vecSetLen', () => {
    const vec1 = (0, vecSetLen_1.vecSetLen)([1, 2, 5], 2);
    expect(vec1).toStrictEqual([0.36514837167011077, 0.7302967433402215, 1.8257418583505538]);
});
test('Check vecSetLen overloaded', () => {
    const vec2 = (0, vecSetLen_1.vecSetLen)([constants_1.VZ, [1, 2, 3]], [3, 4]);
    expect(vec2).toStrictEqual([
        [0, 0, 3],
        [1.0690449676496976, 2.138089935299395, 3.2071349029490928]
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjU2V0TGVuLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3ZlYy92ZWNTZXRMZW4udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3QztBQUN4Qyw0Q0FBc0Q7QUFFdEQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUN6QixNQUFNLElBQUksR0FBRyxJQUFBLHFCQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUYsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO0lBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUEscUJBQVMsRUFBQyxDQUFDLGNBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7S0FDOUQsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==