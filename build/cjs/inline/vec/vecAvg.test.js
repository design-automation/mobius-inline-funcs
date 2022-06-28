"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vecAvg_1 = require("./vecAvg");
const constants_1 = require("../constants");
test('Check vecAvg 2 args', () => {
    const vec1 = (0, vecAvg_1.vecAvg)(constants_1.VY, constants_1.VX);
    expect(vec1).toStrictEqual([0.5, 0.5, 0]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjQXZnLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5saW5lL3ZlYy92ZWNBdmcudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrQztBQUNsQyw0Q0FBc0M7QUFFdEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtJQUM3QixNQUFNLElBQUksR0FBRyxJQUFBLGVBQU0sRUFBQyxjQUFFLEVBQUUsY0FBRSxDQUFDLENBQUE7SUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQyJ9